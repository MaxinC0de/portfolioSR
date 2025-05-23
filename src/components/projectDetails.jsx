import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef } from "react"
import { SquareX } from "lucide-react"
import useClickOutside from "./hooks/useClickOutside"

export default function ProjectDetails({ currentTitle }) {
    const currentSrc = currentTitle ? currentTitle.toLowerCase() : "avarin"
    const [srcModal, setSrcModal] = useState(null)
    const openImageModal = (i) => {
        setSrcModal(true)
        setSrcModal(`/images/${currentSrc}/${i}.png`)
    }
    const modalRef = useRef(null)
    useClickOutside(modalRef, () => setSrcModal(null))
    return(
        <div className="mx-auto mt-[1vh] relative origin-top max-h-[80vh] h-[90vh]">
            <motion.div 
                className="overflow-y-scroll h-[100%]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex flex-col gap-y-3">
                    {Array.from({ length: 6 }).map((el, i) => (
                        <img onClick={() => {openImageModal(i + 1)}} key={i} className="rounded-2xl cursor-pointer" src={`/images/${currentSrc}/${i + 1}.png`} />
                    ))}
                </div>             
            </motion.div>   
            
            <div className="absolute bottom-0 h-36 bg-gradient-to-t from-black via-black/30 to-transparent w-full"></div>

            <AnimatePresence>
            {srcModal && 
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="fixed opacity-80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black h-screen w-screen z-40"></div>
                    <div ref={modalRef} className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center p-2 border-5 border-white rounded-2xl">
                        <img className="rounded-lg max-w-[90vw] max-h-[90vh] object-contain" src={srcModal} alt="" />
                        <SquareX onClick={() => {setSrcModal(null)}} size={48} color="#ff0000" className="absolute right-6 top-6 cursor-pointer" />
                    </div>
                </motion.div>      
            }
            </AnimatePresence>
        </div>
         
    )
}