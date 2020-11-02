import React from 'react';
import style from './Table.module.css';

const Table =({data, columns ,deleteRow})=>{
     return (
    <table className={style.table}>   
         <TableHeader columns={columns}  />
          <TableBody columns={columns} rows={data} deleteRow={deleteRow}/>
       </table>);
}

 const TableHeader=({columns})=>{
    return(
       <thead>
          {columns.map(key=>{return  <TableCell value={key.text}/>})}
       </thead>
    )
 }

 const TableBody=({rows,columns,deleteRow})=>{
    let ejectColumnValues= columns.map(el=>{return el.id});
    return(
       <tbody>{rows.map(el=>{return <TableRow row={el} columns={ejectColumnValues} deleteRow={deleteRow}/>})}</tbody>
    )
 }

 const TableRow=({row, columns,deleteRow})=>{
    return(
       <tr>
          {columns.map(key=>{
             return <TableCell value={row[key]}/>})}
       <td><button onClick={()=>{deleteRow(row.id)}}>-</button></td>
       </tr>
    )
 } 

 const TableCell = ({value})=>{
    return <td className={style.cell}> {value} </td> 
 }

export default Table;

