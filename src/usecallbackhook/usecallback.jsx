import React  , {useCallback} from 'react'; 
export default function Usecallback(){
  const handelcklick = useCallback(() =>{
    const a = 2 ;
    const b = 10 ;
    console.log(a+b)
  })
  return (
    <div>
      <button onClick={handelcklick}>UseClick Effect</button>
    </div>
  )
}