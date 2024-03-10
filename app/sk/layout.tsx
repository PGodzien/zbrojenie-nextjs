import Footer from './components/footer'
import Nav from './components/nav'
import Contact from './components/contact'


export default function RootLayoutUa({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Nav />
      {children}
      <Contact />
      <Footer />
      {/* <Nav /> */}
    </>
  )
}
