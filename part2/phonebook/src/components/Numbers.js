const Numbers = ({ persons }) => {
    return (
      <>
        {persons.map(person => 
          <div key={person.id}>
            {person.name} {person.number}
          </div>
        )}
      </>
    )
}

export default Numbers