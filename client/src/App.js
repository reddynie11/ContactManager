import React, {Fragment} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';


import Header from './components/Navbar';
import Home from './components/Home';

import ContactState from './context/contact/ContactState';

const App = ()=>{
  return(
   <ContactState>
      <BrowserRouter>
        <Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>   
        </Fragment>
      </BrowserRouter>
   </ContactState>
    
  )
}

export default App;
