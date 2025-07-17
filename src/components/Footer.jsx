export const Footer = () => {

    return (
        <section
         id="footer"
         className="footer"
        >
            <div className="text-center item-center justify-center">
                &copy; 2025

                <p>{import.meta.env.VITE_PUBLIC_KEY}</p>

            </div>
        </section>
    )
}