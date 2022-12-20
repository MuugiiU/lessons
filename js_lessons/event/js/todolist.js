
const addbtn = document.getElementById("btn");//button id
const text = document.getElementById("text"); //input id
const task = document.getElementsByClassName("task")[0]//jagsaaliin id 

const addTodo = () => {
  // allTask array ruu ruu text iig nemne.
  let inputtext = text.value;
  allTask.push(inputtext);
  renderTodoApp();
};

addbtn.addEventListener("click", addTodo);

const deleteTodo = (index) => {
  console.log("II", index);
  allTask.splice(index, 1);
  renderTodoApp();
};
const allTask=[{name:"JS",status:true, priority:"high"},
               {name:"HTML",status:false,priority:"high"}];
const renderTodoApp = () => {
  //AllTask array aar delgetsend list haruulna
  task.innerHTML = "";
  for (let i = 0; i < allTask.length; i++) {
    const done=allTask[i].status ? "strikethrough":" ";
    const item = `   
                <div class="task">
                    <input type="text" class="text" readonly value="${allTask[i]}" />
                    <div class="actions">
                        <button class="edit"><i class="fas fa-pen"></i></button>
                        <button class="done"><i class="fas fa-check"></i></button>
                        <button class="delete" onclick="deleteTodo(${i})"><i class="fas fa-trash"></i></button>
                    </div>
                </div>`;
    taskList.innerHTML += item;
  }
};