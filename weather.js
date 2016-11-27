function ajax(callback){
//alert("sss");
var x = document.getElementById("in").value;
var url = "https://query.yahooapis.com/v1/public/yql?q=select wind from weather.forecast where woeid in (select woeid from geo.places(1) where text='"+x+"')&format=json&callback=callbackFunction";
//alert(x);
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
	//alert("he");
if(xhr.readyState == 4 && xhr.status == 200){
//alert("hey");

//callback(xhr.responseText);
//alert(xhr.responseText.query.count);
callback(xhr);
}
}

xhr.open("GET", url, true);
xhr.send();
}
function callbackFunction(xml){
//alert("she");
var data = xml.responseText.replace("/**/callbackFunction(","");
data = data.replace(")","");
data = data.replace(")","");
data = data.replace(";","");
var dataa;
//alert(data);
try{
 dataa = JSON.parse(data);
}
catch(err)
{
alert("error");
console.log(err.message);
//	return;
}

document.getElementById("date").innerHTML=dataa.query.created;
document.getElementById("chill").innerHTML=dataa.query.results.channel.wind.chill;
document.getElementById("direction").innerHTML=dataa.query.results.channel.wind.direction;
document.getElementById("speed").innerHTML=dataa.query.results.channel.wind.speed;


}

