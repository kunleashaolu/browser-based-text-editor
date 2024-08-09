const selectedFontStyle = document.getElementById('selected-font-style')
const fontStyleOptions = document.getElementById('font-style-options')
const themeSwitch = document.getElementById('theme-switch')
const notesToggleBtn = document.getElementById('notes-toggle')
const notesSidenav = document.getElementById('notes-sidenav')

// get the first element of the node
const screen = document.firstElementChild
function setTheme(theme) {
  screen.setAttribute('color-scheme', theme)
}

// set color scheme attribute on change
themeSwitch.addEventListener('change', (e) => (e.target.checked ? setTheme('dark') : setTheme('light')))

// toggle notes sidebar
notesToggleBtn.addEventListener('click', () => {
  const isOpen = notesSidenav.hasAttribute('opened')
  isOpen ? notesSidenav.removeAttribute('opened') : notesSidenav.setAttribute('opened', '')
})
