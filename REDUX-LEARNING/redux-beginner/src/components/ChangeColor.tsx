import React, { useState } from "react";

export function ChangeColor() {
  const [color, setColor] = useState<string | null>("");

  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setColor(event.target.value);
        }}
      />
      <button>CHANGE COLOR</button>
    </div>
  );
}
