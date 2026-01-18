import React from "react";
import Container from "../components/Container";
import Introduction from "../components/Introduction";
import Hero from "../components/Hero";

const Home: React.FC = () => {
  return (
    <div className="min-h-[90vh] flex items-center">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text */}
        <div className="order-2 md:order-1">
          <Introduction />
        </div>
        
        {/* Right Side: Visual */}
        <div className="order-1 md:order-2">
          <Hero />
        </div>
      </Container>
    </div>
  );
};
export default Home;
