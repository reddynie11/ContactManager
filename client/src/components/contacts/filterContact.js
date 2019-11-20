import React,{useContext, useRef, useEffect} from 'react';
import ContactContext from '../../context/contact/ContactContext';

const FilterContact = ()=>{
    const context = useContext(ContactContext);
    const searchText = useRef("");
    const {filter, clearFilter, filterContact} = context;

    useEffect(()=>{
        if(filter == null){
            searchText.current.value="";
        }
    })
    const onChange = (e)=>{
        if(searchText.current.value !== ""){
            filterContact(e.target.value)
        }else{
            clearFilter();
        }
    } 

    return(
        <div className="m-3">
            <input ref={searchText} type="text" placeholder="Search Contacts..." onChange={onChange} />
        </div>
    )
}
export default FilterContact;
