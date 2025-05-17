import { easeIn, motion } from "framer-motion"
import { useState } from "react"

export default function Projects() {
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
    const [focusedTitle, setFocusedTitle] = useState(null)
    const handleFocus = (e, title) => {
        setFocusedTitle(prev => prev === title ? null : title)
    }
    return(
        <div className="container mx-auto text-[#fffef4] shadow-[5px_5px_0_0_#fff">
            <h1 className="text-[#909090] lg:text-lg font-extrabold mb-12">NOS PROJETS</h1>
            {PROJECTS.map(({ title, description }, i) => (
                <ul className="flex flex-col gap-2">
                    <li className="py-3 border-t-[0.5px] border-[#909090]">
                        <button onClick={(e) => handleFocus(e, title)} className="relative flex w-full cursor-pointer">
                            <motion.span 
                                className="absolute bg-[#ff0000] size-4 blur-[3px] mr-3 rounded-[50%] flex-shrink-0"
                                initial={false}
                                animate={focusedTitle === title ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                                transition={{ duration: 0.2, ease: "easeInOut", delay: 0.1 }}
                            >
                            </motion.span>
                            <motion.p 
                                className={`text-neue-bold text-[1.11vw] ${focusedTitle === title ? "text-[#ff0000]" : "text-[#fffef4]"}`}
                                animate={{ x: focusedTitle === title ? 25 : 0 }}
                                transition={{ type: "twin", duration: 0.4, ease: "easeInOut" }}
                            >{title}</motion.p>
                            <p className={`text-inter text-[0.83vw] font-light ml-auto ${focusedTitle === title && "text-[#ff0000]"}`}>{description}</p>
                        </button>
                    </li>
                </ul>
            ))}
        </div>
    )
}