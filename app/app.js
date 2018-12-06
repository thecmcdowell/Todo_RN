import React, { Component } from 'react';
import ToDo from './containers/ToDo'
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers/index'


const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
let store = createStore(persistedReducer)
let persistor = persistStore(store)
export default class app extends Component {
  
  render() {
    return (
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <ToDo />
        </PersistGate>
        </Provider>
    );
  }
}

