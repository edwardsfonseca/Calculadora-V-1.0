import './App.css';
const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.id === "=") {
      display.value = + display.value; // tambien puedes usar la funcion eval para evaluar el valor :D
    } else if (btn.id === "ac") {
      display.value = "";
    } else if (btn.id == "de") {
      display.value = display.value.slice(0, -1);
    } else {
      display.value += btn.id;
    }
  })
});
function App() {
  return (
    <div className="App">
      <div className="calculadora">
        <input type='text' id='display' disabled />
        <br />
        <button id='ac' className='operador'>AC</button>
        <button id='de' className='operador'>DE</button>
        <button id='.' className='operador'>.</button>
        <button id='/' className='operador'>/</button>
        <br />
        <button id='7'>7</button>
        <button id='8'>8</button>
        <button id='9'>9</button>
        <button id='*' className='operador'>*</button>
        <br />
        <button id='4'>4</button>
        <button id='5'>5</button>
        <button id='6'>6</button>
        <button id='-' className='operador'>-</button>
        <br />
        <button id='1' >1</button>
        <button id='2' >2</button>
        <button id='3' >3</button>
        <button id='+' className='operador'>+</button>
        <br />
        <button id='00' >00</button>
        <button id='0' >0</button>
        <button id='=' className='igual'>=</button>
        <br />
      </div>
    </div>
  );
}

export default App;
