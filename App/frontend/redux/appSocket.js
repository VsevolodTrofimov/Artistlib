export default class AppSocket {
  constructor() {
    this.recoveryInterval = undefined
    this.queue = []
    this.subscribers = []
    this.reconnectActions = []

    this.state = '...'

    this.startSocket()
  }

  startSocket() {
    let self = this

    this.socket = new WebSocket("ws://localhost:8001");
    this.state = 'connecting'

    this.socket.onopen = function() {
      self.state = 'open'
      if(self.recoveryInterval) {
        self.reconnectActions.forEach((cb) => cb())
        clearInterval(self.recoveryInterval)
      }

      self.queue.forEach(function(actionString) {
        self.send(actionString)
      })

      self.queue = []
    }

    self.socket.onclose = function(event) {
      self.state = 'closed'
      if( ! event.wasClean) {
        self.recoveryInterval = setInterval(function() {
          if(self.state !== 'connecting' && self.state !== 'open') {
            self.startSocket()
          } else {
            clearInterval(self.recoveryInterval)
          }
        }, 500)
      }
    }

    self.socket.onmessage = function(event) {
      self.subscribers.forEach((cb) => {
        cb(event.data)
      })
    }
  }

  subscribe(cb) {
    function unsubscribe() {
      this.subscribers.splice(this.subscribers.indexOf(cb), 1)
    }
    this.subscribers.push(cb)

    return unsubscribe
  }

  onReconnect(cb) {
    function unsubscribe() {
      this.reconnectActions.splice(this.reconnectActions.indexOf(cb), 1)
    }
    this.reconnectActions.push(cb)

    return unsubscribe
  }

  send(action) {
    let actionString = JSON.stringify(action)
    if(this.state === 'open') {
      this.socket.send(actionString)
    } else {
      this.queue.push(actionString)
    }
  }
}
