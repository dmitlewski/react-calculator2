//@ts-nocheck
import React, {useState} from 'react';
import './App.css';

// Set hier nur als optimierung
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
const operators = new Set(["sqrt","^","/","*","+","-"]); //nur zum Abgleichen ob es  bereits einen Input gegeben hat, bzw. was der input ist


export function App() {

  /*
  const[string, setString] =useState(""); 
  const[array, setArray] =useState([]); 
  const[let, setLet] =useState(); 
  */

  
  const [displayContent, setDisplayContent] = useState("");
  const [result, setResult] = useState("");
  
  //digit-buttons erzeugen
  function createDigits() {
    const digits =[];
    for (let i = 1; i < 10; i++){
      digits.push(
        <button 
          key={i} 
          onClick={function foo(){handleInput(i.toString())}}
          >{i}</button>
      );
    }
    return digits;
  }
  //digit-buttons erzeugen
  // function createDigits() {
  //   return [1,2,3,4,5,6,7,8,10].map(function makeButton(i) {
  //     return <button
  //               key={i}
  //               onClick={function foo(){handleInput(i.toString())}}
  //             >{i}</button>
  //   })
  // }
  // const createDigits = () =>
  //   [1,2,3,4,5,6,7,8,10].map(i =>
  //     <button
  //       key={i}
  //       onClick={function foo(){handleInput(i.toString())}}
  //     >{i}</button>
  //   )

  function handleInput(input){
    //abfrage - keine doppelten operatoren
    if(operators.has(input) && operators.has(displayContent.slice(-1)) )
    {
      return //mache nichts
    }
    //ansonsten:
    const newInput = displayContent + input; //Typisierungsfehler???????????? -> nope
    setDisplayContent(newInput);
    // setDisplayContent(displayContent + input); //wieder in die Tiefen von React schreiben
    //console.log(displayContent);

    try {
      setResult(eval(newInput).toString())
    } catch {
      setResult("error")
    }

  }

  function deleteLastEntry(){
    const newList = [...displayContent] // so wandelt man einen String in ein array
    // const [_firstItem, ...newList] = displayContent  // <- does not work :(
    // const lastElement = newList.pop(); //macht zwei Sachen: erstellt eine neue Variable (brauchen wier hier nicht) mit dem letzten Eintrag des array und nimmt es aus dem array raus
    newList.pop()  // side effect -> verändert newList in place
    setDisplayContent(newList.join(""));
  }


  function calculate(){
    //setResult(eval(displayContent).toString()); //Typisierungsfehler????????????
    //setDisplayContent(result);
    // if(operators.has(displayContent.slice(-1))){
    //   return; //falls das letzte Zeichen ein Operator ist, gib kein Ergebnis
    // }
    if (result === "error") {
      return
    }
    setDisplayContent(result); //hier passiert Mathe

  }

  return(
    <div className='App'>
      <div className ="calculator">
        <div className='display'>
          <span>({result})</span>
           {displayContent}
        </div>

        <div className='operators'>
          {/*["sqrt","^","/","*","+","-"].map(op =>
            <button key={op}
            onClick={function foo(){handleInput(op)}}
            >op</button>
          )*/}
          <button
          onClick={function foo(){handleInput("foo")}}
          >sqrt</button>
          <button
          onClick={function foo(){handleInput("foo2")}}
          >^</button>
          <button
          onClick={function foo(){handleInput("/")}}
          >/</button>
          <button
          onClick={function foo(){handleInput("*")}}
          >*</button>
          <button
          onClick={function foo(){handleInput("+")}}
          >+</button>
          <button
          onClick={function foo(){handleInput("-")}}
          >-</button>
          <button className='deleteButton'
          onClick={deleteLastEntry}
          >DEL</button>
        </div>

        <div className='digits'>
          {/*alle anderen Buttons erstellen*/}
          {createDigits()}
          <button
          onClick={function foo(){handleInput(0)}}
          >0</button>
          <button
          onClick={function foo(){handleInput(".")}}
          >.</button>
          <button
          onClick={calculate}
          >=</button>
        </div>
      </div>
    </div>  
  );
}
