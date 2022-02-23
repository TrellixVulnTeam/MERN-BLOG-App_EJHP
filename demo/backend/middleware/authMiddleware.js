import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import myAuth from '../models/authModels.js';

const protect = asyncHandler(async (req, res, next) => {
     const token = req.header('x-auth-token');
     if(!token){
       res.send(400).json({
         messsage : "You have invalid token"
       })
     }
     try {
     const verifiedToken = await jwt.verify(token, process.env.JWT_SECRET);
       req.user = verifiedToken ;
       next();
     }
     catch(error){
       console.log(error)
     }

 })
export default protect;