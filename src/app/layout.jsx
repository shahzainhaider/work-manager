import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import UserProvider from '@/context/userProvider';
// import LoadingBar from 'react-top-loading-bar';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
      <UserProvider>
      {/* <LoadingBar transitionTime='500' progress={progress} color='red' loaderSpeed='1000' height='3px' /> */}
      <ToastContainer/>
      <Navbar/>
        <div className="py-4 bg-white">{children}</div>
      </UserProvider>
        </body>
    </html>
  )
}
