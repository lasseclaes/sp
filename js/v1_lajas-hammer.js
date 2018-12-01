//bygger delvist videre på https://codepen.io/lasseclaes/pen/LdGKGV - egen kode

function init(){
  console.log("hej1");
  console.log($("#wrapper").css("right"));
  console.log(parseFloat($("#wrapper").css("right")) );
 //alert("hello");
 $("#forward").on('click', lajaright);
}

 function lajaright(){
   $("#wrapper").animate({
     right: "+=100%"}, 400);
     console.log("hej");
 console.log(parseFloat($("#wrapper").css("right")) );

}

window.addEventListener("load", init, false);
