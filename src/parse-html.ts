const parser = require('html-to-json')
import * as fse from 'fs-extra'

fse.readFile('./testdata/html/testA.html').then(data => {
  let htmlstr = data.toString()
  parser.parse(
    htmlstr,
    {
      text: function($doc: any) {
        return $doc.find('P').text()
      }
    },
    function(err: any, result: any) {
      console.log(JSON.stringify(result))
    }
  )
})
