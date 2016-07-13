/**
 * Navigation.js
 */

$(function() {
  var $body = $("body")
  var $navs = $(".has_nested")

  // .am-drawer-enabled allows specific style hooks to create
  // a collapseable, responsive navigation drawer
  $body.addClass("am-nav-enabled")

  $navs.each(function(i, el) {
    var $el  = $(el)
    var $btn = $('<button class="am-nav-toggle" type="button">Open</button>')

    $btn.appendTo(el)

    $btn.on('click', function() {
      $el.toggleClass('am-nav-open')
    })
  })
})
