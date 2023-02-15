import { useState } from 'react'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const AnecdoteDisplay = ({ anecdote, votes }) => {
  return (
    <>
      <div>{anecdote}</div>
      <div>has {votes} votes</div>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  
  const _randomIndex = (length) => Math.floor(Math.random() * length)

  const showRandomAnecdote = () => {
    let newSelected

    do {
      newSelected = _randomIndex(anecdotes.length)
    } while (newSelected === selected)

    setSelected(newSelected)
  }

  const addVote = () => {
    const votesCopy = [...votes]
    votesCopy[selected]++

    setVotes(votesCopy)
  }

  const _findMostVotes = () => {
    let maxVotes = 0

    for (const vote of votes) {
      maxVotes = vote > maxVotes ? vote : maxVotes
    }

    return maxVotes
  }

  const _findMostVotedAnecdote = () => {
    const maxVotes = _findMostVotes()
    const indices = []

    for (let i = 0; i < votes.length; i++) {
      if (votes[i] === maxVotes) {
        indices.push(i)
      }
    }

    return indices[_randomIndex(indices.length)]
  }

  const mostVotedIndex = _findMostVotedAnecdote()

  return (
    <>
      <h2>Anecdote of the day</h2>
      <AnecdoteDisplay anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button handleClick={addVote} text="vote" />
      <Button handleClick={showRandomAnecdote} text="next anecdote" />

      <h2>Anecdote with most votes</h2>
      <AnecdoteDisplay anecdote={anecdotes[mostVotedIndex]} votes={votes[mostVotedIndex]} />
    </>
  )
}

export default App