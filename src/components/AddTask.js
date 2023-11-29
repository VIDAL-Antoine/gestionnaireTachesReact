import { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [date, setDate] = useState(new Date())
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Veuillez ajouter un titre de tâche valide.')
      return
    }

    const formattedDate = format(date, 'dd/MM/yyyy')
    const selectedDate = new Date(formattedDate.split('/').reverse().join('-'));
    const timeDifference = selectedDate - new Date();
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    

    onAdd({ text, formattedDate, daysRemaining, reminder })

    setText('')
    setDate(new Date())
    setReminder(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Tâche</label>
        <input type='text' placeholder='Titre de la tâche' value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className='form-control'>
        <label>Horaire</label>
        <DatePicker selected={date} onChange={(date) => setDate(date)} dateFormat="dd/MM/yyyy" />
      </div>
      <div className='form-control form-control-check'>
        <label>Mettre un rappel</label>
        <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
      </div>

      <input type='submit' value='Enregistrer la tâche' className='btn btn-block' />
    </form>
  )
}

export default AddTask
