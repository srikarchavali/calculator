

import {handleClick, clear, backspace, calculate } from "app.js"

const keypad = () =>{
window.addEventListener("keydown", (e) => {
    switch(e.which){
      case 27:
        clear();
        break;
      case 8:
        backspace();
        break;
      case 13:
        calculate();
        break
      case 107:
        handleClick();
        break
      default:
      }
    })
}

export default keypad