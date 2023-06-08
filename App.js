import './App.css';

function MyButton(props) {
  return (
    <button>
      {props.text}
    </button>
  );
}

function Welcome(props){
  return(
    <p>Welcome {props.name}!!</p>
  );
}

export default function MyApp() {
  const buttonText = "clickme";
  const userName = "Raghu Gaikwad";
  return (
    <div>
      <h1>Welcome to my First React-app</h1>
      <MyButton text={buttonText}/>
      <Welcome name={userName}/>
    </div>
  );
}
