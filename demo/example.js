
  // let token;
  // if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
  //   try {
  //     // Get token from header
  //     token = req.headers.authorization.split(' ')[1];
  //     // Verify token
  //     const decoded = await jwt.verify(token, process.env.JWT_SECRET);
  //     // Get user from token
  //     req.user = await myAuth.findById(decoded.id).select('-password');
  //     next()
  //   }
  //   catch (error) {
  //     console.log(error)
  //     res.json({ message: "Not authorized user" })
  //   }
  //   if (!token) {
  //     res.json({ message: "Not authorized user , no token exists" })
  //   }
  // }