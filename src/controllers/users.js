import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { createUserQuery, userLoginQuery } from "../models/users.js";

const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await createUserQuery({ username, email, hashedPassword });
    res.json({
      message: "User registered successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const userLogin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userLoginQuery({ username });

    const selectedUser = user[0];

    const passwordMatch = await bcrypt.compare(
      password,
      selectedUser[0].password
    );

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    const token = jwt.sign(
      { userId: user.id, username: user.username },
      "af5444f95fa9fc8dae32c18b8d25128bfdba4968d621bb1ef587112d6b0c959c",
      {
        expiresIn: "1h",
      }
    );

    res.json({ token });
  } catch (error) {
    console.log(error);
  }
};

export { createUser, userLogin };
