function sub(){
	subBtn = document.getElementById('submit');
	
	title = document.getElementById('title').innerHTML;
	text = document.getElementById('text').innerHTML;
	
	subBtn.outerHTML = '<form action="/sub" method="POST"><input type="hidden" name="title" value="' + title + '"/><input type="hidden" name="text" value="' + text + '"/><input type="submit" class="submit"/></form>';
}