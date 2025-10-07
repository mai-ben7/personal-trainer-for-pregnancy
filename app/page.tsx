'use client'

import { motion } from 'framer-motion'
import { 
  Heart, 
  Star, 
  Baby, 
  Flower2, 
  ArrowLeft,
  Play,
  Star as StarIcon,
  CheckCircle,
  Moon,
  Sun,
  Sparkles
} from 'lucide-react'
import { useState } from 'react'
import MobileNav from '@/components/MobileNav'
import VideoModal from '@/components/VideoModal'
import PricingCard from '@/components/PricingCard'
import ContactFormModal from '@/components/ContactFormModal'
import { useReduceMotionOrSmall } from '@/lib/useReducedMotionOrSmall'

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('')
  const reduceMotion = useReduceMotionOrSmall()

  const features = [
    {
      icon: <Heart className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9" />,
      title: "כושר בריא בהריון",
      description: "תוכניות אימון מותאמות במיוחד לנשים בהריון - בטוחות, יעילות ומהנות."
    },
    {
      icon: <Baby className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9" />,
      title: "מומחיות באימונים בהריון",
      description: "מאמנת מוסמכת עם התמחות מיוחדת בכושר לנשים בהריון - יודעת בדיוק מה מתאים לך."
    },
    {
      icon: <Flower2 className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9" />,
      title: "פריחה וצמיחה",
      description: "חוויית אימון מלאה באהבה ותמיכה - מותאמת לכל שלב בהריון שלך."
    },
    {
      icon: <Star className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9" />,
      title: "כוחות נשיים",
      description: "תלמדי להשתמש בכוחות הטבעיים של הגוף שלך ולבנות כוח וסיבולת לקראת הלידה."
    }
  ]

  const trainerInfo = {
    name: "מיכל טננבאום",
    title: "מומחית בכושר לנשים בהריון",
    experience: "8+ שנות ניסיון",
    certifications: ["מוסמכת בכושר לנשים בהריון", "מדריכת פילאטיס", "מומחית בתזונה בהריון"],
    description: "אני מאמינה שכל אישה בהריון ראויה להרגיש חזקה, בריאה ומלאה אנרגיה. עם ניסיון של 8+ שנים בתחום הכושר לנשים בהריון, אני משלב מומחיות מקצועית עם אהבה ותמיכה כדי לעזור לך להפוך את ההריון שלך לחוויה מדהימה.",
    achievements: ["200+ נשים מרוצות", "תוכניות כושר מותאמות אישית", "תמיכה 24/7", "תוצאות מוכחות"]
  }

  const testimonials = [
    {
             name: "שרה בן דוד",
      role: "הריון ראשון - 7 חודשים",
             content: "האימונים האלה ממש שינו לי את ההריון! אני מרגישה כל כך חזקה ובריאה, ועכשיו אני ממש מוכנה ללידה. המאמנת יודעת בדיוק מה לעשות.",
      rating: 5
    },
    {
             name: "רומי רחימה",
      role: "הריון שני - 5 חודשים",
      content: "בהריון הראשון לא התאמנתי בכלל, אבל הפעם זה אחרת לגמרי! אני מרגישה אנרגטית ומלאה חיים. המאמנת מקצועית ומבינה בדיוק מה אני צריכה.",
      rating: 5
    },
    {
             name: "מיכל לוי",
      role: "הריון שלישי - 8 חודשים",
      content: "גיליתי את הכוח האמיתי של הגוף שלי! האימונים עזרו לי להכין את הגוף ללידה בצורה מקצועית. אני מרגישה מוכנה כמו שלא הרגשתי אף פעם.",
      rating: 5
    }
  ]

     const stats = [
     { number: "200+", label: "נשים מרוצות" },
     { number: "8+", label: "שנות ניסיון" },
     { number: "100%", label: "בטיחות מובטחת" },
     { number: "24/7", label: "תמיכה זמינה" }
   ]

  const pricingPlans = [
    {
             title: "מתחילות",
      price: "₪89",
      period: "חודש",
      features: [
        " אימון אחד בשבוע",
        "הדרכה בסיסית בהריון",

        "תמיכה באימייל"
      ]
    },
    {
      title: "מתקדמות",
      price: "₪199",
      period: "חודש",
      features: [
        "3 אימונים בשבוע",
        "הדרכה מורחבת בהיריון",
        "מעקב התקדמות",
        "הערכות חודשיות"
      ],
      popular: true
    },
    {
      title: "מקצועיות",
      price: "₪250",
      period: "חודש",
      features: [
        "4 אימונים בשבוע",
        "תמיכת מאמנת 24/7",
        "תוכנית כושר מותאמת אישית",
        "בדיקות שבועיות",
        "הדרכה לתזונה בהריון",

      ]
    }
  ]

  // Motion variants based on reduced motion preference
  const fadeInUp = reduceMotion ? {
    initial: { opacity: 1, y: 0 },
    animate: { opacity: 1, y: 0 }
  } : {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const fadeInLeft = reduceMotion ? {
    initial: { opacity: 1, x: 0 },
    animate: { opacity: 1, x: 0 }
  } : {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 }
  }

  const fadeInRight = reduceMotion ? {
    initial: { opacity: 1, x: 0 },
    animate: { opacity: 1, x: 0 }
  } : {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 }
  }

  const floatAnimation = reduceMotion ? {
    animate: { y: 0, scale: 1 }
  } : {
    animate: { 
      y: [0, -10, 0],
      scale: [1, 1.02, 1]
    },
    transition: { 
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-primary-200 safe-x">
        <div className="container-responsive">
          <div className="flex justify-between items-center h-16">
            <motion.div
              {...fadeInLeft}
              className="flex items-center"
            >
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-primary-500 mr-2 sparkle-effect" />
              <span className="text-xl sm:text-2xl font-bold text-gradient font-display tracking-wide drop-shadow-lg">FitMama</span>
            </motion.div>
            
             <motion.div
               {...fadeInRight}
               className="hidden md:flex gap-4"
             >
               <a 
                 href="#home" 
                 onClick={(e) => {
                   e.preventDefault()
                   document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
                 }}
                 className="text-gray-700 hover:text-primary-500 transition-colors px-2 py-2 rounded-lg hover:bg-primary-50 touch-target"
               >
                 בית
               </a>
               <a 
                 href="#services" 
                 onClick={(e) => {
                   e.preventDefault()
                   document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
                 }}
                 className="text-gray-700 hover:text-primary-500 transition-colors px-2 py-2 rounded-lg hover:bg-primary-50 touch-target"
               >
                 המאמנת
               </a>
               <a 
                 href="#pricing" 
                 onClick={(e) => {
                   e.preventDefault()
                   document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
                 }}
                 className="text-gray-700 hover:text-primary-500 transition-colors px-2 py-2 rounded-lg hover:bg-primary-50 touch-target"
               >
                 מחירים
               </a>
               <a 
                 href="#testimonials" 
                 onClick={(e) => {
                   e.preventDefault()
                   document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })
                 }}
                 className="text-gray-700 hover:text-primary-500 transition-colors px-2 py-2 rounded-lg hover:bg-primary-50 touch-target"
               >
                 המלצות
               </a>
               <a 
                 href="#contact" 
                 onClick={(e) => {
                   e.preventDefault()
                   document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                 }}
                 className="text-gray-700 hover:text-primary-500 transition-colors px-2 py-2 rounded-lg hover:bg-primary-50 touch-target"
               >
                 צור קשר
               </a>
             </motion.div>
            
            <div className="flex items-center space-x-3">
              <motion.button
                {...fadeInRight}
                className="hidden md:block btn-primary px-4 sm:px-6 py-2"
                onClick={() => setIsContactFormOpen(true)}
              >
                תתחילי כאן
              </motion.button>
              <MobileNav onContactClick={() => setIsContactFormOpen(true)} />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 relative overflow-hidden min-h-screen flex items-center">
        {/* Background with gradient and floating elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-400 via-secondary-400 to-sparkle-400"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        {/* Floating decorative elements - only on larger screens */}
        {!reduceMotion && (
          <>
            <div className="absolute top-20 left-10 w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full animate-float hidden md:block"></div>
            <div className="absolute top-40 right-20 w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full animate-float hidden md:block" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-20 left-1/4 w-8 h-8 sm:w-12 sm:h-12 bg-white/10 rounded-full animate-float hidden md:block" style={{animationDelay: '2s'}}></div>
          </>
        )}
        
        <div className="container-responsive relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <motion.h1 
              {...fadeInUp}
              className="text-responsive-h1 mb-6 sm:mb-8 leading-tight text-white"
            >
              כושר{' '}
              <span className="text-sparkle-300">בריא</span>
              {' '}בהריון
            </motion.h1>
            
            <motion.p 
              {...fadeInUp}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-responsive-body mb-6 sm:mb-8 text-gray-100 leading-relaxed max-w-3xl mx-auto"
            >
              הצטרפי למאות נשים שכבר גילו את הסוד - כושר מותאם במיוחד להריון בריא ומהנה. 
              <span className="text-sparkle-200 font-semibold"> אימון אישי עם {trainerInfo.name} - {trainerInfo.title} עם {trainerInfo.experience} שיודעת בדיוק מה טוב לך.</span>
            </motion.p>
          </div>
          
          {/* Main content area with image and CTA */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left side - Pregnancy workout image */}
            <motion.div
              {...fadeInLeft}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative order-2 lg:order-1"
            >
              <motion.div
                className="relative"
                {...floatAnimation}
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/20 shadow-2xl">
                  <img 
                    src="/images/pregnancy-workout.png" 
                    alt="אימון כושר לנשים בהריון" 
                    className="w-full h-auto rounded-xl sm:rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent rounded-xl sm:rounded-2xl"></div>
                </div>
                
                {/* Floating pregnant woman image - only on larger screens */}
                {!reduceMotion && (
                  <motion.div
                    className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-md rounded-full p-2 shadow-lg hidden sm:block"
                    animate={{ 
                      y: [0, -15, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    <img 
                      src="/images/pregnant.png" 
                      alt="אישה בהריון" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </motion.div>
                )}
                
                {/* Floating decorative elements - only on larger screens */}
                {!reduceMotion && (
                  <>
                    <motion.div
                      className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-sparkle-300 rounded-full opacity-60 hidden sm:block"
                      animate={{ 
                        y: [0, -10, 0],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div
                      className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-4 h-4 sm:w-6 sm:h-6 bg-primary-300 rounded-full opacity-60 hidden sm:block"
                      animate={{ 
                        y: [0, 10, 0],
                        scale: [1, 1.3, 1]
                      }}
                      transition={{ 
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                    />
                  </>
                )}
              </motion.div>
            </motion.div>
            
            {/* Right side - CTA and buttons */}
            <motion.div
              {...fadeInRight}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-white order-1 lg:order-2"
            >
              {/* Consultation card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl mb-6 sm:mb-8">
                <div className="text-center">
                  {/* Badge moved here */}
                  <motion.div
                    {...fadeInUp}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex items-center bg-white/20 backdrop-blur-md rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6"
                  >
                    <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-sparkle-300 ml-1" />
                    <span className="text-xs sm:text-sm font-medium text-white">מומחית בכושר לנשים בהריון - {trainerInfo.name}</span>
                  </motion.div>
                  
                  <motion.div
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-sparkle-300 to-primary-300 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6"
                    {...floatAnimation}
                  >
                    <Baby className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">ייעוץ כושר חינם</h3>
                  <p className="text-sm sm:text-base text-gray-200 mb-4 sm:mb-6 leading-relaxed">קבלי הערכת כושר מותאמת במיוחד לנשים בהריון עם תוכנית אישית מקצועית</p>
                  
                  <motion.button 
                    className="bg-gradient-to-r from-sparkle-300 to-primary-300 text-white font-semibold py-3 sm:py-4 px-6 sm:px-10 rounded-full hover:from-sparkle-200 hover:to-primary-200 transition-all duration-300 shadow-lg hover:shadow-xl min-h-[44px] w-full sm:w-auto"
                    onClick={() => setIsContactFormOpen(true)}
                  >
                    תתחילי כאן
                  </motion.button>
                </div>
              </div>
              
              {/* Action button */}
              <div className="mb-6 sm:mb-8 flex justify-center">
                <motion.button 
                  className="btn-secondary text-lg sm:text-xl px-6 sm:px-10 py-4 sm:py-5 relative overflow-hidden group shadow-lg hover:shadow-2xl custom-golden-glow w-full sm:w-auto"
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    התחילי את המסע שלך
                    <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.button>
              </div>
              
              {/* Trust indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-gray-200">
                <div className="flex items-center">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-sparkle-300 ml-2" />
                  <span>200+ נשים מרוצות</span>
                </div>
                <div className="flex items-center">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-sparkle-300 ml-2" />
                  <span>{trainerInfo.experience}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-responsive">
          <motion.div
            {...fadeInUp}
            className="text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-20"
          >
            <h2 className="text-responsive-h2 mb-4 text-gradient">למה לבחור ב-FitMama?</h2>
            <p className="text-responsive-subtitle text-gray-600 max-w-4xl mx-auto">
              אני משלב מומחיות בכושר לנשים בהריון עם אהבה ותמיכה כדי לעזור לך להרגיש חזקה ובריאה.
            </p>
          </motion.div>

          {/* Trainer Profile Section */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 sm:mb-16"
          >
            <div className="bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-primary-200 shadow-xl">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                {/* Trainer Image */}
                <motion.div
                  {...fadeInLeft}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative"
                >
                  <div className="relative">
                    <img 
                      src="/images/WOMEN-TRAINER.png" 
                      alt={`${trainerInfo.name} - ${trainerInfo.title}`}
                      className="w-full h-auto rounded-xl sm:rounded-2xl shadow-lg max-w-sm sm:max-w-md mx-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent rounded-xl sm:rounded-2xl"></div>
                  </div>
                  
                  {/* Floating badge - only on larger screens */}
                  {!reduceMotion && (
                    <motion.div
                      className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-gradient-to-r from-sparkle-300 to-primary-300 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg hidden sm:block"
                      animate={{ 
                        scale: [1, 1.05, 1],
                        rotate: [0, 2, -2, 0]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {trainerInfo.experience}
                    </motion.div>
                  )}
                </motion.div>

                {/* Trainer Info */}
                <motion.div
                  {...fadeInRight}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="space-y-4 sm:space-y-6"
                >
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gradient mb-2">{trainerInfo.name}</h3>
                    <p className="text-lg sm:text-xl text-primary-600 font-semibold mb-3 sm:mb-4">{trainerInfo.title}</p>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">{trainerInfo.description}</p>
                  </div>

                  {/* Certifications */}
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">הסמכות מקצועיות:</h4>
                    <div className="space-y-2">
                      {trainerInfo.certifications.map((cert, index) => (
                        <motion.div
                          key={index}
                          {...fadeInUp}
                          transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                          className="flex items-center"
                        >
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500 ml-2 flex-shrink-0" />
                          <span className="text-sm sm:text-base text-gray-700">{cert}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">הישגים:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {trainerInfo.achievements.map((achievement, index) => (
                        <motion.div
                          key={index}
                          {...fadeInUp}
                          transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                          className="bg-primary-50 rounded-lg p-3 text-center"
                        >
                          <span className="text-xs sm:text-sm font-medium text-primary-700">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 w-full">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="feature-card p-4 sm:p-6 lg:p-8 xl:p-10 text-center min-h-[140px] sm:min-h-[160px] lg:min-h-[180px] xl:min-h-[200px] flex flex-col justify-center"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6 xl:mb-8 text-primary-500 sparkle-effect">
                  {feature.icon}
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold mb-2 sm:mb-3 lg:mb-4 xl:mb-5 text-gray-800">{feature.title}</h3>
                <p className="text-sm sm:text-base lg:text-lg xl:text-lg text-gray-600 leading-relaxed flex-1 px-2 sm:px-3">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container-responsive">
          <motion.div
            {...fadeInUp}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-responsive-h2 mb-4 text-gradient">בחרי את התוכנית המתאימה לך</h2>
            <p className="text-responsive-subtitle text-gray-600 max-w-3xl mx-auto">
              אפשרויות כושר גמישות המותאמות לכל שלב בהריון ולצרכים האישיים שלך. 
              <span className="font-semibold text-primary-600">{trainerInfo.name}</span> תבנה לך תוכנית אישית מותאמת במיוחד.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                title={plan.title}
                price={plan.price}
                period={plan.period}
                features={plan.features}
                popular={plan.popular}
                onClick={() => {
                  setSelectedPlan(plan.title)
                  setIsContactFormOpen(true)
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 gradient-bg text-white">
        <div className="container-responsive">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base text-gray-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 sm:py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="container-responsive">
          <motion.div
            {...fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-responsive-h2 mb-4 text-gradient">מה הנשים שלי אומרות</h2>
            <p className="text-responsive-subtitle text-gray-600 max-w-3xl mx-auto">
              סיפורים אמיתיים מנשים אמיתיות ששינו את ההריון שלהן עם כושר מותאם במיוחד. 
              אני מלווה אתכן בכל שלב.
            </p>
          </motion.div>
          
          {/* Before & After Results */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="max-w-6xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gradient">תוצאות אמיתיות - לפני ואחרי</h3>
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                {/* Before & After Image */}
                <div className="bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-primary-200 shadow-lg">
                  <div className="relative">
                    <img 
                      src="/images/before-after.png" 
                      alt="תוצאות לפני ואחרי אימון בהריון" 
                      className="w-full h-auto rounded-xl sm:rounded-2xl max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-500/5 to-transparent rounded-xl sm:rounded-2xl"></div>
                  </div>
                </div>
                
                {/* Text Bubble */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-primary-200 shadow-lg relative">
                    {/* Speech bubble arrow */}
                    <div className="absolute -right-4 top-8 w-0 h-0 border-l-[20px] border-l-primary-100 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent hidden lg:block"></div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                        <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      </div>
                      
                      <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
                        החזרתי את הגוף שלי במהירות! 💪
                      </h4>
                      
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                        "התחלתי להתאמן עם מיכל כבר בשבוע ה-4 להריון. 
                       <br></br> <span className="font-semibold text-primary-600">תוך 3 חודשים אחרי הלידה </span> 
                        חזרתי לגוף שלי ואפילו יותר חזקה!" 
                      </p>
                      
                      <div className="bg-white/60 rounded-lg p-3 sm:p-4">
                        <p className="text-xs sm:text-sm text-gray-600 font-medium">
                          ✨ <span className="font-semibold">הסוד:</span> כושר מותאם בהריון + תזונה נכונה = החזרה מהירה לגוף!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </motion.div>
          
          {/* Spacing between before/after and testimonials */}
          <div className="mb-16 sm:mb-20 lg:mb-24"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="magical-card p-4 sm:p-6 min-h-[200px]"
              >
                <div className="flex mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-sparkle-400 fill-current sparkle-effect" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-sm sm:text-base">{testimonial.name}</div>
                  <div className="text-primary-500 text-xs sm:text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 sm:py-20 bg-white">
        <div className="container-responsive max-w-4xl mx-auto text-center">
          <motion.div
            {...fadeInUp}
          >
            <h2 className="text-responsive-h2 mb-4 text-gradient">מוכנה להתחיל את המסע שלך?</h2>
            <p className="text-responsive-subtitle text-gray-600 mb-6 sm:mb-8">
              הצטרפי למאות נשים שכבר שינו את ההריון שלהן עם כושר מותאם במיוחד. 
              <span className="font-semibold text-primary-600"> {trainerInfo.name} - {trainerInfo.title}</span> מחכה לך עם תוכנית אישית מותאמת במיוחד.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                className="btn-primary px-6 sm:px-8 py-3 min-w-[200px] flex items-center justify-center"
                onClick={() => setIsContactFormOpen(true)}
              >
                <span>תתחילי כאן</span>
                <ArrowLeft className="w-4 h-4 mr-2" />
              </button>
              <button 
                className="btn-outline px-6 sm:px-8 py-3 min-w-[200px] flex items-center justify-center"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>צפה בתוכניות כושר</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-primary-900 to-secondary-900 text-white py-12">
        <div className="container-responsive">
          <div className="grid md:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-primary-400 ml-2 sparkle-effect" />
                <span className="text-xl sm:text-2xl font-bold font-display tracking-wide drop-shadow-lg">FitMama</span>
              </div>
              <p className="text-sm sm:text-base text-gray-400">
                שינוי ההריון באמצעות כושר מותאם במיוחד עם אהבה ותמיכה.
              </p>
            </div>
            
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">שירותי כושר</h3>
              <ul className="space-y-2 text-sm sm:text-base text-gray-400">
                <li>אימון אישי בהריון</li>
                <li>כושר קבוצתי לנשים בהריון</li>
                <li>הדרכה תזונתית</li>
                <li>תוכניות כושר אונליין</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">המומחיות שלנו</h3>
              <ul className="space-y-2 text-sm sm:text-base text-gray-400">
                <li>אודות המומחיות בהריון</li>
                <li className="font-medium text-primary-300">{trainerInfo.name} - {trainerInfo.title}</li>
                <li>{trainerInfo.experience} בתחום</li>
                <li>סיפורי הצלחה</li>
                <li>צור קשר</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">צור קשר</h3>
              <ul className="space-y-2 text-sm sm:text-base text-gray-400">
                <li>pregnancyfitness@gmail.com</li>
                <li>דרך נמיר 30, תל אביב</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-sm sm:text-base text-gray-400">
            <p>&copy; {new Date().getFullYear()} Mai Web | כל הזכויות שמורות</p>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoPlaying} 
        onClose={() => setIsVideoPlaying(false)} 
      />

      {/* Contact Form Modal */}
      <ContactFormModal 
        isOpen={isContactFormOpen} 
        onClose={() => {
          setIsContactFormOpen(false)
          setSelectedPlan('')
        }} 
        selectedPlan={selectedPlan}
      />
    </div>
  )
}
