  let colors = [
      "rgb(225, 225, 225)", 
      "rgb(195, 195, 195)",
      "rgb(225, 225, 225)", 
      "rgb(195, 195, 195)",
      "rgb(225, 225, 225)", 
      "rgb(195, 195, 195)",
      "rgb(255, 255, 255)", 
      "rgb(195, 195, 195)",
      "rgb(255, 255, 255)", 
      "rgb(195, 195, 195)",
      "rgb(215, 215, 215)", 
      "rgb(45, 135, 45)", 
      "rgb(235, 235, 235)",
      "rgb(125, 5, 125)", 
      "rgb(105, 105, 105)",
      "rgb(145, 205, 55)", 
      "rgb(5, 155, 255)", 
      "rgb(45, 95, 55)", 
      "rgb(175, 55, 155)", 
      "rgb(245, 155, 155)", 
      "rgb(245, 155, 155)", 
      "rgb(245, 155, 155)", 
];

  let squares = document.querySelectorAll(".square");
  let square = document.querySelector(".square");


  for(let i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = colors[i];
  };


$(document).ready(function(){
   
        $(".header").fadeIn(2000, () => {
            $(this.querySelector('h1')).slideDown(500, () => {
                $(this.querySelector(".button")).slideDown(500, "linear")
        });
    });

        // setTimeout(() => {
        //     $(this.querySelector('h1')).slideDown(500, () => {
        //         $(this.querySelector(".button")).slideDown(500, "linear");
        //     });
        // }, 500);    
 

    $(".button").hover(
        function(){
            $(this.querySelector("i")).removeClass("fa-caret-right");
            $(this).css("background", "rgb(8, 199, 183)");
            $(this).css("border", "rgb(8, 199, 183) 2px solid");
            $(this.querySelector("i")).addClass("fa-caret-down");

        }, function(){
          $(this).animate({
              background: "transparent",
          }, 300, function(){
          });
          $(this.querySelector("i")).removeClass("fa-caret-down");
          $(this.querySelector("i")).addClass("fa-caret-right");
          $(this).css("border", "white 2px solid");
          $(this).css("background", "transparent");

        });

      $(".square").hover(
        function() {
          $(this.querySelector("img")).animate({
                height: "18vh",
                // margin: "32% auto"
          }, 200, function(){

          });
          $(this.querySelector("p")).slideDown(200);
        }, function() {
          $(this.querySelector("img")).animate({
              height: "20vh",
            //   margin: "30% auto",
          }, 200, function(){

          });
          $(this.querySelector("p")).slideUp(200);
        });

    });





