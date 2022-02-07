const express=require('express');
const router = express.Router();

const { getPosts ,createPosts ,updatePost ,deletePost ,likePost} = require('../controllers/posts.js');

 router.get('/', getPosts) ;
 router.post('/', createPosts) ;
 router.patch('/:id', updatePost) ;
 router.delete('/:id',deletePost);
 router.patch('/:id/likePost' ,likePost);
 
     module.exports = router;