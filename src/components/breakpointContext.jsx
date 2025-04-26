import { createContext } from "react"
import { useContext } from "react"
import { useMediaQuery } from "react-responsive"

const BreakpointContext = createContext()

export default function BreakpointProvider({ children }) {
    const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" })
    return(
        <BreakpointContext.Provider value={{ isDesktop }}>
            {children}
        </BreakpointContext.Provider>
    )
}

export function useBreakpoint() {
    return useContext(BreakpointContext)
}