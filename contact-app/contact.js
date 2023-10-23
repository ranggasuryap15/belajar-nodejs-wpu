const fs = require("fs");
const validator = require("validator");

const dirPath = "./data";

// membuat folder jika tidak ada
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// membuat file contacts.json jika tidak ada
if (!fs.existsSync(dirPath + "/contacts.json")) {
  fs.writeFileSync(dirPath + "/contacts.json", "[]", "utf-8");
}

const pertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (answer) => {
      resolve(answer);
    });
  });
};

const answer = () => {
  return new Promise((resolve, reject) => {
    rl.question("Are you sure? (Y/N) ", (answer) => {
      if (answer.toUpperCase() == "Y") {
        resolve();
      } else {
        reject();
      }
    });
  });
};

const saveContact = (nama, phone) => {
  const contact = { nama, phone };
  const fileBuffer = fs.readFileSync("data/contacts.json", "utf8");
  const contacts = JSON.parse(fileBuffer);

  // cek duplikat
  const duplikat = contacts.find((contact) => contact.nama === nama);
  if (duplikat) {
    console.log("Contact sudah terdaftar, gunakan nama lain!");
    return false;
  }

  // validator phone
  if (phone) {
    if (!validator.isMobilePhone(phone, "id-ID")) {
      console.log("Nomor HP tidak valid!");
      return false;
    }
  }

  contacts.push(contact);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
  console.log("Contact saved successfully");
};

module.exports = { pertanyaan, answer, saveContact };
