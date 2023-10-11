import Nav from '@/components/nav'
import './globals.css'
import { Poppins } from 'next/font/google'
import Footer from '@/components/footer'
import Contact from '@/components/contact'

const inter = Poppins({
  weight: ["300", "400", "500", "600", "700", "800",],
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
