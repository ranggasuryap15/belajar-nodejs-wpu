// cara memanggil module lain
// const fs = require("fs"); // core modules
// const cetakNama = require("./coba.js"); // local module
// const moment = require("moment"); // third party module / npm module / node_modules
// console.log(cetakNama(nama));

const coba = require("./coba");
const nama = "Faza";
console.log(coba.PI, coba.cetakNama(nama));
