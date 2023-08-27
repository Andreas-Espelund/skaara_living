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
      <body className='min-h-[100vh] flex flex-col bg-zinc-900 text-white justify-between overflow-x-hidden'>
        <Header/>
        {children}  
        <Footer/>
      </body>
    </html>
  )
}
