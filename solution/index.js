const toDoButtonEl = document.getElementById("submit-add-to-do");
const inProgressElButtonEl = document.getElementById("submit-add-in-progress");
const doneButtonEl = document.getElementById("submit-add-done");

toDoButtonEl.addEventListener("click",addTaskToSection)
inProgressElButtonEl.addEventListener("click",addTaskToSection)
doneButtonEl.addEventListener("click",addTaskToSection)

// add a task to the correct section
function addTaskToCorrectSection({target}) {  
    if (target === toDoButtonEl || 
        target === inProgressElButtonEl || 
        target === doneButtonEl ){
            
        const section = target.closest("section"); //find the section of the submit event
        let inputTextValue = section.querySelector("input").value; // take the value of the input
        const task = document.createElement("li");
        if (inputTextValue === ""){ //if input text is not have a value ---> alert
            return alert("You did not enter a task")
        }
        task.textContent = inputTextValue;
        task.setAttribute("class", "task"); // add class attribut
        const ul = section.querySelector("ul");
        ul.insertBefore(task, ul.firstChild); // add before first child
        section.querySelector("input").value = ""; //reset input value
    }
}
