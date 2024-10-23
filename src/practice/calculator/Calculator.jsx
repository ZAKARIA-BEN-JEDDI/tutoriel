import React, { useEffect, useState } from 'react'
import './main.css'
export default function Calculator() {
  const [part1 , setpart1] = useState('')
  const [part2 , setpart2] = useState('')
  const [operator , setoperator] = useState('')
  const [opr , setopr] = useState('')
  const [result , setresult] = useState('')
  const handleClickNumber = (e) => {
    e.preventDefault();
    const n1 = e.target.textContent;
    if (part2.length === 0 && operator.length === 0) {
      setpart1(prevState => prevState+ n1);
    }
    if (part1.length !== 0 && operator.length > 0 ) {
      setpart2(prevState => prevState+n1)
    }
  };
  const handelClickOperateur = (e) =>{
    e.preventDefault()
    setoperator(e.target.textContent)
  }

  const handelClear = () =>{
    setpart1([])
    setpart2([])
    setoperator('')
  }

  const handelClickCalc = () =>{
    let r;
    switch (operator) {
      case '+':
        setresult(part1 + part2)
        console.log( Number(part1) + Number(part2) );
        break;
      case '-':
        console.log( Number(part1) - Number(part2) );
        break;
      case '*':
        console.log( Number(part1) * Number(part2) );
        break;
      case '/':
        console.log( Number(part1) / Number(part2) );
        break;
      default:
        break;
    }
    handelClear()
  }

  useEffect(() => {
    setopr(`${part1} ${operator} ${part2}`)
  }, [part1,part2,operator,opr,result]);

  return (
    <div class="container">
    <form action="" name="calc" class="calculator">
      <input type="text" class="value" readonly name="txt" value={opr}/>
      <span onClick={handelClear} class="num clear"><i>C</i></span>
      <span onClick={handelClickOperateur} class="num"><i>/</i></span>
      <span onClick={handelClickOperateur} class="num"><i>*</i></span>
      <span onClick={handleClickNumber} class="num"><i>7</i></span>
      <span onClick={handleClickNumber} class="num"><i>8</i></span>
      <span onClick={handleClickNumber} class="num"><i>9</i></span>
      <span onClick={handelClickOperateur} class="num"><i>-</i></span>
      <span onClick={handleClickNumber} class="num"><i>4</i></span>
      <span onClick={handleClickNumber} class="num"><i>5</i></span>
      <span onClick={handleClickNumber} class="num"><i>6</i></span>
      <span onClick={handelClickOperateur} class="num plus"><i>+</i></span>
      <span onClick={handleClickNumber} class="num"><i>1</i></span>
      <span onClick={handleClickNumber} class="num"><i>2</i></span>
      <span onClick={handleClickNumber} class="num"><i>3</i></span>
      <span onClick={handleClickNumber} class="num"><i>0</i></span>
      <span onClick={handleClickNumber} class="num"><i>00</i></span>
      <span class="num"><i>.</i></span>
  
  <span onClick={handelClickCalc} class="num equal"><i>=</i></span>
    </form>
  </div>
  )
}
