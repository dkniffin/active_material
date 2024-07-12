document.addEventListener("DOMContentLoaded", () => {
  const actions = document.querySelectorAll("tbody .col-actions")

  function waitForOutsideClick (el) {
    const body = document.querySelector("body")
    body.addEventListener("click", (e) => {
      if (el.contains(e.currentTarget) === false) {
        el.classList.remove('active')
      }
    })
  }

  actions.forEach((action) => {
    // Make actions focusable
    action.setAttribute('tabindex', 0)
    action.setAttribute('role', 'button')

    action.addEventListener('click', () => {
      action.classList.add('active');
      waitForOutsideClick(action);
    })

    action.addEventListener('keydown', (e) => {
      const space = 32;
      const enter = 13;
      const escape = 27;

      if (e.keyCode == space || e.keyCode == enter) {
        e.preventDefault()
        action.classList.add('active')
        waitForOutsideClick(action)
      } else if (e.keyCode == escape) {
        e.preventDefault()
        action.classList.remove('active')
      }
    })
  })
})
