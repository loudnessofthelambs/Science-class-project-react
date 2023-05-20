import { useEffect, useState } from "react";
import { FoodChain } from "./FoodChain";

const Slide3 = () => {
	const foodChain1 = {image1: "seaweed.jpg", image2: "urchin.jpg", image3: "otter.jpg", image4: "shark.jpg"};
	const foodChain2 = {image5: "algae.jpg", image6: "urchin.jpg", image7: "clown.jpg", image8: "shark.jpg"};
	const foodChain3 = {image9: "seaweed.jpg", image10: "crab.jpg", image11: "salmon.jpg", image12: "pelican.jpg"};
	const foodChain4 = {image13: "seaweed.jpg", image14: "herring.jpg", image15: "salmon.jpg", image16: "whale.jpg"};
	const [textView, setTextView] = useState(false);
	const handleClick = () => {
		setTextView(!textView);
	}
	if (!textView) {
		return (
			<>
			<div className="chain-container">
				<FoodChain {...foodChain4} {...foodChain3} {...foodChain1} {...foodChain2} height={100} width={100} />
			</div>
			<button onClick={handleClick}>See animal names</button>
			</>
		);
	}
    return (
		<>
			<p>Seaweed -{'>'} Urchin -{'>'} Otter -{'>'} Shark</p>
			<p>Algae -{'>'} Urchin -{'>'} Clown -{'>'} Shark</p>
			<p>Seaweed -{'>'} Crab -{'>'} Salmon -{'>'} Pelican</p>
			<p>Seaweed -{'>'} Herring -{'>'} Salmon -{'>'} Whale</p>
			<button onClick={handleClick}>Go back to pictures</button>
		</>
	)
};

export default Slide3;
