import { useState } from 'react'

const StatisticLine = ({ text, value }) => <p>{text} {value}</p>

const Statistics = ({ good, bad, neutral, total }) => {
  if (total === 0) {
    return (
      <div>No feedback given</div>
    )
  }

  const calculateAverageScore = () =>  (good - bad) / total
  const calculatePositiveRatio = () =>  `${good / total * 100}%`

  return (
    <>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={total} />
      <StatisticLine text="average" value={calculateAverageScore()} />
      <StatisticLine text="positive" value={calculatePositiveRatio()} />
    </>
  )
}

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const incrementCounter = (counter, setter) => {
    setter(counter + 1)
    setTotal(total + 1)
  }

  return (
    <div>
      <h2>give feedback</h2>

      <Button handleClick={() => incrementCounter(good, setGood)} text="good" />
      <Button handleClick={() => incrementCounter(neutral, setNeutral)} text="neutral" />
      <Button handleClick={() => incrementCounter(bad, setBad)} text="bad" />

      <h2>statistics</h2>

      <Statistics good={good} bad={bad} neutral={neutral} total={total} />
    </div>
  )
}

export default App