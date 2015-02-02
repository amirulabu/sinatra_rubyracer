$(document).ready(function(){
$('#hidden').hide();
   // jQuery methods go here...


   var p = 0;
   var q = 0;
  $( "body" ).keyup(function( event ) {
      if(event.which == 80) {
        p += 1;
     $( "tr#player1_strip td" ).removeClass('active');
     $( "tr#player1_strip td:nth-child("+ p +")" ).addClass('active');
      }
      if(p == block){
        atr = $('#player1').attr('name');
        time = $('#time').attr('name');
        alert(""+ atr + " win")
        debugger
        console.log(atr);
        //$('#win_input').val(atr)
        // $('#target').submit();
        var request = $.ajax({
          type: "POST",
          url: "/game",
          dataType: "json",
          data: {"win_input": atr, "timestart": time}
        })
        request.done(function(msg){
          window.location.href = '/';
        });

      }
  });

   $( "body" ).keyup(function( event ) {
      if(event.which == 81) {
        q += 1;
     $( "tr#player2_strip td" ).removeClass('active');
     $( "tr#player2_strip td:nth-child("+ q +")" ).addClass('active');
      }


        if(q == block){
        atr = $('#player2').attr('name');
        time = $('#time').attr('name');
        alert(""+ atr + " win")

        console.log(atr);
        //$('#win_input').val(atr)
        // $('#target').submit();
        var request = $.ajax({
          type: "POST",
          url: "/game",
          dataType: "json",
          data: {"win_input": atr, "timestart": time}
        })
        request.done(function(msg){
          window.location.href = '/';
        });

      }
  });

// end
});




