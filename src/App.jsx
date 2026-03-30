// App.jsx
import { Suspense, lazy, useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";

import { Footer, Navbar } from "./components";
import { PageLoader } from "./components/Loader";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Services = lazy(() => import("./pages/Services"));
const Projects = lazy(() => import("./pages/Projects"));
const WebDevelopment = lazy(() => import("./pages/services/WebDevelopment"));
const MobileDevelopment = lazy(() => import("./pages/services/MobileDevelopment"));
const DesktopDevelopment = lazy(() => import("./pages/services/DesktopDevelopment"));
const UXUIDesign = lazy(() => import("./pages/services/UXUIDesign"));
const CloudSolutions = lazy(() => import("./pages/services/CloudSolutions"));
const GraphicsDesign = lazy(() => import("./pages/services/GraphicsDesign"));

// Route change loader component
const RouteChangeLoader = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location]);

  if (loading) {
    return <PageLoader />;
  }

  return children;
};

// Main App component with loader
const AppRoutes = () => {
  const location = useLocation();
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Hide loader after first load
    const timer = setTimeout(() => {
      setIsFirstLoad(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (isFirstLoad) {
    return <PageLoader />;
  }

  return (
    <RouteChangeLoader>
      <Suspense fallback={<PageLoader />}>
        <Routes location={location}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services/web-development' element={<WebDevelopment />} />
          <Route path='/services/mobile-development' element={<MobileDevelopment />} />
          <Route path='/services/desktop-development' element={<DesktopDevelopment />} />
          <Route path='/services/ux/ui-design' element={<UXUIDesign />} />
          <Route path='/services/cloud-solutions' element={<CloudSolutions />} />
          <Route path='/services/graphics-design' element={<GraphicsDesign />} />
        </Routes>
        <Footer />
      </Suspense>
    </RouteChangeLoader>
  );
};

const App = () => {
  return (
    <main className='bg-gradient-to-b from-gray-900 via-gray-900 to-black min-h-screen'>
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
    </main>
  );
};

export default App;