import { useState } from 'react';

const AddTask = ({ createTask }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('Entrou')

        if (!text) {
            alert('Insert a task text');
            return;
        }
        const task = {
            text: text,
            day: day,
            reminder: reminder
        }

        createTask(task);
        setText('');
        setDay('');
        setReminder(false);
    }
    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Task text'></input>
            </div>

            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' value={day} onChange={(e) => setDay(e.target.value)} placeholder='09 Out 22h30'></input>
            </div>

            <div className='form-control form-control-check'>
                <label htmlFor="reminder">Reminder</label>
                <input type='checkbox' checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} name='reminder'></input>

            </div>

            <button className="btn btn-block" onClick={onSubmit}>Save task</button>
        </form>
    )
}

export default AddTask;
