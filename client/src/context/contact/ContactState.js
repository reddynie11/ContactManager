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

    //get contacts
    const getContact = async ()=>{
       
        try {
            const res = await axios.get('/api/contacts')
            dispatch({ type: "GET_CONTACTS", payload: res.data })
        } catch (err) {
            dispatch({type:"CONTACT_ERROR", payload: err.response.msg})
        }

        
    }
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
    const deleteContact = async (id)=>{
        try {
            await axios.delete(`/api/contacts/${id}`)
            dispatch({type:"DELETE_CONTACT", payload: id})
        } catch (err) {
            dispatch({type:"CONTACT_ERROR", payload: err.response.msg})
        }
    }

    //update contact
    const updateContact = async (contact)=>{
        const config = {
            headers:{
                "Content-Type": "application/json"
            }
        }
        try {
            const res = await axios.put(`/api/contacts/${contact._id}`, contact, config)
            dispatch({ type: "UPDATE_CONTACT", payload: res.data })
        } catch (err) {
            dispatch({type:"CONTACT_ERROR", payload: err.response.msg})
        }

        
    }
    
    //set current contact
    const setCurrent = (contact)=>{
        dispatch({type:"SET_CURRENT", payload: contact})

    }

    //clear current contact
    const clearCurrent = ()=>{
        dispatch({type:"CLEAR_CURRENT"})

    }

      
    //filter contact
    const filterContact = (text)=>{
        dispatch({type:"FILTER_CONTACT", payload: text})
    }   

    //clear filter
    const clearFilter = ()=>{
        dispatch({type:"CLEAR_FILTER"})

    }

    const clearContacts = ()=>{
        dispatch({type: "CLEAR_CONTACTS"})
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
                clearFilter,
                getContact,
                clearContacts,
                
            }}
        >
            {props.children}
        </ContactContext.Provider>
    )
}
export default ContactState;