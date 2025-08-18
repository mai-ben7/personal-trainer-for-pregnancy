import type { Metadata } from 'next'
import { Heebo, Rubik } from 'next/font/google'
import './globals.css'

const heebo = Heebo({ 
  subsets: ['hebrew', 'latin'], 
  variable: '--font-heebo',
  weight: ['300', '400', '500', '600', '700', '800', '900']
})
const rubik = Rubik({ 
  subsets: ['hebrew', 'latin'], 
  variable: '--font-rubik',
  weight: ['300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'כושר קסום בהריון - אימון אישי לנשים בהריון',
  description: 'גלה עולם קסום של כושר מותאם לנשים בהריון. הצטרף למסע מרתק של בריאות, כוח וקסם עם המאמנת המומחית שלנו.',
  keywords: 'אימון אישי, נשים בהריון, כושר בהריון, מאמנת אישית, בריאות בהריון, כושר גופני',
  icons: {
    icon: '/images/pregnant.png',
    shortcut: '/images/pregnant.png',
    apple: '/images/pregnant.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${rubik.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
} 