import React, {useState} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

export default function AddChore(props) {
    const [chore, setChore] = useState({
        name: '',
        due_date: '',
        completed: false,
        points: ''

    })

    const handleChanges = e => {
        setChore({
            ...chore,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
            .post('/chores', chore)
            .then(res => {
                props.history.push('/chores')
            })
            .catch(err => console.log('error from chore POST', err))
    }

    return (
        <div className='chore-form-container'>
            <form className='chore-form' onSubmit={handleSubmit}>
                <h3>Chore Name: </h3>
                <input className="chore-input"
                        type="text"
                        name="name"
                        value={chore.name}
                        onChange={handleChanges} />
                <h3>Chore Due Date: </h3>
                <input className="chore-input"
                        type="date"
                        name="due_date"
                        value={chore.due_date}
                        onChange={handleChanges} />
                <h3>Points: </h3>        
                <input className="chore-input"
                        type="number"
                        name="points"
                        value={chore.points}
                        onChange={handleChanges} />
                            
                <button className='add-chore-button' >Add Chore</button>
            </form>
            
        </div>
    )
}