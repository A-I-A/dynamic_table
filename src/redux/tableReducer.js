const ADD_ROW = 'ADD_ROW';
const DELETE_ROW = 'DELETE_ROW';

 let initialState = {data:[{"id":1, "name":"Кейс","occupation":"хакер","sex":"мужчина","addiction":"амфетамин"},
                           {"id":2,"name":"Молли","occupation":"уличный самурай","sex":"женщина","addiction":""},
                           {"id":3,"name":"Корто","occupation":"отставной военный","sex":"мужчина","addiction":""},
                           {"id":4,"name":"Флинн","occupation":"торговец","sex":"мужчина","addiction":"никотин"}],
                           idCount : 4,
                    columns : [{ field: "name", text: "Имя" },
                               { field: "occupation", text: "Род занятий" },
                               { field: "sex", text: "Пол" },
                               { field: "addiction", text: "Зависимость" }]}

export const tableReducer=(state=initialState, action)=>{
    switch(action.type){
        case ADD_ROW : return {...state, idCount : state.idCount+1, data : [...state.data, {...action.row, id : state.idCount +1}]}
                                
        case DELETE_ROW: return {...state, data : state.data.filter(el=> {return action.id !== el.id})}
        default : return state;

    }

}

export const deleteRow=(id)=>{
    return {type: DELETE_ROW, id}
}

export const addRow=(row)=>{
    return {type: ADD_ROW, row}
}

