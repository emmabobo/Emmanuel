import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import Footer from '../Components/Footer';


function Contact() {
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID =import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [isLoading ,setIsLoading]= useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => { 
    e.preventDefault();

    setIsLoading(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
    .then(() => {
      alert("Message Sent!");
      setFormData({ name: "", email: "", message: "" });
    }).catch((error) => {
      alert("Let Try Again ,im sure it will work now!.");
      console.error('EmailJS Error:', error);
    }).finally(() => {
        setIsLoading(false); // Stop loading after the request completes
      });
  };


  return (
    <div>
        <div id='contact' className=' mx-auto max-w-7xl '>

            <div className='glossy-overlay mx-4  md:m-8 min-h-[80vh]  relative top-[10vh] rounded-xl border-white/10 border flex flex-col'>

                <div className="rounded-xl  w-full  p-4 pt-8 grid grid-cols-1  md:place-items-center " >
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {" "}
                        Get In Touch
                    </h2>

                    
                    {/* .............................................. */}

                    <form  className=" space-y-4  md:w-[60%] md:py-8 md:" onSubmit={handleSubmit}>
                        <div className="">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            placeholder="Name..."
                        />
                        </div>

                        <div className="">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            placeholder="Example@mail.com...."
                        />
                        </div>

                        <div className="">
                        <textarea
                            id="message"
                            name="message"
                            required
                            value={formData.message}  
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 min-h-35 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            placeholder={`Hello ,${formData.name ? formData.name : ''}. you can type your message here..... `}
                        />
                        </div>

                        <div className='md:flex md:items-center md:justify-center'>
                            <button
                                type="submit"
                                disabled ={isLoading}
                                className={`w-full md:w-[40%]  bg-blue-500 text-white py-3 px-6 rounded-xl font-medium transition overflow-hidden ${isLoading ? 'opacity-50' : ''} hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]`}
                                >
                            {isLoading ? "Sending..." : "Send Message"}
                            </button>
                        </div>

                    </form>
                
                 {/* ............................................. */}
                </div>
                
                <div className='lg:pt-16  '>
                <Footer  />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
