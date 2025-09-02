'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useReduceMotionOrSmall } from '@/lib/useReducedMotionOrSmall'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoUrl?: string
}

export default function VideoModal({ isOpen, onClose, videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ" }: VideoModalProps) {
  const reduceMotion = useReduceMotionOrSmall()

  // Motion variants based on reduced motion preference
  const backdropAnimation = reduceMotion ? {} : {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.2 }
  }

  const modalAnimation = reduceMotion ? {} : {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.9, opacity: 0 },
    transition: { duration: 0.3 }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          {...backdropAnimation}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 safe-x safe-y"
          onClick={onClose}
        >
          <motion.div
            {...modalAnimation}
            className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-2 sm:top-4 left-2 sm:left-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors touch-target"
              aria-label="סגור חלון וידאו"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <iframe
              src={videoUrl}
              title="סרטון כושר לנשים בהריון - כושר קסום בהריון"
              className="w-full h-full"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 