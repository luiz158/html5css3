
var taskList = [];

var add = function(text){

	var task = {done: false};
	task.text = text;
	taskList.push(task);
}

var toConsole = function(){
	var textToPrint = '';

	for(var i = 0; i < taskList.length; i++){
		var task = taskList[i];
		textToPrint+="Text: " +  task.text + " Done: " + task.done;
	}

	console.log(textToPrint);
}


var remove = function(text){
	var i;

	for(i = 0; i < taskList.length; i++){
		var task = taskList[i];
		if(task.text === text){
			break;
		}
	}
	taskList.splice(i,1);
}

var doTask = function(text){

	for(var i = 0; i < taskList.length; i++){
		var task = taskList[i];
		if(task.text === text){
			task.done = true;
		}
	}
}

var doneList = function(text){

	var doneTasks = [];

	for(var i = 0; i < taskList.length; i++){
		var task = taskList[i];
		if(task.done){
			doneTasks.push(task);
		}
	}

	return doneTasks;
}


var pendingList = function(text){

	var pendingTasks = [];

	for(var i = 0; i < taskList.length; i++){
		var task = taskList[i];
		if(!task.done){
			pendingTasks.push(task);
		}
	}

	return pendingTasks;
}


var allList = function(text){
	return taskList;
}