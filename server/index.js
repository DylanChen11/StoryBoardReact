//if moving down, set all above to -1. if moving up, sett all below to +1

var fs = require('fs');
var data = fs.readFileSync('./tasks.JSON', 'utf8');
var TASKS = JSON.parse(data);
console.log(TASKS)
const express = require('express');

const app = express();
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies



app.listen(3030, () =>
  console.log('Express server is running on localhost:3030')
);

function sendTasks(request, response) {
  let tasksToSend = [...TASKS]
  const reqStage = request.query.stage
  const reqPhase = request.query.phase
  console.log("sending all")
  console.log("Requests: ", reqPhase, reqStage)
  if (reqPhase) {
    tasksToSend = tasksToSend.filter(task => task.phase.toString() === reqPhase)
  }
  if (reqStage) {
    tasksToSend = tasksToSend.filter(task => task.stage.toString() === reqStage)
  }
  response.send(tasksToSend);
}

function writeToFile() {
  const JSONTasks = JSON.stringify(TASKS)
  fs.writeFile("./tasks.JSON", JSONTasks, (err) => {
    if (err) console.log(err);
    console.log("Successfully Written to File.");
  });
}

/** REST CALLS */

/** GET */
//Test
app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

/** For retrieving tasks. Takes two optional params of phase and stage which will accordingly return only those tasks with the passed stage/phase
 * example use:
 * fetch('/api/tasks?phase=1&stage=2').then(...)
*/
app.get('/api/tasks', sendTasks);


/** POST */
/** For adding a new task. Takes a JSON object as parameter and adds it to tasks 
 * 
 * Example of JSON object:
 * 
  {
    "id": "task19",
    "content": "DATA Synch 999",
    "points": 2,
    "stage": 5,
    "phase": 1,
    "relativePosition": 2
  }
 * If a task id is already in the array, it is overwritten instead of added
*/
app.post('/api/tasks', (req, res) => {
  let newTask = req.body
  console.log("GOT TASK >", newTask)
  if (newTask && (newTask.id || newTask.id === 0)) {
    //check if task already inside, if yes then overide else push the new task
    let taskIndex = TASKS.findIndex(task => task.id === newTask.id)
    if (taskIndex >= 0) {
      TASKS[taskIndex] = newTask
    }
    else {
      TASKS.push(newTask);
    }
    writeToFile();
  }
  res.send("ok");
})

/** For saving new state, ideally when app is closed */
app.post('/api/save', (req, res) => {
  let newTasks = req.body
  console.log("GOT TASK TO SAVE>", req.body)
  if (newTasks) {
    newTasks.forEach(newTask => {
      let taskIndex = TASKS.findIndex(task => task.id === newTask.id)
      if (taskIndex >= 0) {
        TASKS[taskIndex] = newTask
      }
      else {
        TASKS.push(newTask);
      }
    })
    writeToFile();
  }
  res.send("ok");
})

/** For resetting all data */
app.post('/api/reset', (_, res) => {
  TASKS = []
  writeToFile();
  res.send("ok");
})

/** DELETE */
/** For deleting a task. Takes a string of the task id to delete i.e. {"id:" : "task18"} */
app.delete('/api/tasks', (req, res) => {
  let delTaskID = req.body.id
  console.log("GOT TASK ID >", delTaskID)
  let delIndex = TASKS.findIndex(task => task.id === delTaskID)
  console.log("Found at >", delIndex)
  if (delIndex >= 0) {
    TASKS.splice(delIndex, 1);
    console.log("After Deleting >", TASKS)
    writeToFile();
  }
  res.send("ok");
})

