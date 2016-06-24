define(['jquery'], function($) {

  var urlPattern = /\/[a-z]+$/g,
      thisLocationUrl = location.href.match(urlPattern),
      links = $('nav a');

  if (thisLocationUrl == null)
    thisLocationUrl = '/'

  for (var i = 0; i < links.length; i++) {
    if (links.eq(i).attr('href') == thisLocationUrl[0]) {
      links.eq(i).parent().addClass('active');
      links.eq(i).on('mouseenter', function() {
        $(this).css({cursor: 'default'});
      }).on('click', function(e) { e.preventDefault(); });
    }
  } 

});