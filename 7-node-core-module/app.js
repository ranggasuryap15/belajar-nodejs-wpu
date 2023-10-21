// Core Module
// File System

const fs = require("fs");
const path = require("path");

// membuat file secara syncrhonous
// fs.writeFileSync("test.txt", "Hello World secara Synchronous");

// fs.writeFile("test.txt", "Hello World secara asynchronous", (err) => {
//     console.log(err);
// });

// membaca isi file
// let test = fs.readFileSync("test.txt");
// console.log(test.toString());

// fs.readFile("test.txt", "utf-8", (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log(data);
// });

const readLine = require("readline");
const rl = readLine.Interface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan nama Anda", (nama) => {
  console.log(nama);
  rl.close();
});
