// if there is not localStorage create 
if(!JSON.parse(localStorage.getItem("tasks"))){
    let data ={
        "todo": [],
        "in-progress": [],
        "done": []
    };
    localStorage.setItem("tasks" ,JSON.stringify(data))
}
else{ // if there is localStorage take it
    localStorage.getItem("tasks")
}

data = JSON.parse(localStorage.getItem("tasks"));

// add event listener for each cutton 
const toDoButtonEl = document.getElementById("submit-add-to-do");
const inProgressElButtonEl = document.getElementById("submit-add-in-progress");
const doneButtonEl = document.getElementById("submit-add-done");

toDoButtonEl.addEventListener("click",addTaskToSection)
inProgressElButtonEl.addEventListener("click",addTaskToSection)
doneButtonEl.addEventListener("click",addTaskToSection)

// add a task to the correct section
function addTaskToSection({target}) {  
    if (target === toDoButtonEl || 
        target === inProgressElButtonEl || 
        target === doneButtonEl ){
            
        const section = target.closest("section");                 // find the section of the add button event
        let inputTextValue = section.querySelector("input").value; // take the value of the input
        if (inputTextValue === ""){                                // input no value ---> alert
            return alert("You did not enter a task")
        }
        const ul = section.querySelector("ul");
        const newTask = createElement("li", inputTextValue, ["task"], 
                    {draggable:"true", contenteditable:true},
                    {click: editTask, mouseover: switchTasks, dragstart:dragStart})
        ul.insertBefore(newTask, ul.firstChild);                    // add before first child
        addTasksToLocal(target, inputTextValue)                     // update to local
        section.querySelector("input").value = "";                  // reset input value
    }
}

// update the task to local
function addTasksToLocal(target, newTask){

    const section = target.closest("section");
    let PropObj = section.id;
    if (target === toDoButtonEl){
        data[PropObj].unshift(newTask)
    }
    if (target === inProgressElButtonEl){
        data[PropObj].unshift(newTask)
    }
    if (target === doneButtonEl){
        data[PropObj].unshift(newTask)
    }
    localStorage.setItem("tasks",JSON.stringify(data))
}


// edit task function ---> edit the task if i dblclick
function editTask (event){
    const liEl = event.target;
    liEl.style.backgroundColor = "whitesmoke";                // if i edit the background is change
    const oldValue = liEl.textContent;                        // remove the value data letter
    
    liEl.addEventListener("blur", Blur);
    function Blur (){
        const newValue = liEl.textContent;                    // add the correct value to data
        const section = liEl.closest("section");
        if (section === null) return;
        let PropObj = section.id;
        
        if (liEl.textContent === ""){                         // if text is empty ---> remove and alert
            alert("you delete your task");
            liEl.remove(); 
            let index = data[PropObj].indexOf(oldValue);
            data[PropObj].splice(index,1);
        }
        else{                                                 // else ---> uptade the task in data
            let index = data[PropObj].indexOf(oldValue);
            data[PropObj].splice(index,1,newValue);
            console.log(data)
        }
        liEl.style.backgroundColor="rgb(192, 236, 172)";      // change the background agian
        localStorage.setItem("tasks",JSON.stringify(data))    // change the local storage to data
    }
}

// function switchTasks ---> switchTasks
let liEl;
function switchTasks(e){
    liEl = e.target;
    document.onkeydown= e=>{
        if(liEl !== undefined){   
        const liValue = liEl.textContent;                           // value of li
        const section = liEl.closest("section");
        let PropObj = section.id;                                   // for the data
        
        if (e.altKey && e.key === '1'){
            let ul = document.querySelector(".to-do-tasks");        
            ul.insertBefore(liEl,ul.firstChild);                    // push to dom
            data["todo"].unshift(liValue);                          // push to first in data
            let index = data[PropObj].indexOf(liValue);             // get the index
            data[PropObj].splice(index,1);                          // remove from data
        }
        else if (e.altKey && e.key === '2'){
        let ul = document.querySelector(".in-progress-tasks");       
        ul.insertBefore(liEl,ul.firstChild);
        data["in-progress"].unshift(liValue);                      
        let index = data[PropObj].indexOf(liValue);
        data[PropObj].splice(index,1);
        }
        else if (e.altKey && e.key === '3'){
            let ul = document.querySelector(".done-tasks");
            ul.insertBefore(liEl,ul.firstChild);
            data["done"].unshift(liValue);
            let index = data[PropObj].indexOf(liValue);
            data[PropObj].splice(index,1);
        }
        else return;
        
        liEl = undefined;
    }   
    localStorage.setItem("tasks",JSON.stringify(data))                // update to local
}   
}

// function searchTask ---> tasks hidden what is irrelevant 
// add envet listtener to search
const searchEl = document.getElementById("search");
searchEl.addEventListener("keyup",searchTask)

function searchTask() {
    let searchInput = document.getElementById('search').value;      // get the value of search
    searchInput = searchInput.toLowerCase();
    let allLi = document.getElementsByClassName('task');            // get all li elements 
    
    for (i = 0; i < allLi.length; i++) { 
        if (!allLi[i].innerHTML.toLowerCase().includes(searchInput)) {
            allLi[i].style.display = "none";
        }
        else {
            allLi[i].style.display = "list-item";                 
        }
    }
}

    }
}
// create an element 
function createElement(tagName, text , classes = [], attributes = {}, eventListeners = {}){

    const element = document.createElement(tagName);

    // text in the element
    element.textContent = text;

    // Classes
    for(const cls of classes) {
      element.classList.add(cls);
    }
    // Attributes
    for (const attr in attributes) {
      element.setAttribute(attr, attributes[attr]);
    }
    // Event
    for (act in eventListeners) {
      element.addEventListener(act, eventListeners[act]);
    }
    return element;
}

// print the data
printData();
function printData(){
    const ules= document.querySelectorAll("ul");
    for(let ul of ules){ 
        ul.addEventListener("drop",dragDrop);                // add enentlistener to each ul
        ul.addEventListener("dragover",dragOver);            // drop and over
    
        if (ul.classList.contains("to-do-tasks")){
            for(let task of data["todo"]){
                ul.append(createElement("li", task, ["task"], {draggable:"true", contenteditable:true}, 
                {dblclick: editTask, mouseover: switchTasks, dragstart:dragStart}));
            }   
        }
        if (ul.classList.contains("in-progress-tasks")){
            for(let task of data["in-progress"]){
                ul.append(createElement("li", task,["task"], {draggable:"true", contenteditable:true}, 
                {dblclick: editTask, mouseover: switchTasks, dragstart:dragStart}));
            }   
        }
        if (ul.classList.contains("done-tasks")){
            for(let task of data["done"]){
                ul.append(createElement("li", task, ["task"], {draggable:"true", contenteditable:true}, 
                {dblclick: editTask, mouseover: switchTasks, dragstart:dragStart}));
            }    
        }
    }
}

