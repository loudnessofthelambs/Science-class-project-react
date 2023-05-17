import React from "react";
import Arrow from "./Arrow";
export function FoodChain(props: any) {
    const { image, height, width } = props;
    return (
        <>
            <div className="image-container">
                <img
                    src={image}
                    alt=""
                    style={{ height: height, width: width }}
                />
            </div>

            <Arrow />
        </>
    );
}
