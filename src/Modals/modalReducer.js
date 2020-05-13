import { OPEN_MODAL, CLOSE_MODAL } from "./ModalConstants";

const initialState = null;

export const modalReducer = (state = initialState, action) => {
    switch(action.type){
        case OPEN_MODAL:
            return (
                state,
                action.payload
            )
        case CLOSE_MODAL:
            return null;
        default:
            return state;
    }
    
}