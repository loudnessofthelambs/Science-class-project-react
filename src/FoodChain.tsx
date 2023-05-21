import React from "react";
import './Arrow.css';
export function FoodChain(props: any) {
    const { image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, height, width } = props;
    return (
        <>
            <div className="image-container">
                <img
                    src={image1}
                    alt=""
                    style={{ height: height, width: width, position: "absolute",  top: 0 ,left:0}}
                />
            </div>
			<div className="arrow" style={{top: 10, left: 210}}>
                <div className="rectangle"></div>
                <div className="triangle"></div>
            </div>
            
			<div className="image-container">
                <img
                    src={image2}
                    alt=""
                    style={{ height: height, width: width, position: "absolute",  top: 0, left: 250}}
                />
            </div>
			<div className="arrow" style={{top: 10, left: 470}}>
                <div className="rectangle"></div>
                <div className="triangle"></div>
            </div>
			
			<div className="image-container">
                <img
                    src={image3}
                    alt=""
                    style={{ height: height, width: width, position: "absolute",  top: 0, left: 525}}
                />
            </div>
			<div className="arrow" style={{top: 10, left: 750}}>
                <div className="rectangle"></div>
                <div className="triangle"></div>
            </div>
			<div className="image-container">
                <img
                    src={image4}
                    alt=""
                    style={{ height: height, width: width, position: "absolute",  top: 0, left: 800}}
                />
            </div>
            <div style={{position: "relative", top: 110}}>
            <div className="image-container">
                <img
                    src={image5}
                    alt=""
                    style={{ height: height, width: width, position: "absolute",  top: 0 ,left:0}}
                />
            </div>
			<div className="arrow" style={{top: 10, left: 210}}>
                <div className="rectangle"></div>
                <div className="triangle"></div>
            </div>
            
			<div className="image-container">
                <img
                    src={image6}
                    alt=""
                    style={{ height: height, width: width, position: "absolute",  top: 0, left: 250}}
                />
            </div>
			<div className="arrow" style={{top: 10, left: 470}}>
                <div className="rectangle"></div>
                <div className="triangle"></div>
            </div>
			
			<div className="image-container">
                <img
                    src={image7}
                    alt=""
                    style={{ height: height, width: width, position: "absolute",  top: 0, left: 525}}
                />
            </div>
			<div className="arrow" style={{top: 10, left: 750}}>
                <div className="rectangle"></div>
                <div className="triangle"></div>
            </div>
			<div className="image-container">
                <img
                    src={image8}
                    alt=""
                    style={{ height: height, width: width, position: "absolute",  top: 0, left: 800}}
                />
            </div>
            </div>
            <div style={{position: "relative", top: 220}}>
            <div className="image-container">
                <img
                    src={image9}
                    alt=""
                    style={{ height: height, width: width, position: "absolute",  top: 0 ,left:0}}
                />
            </div>
			<div className="arrow" style={{top: 10, left: 210}}>
                <div className="rectangle"></div>
                <div className="triangle"></div>
            </div>
            
			<div className="image-container">
                <img
                    src={image10}
                    alt=""
                    style={{ height: height, width: width, position: "absolute",  top: 0, left: 250}}
                />
            </div>
			<div className="arrow" style={{top: 10, left: 470}}>
                <div className="rectangle"></div>
                <div className="triangle"></div>
            </div>
			
			<div className="image-container">
                <img
                    src={image11}
                    alt=""
                    style={{ height: height, width: width, position: "absolute",  top: 0, left: 525}}
                />
            </div>
			<div className="arrow" style={{top: 10, left: 750}}>
                <div className="rectangle"></div>
                <div className="triangle"></div>
            </div>
			<div className="image-container">
                <img
                    src={image12}
                    alt=""
                    style={{ height: height, width: width, position: "absolute",  top: 0, left: 800}}
                />
            </div>
            </div>
            <div style={{position: "relative", top: 350}}>
            <div className="image-container">
                <img
                    src={image13}
                    alt=""
                    style={{ height: height, width: width, position: "absolute",  top: 0 ,left:0}}
                />
            </div>
			<div className="arrow" style={{top: 10, left: 210}}>
                <div className="rectangle"></div>
                <div className="triangle"></div>
            </div>
            
			<div className="image-container">
                <img
                    src={image14}
                    alt=""
                    style={{ height: height, width: width, position: "absolute",  top: 0, left: 250}}
                />
            </div>
			<div className="arrow" style={{top: 10, left: 470}}>
                <div className="rectangle"></div>
                <div className="triangle"></div>
            </div>
			
			<div className="image-container">
                <img
                    src={image15}
                    alt=""
                    style={{ height: height, width: width, position: "absolute",  top: 0, left: 525}}
                />
            </div>
			<div className="arrow" style={{top: 10, left: 750}}>
                <div className="rectangle"></div>
                <div className="triangle"></div>
            </div>
			<div className="image-container">
                <img
                    src={image16}
                    alt=""
                    style={{ height: height, width: width, position: "absolute",  top: 0, left: 800}}
                />
            </div>
            </div>

        </>
    );
}
