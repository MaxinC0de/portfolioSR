export default function Services() {
    const LABELS = ["Web Design", "Developpement de site web", "Copywriting", "Optimisation SEO", "Design graphique", "Photographie", "Retouche photo"]
    return(
        <div>
            <h1 className="font-extrabold text-[#909090] my-6">NOS SERVICES</h1>
            <ul className="flex flex-col">
                {LABELS.map((el, i) => (
                    <li className="text-white text-inter">→ {el}</li>
                ))}
            </ul>
        </div>
    )
}