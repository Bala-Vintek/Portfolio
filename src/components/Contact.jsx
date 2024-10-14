import React, {useState} from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({  
    name: '',  
    email: '',  
    message: ''  
});  
const [successMessage, setSuccessMessage] = useState('');  
const [errorMessage, setErrorMessage] = useState('');  

const handleChange = (e) => {  
    const { name, value } = e.target;  
    setFormData({  
        ...formData,  
        [name]: value  
    });  
};  

const handleSubmit = (e) => {  
    e.preventDefault();  

    emailjs.send('service_fsh7ulp', 'template_4br52an', formData, 'wldYXEHl8-uILOtEp')  
        .then((response) => {  
            console.log('SUCCESS!', response.status, response.text);  
            setSuccessMessage('Message sent successfully!');  
            setFormData({ name: '', email: '', message: '' }); // Clear form 
            setTimeout(() => setSuccessMessage(''), 3000); 
        })  
        .catch((err) => {  
            console.error('FAILED...', err);  
            setErrorMessage('Failed to send message, please try again later.');  
            setTimeout(()=>{setErrorMessage("");},3000);
        });  
};  

  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form onSubmit={handleSubmit} className='flex flex-col max-w-[600px] w-full'
        // method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" 
        >
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'> Submit the form below or shoot me an email - balasubiramanigurusamy@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name'  onChange={handleChange} value={formData.name} />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' value={formData.email}   onChange={handleChange} />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'  value={formData.message}  onChange={handleChange} ></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center' type="submit">Let's Collaborate</button>
            {successMessage && <p style={{color: 'green'}}>{successMessage}</p>}  
            {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}  
        </form>
    </div>
  )
}

export default Contact