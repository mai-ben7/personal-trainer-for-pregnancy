'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, Clock, User, Phone, Mail, MessageSquare } from 'lucide-react'
import { useState, useEffect } from 'react'

interface ContactFormModalProps {
  isOpen: boolean
  onClose: () => void
  selectedPlan?: string
}

export default function ContactFormModal({ isOpen, onClose, selectedPlan }: ContactFormModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pregnancyWeek: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
    selectedPlan: selectedPlan || ''
  })

  useEffect(() => {
    if (selectedPlan) {
      setFormData(prev => ({ ...prev, selectedPlan }))
    }
  }, [selectedPlan])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    alert('תודה! אני אצור איתך קשר בקרוב לאישור התור.')
    setFormData({
      name: '',
      phone: '',
      email: '',
      pregnancyWeek: '',
      preferredDate: '',
      preferredTime: '',
      message: '',
      selectedPlan: ''
    })
    onClose()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">ייעוץ כושר חינם</h2>
                <p className="text-gray-600 text-sm">מלאי את הפרטים ואני אצור איתך קשר</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4 inline ml-1" />
                  שם מלא *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="הכניסי את שמך המלא"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline ml-1" />
                  מספר טלפון *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="050-123-4567"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline ml-1" />
                  כתובת אימייל
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              {/* Pregnancy Week */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  שבוע הריון
                </label>
                <select
                  name="pregnancyWeek"
                  value={formData.pregnancyWeek}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">בחרי שבוע הריון</option>
                  <option value="1-12">שבועות 1-12 (טרימסטר ראשון)</option>
                  <option value="13-26">שבועות 13-26 (טרימסטר שני)</option>
                  <option value="27-40">שבועות 27-40 (טרימסטר שלישי)</option>
                  <option value="postpartum">אחרי לידה</option>
                </select>
              </div>

              {/* Selected Plan Display */}
              {formData.selectedPlan && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    התוכנית שנבחרה
                  </label>
                  <div className="w-full px-4 py-3 bg-primary-50 border border-primary-200 rounded-lg text-primary-700 font-medium">
                    {formData.selectedPlan}
                  </div>
                </div>
              )}

              {/* Preferred Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="w-4 h-4 inline ml-1" />
                  תאריך מועדף
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              {/* Preferred Time */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Clock className="w-4 h-4 inline ml-1" />
                  שעה מועדפת
                </label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">בחרי שעה מועדפת</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MessageSquare className="w-4 h-4 inline ml-1" />
                  הודעה נוספת
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="ספרי לי על עצמך ומה מעניין אותך..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                שלח בקשה לייעוץ
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
} 