import { useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function SmoothMouseFollower() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.set(event.clientX)
      mouseY.set(event.clientY)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 w-12 h-12 rounded-full border-2 border-white"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    />
  )
}
