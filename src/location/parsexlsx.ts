const xlsx = require('xlsx-to-json')
import * as fse from 'fs-extra'

fse.readFile('./src/location/raw_data.xls').then(data => {
  console.log(data)
})

xlsx(
  {
    input: './src/location/test.xlsx',
    output: './src/location/outputA.json'
  },
  function(err: any, result: any) {
    console.log(result)
  }
)
