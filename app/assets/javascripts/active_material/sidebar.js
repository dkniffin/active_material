/**
 * Sidebar
 * Logic to produce a collapsing sidebar
 */

$(function() {
  var $body = $("body")
  var $sidebar = $(".with_sidebar #sidebar")

  if (!$sidebar.length) return

  // .am-sidebar-enabled allows specific style hooks to create
  // a collapseable, responsive navigation sidebar
  $body.addClass("am-sidebar-enabled")

  // Insert a backdrop helper
  var $backdrop = $("<div class='am-sidebar-backdrop' aria-hidden='true' />")
  $sidebar.parent().prepend($backdrop)

  function close () {
    $body.removeClass("am-sidebar-open")
  }

  function open () {
    $body.addClass("am-sidebar-open")
  }

  // Close the drawer whenever the wrapper is clicked
  $backdrop.on('click', close)

  // In order to toggle that navigation drawer, we append a button
  var button_label = $.map($sidebar.find('h3'), function (element) { return $(element).text() }).join("/")
  var $toggle = $("<span class='action_item am-sidebar-toggle-wrapper'><button class='am-sidebar-toggle'>"+ button_label +"</button></span>")
  $toggle.appendTo("#titlebar_right .action_items")

  // Whenever the toggle is pressed, toggle an active class on the body
  $toggle.on('click', '.am-sidebar-toggle', function(event) {
    event.preventDefault()
    $body.is(".am-sidebar-open") ? close() : open()
  })
})
