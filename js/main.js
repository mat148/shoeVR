/**
DEVICE ORIENTATION DEMO BY JÃ˜RN KINDERÃ…S 26.06.2011

This demo shows how to listen for and use device motion events
provided by the build-in gyroscope and accelerometer.
**/
window.addEventListener('deviceorientation', orientationHandler, false);
document.addEventListener('DOMContentLoaded', init, false);

var image;

function init()
{	
	//image = document.createElement('img');
	//image.style.height = "300px";
	//image.style.width  = "300px";
	//document.body.appendChild(image);
	//image.onload = function(){
		//window.addEventListener('deviceorientation', orientationHandler, false);
	
	//image.src = "img/checkerboard.jpg";
}

function orientationHandler(e)
{
    //console.log(e.alpha);//Z
    //console.log(e.beta);//X
    //console.log(e.gamma);//Y
    /*var z = ((e.alpha)*0.01)+180;
    var x = (e.beta)*0.01;
    var y = (e.gamma)*0.01;
    console.log("x"+x);*/
    //camera.rotation.x = e.beta * Math.PI / 180;
    //camera.rotation.y = e.gamma * Math.PI / 180;
    //camera.rotation.z = e.alpha * Math.PI / 180;
    //camera.rotation.y = y;
    //camera.rotation.x = x;
    //camera.rotation.z = z;
}