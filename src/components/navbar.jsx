import { NavLink } from "react-router-dom"

export default function Navbar() {
    return(
        <div className="flex justify-between items-center">
            <img className="w-[32px] h-auto flex-shrink-0" src="/images/logo.png" alt="" />
            <NavLink to="/contact" className="bg-primary px-3 py-2 rounded-md tracking-wider cursor-pointer hover:bg-black transition-colors duration-800 border-1 border-transparent hover:border-[#ff0000] group"><p className="text-[6px] text-white group-hover:text-[#ff0000] duration-800">CONTACT</p></NavLink>
        </div>
    )
}