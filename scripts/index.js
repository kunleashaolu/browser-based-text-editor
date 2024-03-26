import { startClock } from './clock'

startClock()

const screen = document.firstElementChild
function setTheme(theme) {
  screen.setAttribute('color-scheme', theme)
}

const themeSwitch = document.getElementById('theme-switch')
themeSwitch.addEventListener('change', (e) => (e.target.checked ? setTheme('dark') : setTheme('light')))
