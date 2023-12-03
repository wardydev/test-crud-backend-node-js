import jwt from "jsonwebtoken";

const authenticateToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Token diperlukan",
    });
  }

  const token = authorization.split(" ")[1];

  try {
    jwt.verify(token, process.env.SECRET_KEY);
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  next();
};

export { authenticateToken };
