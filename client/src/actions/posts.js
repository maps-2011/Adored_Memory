import * as api from '../api/index.js';
// import  createPost from '../api/index.js';
export const getPosts=()=>async(dispatch)=>{

    try {
        const { data } = await api.fetchPosts();
        dispatch({type:'FETCH ALL',payload:data})
    } catch (error) {
        console.log(error)
    }
    
    
}
export const createPost=(post)=> async(dispatch)=>{
    try {
        console.log("ececute")
        const  { data }  = await api.createPost(post);
        console.log("ete")
        dispatch({type:'CREATE' ,payload:data})
    } catch (error) {
        console.log(error)
        
    }
}
export const updatePost=(id,post)=>async(dispatch)=>{
try {
    const { data } =await api.updatePost(id,post) 
    dispatch({type:'UPDATE',payload:data})
} catch (error) {
    console.log(error)
    
}
}

export const deletePost=(id)=>async(dispatch)=>{
    try {
        await api.deletePost(id)
        dispatch({type:'DELETE',payload:id})
    } catch (error) {
        console.log(error)
    }
}

export const likePost=(id)=>async(dispatch)=>{
    try {
        const { data } =await api.likePost(id) 
        dispatch({type:'UPDATE',payload:data})
    } catch (error) {
        console.log(error)
    }
}