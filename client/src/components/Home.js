import React,{useContext, useEffect} from 'react';
import Contacts from './contacts/Contacts';
import FilterContact from './contacts/filterContact';
import AuthContext from '../context/auth/AuthContext';

import './contacts/contacts.css'
 

const Home = (props)=>{
    const authContext = useContext(AuthContext);

    useEffect(()=>{
        authContext.loadUser();
        //eslint-disable-next-line
    }, [])
    return(
        <div className="main_contact_div">
            <FilterContact />
            <Contacts history={props.history}/>
        </div>
    )
}
export default Home;