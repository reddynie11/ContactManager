import React,{useEffect, useContext, Fragment} from 'react';
import ContactContext from '../../context/contact/ContactContext'

import ContactItem from './ContactItem';

import './contacts.css';

const Contacts =(props)=>{
    const contactContext = useContext(ContactContext);
    const { contacts, filter, getContact, loading } = contactContext;

    useEffect(()=>{
        getContact();
        //eslint-disable-next-line
    }, [])
    return(
        <Fragment>
             {contacts !== [] && !loading ?
        (   <div style={{
                    display:'grid',
                    gridTemplateColumns:'1fr 1fr 1fr',
                    gridGap: '20px',
                    margin: '20px'
                }}>
                {filter === null ?
                    contacts.map(contact => <ContactItem key={contact._id} contact={contact} history={props.history} />)
                    : filter.map(contact => <ContactItem key={contact._id} contact={contact} history={props.history} />)
                }
           
            </div>
        ): (<div className="container"> <h2>loading</h2> </div> ) 
    }
        </Fragment>
    )
}

export default Contacts;