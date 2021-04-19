import React from 'react';
import Edit from './edit'



const ToDoItem = (i, onEdit) => {
    const resolvedClass = {
        textDecorationLine : 'line-through',
        color : 'gray'
    }
    return (

           <div className = "todoitem">
            <div className = "input">
                <input type = "checkbox" 
                defaultChecked = {i.completed}
                onChange = {i.hchange}
                />         
            </div>

               <div className = "description">
                    <p style = {i.completed === true ? resolvedClass : {}}>
                        {i.description}
                 </p>           
                </div>
           
                <Edit item = {i} onEdit = {onEdit}/>
        </div>
    )
}

export default ToDoItem;