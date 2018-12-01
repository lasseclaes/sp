//bygger delvist videre på https://codepen.io/lasseclaes/pen/LdGKGV - egen kode
//v2 - no hammer.js - yet - just desktop
$(function(){
  console.log("loaded");
  console.log($("#wrapper").css("right"));
  console.log(parseFloat($("#wrapper").css("right")) );
  //alert("hello");
  $("#forward").on('click', lajaright);
  $("#back").on('click', lajaleft);
  var sectionNumber = 0;

  function lajaright(){
    if(sectionNumber<4){
      $("#wrapper").animate({
        right: "+=100%"}, 400);
        console.log(parseFloat($("#wrapper").css("right")) );
        sectionNumber++;
    }
    else //for debugging - will be removed
    {
      alert ("no can do - right");
    }
  } //endif

  function lajaleft(){
    if (sectionNumber>0){
      $("#wrapper").animate({
        right: "-=100%"}, 400);
        console.log(parseFloat($("#wrapper").css("right")) );
        sectionNumber--;
      }
      else //for debugging - will be removed
      {
        alert ("no can do - left");
      }
  } //endif
});
