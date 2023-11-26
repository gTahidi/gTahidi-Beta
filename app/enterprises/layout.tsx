import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'

import Footer from '@/components/Footer'
import {Nav} from '@/components/Nav'

const font = Urbanist({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
      <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}