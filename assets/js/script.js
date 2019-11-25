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
  context.arcTo(/* .left point1 */ 0,/* .top point1 */ 0,/* .left point2 */ 230,/* .top point2 */ 210,/* Rayon */ 20);
  context.stroke();
  context.fill();
});
