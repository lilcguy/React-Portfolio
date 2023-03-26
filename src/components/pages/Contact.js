//component for contact content.

import { React, useState } from 'react';

import '../styles/Content-body.css';
import '../styles/Contact.css';

import { validateEmail } from '../../utils/helpers'; //importing email validation regex helper

//Forms() ends at the bottom of the page. nested inside of it is the return method that renders content.
function Forms() {
    //this function is intended to notify the user that forms are required and if their email is invalid.
    //setting up state variables for each of the forms
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); //for the email form
    const [otherErrorMessage, setOtherErrorMessage] = useState('');

    //const [focusValue, setFocusValue] = useState(false);
    //state for error message, because whether or not the validation comes back true or false, display an error message.
   



        
/* 
tried onBlur attribute, tried event listener for 'blur' event,
tried onFocus event.
could not get either to work.
*/


    function handleInputChange(e) {
        const {target} = e;
        const inputType = target.name;
        const inputValue = target.value;

        //name and value are attributes defined in the forms' <input> tag attributes
            //the value attribute is set to the corresponding state variables defined above
        //instead of notifying the user that their information is invalid on form submit, we will handle it here:
            //there is no functionality currently for form submission handling.
    
            console.log("name:" + name);
            console.log("msg: " + message);
    if (inputType === 'name') {
        setName(inputValue);

    } else if (inputType === 'email') {
        setEmail(inputValue);

    } else {
        setMessage(inputValue);
    }

    if (!name || !message) {
        setOtherErrorMessage('All fields are required.');
        console.log('check for name and message fields failed');
        
    } else {
        setOtherErrorMessage('');
        console.log('check for name/msg field passed');
    }

        //this check runs with every single input change.
    if (!validateEmail(email)) { //if the email validation fails, i.e. false... 
        setErrorMessage("Email is invalid.");
        console.log("failed email check");
        return;
    } else {
        setErrorMessage('');
        console.log('email checks out.');
    }

    /*
    if (!name || !message) {
        setOtherErrorMessage('All fields are required.');
        console.log('check for name and message fields failed');
    } else {
        setOtherErrorMessage('');
        console.log('check for name/msg field passed');
    }
    */


        
    }

    function formSubmissionHandler (e) {
        e.preventDefault();
        //default behavior is refresh of page. this prevents that

        if (!validateEmail(email) || !name || !message) { //if the email validation fails, i.e. false... if name and message are empty
            setErrorMessage("All forms are required; email may be invalid.");
            return;
        }

        window.alert("This feature is under development. Please try again later.");
        //clear all forms on successful submission; i.e. validations cleared.
        setName('');
        setEmail('');
        setMessage('');
        
    }

    //this method is rendering the content on the page itself.
    return (
        <div className=""> 
        <h6>*This page is under development and the forms are not functional at this moment.</h6>
        
            <h1 className="h1">Contact Me!</h1>
            <div className="forms-parent">
                <input 
                id="name"
                name="name"
                value={name}
                onChange={handleInputChange}
                placeholder="Your Name" 
                className="form"></input>

                <input 
                id="email"
                onChange={handleInputChange}
                name="email"
                value={email}
                placeholder="Your Email" 
                className="form"></input>

                <input 
                id="message"
                onChange={handleInputChange}
                name="message"
                value={message}
                placeholder="Message" 
                className="msg-form"></input>
                    
                <div>
                    <h3 
                    className="error">{errorMessage}
                    </h3>
                </div>
                <div>
                    <h3 
                    className="error">{otherErrorMessage}
                    </h3>
                </div>

                <button onClick={formSubmissionHandler}>Submit</button>
                    
            </div>
            <h2 className="h1">999-999-9999</h2>
            <h2 className="h1">thecbradshaw89@gmail.com</h2>
            
        </div>
    )

} //end of function Forms();

export default Forms;

//placeholders to be styled.

// email must be validated: regex
// state update for inputs to alert user that form is required if they leave the box
// see previous activities...