import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return(
        <section id="project" className="min-h-screen flex items-center justify-center relative py-20">
            <RevealOnScroll>
                <div  className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:bgoblue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-4">UI Design</h3>
                            <p className="text-gray-400 mb-4">Designed modern responsive user interface for mobile and web app using Figma design tool.</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Figma","Figmotion","Iconify"].map((tech, key) =>  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bgoblue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {tech}</span>)}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:bgoblue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-4">Web App</h3>
                            <p className="text-gray-400 mb-4">Scalable web application infrastructure with real-time monitoring and automated scaling.</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "PHP"].map((tech, key) =>  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bgoblue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {tech}</span>)}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:bgoblue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-4">School Portal</h3>
                            <p className="text-gray-400 mb-4">A comprehensive school portal with integrated student management, grade tracking, and communication tools.</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {[ "WP","React", "PHP"].map((tech, key) =>  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bgoblue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {tech}</span>)}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:bgoblue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-4">E-commerce Platform</h3>
                            <p className="text-gray-400 mb-4">E-commerce platform with integrated payment processing, inventory management, and user authentication.</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Laravel", "VPS"].map((tech, key) =>  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bgoblue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {tech}</span>)}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://kusnap.com" className="text-blue-400 hover:text-blue-300 transition-colors my-4" target="_blank">View Project →</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}