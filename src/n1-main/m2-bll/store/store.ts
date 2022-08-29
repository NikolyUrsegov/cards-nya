import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import thunk from 'redux-thunk';
import {loginReducer} from "../../../n2-features/f1-auth/a1-login/reducer/loginReducer";
import {registrationReducer} from "../../../n2-features/f1-auth/a2-registration/reducer/registrationReducer";
import {passwordReducer} from "../../../n2-features/f1-auth/a3-password/reducer/passwordReducer";
import {profileReducer} from "../../../n2-features/f2-profile/reducer/profileReducer";


const rootReducer = combineReducers({
    login: loginReducer,
    registration: registrationReducer,
    password: passwordReducer,
    profile: profileReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
export type AppStoreType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store
