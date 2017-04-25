const type = 'USER_AUTH'

function factory(event) {
  return {
    type,
    authToken: event.tokenObj.id_token
  }
}

export default {
  type,
  factory
}
