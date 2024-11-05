import React, { useRef, useState ,useCallback } from 'react';
// export default function Usecallback(){
//   const handelcklick = useCallback(() =>{
//     const a = 2 ;
//     const b = 10 ;
//     console.log(a+b)
//   })
//   return (
//     <div>
//       <button onClick={handelcklick}>UseClick Effect</button>
//     </div>
//   )
// }


export default function UseMemoEffect() {
  const numberValueRef = useRef(0);
  const [n, setN] = useState(0);
  const msstart = performance.now()
  const handleClick = () => {
    setN(Number(numberValueRef.current.value)); // Update the state with the input's current value
  };

  const calc = () =>{
    let value = n;
    for(let i = 0 ; i<1000 ; i++){
      value++
    }
    const msend = performance.now();
    console.log(msstart - msend)
  }

  return (
    <div>
      <input type="number" ref={numberValueRef} />
      <button onClick={handleClick}>Use Memo Effect</button>
    </div>
  ); 
}