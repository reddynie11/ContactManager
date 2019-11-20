import React, {useContext} from 'react';
import { Card, Badge, Button} from 'react-bootstrap'
import ContactContext from '../../context/contact/ContactContext';

const ContactItem = (props)=>{
    const contactContext = useContext(ContactContext)
    const {deleteContact} = contactContext;
    const {id, name, email, phone, type} = props.contact

    const onDelete=()=>{
        deleteContact(id)
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
                <Card.Text><i class="fas fa-phone-alt"></i> +1-{phone}</Card.Text>
                <Card.Text><i class="fas fa-envelope-open"></i> {email}</Card.Text>
                <Button className="mr-1" size="sm" variant="dark" >Edit</Button>        
                <Button variant="danger" size="sm" onClick={onDelete} >Delete</Button>        
            </Card.Body>
            
        </Card>
    )
}
export default ContactItem;