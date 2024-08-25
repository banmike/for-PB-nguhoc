import React, { useState } from "react";

const ToggleButtons = () => {
  const [power, setPower] = useState(false);
  const [fan, setFan] = useState(false);
  const [ac, setAc] = useState(false);

  return (
    <div className="toggle-buttons">
      <div>
        <span>Power</span>
        <input
          type="checkbox"
          checked={power}
          onChange={() => setPower(!power)}
        />
      </div>
      <div>
        <span>Fan</span>
        <input type="checkbox" checked={fan} onChange={() => setFan(!fan)} />
      </div>
      <div>
        <span>AC</span>
        <input type="checkbox" checked={ac} onChange={() => setAc(!ac)} />
      </div>
    </div>
  );
};

export default ToggleButtons;
