
const mongoose = require("mongoose");
const { findByIdAndUpdate } = require("../models/postMessage.js");
const postMessage = require("../models/postMessage.js");


//   Get posts
const getPosts = async (req, res) => {
   try {
      const postMessages = await postMessage.find();
      res.status(200).json(postMessages)
   }
   catch (error) {
      res.status(404).json({ message: error.message })
   }
}


//  Create post
const createPosts = async (req, res) => {
   const post = req.body;
   const newPost = postMessage(post);
   try {
      await newPost.save();
      res.status(201).json(newPost)
   }
   catch (error) {
      res.status(409).json({ message: error.message })
   }
}


// Update post
const updatePost = async (req, res) => {
   const { id: _id } = req.params;
   const post = req.body;
   if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with this id");

   const updatedPost = await postMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true });
   res.json(updatedPost);
}

// Delete a post
const deletePost = async (req, res) => {
   const { id } = req.params;
   if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with this id");
   await postMessage.findByIdAndRemove(id);
   res.json({ message: 'Post deleted successfully' });
}

// Like the post
const likePost = async (req,res) => {
   const { id } = req.params;
   if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with this id");
   const post = await postMessage.findById(id);
   const updatedPost = await postMessage.findByIdAndUpdate(id ,{likeCount:post.likeCount + 1} , {new:true});
   res.json(updatedPost);
} 

// Exporting functions
module.exports = { getPosts, createPosts, updatePost, deletePost ,likePost};