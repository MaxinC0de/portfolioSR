export default function InputField({ register, label, placeholder, type }) {
    return(
        <input
            {...register(label)}
            type={type}
            placeholder={placeholder}
            className="w-full border-[1.5px] rounded-xl"
        />
    )
}