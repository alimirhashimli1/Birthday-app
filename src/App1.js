import React, { useState } from 'react';
import { useEffect } from 'react';
import data from './data';
import List1 from './List1';

const App1 = () => {
    const people = data
    const [todaysBirthday, setTodaysBirthday] = useState([])


    useEffect(() => {
        const users = []
        const today = new Date()
        people.forEach(person => {
            const splittedData = person.birthday.split('.')
            if (Number(splittedData[0]) === today.getDate() && Number(splittedData[1]) === today.getMonth()+1) {
                users.push(person)
            }
        })
        setTodaysBirthday(users)
    }, [])



  return (
    <main>
        <section className='container'>
            <h3>{todaysBirthday.length} birthday{'s' ? todaysBirthday.length > 1 : todaysBirthday.length < 1} today</h3>
            <List1 people={todaysBirthday}/>
            <button onClick={() => setTodaysBirthday([])}>Clear all</button>
        </section>
    </main>
  )
}

export default App1