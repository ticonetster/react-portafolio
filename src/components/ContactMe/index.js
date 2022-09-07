import React from 'react';
import {useForm} from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';

const ContactMe = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    // Function that displays a success toast on bottom right of the page when form submission is successful
    const toastifySuccess = () => {
        toast('Form sent!', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            className: 'submit-feedback success',
            toastId: 'notifyToast'
        });
    };
    // Function called on submit that uses emailjs to send email of valid contact form
    const onSubmit = async (data) => {
        // Destrcture data object
        const { name, email, subject, message } = data;
        try {
            const templateParams = { name, email, subject, message };
            await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            );
            reset();
            toastifySuccess();
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <section>
            <h1 data-testid='h1tag' className="display-5">Contact: Ticonetster</h1>
            <hr></hr>
            <div>
                <form className="col-md-4 offset-md-4" id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className='form-group row justify-content-center'>
                        <input 
                            className="form-control" 
                            placeholder="name" 
                            type="text" 
                            name="name" 
                            {...register('name', {
                                required: { value: true, message: 'Please enter your name' },
                                maxLength: {
                                value: 30,
                                message: 'Please use 30 characters or less'
                                }
                            })}
                        />
                        {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                    </div>
                    <br/>
                    <div className='form-group row justify-content-center'>
                        <input 
                            className="form-control" 
                            placeholder="email" 
                            type="email"  
                            name="email" 
                            {...register('email', {
                                required: true,
                                pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                            })}
                        />
                        {errors.email && (
                            <span className='errorMessage'>Please enter a valid email address</span>
                        )};
                    </div>
                    <br/>
                    <div className='form-group row justify-content-center'>
                        <input 
                            className="form-control" 
                            placeholder="subject" 
                            type="subject"  
                            name="subject" 
                            {...register('subject', {
                                required: { value: true, message: 'Please enter a subject' },
                                maxLength: {
                                value: 75,
                                message: 'Subject cannot exceed 75 characters'
                                }
                            })}
                        />
                        {errors.subject && (
                            <span className='errorMessage'>{errors.subject.message}</span>
                        )}
                    </div>
                    <br/>
                    <div className='form-group row justify-content-center'>
                        <textarea 
                            className="form-control" 
                            placeholder="message" 
                            name="message" 
                            rows="7" 
                            {...register('message', {
                                required: true
                            })}
                        />
                        {errors.message && <span className='errorMessage'>Please enter a message</span>}
                    </div>
                    <div>
                        <button className="btn btn-outline-dark mt-4" type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <div>
                <ToastContainer />
            </div>
        </section>
    );
}
    
export default ContactMe;