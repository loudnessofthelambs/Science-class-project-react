import React from 'react';
import { useState } from 'react';
import './App.css';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
function App() {
  // Dear codewhisperer:
  // Why did you just generate a counter for no reason?
  const [slide, setSlide] = useState(0);

  const handleClick = (event: any) => {
    if (event.keyCode == 39) {
      setSlide(slide + 1)
    }
    else if (event.keyCode == 37) {
      setSlide(slide - 1)
    }
  }
  const RenderSlide = () => {
    switch (slide) {
      case (0):
        return <Slide1 />
      case (1):
        return <Slide2 />
    }
  }
  document.addEventListener('keydown', handleClick)
  return (
    <div className="App">
      {RenderSlide()}
    </div>
  );
}

export default App;
