import React, {useState, useContext, useEffect} from "react";
import ContactContext from '../../context/contact/ContactContext';

const AddContactForm=(props)=>{
    const contactContext = useContext(ContactContext);
    const {addContact, current, clearCurrent, updateContact} = contactContext;

    useEffect(()=>{
        if(current !== null){
            setContact(current)
        }else{
            setContact({
                name:'',
                email:'',
                phone:'',
                type:'personal' 
            });
        }
    },[contactContext,current])

    const [contact, setContact] = useState({
        name:'',
        email:'',
        phone:'',
        type:'personal'
    });
    const {name,email,phone,type} = contact;

    const onChange = (e)=>{
        setContact({...contact, [e.target.name]:e.target.value})
    }
    const onSubmit =(e)=>{
        e.preventDefault();
        if (current === null){
            addContact(contact);        
        }else{
            updateContact(contact)
        }
        
        setContact({
            name:'',
            email:'',
            phone:'',
            type:'personal' 
        });
        props.history.push("/");

    }
    const clearAll=()=>{
        clearCurrent();
    }

    return(
        <div className='container'>
           <div className="row">
               <div className="col-6">
               <h2 className="text-center m-3">{current ? "Edit Contact" : "Add Contact"}</h2>
            <form onSubmit={onSubmit} >
                <div className="form-group">
                    <input className="form-control mb-2" type="text" placeholder="Full Name" name="name" value={name} onChange={onChange}  />
                    <input className="form-control mb-2" type="email" placeholder="Email" name="email" value={email} onChange={onChange}  />
                    <input className="form-control mb-2" type="text" placeholder="Phone" name="phone" value={phone} onChange={onChange}  />
                    <h6>Contact Type</h6>
                    <input className="form-ccheck-input mb-2" type="radio" name='type' value="personal" checked={type === "personal"} onChange={onChange}/>{"   "}Personal
                    <input className="form-ccheck-input ml-3" type="radio" name='type' value="professional" checked={type === 'professional'} onChange={onChange}/>{"   "}Professional
                </div>
            
                <div>
                    <input type="submit" value={current ? "Update Contact" : "Add Contact"} className="btn btn-primary "  />
                    {current && (
                        <input type="button" value="Clear" className="btn btn-dark ml-2"  onClick={clearAll}/>
                    )}
                </div>
            </form>
               </div>
           </div>

        </div>
    )
}
export default AddContactForm;
