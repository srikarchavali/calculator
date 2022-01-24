import React, {useState} from 'react';
import './App.css';
import { create, all } from 'mathjs'
// import {keypad} from 'keypad.js'

function App() {
  const [result, setResult] = useState("")
  const math = create(all, {})

  const handleClick = (e) => {
      setResult(result.concat(e.target.name))
  }

  const clear = ()=>{
        setResult("")
  }

  const backspace = () => {
      setResult(result.slice(0, result.length-1))
  }

  const calculate = () => {
    try{
      setResult((math.evaluate(result)).toPrecision(3));
     }catch(err){
      setResult("Error")
    }
  }

  window.addEventListener("keydown", (e) => {
    switch(e.which){
      case 27:
        clear();
        break;
      case 8:
        backspace();
        break;
      // case 13:
      //   calculate();
      //   break
      // case 107:
      //   handleClick();
      //   break
      // case 106:
      //   handleClick();
      //   break
      // case 111:
      //   handleClick();
      //   break
      // case 109:
      //   handleClick();
      //   break
      default:
      }
    })
  
  return (
    <div className='container'>
      <form>
        <input type="text" value={result}/>
      </form>
      <div className='keypad'>
      <button onClick={clear} id = "clear">Clear</button>
      <button onClick={backspace} id='backspace'>C</button>
      <button className='operation' name = "/" onClick={handleClick}>&divide;</button>
      <button name = "7" onClick={handleClick}>7</button>
      <button name = "8" onClick={handleClick}>8</button>
      <button name = "9" onClick={handleClick}>9</button>
      <button className='operation' name = "*" onClick={handleClick}>&times;</button>
      <button name = "4" onClick={handleClick}>4</button>
      <button name = "5" onClick={handleClick}>5</button>
      <button name = "6" onClick={handleClick}>6</button>
      <button className='operation' name = "-" onClick={handleClick}>&ndash;</button>
      <button name = "1" onClick={handleClick}>1</button>
      <button name = "2" onClick={handleClick}>2</button>
      <button name = "3" onClick={handleClick}>3</button>
      <button className='operation' name = "+" onClick={handleClick}>+</button>
      <button name = "0" onClick={handleClick}>0</button>
      <button name = "." onClick={handleClick}>.</button>
      <button onClick={calculate} id='result'>=</button>

      </div>

    </div>
  );
}

export default App;
