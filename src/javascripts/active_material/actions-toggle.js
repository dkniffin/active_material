$(function() {
  var actions = $("tbody .col-actions");

  function waitForOutsideClick (el) {

    $("body").on('click.toggle', function(e) {
      if (el.contains(e.currentTarget) === false) {
        actions.removeClass('active');
        $("body").off("click.toggle");
      }
    });
  }

  // Make actions focusable
  actions.attr('tabindex', 0).attr('role', 'button');

  actions.on('click', function() {
    $(this).addClass('active');
    waitForOutsideClick(this);
  });

  actions.on('keydown', function(e) {
    var space = 32;
    var enter = 13;
    var escape = 27;

    if (e.keyCode == space || e.keyCode == enter) {
      e.preventDefault();
      $(this).addClass('active');
      waitForOutsideClick(this);
    } else if (e.keyCode == escape) {
      e.preventDefault();
      $(this).removeClass('active');
    }
  });
});
