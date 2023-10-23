// const contacts = require("./contact");

// const main = async () => {
//   const nama = await contacts.pertanyaan("Masukkan nama Anda : ");
//   const phone = await contacts.pertanyaan("Masukkan No HP Anda : ");
//   await contacts.answer();

//   contacts.saveContact(nama, phone);
// };

// main();
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

yargs(hideBin(process.argv))
  .command({
    command: "add",
    describe: "Menambahkan contact baru",
    builder: {
      nama: {
        describe: "Nama lengkap",
        demandOption: true,
        type: "string",
      },
      phone: {
        describe: "Nomor Handphone",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      const contacts = require("./contact");
      contacts.saveContact(argv.nama, argv.phone);
    },
  })
  .parse();
