import React from 'react';
import './App.css';
import Footer from './component/Footer/Footer';
import Hero from './component/Hero/Hero';
import Pricing from './component/Pricing/Pricing';
import Team from './component/Team';
import WorkingHours from './component/WorkingHours/WorkingHours';


const App: React.FC = () => {
  return (
    <div className="font-sans">
      <Hero />
      <Pricing />
      <WorkingHours />
      <Team />
      <Footer />
    </div>
  );
}

export default App;