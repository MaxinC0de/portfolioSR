import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import useStore from "./store"
import ProjectDetails from "./projectDetails"
import { SquarePlus, ExternalLink } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function Projects({ handleProjectSelect }) {
  const isDesktop = useStore((state) => state.isDesktop)
  const PROJECTS = [
    { id: "1", title: "AVARIN", titleProject: "AVARIN", description: "MARKETING", project: "avarin", link: "https://avarinltd.com/" },
    { id: "2", title: "DIDUS-ART", titleProject: "DIDUS ART", description: "ART", project: "didus-art", link: "https://didusart.com/" },
    { id: "3", title: "LA-MAISON-DU-SOLITAIRE", titleProject: "LA MAISON DU SOLITAIRE", description: "E-COMMERCE", project: "la-maison-du-solitaire", link: "https://lamaisondusolitaire.com/" },
  ]

  useEffect(() => {
    if (isDesktop) {
      setFocusedTitle("AVARIN")
      setOpenProjectId(null)
    } else {
      setFocusedTitle("")
    }
  }, [isDesktop])

  const [focusedTitle, setFocusedTitle] = useState(null)
  const [openProjectId, setOpenProjectId] = useState(null)

  const handleClick = (title) => {
    const isSame = focusedTitle === title
    setFocusedTitle(title)
    handleProjectSelect(isSame ? "" : title)
  }

  const handleMobileClick = (e, id, title) => {
    const isSame = focusedTitle === title
    e.stopPropagation()
    setOpenProjectId((prev) => (prev === id ? null : id))
    setFocusedTitle(isSame ? "" : title)
  }

  return (
    <div className="text-[#fffef4]">
      <h1 className="text-[#909090] text-[3vw] md:text-lg font-extrabold my-4 md:mt-0">NOS PROJETS</h1>
      <ul className="flex flex-col gap-2">
        {PROJECTS.map(({ id, title, description, link, titleProject }) => (
          <li key={id} className="py-3 border-t-[0.5px] border-[#909090]">
            <button
              onClick={() => isDesktop && handleClick(title)}
              className="relative flex items-center w-full cursor-pointer"
            >
              <motion.span
                className="absolute bg-[#ff0000] size-4 blur-[3px] mr-3 rounded-[50%] flex-shrink-0"
                initial={false}
                animate={focusedTitle === title ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut", delay: 0.1 }}
              />
              <motion.p
                className={`text-neue-bold md:text-base text-left ${focusedTitle === title ? "text-[#ff0000]" : "text-[#fffef4]"} text-[16px]`}
                animate={{ x: focusedTitle === title ? 25 : 0 }}
                transition={{ type: "twin", duration: 0.4, ease: "easeInOut" }}
              >
                {titleProject}
              </motion.p>
              <div className="flex items-center ml-auto gap-x-5">
                <p
                  className={`text-inter text-rgith md:mr-0 ${
                    focusedTitle === title ? "text-[#ff0000]" : ""
                  } md:text-base md:font-light text-base font-semibold`}
                >
                  {description}
                </p>
                <a href={`${link}`} className={`${focusedTitle === title && "text-[#ff0000]"}`} target="_blank"><ExternalLink></ExternalLink></a>
                {!isDesktop && (
                  <button onClick={(e) => handleMobileClick(e, id, title)}>
                    <SquarePlus
                      size={20}
                      className={`cursor-pointer ${
                        focusedTitle === title ? "text-[#ff0000]" : "text-white"
                      }`}
                    />
                  </button>
                )}
              </div>
            </button>
            {!isDesktop && openProjectId === id && <ProjectDetails currentTitle={focusedTitle} />}
          </li>
        ))}
      </ul>
    </div>
  )
}
