import React from "react";
import { useState } from "react";
import "./App.css";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";
function App() {
    const [slide, setSlide] = useState(0);

    const handleClick = (event: any) => {
        if (event.keyCode === 39) {
            setSlide(slide + 1);
        } else if (event.keyCode === 37) {
            setSlide(slide - 1);
        }
    };
    const RenderSlide = () => {
        switch (slide) {
            case 0:
                return <Slide1 />;
            case 1:
                return <Slide2 />;
            case 2:
                return <Slide3 />;
            case 3:
                return <Slide4 />
        }
    };
    document.addEventListener("keydown", handleClick);
    return <div className="App">{RenderSlide()}</div>;
}

export default App;
