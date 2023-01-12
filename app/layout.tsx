import Header from '../components/Header'
import '../styles/globals.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html>
      <head />
      <body className='h-[100vh] flex bg-zinc-900 text-white'>
        {children}  
        <Header/>
        </body>
    </html>
  )
}
