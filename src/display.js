import tasklistArray from "./addTask";

export default function display() {
  for(let i = 0; i < tasklistArray.length; i++ ) {
    const taskList = document.querySelector('#content li')
    const li = document.createElement('li');
    const div = document.createElement('div');
    const p = document.createElement('p');
    const doneBtn = document.createElement('button');

    p.innerHTML = tasklistArray[i].task;
  }
}