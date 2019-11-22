import React, {useReducer} from 'react';
import axios from 'axios';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';

import setAuthToken from '../../utils/setAuthToken';


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
    const loadUser = async ()=>{
        if(localStorage.token){
            setAuthToken(localStorage.token)
        }

        try {
            const res = await axios.get('/api/auth');
            dispatch({type:"USER_LOADED", payload: res.data})
        } catch (err) {
            dispatch({type:"AUTH_ERROR"})
        }
    }

    //register user
    const register= async (formData)=>{
        const config={
            headers: {
                'Content-Type':'application/json'
            }
        }
        try {
            const res = await axios.post('/api/users', formData, config);
            dispatch({type:"REGISTER_SUCCESS", payload: res.data})
            loadUser()
        } catch (err) {
            dispatch({type:"REGISTER_FAIL", payload: err.responce.data.msg})
        }
    }


    //login user


    //logout


    //clear error
    const clearError = ()=> dispatch({type: "CLEAR_ERROR"})        



    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuth: state.isAuth,
                loading: state.loading,
                user:state.user,
                error: state.error,
                register,
                clearError,
                loadUser
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )

}
export default AuthState;