const tabletojson = require('tabletojson')
const { hasSpecificLength } = require('./validations.utils')

const getTableFromURL = (url = '') => 
  new Promise(async (resolve, reject) => {
    if (hasSpecificLength({ target: url, length: 0 })) {
      reject(new Error('URL is required'))
    }

    try {
      let info = {}
      tabletojson.convertUrl(url, function (tablesAsJson) {
        for (let i = 1; i < tablesAsJson[0].length; i++) {
          info[tablesAsJson[0][i][0].replace(/\s|:/g, '').toLowerCase()] = tablesAsJson[0][i][1]
        }
        resolve(info)
      })
    } catch (error) {
      console.trace(error)
      reject(error)
    }
  })

module.exports = {
  getTableFromURL
}
