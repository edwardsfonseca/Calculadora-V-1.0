import './App.css';
import React,{useState} from "react";
function App() {
 /*  const display = document.querySelector("#display");
  const buttons = document.querySelectorAll("button");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.id == "=") {
        display.value = eval(display.value); // tambien puedes usar la funcion eval para evaluar el valor :D
      } else if (btn.id == "ac") {
        display.value = "";
      } else if (btn.id == "de") {
        display.value = display.value.slice(0, -1);
      } else {
        display.value += btn.id;
      }
    })
  }); */
  const [num, setNum] = useState(0);
  const [oldnum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();
  const [clears , setClear] = useState();

  function inputNum(e) {
    var input = e.target.value;
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }
 
  function clear() {
    
    setNum(0);
  }

  function porcentage() {
    setNum(num / 100);
  }
  function clear1(e){
    var DE = e.target.value;
    setClear(DE)
    
      setNum(num.slice(0,-1));
    
  }
  

  function operatorHandler(e) {
    var operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
   
  }

  function calculate() {
    if (operator === "/") {
      setNum(parseFloat(oldnum) / parseFloat(num));
    } else if (operator === "x") {
      setNum(parseFloat(oldnum) * parseFloat(num));
    } else if (operator === "-") {
        console.log(oldnum)
        console.log(num)
        console.log(oldnum-num)
      setNum(parseFloat(oldnum) - parseFloat(num));
    } else if (operator === "+") {
      setNum(parseFloat(oldnum) + parseFloat(num));
    } 
  }
  return (
    <div className="App">
      <div className="calculadora">
        <input type='text' id='display' disabled value={num} />
        <br />
        <button id='ac' className='operador' onClick={clear}>AC</button>
        <button id='de' className='operador'onClick={clear1}>DE</button>
        <button id='.' className='operador' onClick={porcentage}>%</button>
        <button id='/' className='operador' onClick={operatorHandler} value={"/"}>/</button>
        <br />
        <button id='7'onClick={inputNum} value={7}>7</button>
        <button id='8'onClick={inputNum} value={8}>8</button>
        <button id='9'onClick={inputNum} value={9}>9</button>
        <button id='x' className='operador'onClick={operatorHandler}value={"x"}>x</button>
        <br />
        <button id='4'onClick={inputNum} value={4}>4</button>
        <button id='5'onClick={inputNum} value={5}>5</button>
        <button id='6'onClick={inputNum} value={6}>6</button>
        <button id='-' className='operador'onClick={operatorHandler}value={"-"}>-</button>
        <br />
        <button id='1'onClick={inputNum} value={1} >1</button>
        <button id='2'onClick={inputNum} value={2} >2</button>
        <button id='3'onClick={inputNum} value={3} >3</button>
        <button id='+' className='operador'onClick={operatorHandler} value={"+"}>+</button>
        <br />
        <button id='00'onClick={inputNum} value={","} >,</button> {/* arreglar problema  */}
        <button id='0'onClick={inputNum} value={0} >0</button>
        <button id='=' className='igual'onClick={calculate} >=</button>
        <br />
      </div>
    </div>
  );
}

export default App;
