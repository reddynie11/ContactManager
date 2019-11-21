import React, {useState} from 'react';

const Login =()=>{
    const [user,setUser]= useState({
        
        email:"",
        password:"",
        
    })
    const {email, password} = user;
    const onChange = (e)=> setUser({...user, [e.target.name]:e.target.value});

    const onSubmit = (e)=>{
        e.preventDefault();
        console.log("Login submit")
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