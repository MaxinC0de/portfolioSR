import { NavLink } from "react-router-dom"
import Footer from "./footer"
import { useBreakpoint } from "./breakpointContext"
import { div } from "framer-motion/client"

export default function Projects() {
    const desktop = useBreakpoint()
    const LABELS_STUDIO = {
        p: ["est un studio créatif indépendant qui conçoit des marques, des expériences numériques et des solutions technologiques pour faire avancer des projets porteurs de sens.", "Nos clients nous considèrent comme des partenaires de confiance, investis à leurs côtés — ce qui, entre nous, est presque trompeur, car nous sommes encore plus engagés qu’eux.", "Quel que soit leur secteur d’activité, ils partagent tous une même ambition : occuper une place sincère et significative dans la vie de leurs publics et utilisateurs."],
        services: ["Web Design", "Developpement de site web", "Copywriting", "Optimisation SEO", "Design graphique", "Photographie", "Retouche photo"]
    }
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
    const Plus = () => (
        <span className="transform inline-block -rotate-[5deg] font-extrabold text-[12px] mx-1 lg:text-2xl">+</span>
    )
    const Divider = () => (
        <div className="bg-white opacity-80 w-full h-[0.5px] mb-1.5"></div>
    )
    return(
        <div className="container mx-auto text-white mt-6">
            {desktop ? 
                <div className="flex justify-center text-[5vw]">
                    <h1 className="text-center">STUDIO REGENADE</h1>
                </div>
                :
                <div className="-mx-[5%]">
                    <img className="w-full" src="/images/banner.png" alt="" />
                </div>
            }
            <div className="border-white rounded-md p-5" style={{ overflowX: "hidden" }}>
                <h1 className="text-[10px] text-center font-extrabold text-dm lg:text-2xl"><Plus />NOS PROJETS<Plus /></h1>
                <div className="bg-white w-full h-[0.5px] my-1.5 "></div>
                {PROJECTS.map(({ title, description, project }, i) => (
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between text-ibm text-[10px] lg:text-2xl">
                            <NavLink to={`/${project}`}><p className="cursor-pointer">{title}</p></NavLink>
                            <div className="flex items-center">
                                <p className="text-ibm-light">{description}</p>
                                <NavLink to={`/${project}`}><img className="size-2 ml-2" src="/images/up.png" alt="" /></NavLink>
                            </div>
                        </div>
                        <Divider />
                    </div>
                ))}
            </div>
            <div className="-mx-[5vw]">
                <img src="/images/cinema.png" alt="" />
            </div>
            <div>
                <ul className="text-inter text-xs lg:text-2xl">
                    {LABELS_STUDIO.p.map((p, i) => (
                        <p className="my-3">{i === 0 && <p className="text-[#ff0000] inline-flex mr-2">Studio Regenade</p>}{p}</p>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-dm font-bold opacity-80 text-xs lg:text-2xl">NOS SERVICES</h3>
                <ul className="flex flex-col list-disc list-inside">
                    {LABELS_STUDIO.services.map((el, i) => (
                        <li className="text-inter text-[10px] my-[0.5px] lg:text-2xl">{el}</li>
                    ))}
                </ul>
            </div>
            <Footer />
        </div>
    )
}