import './globals.css'
import { Inter , Lexend } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

const lexend = Lexend({ 
  subsets: ['latin'],
  weight: ['200','300','400','500','600', '700','800'],
  variable: '--font-lexend',
})

export const metadata = {
  title: 'TechArt | Portfolio',
  description: 'TechArt | Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${lexend.variable} font-lexend`}>{children}</body>
    </html>
  )
}
