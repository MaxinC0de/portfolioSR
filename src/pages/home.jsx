import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import Navbar from "../components/navbar"
import Projects from "../components/projects"
import Contact from "../components/contact"

// animation scotch 
// easter egg framer motion 

// revérifier responsive 
// 
// 
// 
// 

export default function Home() {
    const [contactIsOpen, setContactIsOpen] = useState(false)
    const contactProps = { contactIsOpen, setContactIsOpen }
    return (
        <div className="container mx-auto">
            <AnimatePresence mode="wait">
                {!contactIsOpen ? (
                    <motion.div
                        key="main-content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Navbar {...contactProps} />
                        <Projects />
                    </motion.div>
                ) :
                    <motion.div
                        key="contact-modal"
                        initial={{ x: "100vw", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "-100vw", opacity: 0 }}
                        transition={{ type: "spring", stiffness: 80, damping: 20 }}
                        className="fixed overflow-y-scroll top-0 left-0 p-5 w-screen h-screen bg-black flex flex-col"
                    >
                        <Contact {...contactProps} close={() => setContactIsOpen(false)} />
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    );
}