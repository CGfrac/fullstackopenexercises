import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const nameExists = () => {
    for (const person of persons) {
      if (person.name === newName) {
        return true
      }
    }
    return false
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (nameExists()) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const newPerson = {
        name: newName
      }
  
      setPersons(persons.concat(newPerson))
      setNewName('')
    }
  }

  const handleChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
        <li key={person.name}>
          {person.name}
        </li>
      )}
    </div>
  )
}

export default App