import React, {useContext} from 'react';
import { Card, Badge, Button} from 'react-bootstrap'
import ContactContext from '../../context/contact/ContactContext';

const ContactItem = (props)=>{
    const contactContext = useContext(ContactContext)
    const {deleteContact, setCurrent, clearCurrent} = contactContext;
    const {id, name, email, phone, type} = props.contact

    const onDelete=()=>{
        deleteContact(id);
        clearCurrent();
    }
    const onEdit=()=> {
        setCurrent(props.contact);
        props.history.push("/add")
    }    
   
    return(
        <Card bg="light" style={{ width: '100%' }}>
            <span className="ml-auto mt-1 mr-1">
                <Badge className="mr-auto" 
                        variant={
                            type === "personal"
                            ? ("success")
                            : ("warning")
                        }
                >
                    {type.charAt(0).toUpperCase()+type.slice(1)}
                </Badge>
            </span>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text><i className="fas fa-phone-alt"></i> +1-{phone}</Card.Text>
                <Card.Text><i className="fas fa-envelope-open"></i> {email}</Card.Text>
                <Button className="mr-1" size="sm" variant="dark" onClick={onEdit} >Edit</Button>        
                <Button variant="danger" size="sm" onClick={onDelete} >Delete</Button>        
            </Card.Body>
            
        </Card>
    )
}
export default ContactItem;