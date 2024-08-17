import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { routes } from "./routes";

// Import components
import Background from "./components/Background";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AnimatedRoute from "./components/animations/AnimatedRoute";
import LoadingSpinner from "./components/animations/LoadingSpinner";

const App = () => (
  <Router>
    <Background>
      <main className="flex flex-col min-h-screen p-5 md:px-20 lg:px-30">
        <Header />
        <Container>
          <Hero />
          <AnimatePresence mode="wait">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                {routes.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={<AnimatedRoute>{route.element}</AnimatedRoute>}
                  />
                ))}
              </Routes>
            </Suspense>
          </AnimatePresence>
        </Container>
        <Footer />
      </main>
    </Background>
  </Router>
);
export default App;
