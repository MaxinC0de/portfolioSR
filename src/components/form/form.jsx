import { useForm } from "react-hook-form"
import InputField from "./inputField"
import { useState } from "react"
import { FaCheck } from "react-icons/fa"

export default function Form() {
    const { register, handleSubmit, reset } = useForm()

    const [activeButton, setActiveButton] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isFadingOut, setIsFadingOut] = useState(false)

    const BUTTONS_LABELS = ["SITE WEB", "PHOTO", "DESIGN", "AUTRE"]

    console.log(activeButton) // activeButton = label

    const onSubmit = (data) => {
        console.log(data)
        handleSuccessAnimation()
    }

    const handleSuccessAnimation = () => {
        setIsSubmitted(true)
        setIsFadingOut(false)
        reset()
        setTimeout(() => {
            setIsFadingOut(true)
            setTimeout(() => setIsSubmitted(false), 500)
        }, 2000)
    }
    return(
        <form className="flex flex-col text-[8px] gap-4 text-inter font-semibold" onSubmit={handleSubmit(onSubmit)}>

            {/* NOM */}
            <div className="flex flex-col gap-2">
                <label htmlFor="nom" className="text-ibm text-xs text-[#888888] lg:mb-2">NOM *</label>
                <InputField register={register} label="nom" placeholder="SAISISSEZ VOTRE NOM" />
            </div>
            
            {/* EMAIL */}
            <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-ibm text-xs text-[#888888] lg:mb-2">EMAIL *</label>
            <InputField register={register} label="email" placeholder="SAISISSEZ VOTRE EMAIL" type="email" />
            </div>
            

            {/* TYPE DE PROJET */}
            <div className="flex justify-between text-stretch">
                {BUTTONS_LABELS.map((label, i) => (
                    <button onClick={() => {setActiveButton(label)}} type="button" className={`${activeButton === label && "bg-[#ff0000] border-transparent"} 
                    cursor-pointer transition-colors duration-800 text-[6px] py-2 border-[1.5px] rounded-2xl lg:rounded-4xl px-2 lg:px-12`}>{label}</button>
                ))}
            </div>
            
            {/* DESCRIPTION */}
            <div className="flex flex-col gap-2">
                <label htmlFor="description" className="text-ibm text-xs text-[#888888] lg:mb-2">DESCRIPTION DU PROJET *</label>
                <textarea
                    id="description"
                    {...register("description", { required: "Description est requise" })}
                    className="w-full h-[20vh] border-[1.5px] rounded-xl"
                    placeholder="SAISISSEZ VOTRE DESCRIPTION"
                />
            </div>
            
            {/* SUBMIT */}
            {isSubmitted ? (
                <div className={`flex items-center justify-center py-1.5 lg:py-5 rounded bg-white text-black ${isFadingOut ? "animate-fade-out" : "animate-fade-in"}`}>
                    <FaCheck className="animate-bounce mr-2" />
                </div>
            ) : (
                <div className="text-stretch text-center py-1.5 lg:py-5 bg-[#ff0000] rounded-md lg:rounded-4xl cursor-pointer"><button type="submit" className="">
                COMMENCER
                </button></div>
            )}
        </form>
    )
}




//       {/* NAME & EMAIL */}
//       <div className="lg:flex lg:items-center lg:mt-3 gap-6">
//         {[
//           { label: "NOM *", name: "nom", placeholder: "SAISSISEZ VOTRE NOM" },
//           { label: "EMAIL *", name: "email", placeholder: "SAISISSEZ VOTRE EMAIL", type: "email" },
//         ].map(({ label, name, placeholder, type = "text" }, idx) => (
//           <div key={idx} className="flex flex-col gap-2 w-full">
//             <label htmlFor={name} className="text-ibm text-[#888888] lg:mb-2">{label}</label>
//             <input
//               id={name}
//               type={type}
//               {...register(name, { required: `${label.replace("*", "").trim()} est requis` })}
//               className={`${commonInputClass} w-[80%] lg:w-[92%]`}
//               placeholder={placeholder}
//             />
//             {errors[name] && <p className="text-red-500 text-xs">{errors[name].message}</p>}
//           </div>
//         ))}
//       </div>

//       {/* TYPE DE PROJET */}
//       <div className="flex flex-col gap-2">
//         <label className="text-ibm text-[#888888] lg:mb-2">TYPE DE PROJET *</label>
//         <div className="flex gap-x-2 lg:gap-x-6 flex-wrap">
//           {BUTTONS_LABELS.map((button, i) => (
//             <button
//               key={i}
//               type="button"
//               onClick={() => setValue("type", button)}
//               className="text-[6px] text-inter border-1 rounded-md lg:rounded-4xl p-1 lg:p-4 lg:px-12 cursor-pointer hover:bg-[#ff0000] hover:border-[#ff0000] transition-colors duration-500"
//             >
//               {button}
//             </button>
//           ))}
//         </div>
//         {errors.type && <p className="text-red-500 text-xs">{errors.type.message}</p>}
//       </div>

//       {/* DESCRIPTION */}
//       <div className="flex flex-col gap-2">
//         <label htmlFor="description" className="text-ibm text-[#888888] lg:mb-2">DESCRIPTION DU PROJET *</label>
//         <textarea
//           id="description"
//           {...register("description", { required: "Description est requise" })}
//           className={`${commonInputClass} w-full h-[20vh]`}
//           placeholder="SAISISSEZ VOTRE DESCRIPTION"
//         />
//         {errors.description && <p className="text-red-500 text-xs">{errors.description.message}</p>}
//       </div>

//       
//     </form>
//   );
// }
