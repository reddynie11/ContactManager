import React, {useReducer} from 'react';
import axios from 'axios';
import uuid from 'uuid';
import ContactContext from './ContactContext';
import ContactReducer from './ContactReducer';

const ContactState = (props)=>{
    const initialState={
        contacts:[],
        current:null,
        filter:null,
        error: null
    }
    const [state, dispatch] = useReducer(ContactReducer, initialState);

    //add contact
    const addContact = async (contact)=>{
        const config = {
            headers:{
                "Content-Type": "application/json"
            }
        }
        try {
            const res = await axios.post('/api/contacts', contact, config)
            dispatch({ type: "ADD_CONTACT", payload: res.data })
        } catch (err) {
            dispatch({type:"CONTACT_ERROR", payload: err.response.msg})
        }

        
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
                error:state.error,
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