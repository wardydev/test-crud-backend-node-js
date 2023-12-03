import {
  getAllContacts,
  createContactQuery,
  updateContactQuery,
  deleteContactQuery,
} from "../models/contacts.js";

const getUsers = async (req, res) => {
  try {
    const [data] = await getAllContacts();

    res.json({
      message: "GET all users success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createContact = async (req, res) => {
  const { body } = req;
  try {
    await createContactQuery(body);
    res.json({
      message: "User succesfully created!.",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const updateContact = async (req, res) => {
  const { body } = req;
  const { idcontacts } = req.params;

  try {
    await updateContactQuery(idcontacts, body);
    res.json({
      message: "Update berhasil",
      data: {
        idcontacts,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const deleteContact = async (req, res) => {
  const { idcontacts } = req.params;
  try {
    await deleteContactQuery(idcontacts);
    res.json({
      message: "Delete contact berhasil!",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

export { getUsers, createContact, updateContact, deleteContact };
