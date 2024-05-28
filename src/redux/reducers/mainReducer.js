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

            case "SET_ONLINE_USERS":
                return {
                    ...state,
                    onlineUsers: action.payload,
                }

            case "ADD_ONLINE_USER":
                return {
                    ...state,
                    onlineUsers: [...state.onlineUsers, action.payload],
                }

            case "REMOVE_ONLINE_USER":
                return {
                    ...state,
                    onlineUsers: state.onlineUsers.filter((user) => user.id !== action.payload.id),
                }

            case "ADD_USER":
                return {
                    ...state,
                    usersList: [...state.usersList, action.payload],
                }

            case "UPDATE_USER":
                return {
                    ...state,
                    usersList: state.usersList.map((user) => {
                        if (user.id == action.payload.id) {
                            return action.payload;
                        }
                        return user;
                    }),
                }

            
            case "DELETE_USER":
                return {
                    ...state,
                    usersList: state.usersList.filter((user) => user.id !== action.payload.id),
                }

            case "SET_POSTS_LIST":
                return {
                    ...state,
                    postsList: action.payload,
                }

            case "ADD_POST":
                return {
                    ...state,
                    postsList: [action.payload, ...state.postsList],
                }
            
            case "UPDATE_POST":
                return {
                    ...state,
                    postsList: state.postsList.map((post) => {
                        if (post.id == action.payload.id) {
                            return action.payload;
                        }
                        return post;
                    }),
                }

            case "DELETE_POST":
                return {
                    ...state,
                    postsList: state.postsList.filter((post) => post.id !== action.payload.id),
                }

            case "ADD_COMMENT_TO_POST":
                return {
                    ...state,
                    postsList: state.postsList.map((post) => {
                        if (post.id == action.payload.post.id) {
                            return {
                                ...post,
                                comments: [action.payload, ...post.comments],
                            };
                        }
                        return post;
                    }),
                }

            case "ADD_NOTIFICATION":
                return {
                    ...state,
                    notifications: state.notifications?.length > 0 ? [action.payload, ...state.notifications] : [action.payload],
                }
                

            case "TOGGLE_NOTIFICATION_IS_READ":
                return {
                    ...state,
                    notificationIsRead: state.notificationIsRead ? false : true,
                }

            case "SET_ROOMS_LIST":
                return {
                    ...state,
                    roomsList: action.payload,
                }

            case "ADD_ROOM":
                return {
                    ...state,
                    roomsList: [action.payload, ...state.roomsList],
                }

            case "UPDATE_ROOM":
                return {
                    ...state,
                    roomsList: state.roomsList.map((room) => {
                        if (room.id == action.payload.id) {
                            return action.payload;
                        }
                        return room;
                    }),
                }

            case "DELETE_ROOM":
                return {
                    ...state,
                    roomsList: state.roomsList.filter((room) => room.id !== action.payload.id),
                }

            case "LOGOUT_USER":
                return {
                    ...state,
                    userToken: null,
                    userData: null,
                    usersList: [],
                    selectedConversation: null,
                    messagesList: [],
                    onlineUsers: [],
                    postsList: [],
                    notifications: [],
                    notificationIsRead: false,
                    roomsList: [],

                }





                
            

            default:
                return state;
        }
    }



    export default mainReducer;