import React from 'react';
import style from './InputForm.module.css'

const InputForm=({columns})=>{
    return(
        <form className={style.form_wrapper}>
            {columns.map(key=>{
                return <label>{key.text}<input name={key.id}/> </label>
            })}
            <button> Ok </button>

        </form>
    )

}

export default InputForm;