const clock = document.getElementById('clock')

function setDate() {
  // Code to set the current time and hand angles.
  const now = new Date()
  const secondsAngle = now.getSeconds() * 6
  const minsAngle = now.getMinutes() * 6 + secondsAngle / 60
  const hourAngle = ((now.getHours() % 12) / 12) * 360 + minsAngle / 12

  clock.style.setProperty('--second-hand-degrees', secondsAngle + 'deg')
  clock.style.setProperty('--minute-hand-degrees', minsAngle + 'deg')
  clock.style.setProperty('--hour-hand-degrees', hourAngle + 'deg')
}

setInterval(setDate, 1000)
setDate()

const screen = document.firstElementChild
function setTheme(theme) {
  screen.setAttribute('color-scheme', theme)
}

const themeSwitch = document.getElementById('theme-switch')
themeSwitch.addEventListener('change', (e) => (e.target.checked ? setTheme('dark') : setTheme('light')))
