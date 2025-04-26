import { NavLink } from "react-router-dom"

export default function Navbar({ contactIsOpen, setContactIsOpen }) {
    return(
        <div className="flex justify-between items-center">
            <NavLink to="/" onClick={() => {setContactIsOpen(false)}}><img className="w-[32px] h-auto flex-shrink-0" src="/images/logo.png" alt="" /></NavLink>
            {contactIsOpen ? 
                <div onClick={() => {setContactIsOpen(false)}} className="bg-primary px-2 py-1 text-white rounded-md tracking-wider cursor-pointer hover:bg-black transition-colors duration-800 border-1 border-transparent hover:border-[#ff0000]">FERMER</div> : 
                <div onClick={() => {setContactIsOpen(true)}} className="bg-primary px-3 py-2 rounded-md tracking-wider cursor-pointer hover:bg-black transition-colors duration-800 border-1 border-transparent hover:border-[#ff0000] group"><p className="text-[6px] text-white group-hover:text-[#ff0000] duration-800">CONTACT</p></div>
            }
        </div>
    )
}