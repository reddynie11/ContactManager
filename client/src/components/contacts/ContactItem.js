import React from 'react';
import { Card, Badge} from 'react-bootstrap'

const ContactItem = (props)=>{
    const {id, name, email, phone, type} = props.contact
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
                
            </Card.Body>
        </Card>
    )
}
export default ContactItem;