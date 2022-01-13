//@ts-nocheck
import React, {useState} from 'react';
import './App.css';

export function App() {

  /*
  const[string, setString] =useState(""); 
  const[array, setArray] =useState([]); 
  const[let, setLet] =useState(); 
  */

  
  const[displayContent, setDisplayContent] = useState("");
  const[result , setResult] = useState("");
  const operators = ["sqrt","^","/","*","+","-"]; //nur zum Abgleichen ob es  bereits einen Input gegeben hat, bzw. was der input ist
  
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



  function handleInput(input){
    //abfrage - keine doppelten operatoren
    if(operators.includes(input) && operators.includes(displayContent.slice(-1)) ) 
    {
      return //mache nichts
    }
    //ansonsten:
    //const newInput = displayContent + input; //Typisierungsfehler????????????
    //setDisplayContent(newInput);
    setDisplayContent(displayContent + input); //wieder in die Tiefen von React schreiben
    //console.log(displayContent);
  }

  function deleteLastEntry(){
    const newList = [...displayContent]// so wandelt man einen String in ein array
    const lastElement = newList.pop(); //macht zwei Sachen: erstellt eine neue Variable (brauchen wier hier nicht) mit dem letzten Eintrag des array und nimmt es aus dem array raus
    setDisplayContent(newList);
  }


  function calculate(){
    //setResult(eval(displayContent).toString()); //Typisierungsfehler????????????
    //setDisplayContent(result);
    if(operators.includes(displayContent.slice(-1))){
      return; //falls das letzte Zeichen ein Operator ist, gib kein Ergebnis
    }

    setDisplayContent(eval(displayContent).toString()); //hier passiert Mathe

  }

  return(
    <div className='App'>
      <div className ="calculator">
        <div className='display'>
          <span>({result})</span>
           {displayContent}
        </div>

        <div className='operators'>
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

    
  