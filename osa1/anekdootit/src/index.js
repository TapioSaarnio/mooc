import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'


const Button = (props) => (

  <span id = {props.text}>
    <button onClick={props.onClick}>{props.text}</button>
  </span>
)

const Anecdote = (props) => (

  <div id = "Anecdote">
    <h1>
      Anecdote of the day
    </h1>
    <p>{props.text}</p>
<p>has points {props.points}</p>
  </div>
)

const Winner = mostVotes => (

  <div id = "mostVotes">
    <h1>
      Anecdote with most votes
    </h1>
    <p>
      {mostVotes.text}
    </p>
  </div>
)
//const Winner= (props) => (

  //div
//)

const App = (props) => {

  const [selected, setSelected] = useState(0);
  const [arr, setArr] = useState(new Uint8Array(6));
  const [winner, setWinner] = useState(0);

  
  
  const handleClickNext = () => {

    setToSelected(Math.round(Math.random() * 5));
    
  }

  const handleClickVote = () => {
  
    const copy = new Uint8Array(6);

    arr[selected] = arr[selected] + 1;

    let i = 0;

    for(i = 0; i < arr.length; i++){

      copy[i] = arr[i];

    }

    setToArr(copy);

    setToWinner();
    console.log(arr[winner]);

  }

  const setToWinner = () => {

    if(arr[selected] > arr[winner]){

      setWinner(selected);

    }
    
    console.log(winner);
  }

  const setToSelected = RandomNum => {

    setSelected(RandomNum);

  }

  const setToArr = copy =>{

    setArr(copy);
    
  }

  return (
    <div>
      <Anecdote text={props.anecdotes[selected]} points = {arr[selected]} />
      <Button onClick={handleClickNext} text="next anecdote"  />
      <Button onClick={handleClickVote} text = "vote" />
      <Winner text={props.anecdotes[winner]} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)