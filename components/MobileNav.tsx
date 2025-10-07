'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useReduceMotionOrSmall } from '@/lib/useReducedMotionOrSmall'

interface MobileNavProps {
  onContactClick?: () => void
}

export default function MobileNav({ onContactClick }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const reduceMotion = useReduceMotionOrSmall()

  const menuItems = [
    { href: '#home', label: 'בית', id: 'home' },
    { href: '#services', label: 'המאמנת', id: 'services' },
    { href: '#pricing', label: 'מחירים', id: 'pricing' },
    { href: '#testimonials', label: 'המלצות', id: 'testimonials' },
    { href: '#contact', label: 'צור קשר', id: 'contact' },
  ]

  // Motion variants based on reduced motion preference
  const slideDown = reduceMotion ? {} : {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 }
  }

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors touch-target"
        aria-label="תפריט ניווט"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            {...slideDown}
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl border-b border-primary-200 safe-x"
          >
            <div className="px-4 py-6 space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    setIsOpen(false)
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="block text-gray-700 hover:text-primary-500 font-medium transition-colors py-3 px-2 rounded-lg hover:bg-primary-50 touch-target"
                >
                  {item.label}
                </a>
              ))}
              <button 
                className="w-full btn-primary mt-4 py-3"
                onClick={() => {
                  setIsOpen(false)
                  onContactClick?.()
                }}
              >
                תתחילי כאן
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 