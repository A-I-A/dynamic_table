import React from 'react';
import style from './InputForm.module.css'

const InputForm=({columns})=>{
    const handleSubmit=(e)=>{
       alert(columns.map(el=>{return e.target[el.field].value;
       }));
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