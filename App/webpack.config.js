var env = 'base'

if(process.argv.indexOf('--p') + 1 || process.argv.indexOf('--prodcution') + 1) {
  env = 'production'
}

module.exports = require('./config/' + env + '.js')
