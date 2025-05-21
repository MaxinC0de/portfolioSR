import { FaCheck } from "react-icons/fa"

export default function SubmitButton({ isSubmitted, isFadingOut }) {
    return(
        isSubmitted ? (
            <div className={`flex items-center justify-center py-1.5 md:py-5 rounded bg-white text-black ${isFadingOut ? "animate-fade-out" : "animate-fade-in"}`}>
               <FaCheck className="animate-bounce mr-2" />
            </div>
         ) : (
            <button type="submit" className="w-full text-center bg-[#ff0000] rounded-md md:rounded-4xl cursor-pointer py-1.5 md:py-5 text-stretch">
               COMMENCER
            </button>
         )
    )
}