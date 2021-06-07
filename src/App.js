import React from 'react';
import './App.css';
import Section from './components/Section';

function App() {
  return (
    <>
    <div className="main_container">
       <Section img="model-s.jpg" modelName="Model S" desc="order online for touchless delivery" btnLeft="custom order" btnRight="existing inventory"/>
       <Section img="model-y.jpg" modelName="Model Y" desc="order online for touchless delivery" btnLeft="custom order" btnRight="existing inventory"/>
       <Section img="model-3.jpg" modelName="Model 3" desc="order online for touchless delivery" btnLeft="custom order" btnRight="existing inventory"/>
       <Section img="model-x.jpg" modelName="Model X" desc="order online for touchless delivery" btnLeft="custom order" btnRight="existing inventory"/>
       <Section img="solar-panel.jpg" modelName="Lowest Cost Solar Panels in America" desc="Money-back guarantee" btnLeft="custom order" btnRight="Learn more"/>
       <Section img="solar-roof.jpg" modelName="Solar for New Roofs" desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels" btnLeft="custom order" btnRight="learn more"/>
       <Section img="accessories.jpg" modelName="Accessories" desc="" btnLeft="shop now"/>
    </div>
    </>
  );
}

export default App;
