import useStore from "./store"

export default function Navbar({ contactIsOpen, setContactIsOpen }) {
    const { isDesktop } = useStore()
    const ContactButton = () => (
        <div onClick={() => {setContactIsOpen(!contactIsOpen)}} className="
            bg-primary rounded-md tracking-wider cursor-pointer hover:bg-black transition-colors duration-800 border-1 border-transparent hover:border-[#ff0000] group
            px-3 py-2 ">
            <p className="text-white group-hover:text-[#ff0000] duration-800 text-[6px] lg:text-lg">CONTACT</p>
        </div>
    ) 
    return(
        <>
            {isDesktop ? 
                <div className="flex justify-between">
                    <div className="flex gap-5">
                        <img className="cursor-pointer" src="/images/triangle.png" alt="" />
                        <img className="cursor-pointer" src="/images/cursor.png" />
                    </div>
                    <ContactButton />
                </div>
                :
                <div className="flex justify-between items-center">
                    <img className="w-[32px] h-auto flex-shrink-0" src="/images/logo.png" alt="" />
                    <ContactButton />
                </div>
            }
        </>
    )
}