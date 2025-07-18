import { useEffect } from "react";
import bestLogo from '../assets/img/best-logo.png'; // Adjust path relative to Navbar.jsx


export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10 o.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {""}
                    <a href="#home" className="font-mono text-lx text-white">
                        <div className="flex items-center space-x-2">
                            <img src={bestLogo} alt="Brand Logo" width={24} />
                            <span className="text-blue-500">Best Onyekachi</span>{" "}
                        </div>
                    </a>

                    
                    <div className="w-7 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                        &#9776; 
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                            { " " }Home{ " " }
                        </a>
                        <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                            { " " }About{ " " }
                        </a>
                        <a href="#project" className="text-gray-300 hover:text-white transition-colors">
                            { " " }Project{ " " }
                        </a>
                        <a href="#resume" className="text-gray-300 hover:text-white transition-colors">
                            { " " }Resume{ " " }
                        </a>
                        <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                            { " " }Contact{ " " }
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}