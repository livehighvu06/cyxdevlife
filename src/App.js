import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Import components
import Background from "./components/Background";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import About from "./pages/About";
import Bio from "./pages/Bio";
import Skill from "./pages/Skill";
import Portfolio from "./pages/Portfolio";
import AnimatedRoute from "./components/animations/AnimatedRoute";

const App = () => (
  <Router>
    <Background>
      <main className="p-5 md:px-20 lg:px-30">
        <Header />
        <Container>
          <Hero />
          <AnimatePresence mode="wait">
            <Routes>
              <Route
                path="/cyxdevlife"
                element={
                  <AnimatedRoute>
                    <Home />
                  </AnimatedRoute>
                }
              />
              <Route
                path="/cyxdevlife/about"
                element={
                  <AnimatedRoute>
                    <About />
                  </AnimatedRoute>
                }
              />
              <Route
                path="/cyxdevlife/bio"
                element={
                  <AnimatedRoute>
                    <Bio />
                  </AnimatedRoute>
                }
              />
              <Route
                path="/cyxdevlife/skill"
                element={
                  <AnimatedRoute>
                    <Skill />
                  </AnimatedRoute>
                }
              />
              <Route
                path="/cyxdevlife/portfolio"
                element={
                  <AnimatedRoute>
                    <Portfolio />
                  </AnimatedRoute>
                }
              />
            </Routes>
          </AnimatePresence>
        </Container>
        <Footer />
      </main>
    </Background>
  </Router>
);
export default App;
