import { motion, AnimatePresence } from "framer-motion"

export default function ProjectDetails() {
    return(
        <div className="relative origin-top h-[80vh]">
            <AnimatePresence>
                <motion.div 
                    className="overflow-y-scroll h-[65vh]"
                    initial={{ height: 0 }}
                    animate={{ height: "100%" }}
                    transition={{ duration: 0.2 }}
                    exit={{ height: 0 }}
                >

                    <img className="my-2" src={`/images/casio/1.png`} />

                    <div className="flex">
                        <div className="flex flex-col gap-2">
                            <img className="w-[96%]" src={`/images/casio/2.png`}/>
                            <img className="w-[96%]" src={`/images/casio/3.png`}/>
                        </div>
                        <img className="w-[48%]" src={`/images/casio/4.png`}/>
                    </div>
                        
                    <div className="flex justify-between my-2">
                        <img className="w-[48%]" src={`/images/casio/5.png`}/>
                        <img className="w-[48%]" src={`/images/casio/6.png`}/>
                    </div>

                    <img src="/images/casio/7.png" alt="" />
                        
                    <div className="flex justnify-between mt-2">
                        <img className="w-[48%] mr-2" src={`/images/casio/8.png`}/>
                        <div className="flex flex-col">
                            <img className="mb-1" src={`/images/casio/9.png`}/> 
                            <img className="mt-1" src={`/images/casio/10.png`}/> 
                        </div>                
                    </div>
                    
                </motion.div>   
            </AnimatePresence>
           <div className="absolute bottom-0 h-36 bg-gradient-to-t from-black via-black/30 to-transparent w-full">

            </div>
        </div>
         
    )
}