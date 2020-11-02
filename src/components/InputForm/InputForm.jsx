import React from 'react';
import style from './InputForm.module.css'

const InputForm=({columns,addRow})=>{
    const handleSubmit=(e)=>{
        let row = {};
        for (let el of columns){
            row[el.field] =  e.target[el.field].value;
        } 
        e.preventDefault();
        addRow(row);
        e.target = null;
    }
    return(
        <form onSubmit={handleSubmit} className={style.form_wrapper}>
            {columns.map(el=>{
                return <label className={style.input_label}>{el.text}<input name={el.field}/> </label>
            })}
            <button> Ok </button>

        </form>
    )

}

export default InputForm;