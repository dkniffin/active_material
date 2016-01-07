/**
 * Sidebar
 * Logic to produce a collapsing sidebar
 */

$(function() {
  var $body = $("body")
  var $sidebar = $("#sidebar")

  if (!$sidebar.length) return

  // .am-sidebar-enabled allows specific style hooks to create
  // a collapseable, responsive navigation sidebar
  $body.addClass("am-sidebar-enabled")

  var $toggle = $("<span class='action_item am-sidebar-toggle-wrapper'><button class='am-sidebar-toggle'>Toggle Sidebar</button></span>")

  $toggle.appendTo("#titlebar_right .action_items")

  // Whenever the toggle is pressed, toggle an active class on the body
  $toggle.on('click', '.am-sidebar-toggle', function(event) {
    event.preventDefault()
    $body.toggleClass("am-sidebar-open")
  })
})
