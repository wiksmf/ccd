import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthContextProvider } from './context/AuthContext';

import Homepage from './pages/Homepage';
import About from './pages/About';
import Gallery from './pages/Gallery';
import PageNotFound from './pages/PageNotFound';
import DetailingPackages from './pages/DetailingPackages';
import DetailingFoil from './pages/DetailingFoil';
import DetailingAdditionalService from './pages/DetailingAdditionalService';
import DetailingCarbon from './pages/DetailingCarbon';
import DetailingPromotions from './pages/DetailingPromotions';
import Blog from './pages/Blog';

import AppLayout from './ui/AppLayout';
import Post from './ui/Post';
import ScrollToTop from './ui/ScrollToTop';
import Post from './ui/Post';
import ScrollToTop from './ui/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <AuthContextProvider>
        <Routes>
          <Route element={<AppLayout />}>
            <Route
              index
              element={<Homepage />}
            />
            <Route
              path='/o-mnie'
              element={<About />}
            />
            <Route
              path='/detailing-pakiety'
              element={<DetailingPackages />}
            />
            <Route
              path='/folie'
              element={<DetailingFoil />}
            />
            <Route
              path='/dodatkowe-uslugi'
              element={<DetailingAdditionalService />}
            />
            <Route
              path='/carbon'
              element={<DetailingCarbon />}
            />
            <Route
              path='/promocje'
              element={<DetailingPromotions />}
            />
            <Route
              path='/realizacje'
              element={<Gallery />}
            />
            <Route
              path='/blog'
              element={<Blog />}
            />
            <Route
              path='/blog/:postId'
              element={<Post />}
            />
            <Route
              path='*'
              element={<PageNotFound />}
            />
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
