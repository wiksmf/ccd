import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AppLayout from './ui/AppLayout'

import Homepage from './pages/Homepage'
import About from './pages/About'
import Gallery from './pages/Gallery'
import PageNotFound from './pages/PageNotFound'
import ExternalDetailing from './pages/ExternalDetailing'
import InternalDetailing from './pages/InternalDetailing'
import AdditionalDetailing from './pages/AdditionalDetailing'
import Blog from './pages/Blog'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Homepage />} />
          <Route path='/o-mnie' element={<About />} />
          <Route path="/detailing-zewnetrzny" element={<ExternalDetailing />} />
          <Route path="/detailing-wewnetrzny" element={<InternalDetailing />} />
          <Route path="/detailing-dodatkowe-uslugi" element={<AdditionalDetailing />} />
          <Route path='/galeria' element={<Gallery />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App