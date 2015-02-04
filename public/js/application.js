$(document).ready(function(){
$('#hidden').hide();
   // jQuery methods go here...


  function Game() {
    //player 1
    var p = 0;
    $( "body" ).keyup(function( event ) {
        if(event.which == 80) {
          p += 1;
       $( "tr#player1_strip td" ).removeClass('active');
       $( "tr#player1_strip td:nth-child("+ p +")" ).addClass('active');
        }
        if(p == block){
          atr = $('#player1').attr('name');
          timetaken = $('#time').attr('name');
          Winner(atr,timetaken);
          //***************************************
          //***************************************
        }
    });
    //player 2
     var q = 0;
     $( "body" ).keyup(function( event ) {
        if(event.which == 81) {
          q += 1;
       $( "tr#player2_strip td" ).removeClass('active');
       $( "tr#player2_strip td:nth-child("+ q +")" ).addClass('active');
        }
        if(q == block){
          atr = $('#player2').attr('name');
          timetaken = $('#time').attr('name');
          Winner(atr,timetaken);
          //***************************************
          //***************************************
        }
    });


    Winner = function winner1 (atr,timetaken) {
    this.atr = atr;
    this.timetaken = timetaken
    alert(""+ atr + " win")
    console.log(atr);
    var request = $.ajax({
      type: "POST",
      url: "/game",
      dataType: "json",
      data: {"win_input": atr,"timestart":timetaken}
    })
    request.done(function(msg){
      window.location.href = '/';
    });
  };
  } //end of Game




  var gamestart = new Game();
  gamestart;
// end
});




