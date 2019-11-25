$(function(){
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  // Triangle
  context.beginPath();
  context.moveTo(200, 300);
  context.lineTo(170, 200);
  context.lineTo(230, 200);
  context.closePath();
  context.fillStyle = "#AA6522";
  context.fill();

  // Courbe
  context.beginPath();
  context.lineWidth = '1';
  context.strokeStyle = '#8A0908';
  context.fillStyle = '#8A0908'
  context.moveTo(170, 200);
  context.bezierCurveTo(160, 140, 240, 140, 230, 200);
  context.stroke();
  context.fill();
});
