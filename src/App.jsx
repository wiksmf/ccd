import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AppLayout from './ui/AppLayout'

import Homepage from './pages/Homepage'
import About from './pages/About'
import Gallery from './pages/Gallery'
import PageNotFound from './pages/PageNotFound'
import DetailingExternal from './pages/DetailingExternal'
import DetailingInternal from './pages/DetailingInternal'
import DetailingAdditional from './pages/DetailingAdditional'
import Blog from './pages/Blog'

import Login from './ui/Login'
import FormGallery from './ui/FormGallery'
import FormBlog from './ui/FormBlog'
import Post from './ui/Post'
import ScrollToTop from './ui/ScrollToTop'
// import { AuthProvider } from './context/auth'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Homepage />} />
          <Route path='/o-mnie' element={<About />} />
          <Route path="/detailing-zewnetrzny" element={<DetailingExternal />} />
          <Route path="/detailing-wewnetrzny" element={<DetailingInternal />} />
          <Route path="/detailing-dodatkowe-uslugi" element={<DetailingAdditional />} />
          <Route path='/galeria' element={<Gallery />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:postId' element={<Post />} />
          <Route path='*' element={<PageNotFound />} />

          {/* <AuthProvider></AuthProvider> */}
          <Route path='/login' element={<Login />} />
          <Route path='/form-galeria' element={<FormGallery />} />
          <Route path='/form-blog' element={<FormBlog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App