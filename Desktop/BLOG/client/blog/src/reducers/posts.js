import {CREATE ,FETCH_ALL , UPDATE , DELETE , LIKE} from '../constants/actionTypes' ;
const posts = (posts = [], action) => {
    switch (action.type) {
        //  For creating
        case CREATE:
            return [...posts, action.payload];
        //   For showing posts
        case FETCH_ALL:
            return action.payload;

        //For updating and liking post
        case UPDATE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case LIKE :
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);

        // Delete a post
        case DELETE:
            return posts.filter((post) => post._id !== action.payload);
    
        // Return default
        default:
            return posts
    }
}

export default posts;