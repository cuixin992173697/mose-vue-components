const path = require('path')

function getPackages() {
  return [
    path.resolve(__dirname, '../packages/components'),
    path.resolve(__dirname, '../packages/utils'),
    path.resolve(__dirname, '../packages/styles')
  ]
}

module.exports = { getPackages }