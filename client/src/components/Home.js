import React from 'react';
import Contacts from './contacts/Contacts';

import './contacts/contacts.css'

const Home = (props)=>{
    return(
        <div className="main_contact_div">
            <Contacts history={props.history}/>
        </div>
    )
}
export default Home;