const screen = document.firstElementChild
function setTheme(theme) {
  screen.setAttribute('color-scheme', theme)
}

const selectedFontStyle = document.getElementById('selected-font-style')
const fontStyleOptions = document.getElementById('font-style-options')

fontStyleOptions.addEventListener('change', (e) => console.log(e))

const themeSwitch = document.getElementById('theme-switch')
themeSwitch.addEventListener('change', (e) => (e.target.checked ? setTheme('dark') : setTheme('light')))
