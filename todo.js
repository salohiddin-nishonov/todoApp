// const addBtn = document.querySelector(".btn");
// const input = document.querySelector("input");
// const lists = document.getElementById("list-items"); 

// addBtn.addEventListener("click", (e) => {
//     e.preventDefault(); 
    
//     let list = document.createElement("li");
//     list.classList.add("task-list");

//     list.innerHTML = `
//       ${input.value}
//         <img id="completed" src="./complete.svg" alt="Complete">
//         <img id="delete" src="./delete.svg" alt="Delete">
//     `;
    
//     lists.append(list); 
//     input.value = ""; 
// });


// lists.addEventListener("click", (e) => {
//     if (e.target.id == "completed") {
//         e.target.parentElement.classList.toggle("completed-task"); 
//     }
//     if (e.target.id == "delete") {
//         e.target.parentElement.remove(); 
//     }
// });
// const btn = document.querySelector("#btn");
// const taskInput = document.querySelector("#taskInput");
 
// let todos = JSON.localStorage.getItem("todos") || []
// btn.addEventListener("click",(e) => {
//     e.preventDefault();
//     let todo = document.createElement("li");
//     todo.innerHTML = taskInput.valeu;
//     listItems.append(todo);
//     todos.push({id: todos.length + 1, title: taskInput.valeu});
//     localStorage.setItem("todos",JSON.stringify(todos));
//     taskInput.valeu = "";
// });

// addEventListener("DOMContentLoaded",() => {
//     let.localtodos = JSON.parse(localStorage.getItem("todos"));
//     console.log(localtodos);
//     localtodos.map((item) => {
//         let todo = document.createElement("li");
//         todo.innerHTML = item.title; 
//         listItems.append(todo);   
//     });
    
// });
const addBtn = document.querySelector(".btn");
const input = document.querySelector("#taskInput");
const lists = document.getElementById("list-items");

addBtn.addEventListener("click", (e) => {
    e.preventDefault(); 
    
    let list = document.createElement("li");
    list.classList.add("task-list");

    list.innerHTML = `
      ${input.value}
        <img id="completed" src="./complete.svg" alt="Complete">
        <img id="delete" src="./delete.svg" alt="Delete">
    `;
    lists.append(list);
    input.value = ""; 
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push({ id: todos.length + 1, title: list.innerHTML });
    localStorage.setItem("todos", JSON.stringify(todos));
});

lists.addEventListener("click", (e) => {
    if (e.target.id == "completed") {
        e.target.parentElement.classList.toggle("completed-task");
    }
    if (e.target.id == "delete") {
        e.target.parentElement.remove();
        let todos = JSON.parse(localStorage.getItem("todos"));
        todos = todos.filter(task => task.title !== e.target.parentElement.innerHTML);
        localStorage.setItem("todos", JSON.stringify(todos));
    }
});

document.addEventListener("DOMContentLoaded", () => {
    let localTodos = JSON.parse(localStorage.getItem("todos")) || [];
    
    localTodos.forEach(item => {
        let todo = document.createElement("li");
        todo.innerHTML = item.title;
        lists.append(todo);
    });
});