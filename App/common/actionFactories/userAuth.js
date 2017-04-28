const type = 'USER_AUTH'

function factory(event) {
  return {
    type,
    authToken: event.tokenObj.id_token
  }
}

module.exports = {
  type,
  factory
}
