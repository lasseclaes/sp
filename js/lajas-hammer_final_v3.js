//bygger delvist videre på https://codepen.io/lasseclaes/pen/LdGKGV - egen kode
//v2 - no hammer.js - yet - just desktop
$(function(){
  //hammer.js options https://github.com/hammerjs/hammer.js/wiki/Tips-&-Tricks#vertical-swipe-and-drag
  //right now a little buggy - zoom problem? try options: preventDefault = true (disables scroll though)
  //see both links (above & below)
  //hammer.js & jQuery fra http://hammerjs.github.io/jquery-plugin/

  //$(element).hammer(options).bind("pan", myPanHandler);
  $("#wrapper").hammer().bind("swipeleft", lajaright);
  $("#wrapper").hammer().bind("swiperight", lajaleft);

  //for debugging
  $("#dev").text("v. 3");

  console.log("loaded");
  console.log($("#wrapper").css("right"));
  console.log(parseFloat($("#wrapper").css("right")) );
  alert("DOM loaded");
  //$("#forward").on('click', lajaright);
  //$("#back").on('click', lajaleft);
  var sectionNumber = 0;

  function lajaright(){
    if(sectionNumber<4){
      $("#wrapper").animate({
        right: "+=100%"}, 200);
        //console.log(parseFloat($("#wrapper").css("right")) );
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
        right: "-=100%"}, 200);
        console.log(parseFloat($("#wrapper").css("right")) );
        sectionNumber--;
      }
      else //for debugging - will be removed
      {
        alert ("no can do - left");
      }
  } //endif
});
