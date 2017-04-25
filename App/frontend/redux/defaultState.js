const defaultState = {
  clientId: '525667590047-h95h4ir4208t74l1b8vnksmll2mhmtrq.apps.googleusercontent.com',
  filters: {
    includedTags: [],
    excludedTags: []
  },
  lastId: 0,
  authToken: undefined,
  artists: [{
    id: 7,
    name: 'ke-ta',
    tags: {
      global: new Set(['gg', 'lalal']),
      personal: new Set(['top', 'hope'])
    }
  }]
}

export default defaultState
