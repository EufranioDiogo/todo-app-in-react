import { useState } from 'react';

const AddTask = () => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

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
                <input type='checkbox' value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} name='reminder'></input>

            </div>

            <input type='submit' value='Save task' className="btn btn-block"></input>
        </form>
    )
}

export default AddTask;
