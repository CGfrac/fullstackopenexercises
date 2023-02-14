import { useState } from 'react'

const DisplayCounter = ({ text, counter }) => {
  return (
    <p>{text} {counter}</p>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementCounter = (counter, setter) => setter(counter + 1)

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={() => incrementCounter(good, setGood)} text="good" />
      <Button handleClick={() => incrementCounter(neutral, setNeutral)} text="neutral" />
      <Button handleClick={() => incrementCounter(bad, setBad)} text="bad" />
      <h2>statistics</h2>
      <DisplayCounter text="good" counter={good} />
      <DisplayCounter text="neutral" counter={neutral} />
      <DisplayCounter text="bad" counter={bad} />
    </div>
  )
}

export default App