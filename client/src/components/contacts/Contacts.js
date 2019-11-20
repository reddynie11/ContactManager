import React,{Fragment, useContext} from 'react';
import ContactContext from '../../context/contact/ContactContext'

import ContactItem from './ContactItem';

import './contacts.css';

const Contacts =()=>{
    const contactContext = useContext(ContactContext);
    const { contacts } = contactContext;
    return(
        <div style={{
            display:'grid',
            gridTemplateColumns:'1fr 1fr 1fr 1fr',
            gridGap: '20px',
            margin: '20px'
        }}>
            {contacts.map(contact => <ContactItem contact={contact} />)}
        </div>
    )
}

export default Contacts;