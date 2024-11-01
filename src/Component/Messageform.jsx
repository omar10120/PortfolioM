import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Done from './Done';

function ContactForm() {
    const [isLoadedSend, setIsLoadedsend] = useState(false); // Track whether the iframe has loaded

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    });
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoadedsend(true)

        if (formData.fullName && formData.email && formData.message) {
            emailjs.send(
                'service_j1g7vb7', //  EmailJS service ID
                'template_qzh5qs7', //  EmailJS template ID
                {
                    name: formData.fullName,
                    email: formData.email,
                    message: formData.message,
                },  
                'EMPujxJu8A0vZw6jF' // EmailJS public key

                
            )
            .then((response) => {
                setIsLoadedsend(false)
                alert('Message sent successfully!');
                setFormData({ fullName: '', email: '', message: '' });
                
               
            })
            .catch((err) => {
                setIsLoadedsend(false)
                alert('Failed to send message, please try again.');

            });
        } else {
            setIsLoadedsend(false)
            alert("Please fill in all fields.");
            
        }
    };

    return (
        <>
            
            <div className=''>
                <form className="w-full" onSubmit={sendEmail}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <input
                                className="shadow-[8.0px_8.0px_8.0px_rgba(0,0,0,0.38)] border-navbar   appearance-none block w-full bg-component border-[#374151] focus:component text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-component rounded-xl text-white"
                                id="grid-first-name"
                                
                                type="text"
                                placeholder="Full Name"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <input
                                className="shadow-[8.0px_8.0px_8.0px_rgba(0,0,0,0.38)] border-navbar appearance-none block w-full bg-component border-[#374151] focus:component text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-component rounded-xl text-white "
                                id="grid-last-name"
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 h-40">
                            <textarea
                                name="message"
                                className="shadow-[8.0px_8.0px_8.0px_rgba(0,0,0,0.38)] border-navbar w-full bg-component border-[#374151] rounded-2xl resize-none h-full"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                ></textarea>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full flex justify-end">
                            <button
                                className="appearance-none block bg-component text-white rounded-2xl border-2 border-grey-700 py-3 px-7 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 flex space-x-3 items-center justify-center hover:bg-gradient-to-r hover:from-indigo-500 shadow-[8.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                                type="submit"
                                >
                                <img src="/src/images/right-arrow.png" className="w-4 h-4 grayscale-[90%]" alt="" />
                                <div className='flex justity-center items-center  space-x-3'>
                                    <span className="text-blue-400 opacity-80">Send Message</span>
                                    {isLoadedSend &&<div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-blue-500"></div> }
                                </div>
                            </button>
                        </div>
                    </div>
                </form>
                
            </div>
        </>
    );
}

export default ContactForm;
