import intialState from "../intital-state";

const mainReducer = (state = intialState, action) => {
    switch (action.type) {
        case "SET_USER_TOKEN":
            return {
                ...state,
                userToken: action.payload.userToken,
                userData: action.payload.userData,
            }
        default:
            return state;
    }
}

export default mainReducer;