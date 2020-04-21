import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'


const Display = props => <tr><td>{props.text}</td><td>{props.value}{props.char}</td></tr>

//const DisplayNeutral = props => <div id = {props.text}>{props.value}</div>
//const DisplayBad = props => <div id = {props.text}>{props.value}</div>
//const DisplayAll = props => <div id = {props.text}>{props.value}</div>
//const DisplayAvg = props => <div id = {props.text}>{props.value}</div>
//const DisplayPositive = props => <div id = {props.text}>{props.value}</div>


const Button = (props) => (

  <button  onClick={props.onClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {

  return(

    <div>
      <table>
        <tbody>
          <Display text = {props.text} value = {props.value} char = {props.char} />
        </tbody>
      </table>
    </div>
  )

}

const Statistics = (props) => {

  if(props.all===0){
    return (
      <div>
        <p>No feedback Given</p>
      </div>
    )
  }


  return (
    <div>
      <h1>Statistics</h1>
      <div id="goodVal">
        <StatisticLine text = "Good" value = {props.good} />
      </div>
      <div id="neutralVal">
        <StatisticLine text = "Neutral" value = {props.neutral} />
      </div>
      <div id="badVal">
        <StatisticLine text = "Bad" value = {props.bad} />
      </div>
      <div id="allVal">
        <StatisticLine text = "All" value = {props.all} />
      </div>
      <div id="avgVal">
        <StatisticLine text = "Average" value = {props.avg} />
      </div>
      <div id="avgPositive">
        <StatisticLine text = "Positive" value = {props.perc} char = '%'/>
      </div>
    </div>
  )

}


const App = () => {
  // tallenna napit omaan tilaansa

const [good, setValueGood] = useState(0);

const [neutral, setValueNeutral] = useState(0);

const [bad, setValueBad] = useState(0);

const [all, setValueAll] = useState(0);

const [avg, setValueAvg] = useState(0);

const [percentage, setValuePercentage] = useState(0);


const handleClickGood = () => {

  setToValueGood(good + 1);
  setToValueAll(all +1);

  setToValueAvg(((good + 1) - bad) / (all + 1));
  setTovaluePercentage((good+1) / (all +1) * 100);
  
}

const handleClickNeutral = () => {

  setToValueNeutral(neutral + 1);
  setToValueAll(all + 1);
  setToValueAvg((good - bad) / (all +1))
  setTovaluePercentage(good / (all +1) * 100);
}

const handleClickBad = () => {

  setToValueBad(bad + 1);
  setToValueAll(all + 1);
  setToValueAvg((good - (bad + 1)) / (all + 1));
  setTovaluePercentage(good / (all +1) * 100);
}

const setToValueGood = increment => {

  setValueGood(increment);
   
}

const setToValueNeutral = increment => {
  setValueNeutral(increment);
}

const setToValueBad = increment => {

  setValueBad(increment);
}

const setToValueAll = all => {

  setValueAll(all);

}

const setToValueAvg = avg => {

  
  setValueAvg(avg);

}

const setTovaluePercentage = perc => {

  setValuePercentage(perc);

}

  return (
    <div id = "palaute">
      <h1>Give Feedback</h1>
      <Button onClick={handleClickGood} text="Good"/>
      <Button onClick={handleClickNeutral} text="Neutral" />
      <Button onClick={handleClickBad} text="Bad" />
      <Statistics good={good} bad={bad} neutral={neutral} all={all} avg={avg} perc={percentage}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)