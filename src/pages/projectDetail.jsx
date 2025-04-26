import { useParams } from "react-router-dom"
import NavBar from "../components/navbar"
import Footer from "../components/footer"

export default function ProjectDetail () {
    const PROJECTS_LABELS = {
        avarin: {
            title: "[AVARIN LTD]",
            secondTitle: "Avarin Ltd",
            src: "avarin.png",
            p: [
                ", une jeune agence de marketing tournée vers l’innovation, cherchait à renforcer sa présence numérique pour accompagner sa phase de lancement.",
                "créer un site web à la fois stratégique et inspirant, capable de capter l’attention de nouveaux clients et de transformer les visiteurs en opportunités concrètes. Ils se sont tournés vers nous pour concevoir une plateforme qui valorise leur positionnement et leur savoir-faire, tout en établissant un premier point de contact engageant et professionnel.",
                "Notre approche créative s'est articulée autour d'un principe fort : rendre visible le potentiel d'Avarin en traduisant ses idées en expériences vivantes, interactives et convaincantes. L'interface repose sur une mise en page claire et aerée, un contraste subtil entre éléments illustratifs et typographie, et un équilibre étudié entre modernité et accessibilité.",
                "Le visuel d'accueil illustre cette vision : une figure contemplative face a une ampoule (symbole de l'idee), entouree d'elements graphiques et d'interfaces numeriques. Cette composition reflete l'approche d'Avarin - une reflexion strategique, ancree dans la creativite, au service de la performance.",
                "Le choix des couleurs - dominantes douces, touches vives - exprime la fraicheur d'un projet en pleine emergence, tandis que le design modulaire permet une adaptation fluide sur tous supports, avec un rendu optimal en mode clair comme sombre. Cote typographie, des choix soignes en termes de hierarchie et de legerete insufflent un sentiment d'elegance et de dynamisme. Chaque section du site a ete pensee pour guider l'utilisateur dans un parcours fluide : decouvrir l'agence, comprendre sa valeur ajoutee, et passer a l'action.",
                "Le site d'Avarin Ltd n'est pas qu'une vitrine : c'est un veritable outil de conversion, pense pour accompagner l'agence dans sa croissance et affirmer sa place sur le marche du marketing digital."
            ],
            services: ["WEB DESIGN,", "DEVELOPPEMENT,", "PHOTOGRAPHIE,", "RETOUCHE DE PHOTOS,", "COPYWRITING"],
            stack: ["FIGMA,", "ADOBE,", "REACT,", "VITE,", "JAVASCRIPT"],
            link: "avarinltd.com"
        }
    }
    const paragraphParts = [
        <span key="red" className="text-red-600 font-bold">Avarin Ltd</span>,
        <span key="bold" className="font-bold">Son objectif : </span>
      ]
    const { project } = useParams()
    const projectData = PROJECTS_LABELS[project] 
    return(
        <>
            <NavBar />
            <div className="text-white text-inter mt-4">  
                <div className="flex items-center blur-[2px]">
                    <div className="h-0.5 w-full bg-white"></div>
                    <div className="transform rotate-10 ml-2 text-2xl">+</div>
                </div>
                <div className="flex justify-between mt-4">
                    <h1>{`${projectData.title}`}</h1>
                    <div className="flex items-center gap-2">
                        <h2 className="text-ibm-light">LIEN</h2>
                        <a target="_blank" href="https://avarinltd.com"><img className="cursor-pointer size-3" src="/images/up.png" alt="" /></a>
                    </div>
                </div>
                <span className="flex justify-center"><img className="my-5 w-full" src={`/images/projects/${projectData.src}`} alt="" /></span>
                <p className="text-stretch text-[9px] opacity-80">DETAILS DU PROJET</p>
                {projectData.p.map((p, i) => (
                    <p className="text-[9px] my-3">{i === 0 && paragraphParts[0]}{i === 1 && paragraphParts[1]}{p}</p>
                ))}
                <div className="flex justify-around text-left">
                    <div className="flex flex-col w-[45vw]">
                        <h3 className="text-stretch mt-2 mb-2 opacity-85 text-[9px]">SERVICES</h3>
                        <ul className="flex flex-wrap"> 
                            {projectData.services.map((el, i) => (
                                <li className="text-ibm mx-0.5 text-[8px]">{el}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col w-[45vw]">
                        <h3 className="text-stretch mt-2 mb-2 opacity-85 text-[9px]">STACK</h3>
                        <ul className="flex flex-wrap">
                            {projectData.stack.map((el, i) => (
                                <li className="text-ibm mx-0.5 text-[8px]">{el}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}