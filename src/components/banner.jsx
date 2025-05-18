import useStore from "./store"

export default function Banner() {
    const { isDesktop } = useStore()
    return(
        <div className="border-t-2 border-b-2 py-2 mb-4 border-[#909090] text-neue-bold text-2xl lg:text-8xl font-black text-center text-[#fffef4]">
            <img src="/images/studioR.png" alt="" />
        </div>
    )
}