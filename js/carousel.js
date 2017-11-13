/* TITLE PAGE - carousel */
$('#carousel img:gt(0)').hide();

setInterval(function(){
  $('#carousel :first-child')
    .fadeTo(500, 0)
    .next('img')
    .fadeTo(500, 1)
    .end()
    .appendTo('#carousel');
}, 3000);   