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

export const setOnlineUsers = (users) => {
    return {
        type: "SET_ONLINE_USERS",
        payload: users,
    };
}

export const addOnlineUser = (user) => {
    return {
        type: "ADD_ONLINE_USER",
        payload: user,
    };
}

export const removeOnlineUser = (user) => {
    return {
        type: "REMOVE_ONLINE_USER",
        payload: user,
    };
}

export const addUser = (user) => {
    return {
        type: "ADD_USER",
        payload: user,
    };
}

export const updateUser = (user) => {
    return {
        type: "UPDATE_USER",
        payload: user,
    };
}

export const deleteUser = (user) => {
    return {
        type: "DELETE_USER",
        payload: user,
    };
}

