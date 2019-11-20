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
        ],
        current:null,
        filter:null
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
    const setCurrent = (contact)=>{
        dispatch({type:"SET_CURRENT", payload: contact})

    }

    //clear current contact
    const clearCurrent = ()=>{
        dispatch({type:"CLEAR_CURRENT"})

    }

    //update contact
    const updateContact = (contact)=>{
        dispatch({type:"UPDATE_CONTACT", payload: contact})
    }    
    //filter contact
    const filterContact = (text)=>{
        dispatch({type:"FILTER_CONTACT", payload: text})
    }   

    //clear filter
    const clearFilter = ()=>{
        dispatch({type:"CLEAR_FILTER"})

    }

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current:state.current,
                filter:state.filter,
                addContact,
                deleteContact,
                setCurrent,
                clearCurrent,
                updateContact,
                filterContact,
                clearFilter
            }}
        >
            {props.children}
        </ContactContext.Provider>
    )
}
export default ContactState;