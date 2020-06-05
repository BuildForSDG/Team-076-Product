import { posts } from "./MockPosts";
import { ADD_POST } from "./blogConstants";

const initialState = posts;

export const blogReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            return [...state, action.payload];
        default:
            return state;
    }

}