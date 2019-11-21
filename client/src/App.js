import React, {Fragment} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';


import Header from './components/Navbar';
import Home from './components/Home';
import AddContactForm from './components/contacts/AddContactForm'

import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';

const App = ()=>{
  return(
   <AuthState>
      <ContactState>
      <BrowserRouter>
        <Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={AddContactForm}/>
          </Switch>   
        </Fragment>
      </BrowserRouter>
   </ContactState>
   </AuthState>
    
  )
}

export default App;
