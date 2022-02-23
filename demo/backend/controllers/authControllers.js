import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import asyncHandler from 'express-async-handler';
import myAuth from "../models/authModels.js";
// Registration credentials
export const registerUser = asyncHandler(async (req, res) => {
  // Get user data from front end
  const { name, email, education, phone, password } = req.body;
  // Validate user entered value
  // if (!name || !email || !education || !phone || !password) {
  //   res.send({message :"Please put all fields" });
  // }
  //   Check if user exists
  const userExists = await myAuth.findOne({ email });
  if (userExists) {
    res.status(409).json({ status:"already", message :"User already exists" });
  }
  // Hash Password
  const salt = await bcrypt.genSalt(10);
  const hashedPasssword = await bcrypt.hash(password, salt)
  // Create User
  const user = await myAuth.create({
    name,
    education,
    phone,
    email,
    password: hashedPasssword
  });
  if (user) {
    res.status(201).json({ status:"success",message: "Registered successfully" });
  }
  else {
    res.status(401).json({ status:"Failed" ,message: 'Provide all credentials correctly' })
  }
});
//  Login credentials
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await myAuth.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" })
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({ status: 'success', message: "Login successful" });
  }
  else {
    res.status(401).send({ message: 'Email or password is incorrect' })
  }
});
// Getme handling middleware
export const getMe = asyncHandler(async (req, res) => {
  res.json({ message: "This is get part for middleware authentication " })
});
// Generate Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET,
    { expiresIn: '363424234' }

  )
}