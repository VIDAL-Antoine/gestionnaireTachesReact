import { FaTimes } from 'react-icons/fa'
import { IoIosNotificationsOutline, IoIosNotifications } from 'react-icons/io';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder && 'reminder'}`}>
      <h3 className='daysRemaining'>{task.daysRemaining} jours</h3>
      <div className='descriptionTask'>
        <h3>{task.text}</h3>
        <div style={{ marginLeft: 'auto' }}>
            {task.reminder ? (<IoIosNotifications size={30} style={{ cursor: 'pointer'}} onClick={() => onToggle(task.id)}/>) : 
                             (<IoIosNotificationsOutline size={30} style={{ cursor: 'pointer' }} onClick={() => onToggle(task.id)}/>)}
            <FaTimes size={30} style={{ marginLeft: '20px', color: 'red' , cursor: 'pointer'}} onClick={() => onDelete(task.id)} />
            <p>{task.formattedDate}</p>
        </div>
      </div>
    </div>
  )
}

export default Task
