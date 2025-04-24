import { useFormik } from "formik"
import { useState } from "react"
import { FaCheck } from "react-icons/fa"

export default function Form() {
    const BUTTONS_LABELS = ["SITE WEB", "PHOTO", "DESIGN", "AUTRE"]
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isFadingOut, setIsFadingOut] = useState(false)
    const setProjectType = (type) => {
        formik.setFieldValue("type", type)
        console.log(type)
    }
    const formik = useFormik({
        initialValues: {
            nom: "",
            email: "",
            type: "",
            description: ""
        },
        onSubmit: (values, { resetForm }) => {
            setIsSubmitted(true)
            setIsFadingOut(false)
            resetForm()
            setTimeout(() => {
                setIsFadingOut(true)
                setTimeout(() => {
                  setIsSubmitted(false)
                  setIsFadingOut(false)
                }, 500)
              }, 2000)
        }
    })
    return(
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <label htmlFor="nom" className="text-ibm text-[#888888]">NOM *</label>
                <input 
                    id="nom"
                    name="nom"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.nom} 
                    className="border-1 border-white rounded-xs w-[50%] p-1 placeholder:text-inter text-inter"
                    placeholder="SAISSISEZ VOTRE NOM"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-ibm text-[#888888]">EMAIL *</label>
                <input 
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email} 
                    className="border-1 border-white rounded-xs w-[50%] p-1 placeholder:text-inter text-inter"
                    placeholder="SAISISSEZ VOTRE EMAIL"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="type" className="text-ibm text-[#888888]">TYPE DE PROJET *</label>
                <div className="flex gap-x-2">
                    {BUTTONS_LABELS.map((button, i) => (
                        <button
                            type="button"
                            className="text-[6px] text-inter border-1 rounded-md p-1 cursor-pointer focus:bg-white focus:text-black transition-colors duration-800"
                            onClick={() => {setProjectType(button)}}
                        >
                            {button}
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex flex-col justify-center gap-2">
                <label htmlFor="description" className="text-ibm text-[#888888]">DESCRIPTION DU PROJET *</label>
                <textarea
                    id="description"
                    name="description"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.description} 
                    className="border-1 border-white rounded-xs w-[100%] h-[20vh] p-1 placeholder:text-inter text-inter"
                    placeholder="SAISISSEZ VOTRE EMAIL"
                />
            </div>
            {isSubmitted ? (
                <div
                className={`flex items-center py-1.5 justify-center rounded bg-white text-black
                    ${isFadingOut ? "animate-fade-out" : "animate-fade-in"}
                `}
                >
                <FaCheck className="animate-bounce mr-2" />
                </div>
            ) : (
                <button
                type="submit"
                className="text-inter text-[6px] py-1.5 bg-[#ff0000] rounded-md cursor-pointer"
                >
                COMMENCER
                </button>
            )}
        </form>
    )
}

// pour les erreurs : bords rouges et secousses