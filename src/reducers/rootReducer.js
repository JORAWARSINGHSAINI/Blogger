import { combineReducers } from "redux";
import authReducer from './authReducer'
import blogReducer from './blogReducer'
import {firestoreReducer} from 'redux-firestore'
import { firebaseReducer } from "react-redux-firebase";
const rootReducer= combineReducers({
blogs:blogReducer,
auth:authReducer,
firestore:firestoreReducer,
firebase:firebaseReducer
});
export default rootReducer