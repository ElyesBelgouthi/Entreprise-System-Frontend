export const setUserToken = (token) => {
    return {
        type: "SET_USER_TOKEN",
        payload: token,
    };
}

export const setUsersList = (usersList) => {
    return {
        type: "SET_USERS_LIST",
        payload: usersList,
    };
}

export const setSelectedConversation = (conversation) => {
    return {
        type: "SET_SELECTED_CONVERSATION",
        payload: conversation,
    };
}

export const unsetSelectedConversation = () => {
    return {
        type: "UNSET_SELECTED_CONVERSATION",
    };
}

export const appendToMessagesList = (message) => {
    return {
        type: "APPEND_TO_MESSAGES_LIST",
        payload: message,
    };
}

export const appendMessagesToMessagesList = (messages) => {
    return {
        type: "APPEND_MESSAGES_TO_MESSAGES_LIST",
        payload: messages,
    };
}