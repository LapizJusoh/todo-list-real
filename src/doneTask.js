import tasklistArray from "./taskListArray.js";
import display from "./display.js";

export default function doneTask(event, index) {
  event.preventDefault();

  tasklistArray.splice(index, 1);
  display();
}
