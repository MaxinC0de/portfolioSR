import { AnimatePresence, motion } from "framer-motion"
import { useState, useRef } from "react"
import Navbar from "../components/navbar"
import Projects from "../components/projects"
import Contact from "../components/contact"
import About from "../components/about"
import Services from "../components/services"
import ProjectDetails from "../components/projectDetails"
import Banner from "../components/banner"
import Footer from "../components/footer"
import MouseFollower from "../components/mouseFollower"
import useScreenListener from "../components/useScreenListener"
import useStore from "../components/store"
import ScrollingHeadband from "../components/scrollingHeadband"
import useClickOutside from "../components/hooks/useClickOutside"

export default function Home() {
    useScreenListener()
    const isDesktop = useStore((state) => state.isDesktop)
    const [contactIsOpen, setContactIsOpen] = useState(false)
    const contactProps = { contactIsOpen, setContactIsOpen }
    const ref = useRef()
    useClickOutside(ref, () => setContactIsOpen(false))
    const [currentTitle, setCurrentTitle] = useState(null)
    const handleProjectSelect = (title) => {
        setCurrentTitle(title)
    }
    const Divider = () => (
        <div>  
            {isDesktop && 
                <div className="h-full w-0.5 bg-[#fffef4] opacity-80"></div>
            }
        </div>
    )
    return (
        <>
            {isDesktop && <MouseFollower />}
            <AnimatePresence>
                    <motion.div
                        key="main-content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: contactIsOpen ? 0.3 : 1 }}
                        transition={{ duration: 0.25 }}
                    >
                        <Navbar {...contactProps} />
                        <Banner />
                        {isDesktop === false && <ScrollingHeadband />}
                        <div className={`flex gap-6 ${isDesktop ? "flex" : "flex flex-col-reverse"}`}>
                            <div className={isDesktop ? "overflow-y-scroll overflow-x-hidden" : ""}>
                                <section className={`${isDesktop ? "w-[30vw] text-wrap" : "w-full"}`}>
                                    <About />
                                    <div className="w-[0.5px] h-full "></div>
                                    <Services />
                                </section>
                            </div>
                            <Divider />
                            <div className={`${isDesktop ? "w-[30vw]" : "w-full"}`}>
                                <Projects handleProjectSelect={handleProjectSelect} />
                            </div>
                            <Divider />
                            {isDesktop && 
                                <div className="w-[40vw]">
                                    <h1 className="text-[#909090] md:text-lg font-extrabold mb-12 md:mb-0">DETAILS DU PROJET</h1>
                                    <ProjectDetails currentTitle={currentTitle} />
                                </div>
                            }
                        </div>
                        <div className="h-[0.5px] w-[90vw] bg-[#fffef4] opacity-80 mt-6"></div>
                        <Footer />
                    </motion.div>
                    {contactIsOpen && 
                    <div ref={ref} className="fixed top-0 right-0 w-[50vw] h-screen z-50">
                        <motion.div
                            key="contact-modal"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", ease: "easeOut", stiffness: 100, damping: 22 }}
                            className="origin-right overflow-y-scroll p-5 bg-black flex flex-col"
                        >
                            <Contact {...contactProps} />
                        </motion.div>
                    </div>
                    }
                
            </AnimatePresence>
        </>
    )
}