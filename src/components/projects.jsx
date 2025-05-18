import { motion } from "framer-motion"
import { useState } from "react"
import useStore from "./store"
import ProjectDetails from "./projectDetails"
import { SquarePlus } from "lucide-react"

export default function Projects() {
    const isDesktop = useStore((state) => state.isDesktop)
    const PROJECTS = [
        { 
            id: "1",
            title: "AVARIN",
            description: "MARKETING",
            project: "avarin"
         },
         {
            id: "2",
            title: "DIDUS ART",
            description: "ART",
            project: "didus-art"
         },
         {
            id: "3",
            title: "LA MAISON DU SOLITAIRE",
            description: "E-COMMERCE",
            project: "la-maison-du-solitaire"
         }
    ]
    const [focusedTitle, setFocusedTitle] = useState("AVARIN")
    const handleFocus = (e, title) => {
        setFocusedTitle(prev => prev === title ? null : title)
    }
    const [openProjectId, setOpenProjectId] = useState(null)
    const toggleDetails = (id) => {
        setOpenProjectId(prev => (prev === id ? null : id))
    }
    return(
        <div className="container mx-auto text-[#fffef4] shadow-[5px_5px_0_0_#fff">
            <h1 className="text-[#909090] text-[3vw] md:text-lg font-extrabold my-4 md:mt-0">NOS PROJETS</h1>
            {PROJECTS.map(({ id, title, description }, i) => (
                <ul key={id} className="flex flex-col gap-2">
                    <li className="py-3 border-t-[0.5px] border-[#909090]">
                        <button onClick={(e) => handleFocus(e, title)} className="relative flex items-center w-full cursor-pointer">
                            <motion.span 
                                className="absolute bg-[#ff0000] size-4 blur-[3px] mr-3 rounded-[50%] flex-shrink-0"
                                initial={false}
                                animate={focusedTitle === title ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                                transition={{ duration: 0.2, ease: "easeInOut", delay: 0.1 }}
                            >
                            </motion.span>
                            <motion.p 
                                className={`text-neue-bold md:text-[1.11vw] ${focusedTitle === title ? "text-[#ff0000]" : "text-[#fffef4]"} text-[16px]`}
                                animate={{ x: focusedTitle === title ? 25 : 0 }}
                                transition={{ type: "twin", duration: 0.4, ease: "easeInOut" }}
                            >{title}</motion.p>
                            <div className="flex items-center ml-auto">
                                <p className={`text-inter mr-12 md:mr-0 ${focusedTitle === title && "text-[#ff0000]"} md:text-[0.83vw] md:font-light text-[2.2vw] font-semibold`}>{description}</p>
                                {!isDesktop && <button onClick={(e) => {e.stopPropagation; toggleDetails(id)}} className=""><SquarePlus size={20} className={`cursor-pointer ${focusedTitle === title ? "text-[#ff0000]" : "text-white"}`} /></button>}
                            </div>             
                        </button>
                    </li>
                    {openProjectId === id && <ProjectDetails />}
                </ul>
            ))}
        </div>
    )
}