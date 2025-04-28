import { useForm } from "react-hook-form"
import InputField from "./inputField"
import { useEffect, useState } from "react"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import SubmitButton from "./submitButton"


export default function Form() {
    const schema = Yup.object({
        nom: Yup.string().required("Votre nom est requis"),
        email: Yup.string().email("Veuillez entrer un email valide").required("Email est requis"),
        type: Yup.string().required("Veuillez choisir un type de projet"),
        description: Yup.string().required("Une brève description est requise"),
    })

    const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isFadingOut, setIsFadingOut] = useState(false)
    const labelClass = "text-ibm-light text-xs text-[#888888] lg:mb-2"

    const onSubmit = (data) => {
        console.log("Form data submitted :", data)
        handleSuccessAnimation()
    }

    console.log(isSubmitted, isFadingOut)

    const handleSuccessAnimation = () => {
        setIsSubmitted(true)
        reset()
        setTimeout(() => {
            setIsFadingOut(true)
            setTimeout(() => setIsSubmitted(false), 500)
        }, 2000)
    }

    return(
        <form autoComplete="off" className="flex flex-col text-[8px] gap-4 font-semibold" onSubmit={handleSubmit(onSubmit)}>

            {/* NOM */}
            <div className="flex flex-col gap-2">
                <label htmlFor="nom" className={labelClass}>NOM *</label>
                <InputField error={errors.nom} register={register} label="nom" placeholder="SAISISSEZ VOTRE NOM" />
            </div>
            
            {/* EMAIL */}
            <div className="flex flex-col gap-2">
                <label htmlFor="email" className={labelClass}>EMAIL *</label>
                <InputField error={errors.email} register={register} label="email" placeholder="SAISISSEZ VOTRE EMAIL" type="email" />
            </div>
            
            {/* TYPE DE PROJET */}
            <InputField error={errors.type} register={register} label="type" type="buttons" placeholder="SAISISSEZ VOTRE TYPE DE PROJET" />
            
            {/* DESCRIPTION */}
            <InputField error={errors.description} register={register} label="description" placeholder="SAISISSEZ VOTRE DESCRIPTION" type="textarea" />
            
            {/* SUBMIT */}
            <SubmitButton isSubmitted={isSubmitted} isFadingOut={isFadingOut} />

        </form>
    )
}