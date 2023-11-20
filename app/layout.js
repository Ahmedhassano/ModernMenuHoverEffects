import './globals.css'
import Menu from './components/menu'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-[#142329]'>
         <Menu/>  
        {children}
       </body>
    </html>
  )
}
