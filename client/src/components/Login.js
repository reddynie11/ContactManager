import React, {useState, useContext, useEffect} from 'react';
import AlertContext from '../context/alert/AlertContext';
import AuthContext from '../context/auth/AuthContext';

const Login =(props)=>{
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);
    const {setAlert} = alertContext;
    const {login, error, clearError, isAuth} = authContext;

    useEffect(()=>{
        if(isAuth){
            props.history.push('/')
        }

        if(error === "Invalid Credentials"){
            setAlert(error, "danger")
            clearError();
        }
        //eslint-disable-next-line
    }, [error, isAuth, props.history]);


    const [user,setUser]= useState({
        email:"",
        password:"",
    })
    const {email, password} = user;
    const onChange = (e)=> setUser({...user, [e.target.name]:e.target.value});

    const onSubmit = (e)=>{
        e.preventDefault();
        if(email==="" || password===""){
            setAlert("Please provide login details ", "warning")
        }else{
            login({email, password})
        }
    }
    return(
        <div style={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center",
        }}>
            <div style={{
                width:"40%",
                margin:50,
                padding:20
            }}>
                <h1 className="text-center">Login</h1>
                <form onSubmit={onSubmit}>
                    
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input className="form-control" type="email" name='email' value={email} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input className="form-control" type="password" name='password' value={password} onChange={onChange} />
                    </div>
                    
                    <div>
                        <input type='submit' value='Login' className='btn btn-primary btn-block mt-3'  />
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login;