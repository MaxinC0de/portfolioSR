import useStore from "./store"
import ScrollingHeadband from "./scrollingHeadband"

export default function Navbar({ contactIsOpen, setContactIsOpen }) {
    const { isDesktop } = useStore()
    const ContactButton = () => (
        <div onClick={() => {setContactIsOpen(true)}} className="
            bg-primary rounded-md tracking-wide cursor-pointer hover:bg-black transition-colors duration-800 border-1 border-transparent hover:border-[#ff0000] group
            px-3 py-2 ">
            <p className="text-white group-hover:text-[#ff0000] duration-800 text-[8px] md:text-[16px] font-extrabold text-inter">CONTACT</p>
        </div>
    ) 
    return(
        <>
            {isDesktop ? 
                <div className="flex justify-between mb-4">
                    <div className="flex gap-5">
                        <img className="cursor-pointer" src="/images/triangle.png" alt="" />
                        <img className="cursor-pointer" src="/images/cursor.png" />
                    </div>
                    <div className="flex">
                        <ScrollingHeadband />
                        <ContactButton />
                    </div>
                </div>
                :
                <div className="flex justify-between items-center mb-4">
                    <img className="w-[32px] h-auto flex-shrink-0" src="/images/logo.png" alt="" />
                    <ContactButton />
                </div>
            }
        </>
    )
}