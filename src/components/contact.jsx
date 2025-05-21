import Form from "./form/form"
import Footer from "./footer"

export default function Contact({ contactIsOpen, setContactIsOpen }) {
    const LABELS = [
        {
          first: "Salut !",
          second: "On serait ravi d’en savoir plus sur votre projet afin de voir si nous sommes le bon partenaire pour vous. Pour commencer, merci de consulter les informations ci-dessous, puis de remplir notre formulaire “Commencer” plus bas."
        },
        {
          first: "Délais.",
          second: "Nous sommes un studio créatif indépendant, attaché à produire des résultats de grande qualité. Cela signifie que nous nous concentrons à fond sur un nombre limité de projets à la fois. Les demandes avec des délais très courts sont donc rarement possibles."
        },
        {
          first: "Périmètre.",
          second: "Notre cœur de métier, c’est l’identité visuelle et la création de sites web — du design au développement. On reste ouverts à d'autres types de missions (!), mais on privilégie les projets ambitieux avec un vrai potentiel. Les demandes de petites retouches ou d’améliorations mineures ne sont pas vraiment dans notre zone d’intervention."
        },
        {
          first: "Budget",
          second: "Le budget dépend des livrables, des délais et des enjeux. Nos prestations les plus accessibles commencent autour de 500 €, et les projets plus complets peuvent aller jusqu’à 2000 € ou plus. Si vous avez un budget différent, n’hésitez pas à nous en parler — on reste toujours ouverts à la discussion."
        },
        {
          first: "",
          second: "→ Si vous avez des questions ou des doutes sur notre compatibilité, n’hésitez pas à nous contacter."
        }
      ]

      
      
    return(
        <div className="container mx-auto">
          

          
          <div className="h-screen text-white">
            <div className="flex justify-end">
                <div onClick={() => {setContactIsOpen(false)}} className="
                    rounded-md tracking-wide cursor-pointer hover:bg-[#ff0000] transition-colors duration-200 border-1 border-[#ff0000] hover:border-[#ff0000] group
                    px-3 py-2 inline-flex">
                    <p className="text-[#ff0000] group-hover:text-black duration-200 text-[8px] md:text-[16px] font-extrabold text-inter">FERMER</p>
                </div>
              </div>
              <div className="flex items-center blur-[2px] md:pt-6">
                  <div className="h-0.5 w-full bg-white"></div>
                  <div className="transform rotate-10 ml-2 text-2xl">+</div>
              </div>
              <p className="text-inter text-md mt-4 font-bold md:mt-12 md:text-2xl">DEMANDE DE PROJET</p>
              
              {LABELS.map(({ first, second }, index) => (
                  <div className="my-4 text-inter">
                      <p className="text-xs md:text-2xl"><span className="font-extrabold">{first}</span> <span className="opacity-85">{second}</span></p>
                  </div>
              ))}
              <Form />
              <Footer />
          </div>
        </div>
    )
}