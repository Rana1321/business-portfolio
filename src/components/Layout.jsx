import { Outlet } from 'react-router'
import Navbar from './Navbar'
import Footer from '../sections/Footer'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
