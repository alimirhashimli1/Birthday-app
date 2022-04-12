import React from 'react'

const List1 = ({people}) => {
  return (
    <>
    {people.map(person => {
        const splittedData = person.birthday.split('.')
        const today = new Date()
        return <article key={person.id} className='person'>
            <img src={person.image} alt={person.name} />
            <div>
                <h4>{person.name}</h4>
                <p>{today.getFullYear() - splittedData[2]} years old</p>
            </div>
        </article>
    })}
    </>
  )
}

export default List1