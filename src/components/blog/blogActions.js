import { ADD_POST, DELETE_POST } from "./blogConstants"


export const addPost = (post) => {
    return {
        type: ADD_POST,
        payload: post
    }
}

export const removePost = () => {
    return {
        type: DELETE_POST
    }
}