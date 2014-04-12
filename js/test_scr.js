window.onload = function() {
	document.getElementById('current_width').innerHTML = windowWidth() + "px";	

}
window.onresize = function() {
	document.getElementById('current_width').innerHTML = windowWidth() + "px";	

}
function windowWidth() {
	var ww = document.documentElement;
	return self.innerWidth || (ww && ww.clientWidth) || document.body.clientWidth;
}