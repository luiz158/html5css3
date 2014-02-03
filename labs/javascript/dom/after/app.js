(function( window ) {

	var display = function(){
		var todolist  = document.getElementById('content');
		var input = _createInput();
		var button = _createButton('Add');

		todolist.appendChild(input);
		todolist.appendChild(button);
	};

	var _createInput = function(text){
		return document.createElement('input');
	};

	var _createButton = function(text) {
		var button = document.createElement('button');
		button.appendChild(document.createTextNode(text));

		return button;
	};

	display();

})( window );