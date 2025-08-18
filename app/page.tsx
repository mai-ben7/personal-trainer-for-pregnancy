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

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('')

  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "כושר בריא בהריון",
      description: "תוכניות אימון מותאמות במיוחד לנשים בהריון - בטוחות, יעילות ומהנות."
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: "מומחיות באימונים בהריון",
      description: "מאמנת מוסמכת עם התמחות מיוחדת בכושר לנשים בהריון - יודעת בדיוק מה מתאים לך."
    },
    {
      icon: <Flower2 className="w-8 h-8" />,
      title: "פריחה וצמיחה",
      description: "חוויית אימון מלאה באהבה ותמיכה - מותאמת לכל שלב בהריון שלך."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "כוחות נשיים",
      description: "תלמדי להשתמש בכוחות הטבעיים של הגוף שלך ולבנות כוח וסיבולת לקראת הלידה."
    }
  ]

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
     { number: "5+", label: "שנות ניסיון" },
     { number: "100%", label: "בטיחות מובטחת" },
     { number: "24/7", label: "תמיכה זמינה" }
   ]

  const pricingPlans = [
    {
             title: "מתחילות",
      price: "₪99",
      period: "חודש",
      features: [
        "2 אימונים בשבוע",
        "הדרכה בסיסית בהריון",
                 "מעקב התקדמות",
        "תמיכה באימייל"
      ]
    },
    {
      title: "מתקדמות",
      price: "₪199",
      period: "חודש",
      features: [
        "4 אימונים בשבוע",
        "תוכניות כושר מותאמות אישית",
        "תמיכת מאמנת 24/7",
        "צילומי התקדמות",
        "הערכות חודשיות"
      ],
      popular: true
    },
    {
      title: "מקצועיות",
      price: "₪299",
      period: "חודש",
      features: [
        "אימונים ללא הגבלה",
        "תוכניות כושר מותאמות",
        "אימון אחד על אחד",
        "בדיקות שבועיות",
        "הדרכה לתזונה בהריון",
        "תמיכה מועדפת"
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-primary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <Heart className="w-8 h-8 text-primary-500 mr-2 sparkle-effect" />
                                                           <span className="text-2xl font-bold text-gradient font-display tracking-wide drop-shadow-lg">FitMama</span>
            </motion.div>
            
                                                                               <motion.div
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 className="hidden md:flex gap-4"
               >
                 <a href="#home" className="text-gray-700 hover:text-primary-500 transition-colors px-2 py-2 rounded-lg hover:bg-primary-50">בית</a>
                 <a href="#services" className="text-gray-700 hover:text-primary-500 transition-colors px-2 py-2 rounded-lg hover:bg-primary-50">שירותים</a>
                 <a href="#pricing" className="text-gray-700 hover:text-primary-500 transition-colors px-2 py-2 rounded-lg hover:bg-primary-50">מחירים</a>
                 <a href="#testimonials" className="text-gray-700 hover:text-primary-500 transition-colors px-2 py-2 rounded-lg hover:bg-primary-50">המלצות</a>
                 <a href="#contact" className="text-gray-700 hover:text-primary-500 transition-colors px-2 py-2 rounded-lg hover:bg-primary-50">צור קשר</a>
               </motion.div>
            
            <div className="flex items-center space-x-3">
                             <motion.button
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="hidden md:block btn-primary px-6 py-2"
                                   onClick={() => setIsContactFormOpen(true)}
               >
                 התחילי להתאמן
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
         
         {/* Floating decorative elements */}
         <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
         <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
         <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
         
                                                                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
             <div className="text-center mb-12">
               <motion.h1 
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8 }}
                 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight text-white"
               >
                                 כושר{' '}
                  <span className="text-sparkle-300">בריא</span>
                  {' '}בהריון
               </motion.h1>
              
                            <motion.p 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 className="text-lg lg:text-xl mb-8 text-gray-100 leading-relaxed max-w-3xl mx-auto"
               >
                                הצטרפי למאות נשים שכבר גילו את הסוד - כושר מותאם במיוחד להריון בריא ומהנה. 
                 <span className="text-sparkle-200 font-semibold"> אימון אישי עם מומחית אמיתית שיודעת בדיוק מה טוב לך.</span>
              </motion.p>
            </div>
            
                        {/* Main content area with image and CTA */}
             <div className="grid lg:grid-cols-2 gap-12 items-center">
             {/* Left side - Pregnancy workout image */}
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="relative order-2 lg:order-1"
             >
               <motion.div
                 className="relative"
                 animate={{ 
                   y: [0, -10, 0],
                   scale: [1, 1.02, 1]
                 }}
                 transition={{ 
                   duration: 6,
                   repeat: Infinity,
                   ease: "easeInOut"
                 }}
               >
                 <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-2xl">
                   <img 
                     src="/images/pregnancy-workout.png" 
                     alt="אימון כושר לנשים בהריון" 
                     className="w-full h-auto rounded-2xl shadow-lg"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent rounded-2xl"></div>
                 </div>
                 
                 {/* Floating pregnant woman image */}
                 <motion.div
                   className="absolute -top-8 -right-8 w-20 h-20 bg-white/20 backdrop-blur-md rounded-full p-2 shadow-lg"
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
                 
                 {/* Floating decorative elements */}
                 <motion.div
                   className="absolute -top-4 -left-4 w-8 h-8 bg-sparkle-300 rounded-full opacity-60"
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
                   className="absolute -bottom-4 -right-4 w-6 h-6 bg-primary-300 rounded-full opacity-60"
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
               </motion.div>
             </motion.div>
             
             {/* Right side - CTA and buttons */}
             <motion.div
               initial={{ opacity: 0, x: 30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.6 }}
               className="text-white order-1 lg:order-2"
             >
                                                                                                                               {/* Consultation card */}
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl mb-8">
                   <div className="text-center">
                     {/* Badge moved here */}
                     <motion.div
                       initial={{ opacity: 0, scale: 0.8 }}
                       animate={{ opacity: 1, scale: 1 }}
                       transition={{ duration: 0.6, delay: 0.2 }}
                       className="inline-flex items-center bg-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-6"
                     >
                       <Heart className="w-4 h-4 text-sparkle-300 ml-1" />
                       <span className="text-sm font-medium text-white">מומחית בכושר לנשים בהריון</span>
                     </motion.div>
                     
                     <motion.div
                       className="w-20 h-20 bg-gradient-to-br from-sparkle-300 to-primary-300 rounded-full flex items-center justify-center mx-auto mb-6"
                       animate={{ 
                         scale: [1, 1.1, 1],
                         rotate: [0, 5, -5, 0]
                       }}
                       transition={{ 
                         duration: 4,
                         repeat: Infinity,
                         ease: "easeInOut"
                       }}
                     >
                       <Baby className="w-10 h-10 text-white" />
                     </motion.div>
                    
                                        <h3 className="text-2xl font-bold mb-4 text-white">ייעוץ כושר חינם</h3>
                                         <p className="text-gray-200 mb-6 leading-relaxed text-base">קבלי הערכת כושר מותאמת במיוחד לנשים בהריון עם תוכנית אישית מקצועית</p>
                    
                                        <motion.button 
                       className="bg-gradient-to-r from-sparkle-300 to-primary-300 text-white font-semibold py-4 px-10 rounded-full hover:from-sparkle-200 hover:to-primary-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.95 }}
                       onClick={() => setIsContactFormOpen(true)}
                     >
                       הזמן עכשיו
                     </motion.button>
                  </div>
                </div>
                
                                                                                                {/* Action button */}
                   <div className="mb-8 flex justify-center">
                    <motion.button 
                      className="btn-secondary text-xl px-10 py-5 relative overflow-hidden group shadow-lg hover:shadow-2xl custom-golden-glow w-full sm:w-auto"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        התחילי את המסע שלך
                        <ArrowLeft className="w-6 h-6 mr-3 transition-transform group-hover:-translate-x-1" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-secondary-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </motion.button>
                  </div>
                
                                                                
                 
                                   {/* Trust indicators */}
                   <div className="flex items-center justify-center gap-6 text-sm text-gray-200">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-sparkle-300 ml-2" />
                      <span>200+ נשים מרוצות</span>
                    </div>
                  </div>
             </motion.div>
           </div>
         </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
                                                   <h2 className="text-4xl font-bold mb-4 text-gradient">למה לבחור ב-FitMama?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              אני משלב מומחיות בכושר לנשים בהריון עם אהבה ותמיכה כדי לעזור לך להרגיש חזקה ובריאה.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="magical-card p-6 text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-500 sparkle-effect">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
                         <h2 className="text-4xl font-bold mb-4 text-gradient">בחרי את התוכנית המתאימה לך</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              אפשרויות כושר גמישות המותאמות לכל שלב בהריון ולצרכים האישיים שלך.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
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
       <section className="py-20 gradient-bg text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             {stats.map((stat, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.6, delay: index * 0.1 }}
                 className="text-center"
               >
                 <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                 <div className="text-gray-200">{stat.label}</div>
               </motion.div>
             ))}
           </div>
         </div>
       </section>

             {/* Testimonials Section */}
       <section id="testimonials" className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="text-center mb-16"
           >
             <h2 className="text-4xl font-bold mb-4 text-gradient">מה הנשים שלי אומרות</h2>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
               סיפורים אמיתיים מנשים אמיתיות ששינו את ההריון שלהן עם כושר מותאם במיוחד.
             </p>
           </motion.div>
           
                       {/* Before & After Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-6 text-gradient">תוצאות אמיתיות - לפני ואחרי</h3>
                <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-primary-200 shadow-lg">
                  <div className="relative">
                                         <img 
                       src="/images/before-after.png" 
                       alt="תוצאות לפני ואחרי אימון בהריון" 
                       className="w-full h-auto rounded-2xl max-h-80 object-contain"
                     />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-500/5 to-transparent rounded-2xl"></div>
                  </div>
                  <p className="text-base text-gray-700 mt-4 font-medium">
                    התוצאות מדברות בעד עצמן - כושר מותאם לנשים בהריון מביא לתוצאות מדהימות!
                  </p>
                </div>
              </div>
            </motion.div>
           
           <div className="grid md:grid-cols-3 gap-8">
             {testimonials.map((testimonial, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: index * 0.1 }}
                 className="magical-card p-6"
               >
                 <div className="flex mb-4">
                   {[...Array(testimonial.rating)].map((_, i) => (
                     <StarIcon key={i} className="w-5 h-5 text-sparkle-400 fill-current sparkle-effect" />
                   ))}
                 </div>
                 <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                 <div>
                   <div className="font-semibold">{testimonial.name}</div>
                   <div className="text-primary-500">{testimonial.role}</div>
                 </div>
               </motion.div>
             ))}
           </div>
         </div>
       </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
                         <h2 className="text-4xl font-bold mb-4 text-gradient">מוכנה להתחיל את המסע שלך?</h2>
            <p className="text-xl text-gray-600 mb-8">
              הצטרפי למאות נשים שכבר שינו את ההריון שלהן עם כושר מותאם במיוחד.
            </p>
                                                                             <div className="flex flex-row gap-4 justify-center items-center">
                <button 
                  className="btn-primary px-8 py-3 min-w-[200px] flex items-center justify-center"
                  onClick={() => setIsContactFormOpen(true)}
                >
                  <span>קבל ייעוץ כושר חינם</span>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                </button>
                <button 
                  className="btn-outline px-8 py-3 min-w-[200px] flex items-center justify-center"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-primary-400 ml-2 sparkle-effect" />
                                 <span className="text-2xl font-bold font-display tracking-wide drop-shadow-lg">FitMama</span>
              </div>
              <p className="text-gray-400">
                שינוי ההריון באמצעות כושר מותאם במיוחד עם אהבה ותמיכה.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">שירותי כושר</h3>
              <ul className="space-y-2 text-gray-400">
                <li>אימון אישי בהריון</li>
                <li>כושר קבוצתי לנשים בהריון</li>
                <li>הדרכה תזונתית</li>
                <li>תוכניות כושר אונליין</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">המומחיות שלנו</h3>
              <ul className="space-y-2 text-gray-400">
                <li>אודות המומחיות בהריון</li>
                <li>המאמנת שלנו</li>
                <li>סיפורי הצלחה</li>
                <li>צור קשר</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">צור קשר</h3>
                             <ul className="space-y-2 text-gray-400">
                 <li>info@pregnancyfitness.co.il</li>
                 <li>דרך נמיר 30, תל אביב</li>
               </ul>
            </div>
          </div>
          
                     <div className="border-t border-primary-700 mt-8 pt-8 text-center text-gray-400">
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