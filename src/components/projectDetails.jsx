import { motion, AnimatePresence } from "framer-motion"

export default function ProjectDetails({ currentTitle }) {
    const currentSrc = currentTitle ? currentTitle.toLowerCase() : "avarin"
    const imgClass = "rounded-2xl"
    return(
        <div className="mx-auto relative origin-top h-[60vh]">
            <AnimatePresence>
                <motion.div 
                    className="overflow-y-scroll h-[100%]"
                    initial={{ height: 0 }}
                    animate={{ height: "100%" }}
                    transition={{ duration: 0.2 }}
                    exit={{ height: 0 }}
                >
                    <div className="flex flex-col gap-y-5">
                        <img className={imgClass} src={`/images/${currentSrc}/1.png`} />
                        <img className={imgClass} src={`/images/${currentSrc}/2.png`} />
                        <img className={imgClass} src={`/images/${currentSrc}/3.png`} />
                        <img className={imgClass} src={`/images/${currentSrc}/4.png`} />
                        <img className={imgClass} src={`/images/${currentSrc}/5.png`} />
                        <img className={imgClass} src={`/images/${currentSrc}/6.png`} />
                    </div>
                    
                        
                   
                    
                </motion.div>   
            </AnimatePresence>
           <div className="absolute bottom-0 h-36 bg-gradient-to-t from-black via-black/30 to-transparent w-full">

            </div>
        </div>
         
    )
}