import React from "react";
import {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
} from "./components";

const App = () => (
  <div className="bg-secondary w-full overflow-hidden">
    <div>
      <Navbar />
      <Billing />
      <Business/>
      <CTA/>
      <CardDeal/>
      <Clients/>
      <Stats/>
      <Footer/>
      <Testimonials/>
      <Hero/>
    </div>
  </div>
);

export default App;
