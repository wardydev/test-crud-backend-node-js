import dbPool from "../config/database.js";

const getAllContacts = () => {
  const SQLQuery = `SELECT * FROM db_contact.contacts;`;

  return dbPool.execute(SQLQuery);
};

const createContactQuery = (body) => {
  const SQLQuery = `INSERT INTO contacts (first_name, last_name, email, phone_number, created_at, updated_at) VALUES ("${body.first_name}", "${body.last_name}", "${body.email}", "${body.phone_number}", NOW(), NOW())`;

  return dbPool.execute(SQLQuery);
};

const updateContactQuery = (idcontacts, body) => {
  const SQLQuery = `UPDATE contacts
  SET first_name = "${body.first_name}", last_name="${body.last_name}", email="${body.email}", phone_number="${body.phone_number}", created_at = NOW(), updated_at = NOW()
  WHERE idcontacts = ${idcontacts}`;

  return dbPool.execute(SQLQuery);
};

const deleteContactQuery = (idContacts) => {
  const SQLQuery = `DELETE FROM contacts
  WHERE idcontacts = ${idContacts}`;

  dbPool.execute(SQLQuery);
};

export {
  getAllContacts,
  createContactQuery,
  updateContactQuery,
  deleteContactQuery,
};
