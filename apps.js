// const listItems = document.getElementById("list-items");
// const input = document.querySelector(".task-input");
// const addBtn = document.querySelector(".add");
// listItems.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (e.target.id == "completed") {
//     e.target.parentElement.classList.toggle("completed-task");
//   }
//   if (e.target.id == "delete") {
//     e.target.parentElement.remove();
//   }
// });
// addBtn.addEventListener("click", (e) => {
//   // e.target.classList.toggle("no-active")

//     let li = document.createElement("li");
//     li.innerHTML =
//     `
//       <li>
//           ${input.value}
//           <span id="completed"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColr" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg></span>
//           <span id="delete"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBo="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"/></svg></span>
//       </li>
//   `
//     ;
//   listItems.append(li);
//   input.value = "";
// });