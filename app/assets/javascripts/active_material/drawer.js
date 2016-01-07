/**
 * Drawer.js
 * Logic to produce a collapsing navigation drawer
 */

$(function() {
  var $body = $("body")
  var $window = $(window)
  var $title = $("#title_bar")
  var $header = $("#header")
  var $wrapper = $("#wrapper")

  if ($header.length <= 0) return

  // .am-drawer-enabled allows specific style hooks to create
  // a collapseable, responsive navigation drawer
  $body.addClass("am-drawer-enabled")

  // Insert a backdrop helper
  var $backdrop = $("<div class='am-header-backdrop' aria-hidden='true' />")
  $wrapper.prepend($backdrop)

  function close () {
    $body.removeClass("am-drawer-open")
  }

  function open () {
    $body.addClass("am-drawer-open")
  }

  // Close the drawer whenever the wrapper is clicked
  $backdrop.on('click', close)

  // Close the drawer whenever the escape key is clicked
  $window.on('keyup', function(event) {
    if (event.which === 27) {
      close()
    }
  })

  // In order to toggle that navigation drawer, we append a button
  // to the title
  var $toggle = $("<button>", { class: "am-drawer-toggle", type: "button" }).html("Toggle Navigation Drawer")
  $title.prepend($toggle)

  // Whenever the toggle is pressed, toggle an "active" class on the body
  $toggle.click(function(event) {
    event.preventDefault()
    return $body.is(".am-drawer-open") ? close() : open()
  })

})
