import tasklistEntry from "./taskDataConstructor.js";
import tasklistArray from "./taskListArray.js";
import display from "./display.js";

export default function addTask(event, newTask) {
  event.preventDefault();

  const task = new tasklistEntry(newTask, "2024");
  tasklistArray.push(task);
  display();
}
