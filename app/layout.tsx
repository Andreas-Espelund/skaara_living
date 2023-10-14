import { Header, Footer } from '../components'
import '../styles/globals.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html>
      <head />
      <body className='min-h-screen flex flex-col bg-zinc-900 text-white justify-between overflow-x-hidden'>
        {children}
      </body>
      <Footer/>
    </html>
  )
}
