
document.getElementById('add').onclick = addInput;

function addInput() {
	var checkElem = document.getElementById('check-elem');
	var div = document.createElement('div');
	document.body.appendChild(div);
	div.setAttribute('class', 'container');
	var labels = document.getElementsByTagName('label');
	for (var i = 0; i < labels.length; i++) {
		div.innerHTML = '<div class="list"><p>' + checkElem.value + '</p> <input type="checkbox" class="checkbox" id="chek' + i + '"><label for="chek' + i + '"></label></div>';
		
	}

	checkElem.value = '';
}
document.getElementById('check-all').onclick = fillAll;

function fillAll() {
	var checkbox = document.getElementsByTagName('input');
	for (var i = 0; i < checkbox.length; i++) {
		checkbox[i].checked = true;
	}
}
