import Nav from '@/components/nav'
import './globals.css'
import { Space_Grotesk } from 'next/font/google'
import Footer from '@/components/footer'
import Contact from '@/components/contact'
import Script from 'next/script'

const GTM_ID = 'GTM-NVXXW9C';

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
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
      <meta name="google-site-verification" content="ZbvFH7l_vKYNqKlt0MSvqd4qvtLcorLhEqwp6nAPprE" />
      <body className={inter.className}>
        <Nav />
        {children}
        <Contact />
        <Footer />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
          }}
        />
      </body>
    </html>
  )
}
