$(function(){
 //alert("hello");
  $(".fa-chevron-right").on("click", function(){
    $(this).toggleClass("down");
  });

  $(window).resize(function() {
    //$("#dev1").text($(window).width());
    //alert($(window).width());
    if ( $(window).width() > 561 && $("nav").is(":hidden") ){
      //alert("hey");
      //console.log($(window).width());
      $("nav").show();
      $("#menu-toggle").removeClass("fa-bars").addClass("fa-times");
    }
  });

  $("#menu-toggle").on("click", function(){
    $("nav").slideToggle("fast");
    $("#menu-toggle").toggleClass("fa-times fa-bars")
  });

  //dev
  $("#user-agent").on("click", function(){
    alert(navigator.userAgent);
  })
});
