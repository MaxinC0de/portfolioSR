export default function About() {
    const LABELS = ["Studio Regenade est un studio créatif indépendant qui conçoit des marques, des expériences numériques et des solutions technologiques pour faire avancer des projets porteurs de sens.", "Nos clients nous considèrent comme des partenaires de confiance, investis à leurs côtés — ce qui, entre nous, est presque trompeur, car nous sommes encore plus engagés qu’eux.", "Quel que soit leur secteur d’activité, ils partagent tous une même ambition : occuper une place sincère et significative dans la vie de leurs publics et utilisateurs."]
    return(
        <div className="">
            <h1 className="text-[#909090] font-extrabold md:text-lg">A PROPOS DE NOUS</h1>
            <ul className="">
                {LABELS.map((p, i) => (
                    <li className="my-3 text-[#fffef4]">{p}</li>
                ))}
            </ul>
        </div>
    )
}