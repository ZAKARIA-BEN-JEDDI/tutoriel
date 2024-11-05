import React, { useRef, useState } from 'react';

export default function UseMemoEffect() {
  const numberValueRef = useRef(0);
  const [n, setN] = useState(0);

  const handleClick = () => {
    setN(Number(numberValueRef.current.value)); // Update the state with the input's current value
  };

  return (
    <div>
      <input type="number" ref={numberValueRef} />
      <button onClick={handleClick}>Use Memo Effect</button>
    </div>
  );
}