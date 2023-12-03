import dbPool from "../config/database.js";

const createUserQuery = ({ username, email, hashedPassword }) => {
  const SQLQuery = `INSERT INTO users (username, email, password, created_at)
    VALUES ("${username}", "${email}", "${hashedPassword}", now())`;

  return dbPool.execute(SQLQuery);
};

const userLoginQuery = ({ username }) => {
  const SQLQuery = `SELECT * FROM users WHERE username = "${username}"`;

  return dbPool.execute(SQLQuery);
};

export { createUserQuery, userLoginQuery };
