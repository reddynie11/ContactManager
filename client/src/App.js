import React, {Fragment} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';


import Header from './components/Navbar';
import Home from './components/Home';
import AddContactForm from './components/contacts/AddContactForm'
import Register from './components/Register';
import Login from './components/Login';
import Alerts from './components/Alerts';
import PrivateRoute from './components/routing/privateRoute';
import setAuthToken from './utils/setAuthToken';


import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

if(localStorage.token){
  setAuthToken(localStorage.token)
}

const App = ()=>{
  return(
   <AuthState>
      <ContactState>
        <AlertState>
          <BrowserRouter>
            <Fragment>
              <Header />
              <Alerts />
              <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <PrivateRoute path="/add" component={AddContactForm}/>
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
              </Switch>   
            </Fragment>
          </BrowserRouter>
        </AlertState>
      </ContactState>
   </AuthState>
    
  )
}

export default App;
