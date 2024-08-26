import React, { useState } from "react";

const ToggleButtons = () => {
  const [power, setPower] = useState(false);
  const [fan, setFan] = useState(false);
  const [ac, setAc] = useState(false);

  return (
    <div className="toggle-buttons">
      <div className="toggle-container">
        <span>Power</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={power}
            onChange={() => setPower(!power)}
          />
          <span className="slider"></span>
        </label>
      </div>
      <div className="toggle-container">
        <span>Fan</span>
        <label className="switch">
          <input type="checkbox" checked={fan} onChange={() => setFan(!fan)} />
          <span className="slider"></span>
        </label>
      </div>
      <div className="toggle-container">
        <span>AC</span>
        <label className="switch">
          <input type="checkbox" checked={ac} onChange={() => setAc(!ac)} />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
};

export default ToggleButtons;
