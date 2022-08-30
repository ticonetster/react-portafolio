import React, { useState } from 'react';
import { validateEmail } from '../../utils/helper';

function ContactMe() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
    
                if(!isValid) {
                    setErrorMessage('please enter a valid email');
                } else {
                    setErrorMessage('');
                }

            } else {
                if (!e.target.value.length) {
                  setErrorMessage(`${e.target.name} is required.`);
                } else {
                  setErrorMessage('');
                } 
        }

        if (!errorMessage) {
        setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

return (
    <section className="justify-content-center" id="contact-section">
        <h1 data-testid='h1tag' className="contact">contact: Ticonetster</h1>
        <hr></hr>
        <form className="justify-content-center" id="contact-form">
            <div>
                <label htmlFor="name">name:</label>
                <input className="form-control" type="text" name="name"  defaultValue={name} onBlur={handleChange}/>
            </div>
            <div >
                <label htmlFor="email">email:</label>
                <input className="form-control" type="email"  name="email" defaultValue={email} onBlur={handleChange} />
            </div>
            <div>
                <label htmlFor="message">message:</label>
                <textarea className="form-control" name="message" defaultValue={message} onBlur={handleChange} rows="7" />
            </div> 
            {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
            )}

            <div>
            <button data-testid='button' className="btn btn-outline-dark mt-4" type="submit" onSubmit={handleSubmit}>Submit</button>
            </div>
        </form>
    </section>
    );
}
    
export default ContactMe;