'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'

interface PricingCardProps {
  title: string
  price: string
  period: string
  features: string[]
  popular?: boolean
  onClick?: () => void
}

export default function PricingCard({ title, price, period, features, popular = false, onClick }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`relative magical-card p-8 flex flex-col h-full ${popular ? 'ring-2 ring-primary-500 scale-105' : ''}`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
            <Star className="w-4 h-4 ml-1 sparkle-effect" />
            הכי פופולרית
          </div>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold text-primary-500">{price}</span>
          <span className="text-gray-600">/{period}</span>
        </div>
      </div>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="w-5 h-5 text-green-500 ml-3 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button
        onClick={onClick || (() => alert(`תוכנית ${title} נבחרה! אני אצור איתך קשר בקרוב.`))}
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 mt-auto ${
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