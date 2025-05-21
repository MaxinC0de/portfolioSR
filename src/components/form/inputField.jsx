import { useState } from "react"

export default function InputField({ error, register, label, placeholder, type }) {
    const [activeButton, setActiveButton] = useState("")
    const BUTTONS_LABELS = ["SITE WEB", "PHOTO", "DESIGN", "AUTRE"]
    const labelClass = "text-ibm-light text-xs text-[#888888] md:mb-2 md:text-2xl"
    if (type === "textarea") {
        return(
            <div className="flex flex-col gap-2">
                <label htmlFor="description" className={labelClass}>DESCRIPTION DU PROJET *</label>
                <textarea
                    id="description"
                    {...register("description", { required: "Description est requise" })}
                    className="w-full h-[20vh] border-[1.5px] rounded-xl"
                    placeholder="SAISISSEZ VOTRE DESCRIPTION"
                />
            </div>
        )
    }
    if (type === "buttons") {
        return(
            <div className="flex flex-col justify-between text-stretch gap-2">
                <label htmlFor="type" className={labelClass}>TYPE DE PROJET *</label>
                <div className="flex justify-between">
                    {BUTTONS_LABELS.map((label, i) => (
                        <button onClick={() => {setActiveButton(label)}} type="button" className={`${activeButton === label && "bg-[#ff0000] border-transparent"} 
                        cursor-pointer transition-colors duration-800 text-[6px] py-2 border-[1.5px] rounded-2xl md:rounded-4xl px-2 md:px-12`}>{label}</button>
                    ))}
                </div>  
            </div>
        )
    }
    return(
        <input
            {...register(label)}
            type={type}
            placeholder={placeholder}
            className={`w-full border-[1.5px] rounded-xl ${error && "border-[#ff0000] focus:border-[#ff0000]"}`}
        />
    )
}