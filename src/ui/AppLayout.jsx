import { Outlet } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Contact from './Contact'
import Social from './Social'

function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Contact />
      <Footer />
      <Social />
    </>
  )
}

export default AppLayout
