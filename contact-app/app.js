const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const dirPath = "./data";

// membuat folder jika tidak ada
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// membuat file contacts.json jika tidak ada
if (!fs.existsSync(dirPath + "/contacts.json")) {
  fs.writeFileSync(dirPath + "/contacts.json", "[]", "utf-8");
}

// rl.question("What is your name? ", (name) => {
//   rl.question("What is your phone number? ", (phone) => {
//     const contact = { name, phone };
//     const fileBuffer = fs.readFileSync("data/contacts.json", "utf8");
//     const contacts = JSON.parse(fileBuffer);

//     contacts.push(contact);

//     fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
//     console.log("Contact saved successfully");

//     rl.close();
//   });
// });

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

const main = async () => {
  const nama = await pertanyaan("Masukkan nama Anda : ");
  const phone = await pertanyaan("Masukkan No HP Anda :");
  await answer();

  const contact = { nama, phone };
  const fileBuffer = fs.readFileSync("data/contacts.json", "utf8");
  const contacts = JSON.parse(fileBuffer);

  contacts.push(contact);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
  console.log("Contact saved successfully");

  rl.close();
};

main();
