const inputText = document.getElementById("type-text");
const listContainer = document.getElementById("list-contanier");
function addTasks() {
  if (inputText.value=== "") {
    alert("You must write something in the text box");
  }
  else {
    let li = document.createElement("li");
    li.innerHTML = inputText.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "delete";
    li.appendChild(span);
  }
  inputText.value = "";
  saveTask();
}
listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("check");
      saveTask();
    }
    else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveTask();
    }
}, false);
function resetInput() {
  inputText.value = "";
  while (listContainer.firstChild) {
    listContainer.removeChild(listContainer.firstChild);
  }
}
function saveTask() {
  localStorage.setItem("task", listContainer.innerHTML)
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("task");
}
showTask();
