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
                id:1,
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

    //delete contact
    
    //set current contact

    //clear current contact

    //update contact

    //filter contact

    //clear filter

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts
            }}
        >
            {props.children}
        </ContactContext.Provider>
    )
}
export default ContactState;