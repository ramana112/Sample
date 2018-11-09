let myTodos = {
    day : 'mon',
    meetings : 0,
    meetDone : 0,

    addMeetings : function(num){
        this.meetings = this.meetings+num
    },
    summarry : function(){
        return `you have ${this.meetings} meetings today!`
    }
}

//myTodos.addMeetings(6)

console.log(myTodos.summarry())

//assignments
//handle meetings
//create a fn that can reset entire day