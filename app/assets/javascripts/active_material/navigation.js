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
    var $link = $(el).find('> a')

    $btn.appendTo(el)

    $btn.on('click', function(event) {
      event.preventDefault()
      $el.toggleClass('am-nav-open')
    })

    if ($link.attr('href') === '#') {
      $link.on('click', function(event) {
        event.preventDefault()
        $el.toggleClass('am-nav-open')
      })
    }

    if ($el.is('.current')) {
      $btn.click()
    }
  })
})
