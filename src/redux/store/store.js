import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';  // Correct import statement
import rootReducer from '../reducers/index';
import { persistStore, persistReducer, createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Define the keys you want to blacklist within mainReducer
const blacklistTransform = createTransform(
  // transform state on its way to being serialized and persisted
  (inboundState, key) => {
    if (key === 'mainReducer') {
      const { selectedConversation, postsList, onlineUsers, messagesList, notifications, ...rest } = inboundState; // Example key to blacklist
      return rest;
    }
    return inboundState;
  },
  // transform state on its way to being rehydrated into redux
  (outboundState, key) => {
    return outboundState;
  },
  { whitelist: ['mainReducer'] }
);

const persistConfig = {
  key: 'root',
  storage,
  transforms: [blacklistTransform]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = applyMiddleware(thunk);
const store = createStore(persistedReducer, composeEnhancers(middleware));
const persistor = persistStore(store);

export default store;
