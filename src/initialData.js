import tasklistEntry from "./taskDataConstructor";
import tasklistArray from "./taskListArray";

export default function initialData() {
  let cleanRoom = new tasklistEntry("Clean room","2024");
  let doHomework = new tasklistEntry("Do homework","2024");
  let brushTeeth = new tasklistEntry("Brush teeth","2024");
  
  tasklistArray.push(cleanRoom);
  tasklistArray.push(doHomework);
  tasklistArray.push(brushTeeth);
};