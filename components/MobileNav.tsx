'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

interface MobileNavProps {
  onContactClick?: () => void
}

export default function MobileNav({ onContactClick }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: '#home', label: 'בית' },
    { href: '#services', label: 'שירותים' },
    { href: '#pricing', label: 'מחירים' },
    { href: '#testimonials', label: 'המלצות' },
    { href: '#contact', label: 'צור קשר' },
  ]

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg border-b border-primary-200"
          >
            <div className="px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-700 hover:text-primary-500 font-medium transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <button 
                className="w-full btn-primary mt-4"
                onClick={() => {
                  setIsOpen(false)
                  onContactClick?.()
                }}
              >
                התחל כושר
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 