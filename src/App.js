import Slider from './components/Slider'
import React from "react";
import Booksection from "./components/Booksection";
import Destination from "./components/Destination";
import Footer from "./components/Footor";
import Header from "./components/Header";
import Vediobac from "./components/Vediobac";

function App() {
  return (
    <div>

      <Header/>
      <Vediobac/>
      <Destination/>
      <Booksection/>
      <Slider/>
      <Footer/>
    </div>
  );
}

export default App;
