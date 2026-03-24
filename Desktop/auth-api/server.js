const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const users = require("./users");

const app = express();
app.use(express.json());

const SECRET_KEY = "mysecretkey";

function authMiddleware(req, res, next) {
  const authHeader = req.headers["authorization"];

  if (!authHeader) return res.status(401).json({ error: "Token missing" });

  const token = authHeader.split(" ")[1]; // token

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res.status(401).json({ error: "Token expired" });
      } else if (err.name === "JsonWebTokenError") {
        return res.status(401).json({ error: "Token malformed" });
      } else {
        return res.status(401).json({ error: "Token invalid" });
      }
    }
    req.user = decoded;
    next();
  });
}

// User Signup
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const userExists = users.find(u => u.email === email);
  if (userExists) return res.status(400).json({ error: "User already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = { email, password: hashedPassword };
  users.push(user);

  res.status(201).json({ message: "User registered successfully" });
});

// User Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);
  if (!user) return res.status(400).json({ error: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ error: "Invalid password" });

  // Generate JWT token
  const token = jwt.sign(
    { email },
    SECRET_KEY,
    { expiresIn: "1h" } 
  );

  res.json({ token });
});

app.get("/profile", authMiddleware, (req, res) => {
  res.json({ message: "Protected data", user: req.user });
});

app.listen(3000, () => console.log("Server running on port 3000"));