import { useEffect } from "react"
import useStore from "./store"

export default function useScreenListener() {
  const setIsDesktop = useStore((state) => state.setIsDesktop)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)")

    const update = () => setIsDesktop(mediaQuery.matches)
    update() // Initial check

    mediaQuery.addEventListener("change", update)
    return () => mediaQuery.removeEventListener("change", update)
  }, [setIsDesktop])
}
