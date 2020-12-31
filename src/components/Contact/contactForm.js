import React from 'react'


const ContactForm = (props) => {

    return(
        <form onSubmit={props.handleSubmit} className="contact__form">
            <label className="contact__form__label">First Name: </label>
            <input className="contact__form__input" type="text" name="firstName" value={props.firstName} placeholder="enter first name" onChange={props.handleChange} /><br />

            <label className="contact__form__label">Last Name: </label>
            <input className="contact__form__input" type="text" name="lastName" value={props.lastName} placeholder="enter last name" onChange={props.handleChange} /><br />

            <label className="contact__form__label">Phone Number: </label>                        
            <input className="contact__form__input" type="text" name="phoneNum" value={props.phoneNum} placeholder="enter phone number" onChange={props.handleChange} /><br />

            <label className="contact__form__label">Email: </label>
            <input className="contact__form__input" type="email" name="email" value={props.email} placeholder="enter email" onChange={props.handleChange} /><br />

            <button className="submitBtn">Submit</button>
        </form> 
    )

}

export default ContactForm;


























