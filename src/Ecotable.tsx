const Ecotable = () => {
  // TODO: ADD IMAGES
  return (
    <table className="styled-table">
	<thead>
        <tr>
          <th>Name</th>
          <th>Picture</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Salmon</td>
          <td>
            <div className="image-container">
              <img src="salmon.jpg" alt="salmon" />
            </div>
          </td>
          <td>Biotic</td>
        </tr>
        <tr>
          <td>Shark</td>
          <td>
            <div className="image-container">
              <img src="shark.jpg" alt="shark" />
            </div>
          </td>
          <td>Biotic</td>
        </tr>
        <tr>
          <td>Coral</td>
          <td>
            <div className="image-container">
              <img src="coral.jpg" alt="coral" />
            </div>
          </td>
          <td>Biotic</td>
        </tr>
        <tr>
          <td>Dolphin</td>
          <td>
            <div className="image-container">
              <img src="dolphin.jpg" alt="dolphin" />
            </div>
          </td>
          <td>Biotic</td>
        </tr>
        <tr>
          <td>Whale</td>
          <td><div className="image-container"><img src="whale.jpg" alt="whale" /></div></td>
          <td>Biotic</td>
        </tr>
        <tr>
          <td>Turtle</td>
          <td><div className="image-container"><img src="turtle.jpg" alt="turtle" /></div></td>
          <td>Biotic</td>
        </tr>
        <tr>
          <td>Octopus</td>
          <td><div className="image-container"><img src="octopus.jpg" alt="octopus" /></div></td>
          <td>Biotic</td>
        </tr>
        <tr>
          <td>Sponge</td>
          <td><div className="image-container"><img src="sponge.jpg" alt="sponge" /></div></td>
          <td>Biotic</td>
        </tr>
        <tr>
          <td>Crab</td>
          <td><div className="image-container"><img src="crab.jpg" alt="crab" /></div></td>
          <td>Biotic</td>
        </tr>
        <tr>
          <td>Starfish</td>
          <td><div className="image-container"><img src="starfish.jpg" alt="starfish" /></div></td> {/* 10 so far*/}
          <td>Biotic</td>
        </tr>
        <tr>
          <td>Seaweed</td>
          <td><div className="image-container"><img src="seaweed.jpg" alt="seaweed" /></div></td>
          <td>Biotic</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Ecotable;
