import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import Navbar from "../components/navbar"
import Projects from "../components/projects"
import Contact from "../components/contact"
import About from "../components/about"
import Services from "../components/services"
import ProjectDetails from "../components/projectDetails"
import Banner from "../components/banner"
import Footer from "../components/footer"
import MouseFollower from "../components/mouseFollower"

export default function Home() {
    const [contactIsOpen, setContactIsOpen] = useState(false)
    const contactProps = { contactIsOpen, setContactIsOpen }
    return (
        <div className="overflow-hidden">
            <MouseFollower />
            <AnimatePresence>
                    <motion.div
                        key="main-content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: contactIsOpen ? 0.3 : 1 }}
                        transition={{ duration: 0.25 }}
                    >
                        <Navbar {...contactProps} />
                        <Banner />
                        <div className="flex gap-x-12">
                            <section className="flex flex-col w-[25vw]">
                                <About />
                                <div className="w-[0.5px] h-full "></div>
                                <Services />
                            </section>
                            <div className="w-[25vw]">
                                <Projects />
                            </div>
                            <div className="w-[50vw]">
                                <h1 className="text-[#909090] lg:text-lg font-extrabold mb-12">DETAILS DU PROJET</h1>
                                <ProjectDetails />
                            </div>
                        </div>
                        <div className="h-[0.5px] w-[90vw] bg-[#fffef4] opacity-80 mt-6"></div>
                        <Footer />
                    </motion.div>
                    {contactIsOpen && 
                    
                     <motion.div
                        key="contact-modal"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", ease: "easeOut", stiffness: 100, damping: 22 }}
                        className="fixed origin-right overflow-y-scroll top-0 right-0 p-5 w-[50vw] h-screen bg-black flex flex-col"
                    >
                        <Contact {...contactProps} />
                    </motion.div>
                    }
                
            </AnimatePresence>
        </div>
    );
}