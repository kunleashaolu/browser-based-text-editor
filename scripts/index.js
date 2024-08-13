const selectedFontType = document.getElementById('selected-font-type')
const fontTypeOptions = document.getElementById('font-type-options')
const themeSwitch = document.getElementById('theme-switch')
const notesToggleBtn = document.getElementById('notes-toggle')
const notesSidenav = document.getElementById('notes-sidenav')
const textArea = document.getElementById('text-area')

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

function onFontTypeChange(value) {
  selectedFontType.innerHTML = value
}

fontTypeOptions.addEventListener('change', (e) => console.log(e.target))

// console.log(fontTypeOptions)
