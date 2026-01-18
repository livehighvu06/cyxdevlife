import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { routes,RouteType } from "./routes";

// Import components
import Background from "./components/Background";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimatedRoute from "./components/animations/AnimatedRoute";
import LoadingSpinner from "./components/animations/LoadingSpinner";

const App: React.FC = () => (
  <Router>
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
export default App;
