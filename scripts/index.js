import { setTheme } from './theme'
import { startClock } from './clock'

const themeSwitch = document.getElementById('theme-switch')
themeSwitch.addEventListener('change', (e) => (e.target.checked ? setTheme('dark') : setTheme('light')))

startClock()
