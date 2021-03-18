import React from "react";
import ChooseYourMs from "./components/ChooseYourMs";
import GamePass from "./components/GamePass";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MSResponse from "./components/MSResponse";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import ThisHoliday from "./components/ThisHoliday";

function App() {
  return (
    <div >
      <Header />
      <Hero />
      <ChooseYourMs />
      <Section2 />
      <GamePass />
      <Section3 />
      <MSResponse />
      <ThisHoliday />
    </div>
  );
}

export default App;
