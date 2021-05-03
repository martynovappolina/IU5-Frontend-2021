import React, {useState} from 'react';
import addSvg from './add.svg'

let n = 4;

const AddTask = ({tasks, onAddTask}) => {
    const [visibleForm, setFormVisible] = useState(false);
    const [inputValue, SetInputValue] = useState('');

    const ToggleFormVisible = () => {
        setFormVisible(!visibleForm);
        SetInputValue('');
    }

    const add = () => {
        const obj = { 
            id: n++,
            description: inputValue,
            completed: false
        }
        onAddTask(obj, n);
        ToggleFormVisible();
    }

    return(
        <div className = "task_form">
            {!visibleForm ? 
                    <div onClick = {ToggleFormVisible} className = "task_form_new">
                    <img src = {addSvg} alt = "add icon"/>
                    <span>Новая задача</span>
                </div> :
            <div className = "task_form_block">
            <input 
                 value = {inputValue}
                 className="field"
                 type="text"
                 placeholder="Текст задачи"
                 onChange = {e => SetInputValue(e.target.value)}
            />
         <button onClick = {add} className = "button">
             Добавить задачу
         </button>            
         <button onClick = {ToggleFormVisible} className = "button_gray">
             Отмена
         </button>
            </div>
                }

      </div>
    )
}

export default AddTask;