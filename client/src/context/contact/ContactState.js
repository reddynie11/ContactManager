import React, {useReducer} from 'react';
import uuid from 'uuid';
import ContactContext from './ContactContext';
import ContactReducer from './ContactReducer';

const ContactState = (props)=>{
    const initialState={
        contacts:[
            {
                id:1,
                name: "James Smith",
                email:"js@smith.com",
                phone:"111-111-1111",
                type:"personal"
            },
            {
                id:2,
                name: "Betty Smith",
                email:"bs@smith.com",
                phone:"222-222-2222",
                type:"professional"
            },
            {
                id:3,
                name: "Dolly Smith",
                email:"ds@smith.com",
                phone:"333-333-3333",
                type:"professional"
            },
            {
                id:4,
                name: "Jonny Smith",
                email:"jsmith@smith.com",
                phone:"444-444-4444",
                type:"personal"
            }
        ]
    }
    const [state, dispatch] = useReducer(ContactReducer, initialState);

    //add contact
    const addContact =(contact)=>{
        contact.id = uuid.v4();
        dispatch({ type: "ADD_CONTACT", payload: contact })
    }

    //delete contact
    const deleteContact = (id)=>{
        dispatch({type:"DELETE_CONTACT", payload: id})
    }
    
    //set current contact

    //clear current contact

    //update contact

    //filter contact

    //clear filter

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                addContact:addContact,
                deleteContact:deleteContact
            }}
        >
            {props.children}
        </ContactContext.Provider>
    )
}
export default ContactState;