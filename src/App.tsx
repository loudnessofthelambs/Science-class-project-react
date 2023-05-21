import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";
import Home from "./Slide0";
import Slide6 from "./Slide6";
import Slide7 from "./Slide7";


function App() {

    const [slide, setSlide] = useState(-1);

    const RenderSlide = () => {
        switch (slide) {
            case -1:
                return <Home />
            case 0:
                return <Slide1 />;
            case 1:
                return <Slide2 />;
            case 2:
                return <Slide3 />;
            case 3:
                return <Slide4 />
            case 5:
                return <Slide6 />
            case 6:
                return <Slide7 />
        }
    };
    useEffect(() => {
        const handleClick = (event: any) => {
            if (event.keyCode === 39) {
                setSlide(s => s+1);
            } else if (event.keyCode === 37) {
                setSlide(s => s-1);
            }
        };
        document.addEventListener("keydown", handleClick);
    
        return () => {
          document.removeEventListener("keydown", handleClick);
        };
      }, []);
    return <div className="App">{RenderSlide()}</div>;
}

export default App;
