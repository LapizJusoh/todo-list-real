import tasklistArray from "./addTask";

export default function display() {
  const taskList = document.querySelector('#content ol');

  for(let i = 0; i < tasklistArray.length+1; i++ ) {
    const li = document.createElement('li');
    const div = document.createElement('div');

    if (i !== tasklistArray.length){
      const p = document.createElement('p');
      const doneBtn = document.createElement('button');

      p.innerHTML = tasklistArray[i].task;
      doneBtn.innerHTML = "Done";
      taskList.appendChild(li);
      li.appendChild(div);
      div.appendChild(p);
      div.appendChild(doneBtn);
    } else {
      const input = document.createElement('input');
      const addBtn = document.createElement('button');
  
      li.style.listStyle = "none";
      input.setAttribute("type","text");
      input.setAttribute("name","task");
      input.setAttribute("id","task");
      addBtn.innerHTML = "Add";
  
      taskList.appendChild(li);
      li.appendChild(div);
      div.appendChild(input);
      div.appendChild(addBtn);
    }
  }
}