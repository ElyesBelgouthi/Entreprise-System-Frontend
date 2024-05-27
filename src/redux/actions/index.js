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
