import React from 'react';
import { useState } from 'react';
import InputForm from '../InputForm/InputForm';
import Table from '../Table/Table';

let state = {characters:[{"id":1, "name":"Кейс","occupation":"хакер","sex":"мужчина","addiction":"амфетамин"},
                         {"id":2,"name":"Молли","occupation":"уличный самурай","sex":"женщина","addiction":""},
                         {"id":3,"name":"Корто","occupation":"отставной военный","sex":"мужчина","addiction":""},
                         {"id":4,"name":"Флинн","occupation":"торговец","sex":"мужчина","addiction":"никотин"}],
            columns : [{ field: "name", text: "Имя" },
                       { field: "occupation", text: "Род занятий" },
                       { field: "sex", text: "Пол" },
                       { field: "addiction", text: "Зависимость" }]}


const TableContainer = () => {
    let [rows,setRow] = useState(state.characters)
    let [formVisibility, setFormVisibility]=useState(false)
    const deleteRow=(id)=>{
         setRow(rows.filter(el=>{return id !== el.id}))
    }
    return (
    <div>
        <Table  data={rows} columns={state.columns} deleteRow={deleteRow}/>
        <button onClick={()=>{setFormVisibility(!formVisibility)}}> {formVisibility ? "Скрыть" : "Показать"} </button> 
        { formVisibility && <InputForm columns={state.columns} />}
    </div>
    )
}

export default TableContainer;