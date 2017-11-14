var PingPong = require('./../js/pingpong.js').pingPongModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simplePingPong = new PingPong("hot pink");
    var output = simplePingPong.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
