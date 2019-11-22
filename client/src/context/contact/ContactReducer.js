export default (state, action)=>{
    switch(action.type){
        case "GET_CONTACTS":
            return{
                ...state,
                contacts: action.payload,
                loading: false
            }
        case "ADD_CONTACT":
            return {
                ...state,
                contacts:[...state.contacts, action.payload],
                loading:false
            }
        case "DELETE_CONTACT":
            return{
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload),
                loading:false
            }
        case "CLEAR_CONTACTS":
            return{
                ...state,
                contacts: [],
                filter: null,
                error: null,
                current: null
            }    
        case "SET_CURRENT":
            return{
                ...state,
                current: action.payload
            }
        case "CLEAR_CURRENT":
            return{
                ...state,
                current:null
            }
        case "CLEAR_FILTER":
            return{
                ...state,
                filter:null
            }
        case "UPDATE_CONTACT":
            return{
                ...state,
                contacts : state.contacts.map(contact => {
                    return contact.id === action.payload.id 
                            ? action.payload
                            : contact
                    
                }),
                loading:false
            }
        case "FILTER_CONTACT":
            return{
                ...state,
                filter: state.contacts.filter(contact =>{
                    const search = action.payload.toLowerCase();
                    return contact.name.toLowerCase().match(search) ||
                           contact.email.toLowerCase().match(search) ||
                           contact.phone.match(search) 
                })
            }
        case "CONTACT_ERROR":
             return{
                 ...state,
                 error: action.payload
             }                
        default:
            return state;    
    }
}