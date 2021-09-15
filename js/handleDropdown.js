let isNavOpen = false

function handleDropdown() {
  const nav = document.querySelector('header nav')

  isNavOpen ? nav.classList.remove('open') : nav.classList.add('open')

  isNavOpen = !isNavOpen
}
