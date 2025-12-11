export const Footer = () => {

    return (
        <section
         id="footer"
         className="footer"
        >
            <div className="text-center item-center justify-center">
                &copy; 
                {new Date().getFullYear()} Nwaogwu Onyekachi 
                <span className="text-blue-500"> Best</span>. All rights reserved.
            </div>
        </section>
    )
}