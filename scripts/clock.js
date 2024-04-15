const clock = document.getElementById('clock')

function setDate(e) {
  // Code to set the current time and hand angles.
  const now = new Date()
  const secondsAngle = now.getSeconds() * 6
  const minsAngle = now.getMinutes() * 6 + secondsAngle / 60
  const hourAngle = ((now.getHours() % 12) / 12) * 360 + minsAngle / 12

  e.style.setProperty('--second-hand-degrees', secondsAngle + 'deg')
  e.style.setProperty('--minute-hand-degrees', minsAngle + 'deg')
  e.style.setProperty('--hour-hand-degrees', hourAngle + 'deg')
}

setInterval(() => setDate(clock), 1000)
setDate(clock)
