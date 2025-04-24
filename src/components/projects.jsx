export default function Projects() {
    const PROJECTS = [
        { 
            title: "AVARIN",
            description: "MARKETING"
         },
         {
            title: "DIDUS ART",
            description: "ART"
         },
         {
            title: "LA MAISON DU SOLITAIRE",
            description: "E-COMMERCE"
         }
    ]
    const Plus = () => (
        <span className="transform inline-block -rotate-[5deg] font-extrabold text-[12px] mx-1">+</span>
    )
    const Divider = () => (
        <div className="bg-white opacity-80 w-full h-[0.5px] mb-1.5"></div>
    )
    return(
        <div className="text-white">
            <div className="-mx-[5%]">
                <img className="w-full" src="/images/banner.png" alt="" />
            </div>
            <h1 className="text-[10px] text-center font-extrabold text-dm"><Plus />NOS PROJETS<Plus /></h1>
            <div className="bg-white w-full h-[0.5px] my-1.5"></div>
            {PROJECTS.map(({ title, description }, i) => (
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between text-ibm text-[10px]">
                        <p className="cursor-pointer">{title}</p>
                        <div className="flex items-center">
                            <p className="">{description}</p>
                            <img className="size-2 ml-2" src="/images/down.png" alt="" />
                        </div>
                    </div>
                    <Divider />
                </div>
            ))}


            <img src="/images/cinema.png" alt="" />
        </div>
    )
}