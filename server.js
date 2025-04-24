import express from "express";
import dotenv from "dotenv/config";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/signup", (req, res) => {
  const { name, email, password, dob } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }
    if (!name) {
      return res.status(400).json({ message: "Please enter your name" });
    }
    if (!email) {
      return res.status(400).json({ message: "Please enter your email" });
    }
    if (!password) {
      return res.status(400).json({ message: "Please enter your password" });
    }
    if (password.length < 6 || password.length > 16) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }
    if (!dob) {
      return res.status(400)
      .json({ message: "You shouls provide dob" });
    }
    res.status(201).json({message:"User created sucessfully"})
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(5000, () => {
  console.log(`Server is running on port http://localhost:${5000}`);
});
