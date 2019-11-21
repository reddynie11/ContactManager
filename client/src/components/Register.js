import React, {useState, useContext} from 'react';
import AlertContext from '../context/alert/AlertContext';

const Register =()=>{
    const alertContext = useContext(AlertContext);
    const {setAlert} = alertContext;
    const [user,setUser]= useState({
        name:"",
        email:"",
        password:"",
        password2:""
    })
    const {name, email, password, password2} = user;
    const onChange = (e)=> setUser({...user, [e.target.name]:e.target.value});

    const onSubmit = (e)=>{
        e.preventDefault();
        if(name === "" || email === "" || password===""){
            setAlert("All fields are mandatory","danger")
        }else if(password !== password2){
            setAlert("Confirm password does not match", "warning")
        }else{
            console.log("register submit")
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
                <h1 className="text-center">Register</h1>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input className="form-control" type="text" name='name' value={name} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input className="form-control" type="email" name='email' value={email} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input className="form-control" type="password" name='password' value={password} minLength="6" onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password2">Confirm Password</label>
                        <input className="form-control" type="password" name='password2' value={password2} onChange={onChange} />
                    </div>
                    <div>
                        <input type='submit' value='Register' className='btn btn-primary btn-block mt-3'  />
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Register;