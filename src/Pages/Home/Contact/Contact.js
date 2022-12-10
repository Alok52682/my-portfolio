import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1ndmfi8', 'template_ze5ktjq', form.current, 'SI-Vc1cTh7ng62fYq')
            .then((result) => {
                console.log(result.text);
                toast.success('message sent');
                form.current.value = ' ';
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div>
            <h2 className="text-5xl font-bold text-overColor text-center my-20">Contact Me</h2>
            <form ref={form} onSubmit={sendEmail} className='w-10/12 mx-auto bg-slate-800 p-10 text-center'>
                <div className='md:flex justify-between gap-6'>
                    <input type="text" placeholder='Name' className='border-0 border-b-2 border-slate-900 bg-slate-800 border-grey-dark px-3 py-2 text-lg w-full' name="user_name" />
                    <input type="email" placeholder='Email' className='border-0 border-b-2 border-slate-900 bg-slate-800 border-grey-dark px-3 py-2 text-lg w-full' name="user_email" />
                </div>
                <textarea className="textarea textarea-bordered mt-5 bg-slate-800 border-0 border-b-2 border-slate-900 w-full text-lg h-22 md:h-48 text-white" placeholder="Message" name="message" />
                <input type="submit" className='btn rounded-none bg-gradient-to-r from-cyan-500 to-blue-500 border-0 my-5' value="Send Message" />
            </form>
        </div>
    );
};

export default Contact;