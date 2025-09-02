'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import { useReduceMotionOrSmall } from '@/lib/useReducedMotionOrSmall'

interface PricingCardProps {
  title: string
  price: string
  period: string
  features: string[]
  popular?: boolean
  onClick?: () => void
}

export default function PricingCard({ title, price, period, features, popular = false, onClick }: PricingCardProps) {
  const reduceMotion = useReduceMotionOrSmall()

  // Motion variants based on reduced motion preference
  const cardAnimation = reduceMotion ? {} : {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const hoverAnimation = reduceMotion ? {} : {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 }
  }

  return (
    <motion.div
      {...cardAnimation}
      {...hoverAnimation}
      className={`relative magical-card p-4 sm:p-6 lg:p-8 flex flex-col h-full min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] ${popular ? 'ring-2 ring-primary-500 scale-105' : ''}`}
    >
      {popular && (
        <div className="absolute -top-2 sm:-top-3 lg:-top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-primary-500 text-white px-2 sm:px-3 lg:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold flex items-center">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sparkle-effect" />
            הכי פופולרית
          </div>
        </div>
      )}
      
      <div className="text-center mb-4 sm:mb-6 lg:mb-8">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">{title}</h3>
        <div className="mb-2 sm:mb-3 lg:mb-4">
          <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-500">{price}</span>
          <span className="text-gray-600 text-sm sm:text-base">/{period}</span>
        </div>
      </div>
      
      <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 lg:mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 ml-2 sm:ml-3 flex-shrink-0 mt-0.5" />
            <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button
        onClick={onClick || (() => alert(`תוכנית ${title} נבחרה! אני אצור איתך קשר בקרוב.`))}
        className={`w-full py-2 sm:py-3 px-3 sm:px-4 lg:px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 mt-auto min-h-[44px] touch-target ${
          popular
            ? 'bg-primary-500 hover:bg-primary-600 text-white shadow-lg hover:shadow-xl'
            : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
        }`}
      >
        בחרי תוכנית
      </button>
    </motion.div>
  )
} 