import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from 'emailjs-com';

export const Contact = () => {

    const [formData, setFormData] = useState ( {
        name: "",
        email: "",
        message: ""
    })

    // const SERVICE_ID = "service_kvkeud6";
    // const TEMPLATE_ID = "template_3huak7c";
    // const PUBLIC_KEY = "vwFOmtCexv5ofK6HW";

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID, 
            import.meta.env.VITE_TEMPLATE_ID, 
            e.target, 
            import.meta.env.VITE_PUBLIC_KEY)
            .then((result) => {
            alert("Message Sent!");
            setFormData({name: "", email: "", message: ""})
        })
        .catch(() => {
            alert("Oops! Something went wrong. Please try again.");
        });
    }

    
    return(
        <section
        id="contact"        
        className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="px-4 w-150">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Get In Touch
                    </h2>
                    <form className="space-y-6" onSubmit={sendEmail}>
                        <div className="relative">
                            <input type="text" id="name" name="name" required  
                            value={formData.name}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:boder-blue-500 focus:bg-blue-500/5"
                            placeholder="Name..."
                            onChange={(e) => setFormData({...formData, name: e.target.value})                           
                            }
                            />

                        </div>

                        <div className="relative">
                            <input type="email" id="email" name="email" required 
                            value={formData.email}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:boder-blue-500 focus:bg-blue-500/5"
                            placeholder="Example@email.com" 
                            onChange={(e) => setFormData({ ...formData, email: e.target.value})}
                            />
                            
                        </div>

                        <div className="relative">
                            <textarea type="text" id="message" name="message" required 
                            value={formData.message}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:boder-blue-500 focus:bg-blue-500/5"
                            placeholder="Your Message..."
                            onChange={(e) => setFormData({...formData, message: e.target.value}) } rows={5}></textarea>

                        </div>

                        <div className="relative">
                            <button
                            id="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:-translate-y-0.5 hover:shodow-[0_0_15px_rgba(59,130,246,0.4)]"
                            >
                                Send Message
                            </button>

                        </div>
                    </form>
                </div>
            </RevealOnScroll>

        </section>
    )
}