import intialState from "../intital-state";

const mainReducer = (state = intialState, action) => {
    switch (action.type) {
        case "SET_USER_TOKEN":
            return {
                ...state,
                userToken: action.payload.userToken,
                userData: action.payload.userData,
            }
        
        case "SET_USERS_LIST":
            return {
                ...state,
                usersList: action.payload,
            }

        case "SET_SELECTED_CONVERSATION":
            return {
                ...state,
                selectedConversation: action.payload,
            }

        case "UNSET_SELECTED_CONVERSATION":
            return {
                ...state,
                selectedConversation: null,
            }

        case "APPEND_MESSAGES_TO_MESSAGES_LIST":
            //append messages to the selected conversation
            return {
                ...state,
                messagesList: action.payload,

            }

        case "APPEND_TO_MESSAGES_LIST":
            //append a single message to the selected conversation
            return {
                ...state,
                messagesList: [...state.messagesList, action.payload],
            }


            
        

        default:
            return state;
    }
}



export default mainReducer;