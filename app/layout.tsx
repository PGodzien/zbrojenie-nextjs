import Nav from '@/components/nav'
import './globals.css'
import { Space_Grotesk } from 'next/font/google'
import Footer from '@/components/footer'
import Contact from '@/components/contact'

const inter = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700",],
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <Nav />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  )
}
