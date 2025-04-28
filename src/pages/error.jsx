import { NavLink } from "react-router-dom"
import Footer from "../components/footer"

export default function Error() {
    return(
        <>
            <div className="flex flex-col justify-center items-center h-screen gap-3 text-interr text-white">
                <h1 className="font-semibold">ERREUR 404</h1>
                <p className="font-light mt-3">{`CETTE PAGE N'EXISTE PAS :(`}</p>
                <NavLink to="/" className="bg-white text-black px-3 py-2 font-semibold rounded-2xl">RETOUR</NavLink>
            </div>
            <Footer />
        </>
    )
}