import React,{useContext} from 'react'
import { Route, Redirect} from 'react-router-dom'
import AuthContext from '../../context/auth/AuthContext';

export const PrivateRoute = ({component: Component, ...rest}, props) => {
    const authContext = useContext(AuthContext)
    const {isAuth, loading} = authContext
    return (
        <Route {...rest} render={(props)=>!isAuth && !loading ?
            (<Redirect to='/login' />) :
            (<Component history={props.history} {...rest}/>) } 
        />
    )
}
export default PrivateRoute;