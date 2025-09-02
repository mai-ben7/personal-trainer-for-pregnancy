import { useState, useEffect } from 'react'

export const useReduceMotionOrSmall = () => {
  const [reduceMotion, setReduceMotion] = useState(false)
  
  useEffect(() => {
    const checkMotion = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const isSmallScreen = window.matchMedia('(max-width: 767px)').matches
      setReduceMotion(prefersReducedMotion || isSmallScreen)
    }

    checkMotion()
    
    const mediaQueryMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const mediaQueryScreen = window.matchMedia('(max-width: 767px)')
    
    const handleChange = () => checkMotion()
    
    mediaQueryMotion.addEventListener('change', handleChange)
    mediaQueryScreen.addEventListener('change', handleChange)
    
    return () => {
      mediaQueryMotion.removeEventListener('change', handleChange)
      mediaQueryScreen.removeEventListener('change', handleChange)
    }
  }, [])
  
  return reduceMotion
}
