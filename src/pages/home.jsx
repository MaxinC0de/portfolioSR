import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import Navbar from "../components/navbar"
import Projects from "../components/projects"
import Contact from "../components/contact"

// gradient slider 
// animation scotch 
// resize images
// responsive
// easter egg framer motion 


export default function Home() {
    const [contactIsOpen, setContactIsOpen] = useState(false);
    return (
        <>
            <AnimatePresence mode="wait">
                {!contactIsOpen ? (
                    <motion.div
                        key="main-content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Navbar contactIsOpen={contactIsOpen} setContactIsOpen={setContactIsOpen} />
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
                        <Navbar contactIsOpen={contactIsOpen} setContactIsOpen={setContactIsOpen} />
                        <Contact close={() => setContactIsOpen(false)} />
                    </motion.div>
                }
            </AnimatePresence>
        </>
    );
}