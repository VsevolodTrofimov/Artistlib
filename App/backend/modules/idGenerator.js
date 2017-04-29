class IdGenerator {
  constructor() {
    this._id = 1;
    this._listeners = [];
  }

  next() {
    let id = this._id;
    this._id += 1;
    let self = this;
    this._listeners.forEach((listener, index) => {
      try {
        listener();
      } catch (e) {
        self._listeners.splice(index, 1);
      }
    });

    return id;
  }

  setOffset(offset) {
    this._id = offset;
  }

  addIncrementListener(listener) {
    if (! typeof listener === 'function') {
      throw new Error('Listener is not a function.');
    }
    this._listeners.push(listener);

    let self = this;
    function stop() {
      self._listeners.splice(self._listeners.indexOf(listener), 1);
    }

    return stop;
  }
}

let instance;

module.exports = () => {
  if ( ! instance) {
    instance = new IdGenerator();
  }
  return instance;
};
