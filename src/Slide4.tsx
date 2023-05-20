const Slide4 = () => {
    return ( 
        <>
        <div className="pyramid-container">
            <div className="trapezoid" style={{position:"relative",top:450 ,left:0, width:600,height:20}}>
            </div>
            <div className="image-container" style={{position:"absolute",top:490,left:690,width:300,height:300}}><img src="algae.jpg" alt="test" style={{width: 40, height: 40}}/><p>algae</p></div>
            <div className="image-container" style={{position:"absolute",top:490,left:800,width:300,height:300}}><img src="seaweed.jpg" alt="test" style={{width: 40, height: 40}}/><p>seaweed</p></div>
            <div className="image-container" style={{position:"absolute",top:490,left:890,width:300,height:300}}><img src="coral.jpg" alt="test" style={{width: 40, height: 40}}/><p>coral</p></div>
            <div className="image-container" style={{position:"absolute",top:530,left:990,width:300,height:300}}><img src="kelp.jpg" alt="test" style={{width: 40, height: 40}}/><p>kelp</p></div>
            <div className="image-container" style={{position:"absolute",top:530,left:870,width:300,height:300}}><img src="seagrass.jpg" alt="test" style={{width: 40, height: 40}}/><p>seagrass</p></div>
            <div className="image-container" style={{position:"absolute",top:530,left:750,width:300,height:300}}><img src="plankton.jpg" alt="test" style={{width: 40, height: 40}}/><p>plankton</p></div>
            <div className="trapezoid" style={{position:"relative",top:220 ,left:118, width:355,height:20, borderBottomColor: "green"}}></div>
            <div className="image-container" style={{position:"absolute",top:370,left:750,width:300,height:300}}><img src="turtle.jpg" alt="test" style={{width: 40, height: 40}}/><p>turtle</p></div>
            <div className="image-container" style={{position:"absolute",top:370,left:850,width:300,height:300}}><img src="crab.jpg" alt="test" style={{width: 40, height: 40}}/><p>crab</p></div>
            <div className="image-container" style={{position:"absolute",top:370,left:640,width:300,height:300}}><img src="urchin.jpg" alt="test" style={{width: 40, height: 40}}/><p>urchin</p></div>
            <div className="image-container" style={{position:"absolute",top:415,left:690,width:300,height:300}}><img src="herring.jpg" alt="test" style={{width: 40, height: 40}}/><p>herring</p></div>
            <div className="trapezoid" style={{position:"relative",top:-10 ,left:205, width:175,height:20, borderBottomColor: "blue"}}></div>
            <div className="image-container" style={{position:"absolute",top:290,left:696,width:300,height:300}}><img src="salmon.jpg" alt="test" style={{width: 40, height: 40}}/><p>salmon</p></div>
            <div className="image-container" style={{position:"absolute",top:290,left:840,width:300,height:300}}><img src="clown.jpg" alt="test" style={{width: 40, height: 40}}/><p>clown</p></div>
            <div className="image-container" style={{position:"absolute",top:260,left:780,width:300,height:300}}><img src="otter.jpg" alt="test" style={{width: 40, height: 40}}/><p>otter</p></div>
            <div className="trapezoid" style={{position:"relative",top:-240 ,left:275, width:40,height:20, borderBottomColor: "black"}}></div>
            <div className="image-container" style={{position:"absolute",top:200,left:780,width:300,height:300}}><img src="shark.jpg" alt="test" style={{width: 40, height: 40}}/><p>shark</p></div>
            <div className="image-container" style={{position:"absolute",top:150,left:780,width:300,height:300}}><img src="whale.jpg" alt="test" style={{width: 40, height: 40}}/><p>whale</p></div>
        </div>
        </>
    );
}
 
export default Slide4;