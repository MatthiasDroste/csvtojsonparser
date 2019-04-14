import * as fse from 'fs-extra'
const csv = require('csvtojson')

export async function parseCSV(item: Buffer) {
  return new Promise((resolve, reject) => {
    csv()
      .fromString(item.toString())
      .then((result: any) => {
        resolve(result)
      })
      .catch((err: any) => {
        resolve(err)
      })
  })
}
