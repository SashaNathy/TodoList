//----------------------------Elementos del DOM ------------------------------
const inputValue = document.getElementById("nuevaTarea");
const totalTask = document.getElementById("total");
const completedTask = document.getElementById("realizadas");
const taskTable = document.querySelector("tbody");

let tareas = [
    { id: 1, description: "Llamar a papá", completed: false },
    {id: 2, description: "Comprar los regalos", completed: false },
    { id: 3, description: "Preparar la diapositiva", completed: false },
    { id: 4, description: "Hacer el informe", completed: false }
    ];

let tasks = [...tareas]; 

let lastId = 4;


const addTask = ()  => {
    const id = ++lastId;
    const newTask = {
        id, 
        description: inputValue.value, 
        completed: false
    }
    const addedTask = tasks.push(newTask);
    renderTable();
    
    // console.log(tasks);
    
    
    inputValue.value = "";
};

const renderTable = () => {
    let count = 0;
    let table = "";
    
    for(let task of tasks) {
        table +=  ` 
        <tr>
        <td>${task.id}</td>
        <td>${task.description}</td>
        <td><input type="checkbox" onClick="checkedId(${task.id}, this ${
            task.completed ? "checked" : ""
        })";/>
        </td>
        <td><button onClick="deleteItem(${task.id})" style=" font-weight: bolder; font-size: medium; border: none; color: red;">X</button></td>
        </tr>
        `;
        count++;
    };
    taskTable.innerHTML = table;
    totalTask.innerHTML = tasks.length;
    completedTask.innerHTML = countTasksCompleted();
    
};

const deleteItem = (id) => {
    const index = tasks.findIndex((task) => task.id == id);
    
    tasks.splice(index, 1);
    renderTable();
    
};

const countTasksCompleted = () => {
    const filterTask = tasks.filter((task) => task.completed == true);
    return filterTask.length;
}; 

const checkedId = (id, check) => {
    const findCheck = tasks.findIndex((task) => task.id == id);
    tasks[findCheck].completed = check.checked;
    completedTask.innerHTML = countTasksCompleted();
    
};

renderTable();

document.getElementById("sendTasks").addEventListener("click", () => {
    addTask();
    
});