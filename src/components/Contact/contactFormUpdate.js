import React from 'react'


const ContactUpdateForm = (props) => {

    return(
        <form onSubmit={props.handleUpdate} className="contact__update">
            <label className="contact__form__label">First name: </label>
            <input className="contact__form__input" type="text" name="firstName" value={props.firstName} placeholder="enter first name" onChange={props.handleChange} /><br />

            <label className="contact__form__label">Last name: </label>
            <input className="contact__form__input" type="text" name="lastName" value={props.lastName} placeholder="enter last name" onChange={props.handleChange} /><br />

            <label className="contact__form__label">Phone number: </label>                        
            <input className="contact__form__input" type="text" name="phoneNum" value={props.phoneNum} placeholder="enter phone number" onChange={props.handleChange} /><br />

            <label className="contact__form__label">Email: </label>
            <input className="contact__form__input" type="email" name="email" value={props.email} placeholder="enter email" onChange={props.handleChange} /><br />
            
            <button className="submitBtn">Update</button>
        </form> 
    )

}

export default ContactUpdateForm;


























