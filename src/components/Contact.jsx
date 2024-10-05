import React from 'react'
import Github from '../Assets/github.png'
import LinkedIn from '../Assets/Linkedin.png'
import mail from '../Assets/mail.png'
import phone from '../Assets/phone.png'
import { useState } from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {
  const [email,setEmail]=useState('');
  const [name,setName]=useState('');
  const [message,setMessage]=useState('');
  const sendEmail = (e) => {
    e.preventDefault();
    const templateparams={
      
      from_name:name,
      from_email:email,
      to_name:'Naresh',
      message:message,
      
    };

    emailjs.send(
        'service_wpcckr1', 
        'template_81da3gs', 
        templateparams,           
        'uZbNrg7a6nbJbKMB7',     
      )
        .then(
          (result) => {
            console.log('Email sent: ', result.text);
            alert('Message Sent successfully, Thank You');
            setEmail('');
            setName('');
            setMessage('');
          },
          (error) => {
            console.log('Email send error: ', error.text);
            alert('An error occurred, please try again.');
          }
        );
  };

  return (
    <div className="bg-slate-800 text-white min h-screen py-20">
      <p className="text-yellow-400 flex justify-center items-center font-bold text-3xl py-5">Contact</p>
      <div> 
      <form className="flex flex-col justify-center items-center max-w-lg mx-auto p-4 space-y-4" onSubmit={sendEmail}>
  <label className="text-lg font-medium">Name</label>
  <input
    className="w-full max-w-md p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
    placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)} required
  />

  <label className="text-lg font-medium">Email</label>
  <input
    className="w-full max-w-md p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
    placeholder="Enter your Email" value={email} onChange={(e)=>setEmail(e.target.value)} required
    type="email"
  />

  <label className="text-lg font-medium">Message</label>
  <textarea
    className="w-full max-w-md p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
    placeholder="Message......." value={message} onChange={(e)=>setMessage(e.target.value)} required
  ></textarea>

  <button
    type="submit"
    className="py-md  max-w-md p-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    Send
  </button>
</form>
      </div>
      <div className='flex flex-row justify-around text-slate-600'>
       <a href="https://github.com/Naresh-516"><img src={ Github} alt='github'/>Github</a>
       <a href="https://www.linkedin.com/in/kashetti-naresh-a72b91303"><img src={LinkedIn} alt='linkedin'/>LinkedIn</a>
       <a href="mailto:nareshkashetti1@gmail.com" ><img src={mail} alt='mail'/>E-Mail</a>
       <a href="tel:+917569956373"><img src={phone} alt='phone'/>contact</a>
      </div>
    </div>
  )
}

export default Contact