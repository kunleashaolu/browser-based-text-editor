const selectedFontType = document.getElementById('selected-font-type')
const fontTypeOptions = document.getElementById('font-type-options')
const selectFontTypeBtn = document.getElementById('select-font-type-btn')
const themeSwitch = document.getElementById('theme-switch')
const notesToggleBtn = document.getElementById('notes-toggle')
const notesSidenav = document.getElementById('notes-sidenav')
const textArea = document.getElementById('text-area')
const menuOverlay = document.getElementById('menu-overlay')

// get the first element of the node
const screen = document.firstElementChild
function setTheme(theme) {
  screen.setAttribute('color-scheme', theme)
}

function onFontTypeChange(value) {
  selectedFontType.innerHTML = value
  fontTypeOptions.removeAttribute('visible')
}

fontTypeOptions.addEventListener('click', (e) => onFontTypeChange(e.target.value))
selectFontTypeBtn.addEventListener('click', () => fontTypeOptions.setAttribute('visible', ''))
menuOverlay.addEventListener('click', () => fontTypeOptions.removeAttribute('visible'))

// toggle notes sidebar
notesToggleBtn.addEventListener('click', () => {
  const isOpen = notesSidenav.hasAttribute('opened')
  isOpen ? notesSidenav.removeAttribute('opened') : notesSidenav.setAttribute('opened', '')
})

// set color scheme attribute on change
themeSwitch.addEventListener('change', (e) => (e.target.checked ? setTheme('dark') : setTheme('light')))
