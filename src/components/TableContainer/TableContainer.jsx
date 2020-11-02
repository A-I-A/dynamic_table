import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addRow, deleteRow } from '../../redux/tableReducer';
import InputForm from '../InputForm/InputForm';
import Table from '../Table/Table';


const  TableContainer = (props)=>{
    let [isFormVisible, setFormVisibility] = useState(false);

    return (
    <div>
        <Table  data={props.data} columns={props.columns} deleteRow={props.deleteRow}/>
        <button onClick={()=>{setFormVisibility(!isFormVisible)}}> {isFormVisible ? "Скрыть" : "Показать"} </button> 
        {isFormVisible && <InputForm columns={props.columns} addRow={props.addRow}/>}
    </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        data : state.data,
        columns : state.columns}  
}


export default connect(mapStateToProps,{deleteRow,addRow})(TableContainer);

