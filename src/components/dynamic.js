let columns=["Имя", "Профессия", "Пол", "Зависимость"];//заголовки для формирования таблицы
let table = document.getElementById("table");
generateHeader();

function readFile(input) {                             
    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function() {let result = JSON.parse(reader.result);
                                generateBody(result);
                               };
    reader.onerror = function() {console.log(reader.error);};
    }
    
function addLine(){
    let line = {
        "Имя" : document.getElementById("name").value,
        "Профессия" : document.getElementById("profession").value,
        "Пол" : document.getElementById("sex").value,
        "Зависимость" : document.getElementById("addiction").value,
        };
        generateRow(line);
        form.reset();
}  
       
function generateHeader(){  
    let row = table.insertRow();
    for(let key of columns){
        let cell=row.insertCell();
        cell.innerHTML=key;
    }
}

function generateBody(arrayOfObj){
    for (let i = 0; i< arrayOfObj.length; i++){
        generateRow(arrayOfObj[i]);
     }
}  
      
function generateRow(line){
    let row = table.insertRow();                             
    for (let key of columns){ 
        cell=row.insertCell();
        if(line.hasOwnProperty(key)){ cell.innerHTML = line[key]
        } else {cell.innerHTML = " ";}
         }
    buttonCell = row.insertCell();
    deleteButton = document.createElement("button");
    buttonCell.appendChild(deleteButton); 
    deleteButton.innerHTML= "Удалить";
    deleteButton.setAttribute("onclick", "remove(this)");       
}

function remove (button){
         table.deleteRow(button.parentNode.parentNode.rowIndex);
}

function showForm(button){
    let form = document.getElementById("form");
    if(button.value == 0){
       button.innerHTML="скрыть форму";
       button.value=1;
       form.style="display:block";
       
    }else{button.innerHTML="показать форму";
          button.value = 0;
          form.style="display:none";
          }
}
       
