import { useState } from 'react';
import { useForm } from "react-hook-form"
import './contactpage.css'
import emailjs from "@emailjs/browser";

const contactpage = () => {

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm()

    const sendMail = async (sender, message, id) => {
        try {
            const result = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: sender,
                    email: id,
                    review: message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            alert("Email sent successfully!");
            return result;
        } catch (error) {
            alert("Failed to send email");
            throw error;
        }
    };


    const onSubmit = async (data) => {
        try {
            await sendMail(data.username, data.usermessage, data.email);
            alert("Email sent successfully");
        } catch (error) {
            alert("Error sending email:", error);
        }
    };


    return (
        <div className="footer-root" id='contact'>
            <h1 className='footer-head'>Contact</h1>
            <div className="footerBox">
                <div className="fBox1">
                    <h2>Drop me a message</h2>
                    <p>I’m currently open to internships and exciting opportunities.
                        <br />If you think we can work together, feel free to reach out!</p>
                    <div className="footerDetails">
                        <ul>
                            <li><img src="src/assets/phone.svg" alt="" width='20px' className='footerIcon' />+91 9953744795</li>
                            <li><img src="src/assets/mail.svg" alt="" width='20px' className='footerIcon' />kumar.tanishq081@gmail.com</li>
                            <li><img src="src/assets/location.svg" alt="" width='20px' className='footerIcon' />Raj Nagar - 2, Palam Colony, New Delhi - 77</li>
                        </ul>
                    </div>
                </div>
                <div className="fBox2">
                    <div className="tranparentBox">
                        <p>Name</p>
                        <input type="text" placeholder='Enter your name'
                            {...register("username",
                                {
                                    required:
                                        { value: true, message: "This field is required" },
                                    minLength: { value: 2, message: "Min length is 2" }
                                })
                            } />
                        {errors.username && <p>{errors.username.message}</p>}
                        <p>Email</p>
                        <input type="email" placeholder='Enter your email'
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Enter a valid email address",
                                },
                            })}
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                        <p>Message</p>
                        <textarea name="msg" id="messageBox" placeholder='Type your message'
                            {...register("usermessage", {
                                required: { value: true, message: "This field is required" }
                            })}>

                        </textarea>
                        {errors.usermessage && <p>{errors.usermessage.message}</p>}
                        <br />
                        <button onClick={handleSubmit(onSubmit)} disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : "Send message"}
                        </button>
                    </div>
                </div>
            </div>
            <div className="line">
                <div></div>
            </div>
            <div className="footer-last">
                <p>{new Date().getFullYear()} . Tanishq, All rights reserved</p>
                <ul className='footer-last-list'>
                    <a href="https://github.com/tanishq242" target='_blank'><li className='contact-icon'><img src="src/assets/github.svg" alt="" width='40px' /></li></a>
                    <a href="https://www.linkedin.com/in/tanishq-442a29339/" target="_blank"><li><img src="src/assets/linkedin.svg" alt="" width='40px' className='contact-icon' /></li></a>
                </ul>
            </div>
        </div>
    )
}

export default contactpage