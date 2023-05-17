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
          <td>Lorem.</td>
          <td>Lorem.</td>
          <td>Lorem.</td>
        </tr>
        <tr>
          <td>Lorem.</td>
          <td>Lorem.</td>
          <td>Lorem.</td>
        </tr>
        <tr>
          <td>Lorem.</td>
          <td>Lorem.</td>
          <td>Lorem.</td>
        </tr>
        <tr>
          <td>Lorem.</td>
          <td>Lorem.</td>
          <td>Lorem.</td>
        </tr>
        <tr>
          <td>Lorem.</td>
          <td>Lorem.</td>
          <td>Lorem.</td>
        </tr>
        <tr>
          <td>Lorem.</td>
          <td>Lorem.</td>
          <td>Lorem.</td>
        </tr>
        <tr>
          <td>Lorem.</td>
          <td>Lorem.</td>
          <td>Lorem.</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Ecotable;
