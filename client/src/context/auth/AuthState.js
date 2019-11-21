import React, {useReducer} from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';

const AuthState = (props)=>{
    const initialState = {
        token: localStorage.getItem('token'),
        isAuth : null,
        user: null,
        loading: true,
        error: null
    }
    const [state, dispatch ]= useReducer(AuthReducer, initialState);

    //Load user

    //register user


    //login user


    //logout


    //clear error

    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuth: state.isAuth,
                loading: state.loading,
                user:state.user,
                error: state.error
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )

}
export default AuthState;