import tasklistArray from "./taskListArray";
import addTask from "./addTask.js";
import doneTask from "./doneTask.js";

export default function display() {
  const content = document.querySelector("#content");

  if (document.querySelector("#content ol")) {
    // reset display list
    content.removeChild(document.querySelector("#content ol"));

    const ol = document.createElement("ol");
    content.appendChild(ol);
  }

  const taskList = document.querySelector("#content ol");

  for (let i = 0; i < tasklistArray.length + 1; i++) {
    const li = document.createElement("li");
    const div = document.createElement("div");

    if (i !== tasklistArray.length) {
      // if within the array
      const p = document.createElement("p");
      const doneBtn = document.createElement("button");

      p.innerHTML = tasklistArray[i].task;
      doneBtn.innerHTML = "Done";
      doneBtn.addEventListener("click", (e) => doneTask(e, i));

      taskList.appendChild(li);
      li.appendChild(div);
      div.appendChild(p);
      div.appendChild(doneBtn);
    } else {
      // if beyond the array
      const input = document.createElement("input");
      const addBtn = document.createElement("button");

      li.style.listStyle = "none";
      input.setAttribute("type", "text");
      input.setAttribute("name", "task");
      input.setAttribute("id", "task");
      addBtn.innerHTML = "Add";
      addBtn.addEventListener("click", (e) => addTask(e, input.value));

      taskList.appendChild(li);
      li.appendChild(div);
      div.appendChild(input);
      div.appendChild(addBtn);
    }
  }
}
