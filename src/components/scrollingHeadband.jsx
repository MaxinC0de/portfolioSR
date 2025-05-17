import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export default function ScrollingHeadband() {
  const WORDS = ["   01 Design   //", "   02 Motion   //", "   03 Web   //", "   04 Frontend   //", "   05 Studio   //", "   06 Regenade   //", "   07 Indépendant   //"]
  const containerRef = useRef(null)
  const [width, setWidth] = useState(0)
  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 2)
    }
  }, [])
  return(
    <div className="w-[36vw] text-[#909090] overflow-hidden my-auto py-1 mr-[6vw]">
      <motion.div
        ref={containerRef}
        className="flex gap-x-2"
        initial={{ x: 20 }}
        animate={{ x: -width*1.49 }}
        transition={{ duration: 30, repeat: Infinity, repeatType: "loop", ease: "linear" }}
      >
        {[...WORDS, ...WORDS, ...WORDS, ...WORDS, ...WORDS].map((el, i) => (
          <p className="whitespace-nowrap blur-[2.5px] hover:blur-none text-neue-bold cursor-pointer transition-all duration-400">{el.toUpperCase()}</p>
        ))}
      </motion.div>
    </div>
  )
}
