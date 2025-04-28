import { create } from "zustand"
import useMediaQuery from "react-responsive"

const useStore = create((set) => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)")
    const updateIsDesktop = ({ matches }) => set({ isDesktop: matches })
    mediaQuery.addEventListener("change", updateIsDesktop)
    return { isDesktop: mediaQuery.matches }
})

export default useStore

// matcheMedia : check is the screen is > 1024px
    // mediaQery is a MediaQueryList object with properties like matches (true or false)
    // updateIsDesktop will update the store if screen size changes
    // e.matches will be true if the media query matches