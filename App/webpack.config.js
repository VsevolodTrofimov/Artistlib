var env = 'base'

if(process.env.NODE_ENV === 'production') {
  env = 'production'
}

module.exports = require('./config/' + env + '.js')
