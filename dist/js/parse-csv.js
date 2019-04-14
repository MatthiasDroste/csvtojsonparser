"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const csv = require('csvtojson');
function parseCSV(item) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            csv().fromString(item.toString()).then((result) => {
                //console.log(result);
                resolve(result);
            }).catch((err) => {
                resolve(err);
            });
        });
    });
}
exports.parseCSV = parseCSV;
//# sourceMappingURL=parse-csv.js.map