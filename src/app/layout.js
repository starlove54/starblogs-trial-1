import Footer from '@/components/footer/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import ThemeProvider from '@/providers/ThemeProvider'
import { ThemeContextProvider } from '@/context/ThemeContext'
import AuthProvider from '@/providers/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Starblogs',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeContextProvider>
        <body className={`{inter.className} `}>
          <AuthProvider>
            <ThemeProvider>
              <div className="container">
                <div className="wrapper">
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </div>
            </ThemeProvider>
          </AuthProvider>
        </body>
      </ThemeContextProvider>
    </html>
  )
}
