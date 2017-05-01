/* $(document).ready(function() {
            alert('Подключена последняя версия jQuery через Google хостинг');
        });
*/
$(document).ready(function(){
      $('a[data-tooltip').mousemove(function (eventObject) {
          $(this).attr('data-tooltip');
          $("#tooltip").text($data-tooltip)
              .css({ 
                "top" : eventObject.pageY + 5,
                "left" : eventObject.pageX + 5
              })
              .show();
          }).mouseout(function () {
            $("#tooltip").hide()
              .text("")
              .css({
                  "top" : 0,
                  "left" : 0
              });
      });
});