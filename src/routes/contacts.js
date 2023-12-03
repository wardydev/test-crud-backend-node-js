import express from "express";
import {
  getUsers,
  createContact,
  updateContact,
  deleteContact,
} from "../controllers/contacts.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", createContact);
router.patch("/:idcontacts", updateContact);
router.delete("/:idcontacts", deleteContact);

export default router;
