 
function showTime(){
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds()

	let formathours = convertFormat(hours);

	hours = checkTime(hours);
	hours = addzero(hours);
	minutes = addzero(minutes);
	seconds = addzero(seconds);
	document.getElementById("clock").innerHTML =`${hours}:${minutes}:${seconds}:${formathours}`;


}


function addzero(time){
	if(time < 0){
		time = "0" +time;
	}
	return time;
}
function convertFormat(time){
	let format = 'AM';
	if(time >= 12){
		format='PM';
	}
	return format;
}
function checkTime(time){
	if(time > 12){
		time = time - 12;
	}
	if(time === 0){
		time = 12;
	}
	return time;
}


setInterval (showTime,1000);























 /*function showtime(){
 	let date = new Date();
 	let hours = date.getHours();
 	let minutes = date.getMinutes();
 	let seconds	= date.getSeconds();
 	let formathours = convertFormat(hours)

hours = checkTime(hours);

hours = addzero  (hours);
minutes = addzero  (minutes);
seconds = addzero  (seconds);

 document.getElementById('clock').innerHTML	=`${hours}:${minutes}:${seconds}:
 ${formathours}`
 }


 //format function to Am and Pm
 function convertFormat(time){
 	let format = 'Am'
 	if(time >=12){
 		format = "PM"
 	}
 	return format;
 }
 ////
 function checkTime(time){
 	if(time> 12){
 		time = time -12;
 	}
 	if(time===0){
 		time = 12;
 	}
 	return time;
 }

///
function addzero(time){
	if(time<0){
		time = "0" + time;
	}
	return time;
}
setInterval(showtime,1000);*/