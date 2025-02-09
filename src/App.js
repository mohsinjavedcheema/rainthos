import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';

// Lazy load components to improve initial bundle size
const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./components/Hero'));
const Features = lazy(() => import('./components/Features'));
const TeamSection = lazy(() => import('./components/TeamMembers'));
const DevOpsCycle = lazy(() => import('./components/DevOpsCycle'));
const OfficeLocations = lazy(() => import('./components/OfficeLocations'));
const ContactSection = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const CareersPage = lazy(() => import('./components/Career'));

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

// Custom hook to manage intersection observer with optimized options
const useOptimizedInView = (delay = 0) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Reduced threshold for earlier loading
    rootMargin: '50px 0px', // Pre-load elements before they're visible
  });

  return { ref, inView };
};

function App() {
  // Optimized scroll-triggered animations with staggered delays
  const { ref: featuresRef, inView: featuresInView } = useOptimizedInView(300);
  const { ref: teamRef, inView: teamInView } = useOptimizedInView(100);
  const { ref: devOpsRef, inView: devOpsInView } = useOptimizedInView(600);
  const { ref: locationRef, inView: locationInView } = useOptimizedInView(300);
  const { ref: contactRef, inView: contactInView } = useOptimizedInView(400);
  const { ref: footerRef, inView: footerInView } = useOptimizedInView(500);

  // Reusable animation class to reduce CSS duplication
  const getAnimationClass = (isVisible) =>
    `transition-all duration-300 ease-out transform ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
    }`;

  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Suspense fallback={<LoadingSpinner />}>
                  <div id="home">
                    <Hero />
                  </div>

                  <div id="services" ref={featuresRef} className={getAnimationClass(featuresInView)}>
                    <Features />
                  </div>

                  <div id="our-team" ref={teamRef} className={getAnimationClass(teamInView)}>
                    <TeamSection />
                  </div>

                  <div id="how-it-works" ref={devOpsRef} className={getAnimationClass(devOpsInView)}>
                    <DevOpsCycle />
                  </div>

                  <div id="locations" ref={locationRef} className={getAnimationClass(locationInView)}>
                    <OfficeLocations />
                  </div>

                  <div id="contact-us" ref={contactRef} className={getAnimationClass(contactInView)}>
                    <ContactSection />
                  </div>

                  <div id="footer" ref={footerRef} className={getAnimationClass(footerInView)}>
                    <Footer />
                  </div>
                </Suspense>
              </>
            }
          />
          <Route
            path="/careers"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <CareersPage />
              </Suspense>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;