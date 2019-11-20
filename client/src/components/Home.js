import React from 'react';
import Contacts from './contacts/Contacts';
import FilterContact from './contacts/filterContact';

import './contacts/contacts.css'
 

const Home = (props)=>{
    return(
        <div className="main_contact_div">
            <FilterContact />
            <Contacts history={props.history}/>
        </div>
    )
}
export default Home;