import { Outlet } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'

import Header from './Header'
import Footer from './Footer'
import Contact from './Contact'
import Social from './Social'

function AppLayout() {
  return (
    <ParallaxProvider>
      <Header />
      <Outlet />
      <Contact />
      <Footer />
      <Social />
    </ParallaxProvider>
  )
}

export default AppLayout
