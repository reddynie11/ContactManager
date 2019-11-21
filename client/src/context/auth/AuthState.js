import React, {useReducer} from 'react';
import axios from 'axios';
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
    const register= async (formData)=>{
        const config={
            headers: {
                'Content-Type':'application/json'
            }
        }
        try {
            const res = await axios.post('/api/users', formData, config);
            dispatch({type:"REGISTER_SUCCESS", payload: res.data})
        } catch (err) {
            dispatch({type:"REGISTER_FAIL", payload: err.responce.data.msg})
        }
    }


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