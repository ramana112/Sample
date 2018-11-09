let myTodos = {
    day : 'mon',
    meetings : 0,
    meetDone : 0,
}

let addMeetings = function(todo, meet=0){
    todo.meetings = todo.meetings+meet
}
let meetDone = function(todo, meet=0){
    todo.meetDone = todo.meetDone-meet
}

let reset = function(todo){
    meetings = 0
    meetDone = 0
}

let getSummary = function(todo){
    let meetLeft = todo.meetings+todo.meetDone
    return `you have ${meetLeft} meetings today`
}

addMeetings(myTodos, 4)
addMeetings(myTodos, 2)

meetDone(myTodos,5)
console.log(myTodos)
console.log(getSummary(myTodos))