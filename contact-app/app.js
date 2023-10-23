const contacts = require("./contact");

const main = async () => {
  const nama = await contacts.pertanyaan("Masukkan nama Anda : ");
  const phone = await contacts.pertanyaan("Masukkan No HP Anda : ");
  await contacts.answer();

  contacts.saveContact(nama, phone);
};

main();
