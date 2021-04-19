import React from 'react';
import editSvg from './edit.svg'


const Edit = (i, onEdit) => {
    const editTask = (i) => {
        // onEdit(i);
        return 0;
    }

    return (
        <button onClick={editTask(i)}>
            <img src = {editSvg} alt = "edit icon"/>
        </button>
    );
}

export default Edit;
