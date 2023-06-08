import './App.css';
import React, {useState} from 'react';

function MyButton(props) {

  const handleClick = () =>{
    //perform action on click
    alert("Button clickd")
  }
  return (
    <button onClick={handleClick}>
      {props.text}
    </button>
  );
}

function Welcome(props){
  const [count , setCount] = useState(0);
   
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };
  
  return(
    <div>
      <p>Welcome {props.name}!!</p>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
    
  );
}

export default function MyApp() {
  const [buttonText, setButtonText] = useState("clickme");
  const userName = "Raghu Gaikwad";

  const handleButtonClick = () => {
    setButtonText("Button in myApp clciked!")
  }; 
  return (
    <div>
      <h1>Welcome to my First React-app</h1>
      <MyButton text={buttonText}/>
      <Welcome name={userName}/>
      <button onClick={handleButtonClick}>Click in MyApp</button>
    </div>
  );
}
