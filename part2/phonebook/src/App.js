import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

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
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
  
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleChange = (event, callback) => {
    callback(event.target.value)
  }

  const personsToShow = filter.length
    ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={filter} onChange={event => handleChange(event, setFilter)} />
      </div>
      <h2>add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={event => handleChange(event, setNewName)} />
        </div>
        <div>
          number: <input value={newNumber} onChange={event => handleChange(event, setNewNumber)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personsToShow.map(person => 
        <div key={person.id}>
          {person.name} {person.number}
        </div>
      )}
    </div>
  )
}

export default App