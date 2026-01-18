import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { routes, RouteType } from "./routes";

// Import components
import Background from "./components/Background";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimatedRoute from "./components/animations/AnimatedRoute";
import LoadingSpinner from "./components/animations/LoadingSpinner";

const App: React.FC = () => {
  const basename = process.env.NODE_ENV === "production" ? "/cyxdevlife" : "";

  // Preload all components after initial render
  useEffect(() => {
    const preloadComponents = async () => {
      // Small delay to prioritize initial page load
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      routes.forEach(route => {
        // Attempt to preload in background
        try {
          route.preload();
        } catch (error) {
          // Ignore errors during preloading, they will be handled by regular navigation if needed
          console.debug(`Failed to preload ${route.path}`, error);
        }
      });
    };

    preloadComponents();
  }, []);

  return (
    <Router basename={basename}>
    <Background>
      <Header />
      <main className="flex-1 w-full pb-20">
        <AnimatePresence mode="wait">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {routes.map((route:RouteType) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<AnimatedRoute>{<route.element />}</AnimatedRoute>}
                />
              ))}
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>
      <Footer />
    </Background>
  </Router>
  );
};
export default App;
