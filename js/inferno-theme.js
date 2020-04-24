$(document).ready(function(){

//get download speed
setInterval(function(){
	var text = $('#ext-gen155').text()
    $('#downSpeed').text(text);
}, 1000);

//open settings
$("li.settings").click(function(){
	$("#ext-gen67").click();
});

//open connections
$("li.connection").click(function(){
	$("#ext-gen69").click();
});

//logout
$("li.logout").click(function(){
	$("#ext-gen73").click();
});

//add torrent
$("li.add").click(function(){
	$("#ext-gen49").click();
});

//remove
$("li.remove").click(function(){
	$("#ext-gen51").click();
});

//pasue
$("li.pause").click(function(){
	$("#ext-gen55").click();
});

//stop
$("li.start").click(function(){
	$("#ext-gen57").click();
});

//up
$("li.up").click(function(){
	$("#ext-gen61").click();
});

//down
$("li.down").click(function(){
	$("#ext-gen63").click();
});

setTimeout( function(){
	var tname = $(".torrent-name").text();
	$(".tname").text(tname);
  }  , 1000 );

  setTimeout( function(){
	var tsize = $(".x-grid3-col-2").text();
	$(".tsize").text(tsize);
  }  , 1000 );

$("tbody").animate({"opacity":"1","font-size":"10pt"}, 300);


});
