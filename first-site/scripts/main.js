var image = document.querySelector('img');
var button = document.querySelector('button');
var title = document.querySelector('h1');
var width = image.width;
var height = image.height;

if (!localStorage.getItem('name')) {
	setUserName();
}else{
	title.innerHTML = '当前进度是:' + localStorage.getItem('name');
}

image.onclick = function () {
	var address = image.getAttribute('src');
	if(address == 'images/star.jpg'){
		image.setAttribute('src','images/sakura.jpg');
		image.setAttribute('height',height);
	}else{
		image.setAttribute('src','images/star.jpg');
	}
}

button.onclick = function () {
	setUserName();
}

function setUserName() {
	// body...
	var name = prompt('当前进度');
	localStorage.setItem('name',name);
	title.innerHTML = '当前进度是:' + name;
}