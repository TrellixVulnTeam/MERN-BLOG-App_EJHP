import axios from 'axios';

const url = 'https://safdar-project.herokuapp.com/posts';

// Get request
export const fetchPosts = () => axios.get(url);

// Create request
export const createPost = (newPost) => axios.post(url, newPost);

// Updating post
export const updatePost = async (id, updatedPost) => {
       return await axios.patch(`${url}/${id}`, updatedPost);
}
 
// Delete request
export const deletePost = (id)=> axios.delete(`${url}/${id}`);

// Like a post
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);