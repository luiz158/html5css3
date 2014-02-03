var taskList = [];

var add = function(text){

	var task = {done: false};
	task.text = text;
	taskList.push(task);
};

var remove = function(text){
	var selected = -1;

	iterate(function(task, index){
		if(task.text === text){
			selected = index;
		}
	});

	taskList.splice(selected,1);
};

var doTask = function(text){
	iterate(function(task){
		if(task.text === text){
			task.done = true;
		}
	});
};

var doneList = function(text){
	var doneTasks = [];

	iterate(function(task){
		if(task.done){
			doneTasks.push(task);
		}
	});

	return doneTasks;
};


var pendingList = function(text){
	var pendingTasks = [];

	iterate(function(task){
		if(!task.done){
			pendingTasks.push(task);
		}
	});

	return pendingTasks;
};


var allList = function(text){
	return taskList;
};

var toConsole = function(){
	var textToPrint = '';

	iterate(function(task){
		textToPrint += "Text: " +  task.text + " Done: " + task.done + "\n";
	});

	console.log(textToPrint);
};


var iterate = function(operation){
	for(var i = 0; i < taskList.length; i++){
		operation(taskList[i], i);
	}
};

