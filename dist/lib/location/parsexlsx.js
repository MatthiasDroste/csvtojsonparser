"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const xlsx = require('xlsx-to-json');
const fse = require("fs-extra");
fse.readFile('./src/location/raw_data.xls').then(data => {
    console.log(data);
});
xlsx({
    input: './src/location/test.xlsx',
    output: "./src/location/outputA.json",
}, function (err, result) {
    console.log(result);
});
//# sourceMappingURL=parsexlsx.js.map