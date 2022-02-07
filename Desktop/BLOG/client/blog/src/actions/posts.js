import * as api from '../api';
import {CREATE ,FETCH_ALL , UPDATE , DELETE , LIKE} from '../constants/actionTypes' ;

//    Showing all posts to UI
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: FETCH_ALL, payload: data })
    }
    catch (error) {
        console.log(error)
    }
}

// Creating a post 
export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: CREATE, payload: data })
    }
    catch (error) {
        console.log(error.message);
    }
}

// Updating a post
export const updatePost = (id, post) => async(dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: UPDATE, payload: data })
    }

    catch (error) {
        console.log(error);
    }

}

// Delete a post
export const deletePost = (id)=>  async(dispatch)=> {
      try{
      await api.deletePost(id);
      dispatch({type: DELETE ,payload:id})
      }
      catch(error){
          console.log(error)
      }
    }

    // Like the post
    export const likePost = (id)=> async(dispatch)=> {
        try{
        const {data} = await api.likePost(id);
        // console.log('data value in actions');
        dispatch({type :LIKE , payload:data}) ;
    }
    catch(error){
        console.log(error)
    }
}