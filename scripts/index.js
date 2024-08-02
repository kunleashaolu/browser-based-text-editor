const screen = document.firstElementChild
function setTheme(theme) {
  screen.setAttribute('color-scheme', theme)
}

const selectedFontStyle = document.getElementById('selected-font-style')
const fontStyleOptions = document.getElementById('font-style-options')

fontStyleOptions.addEventListener('change', (e) => console.log(e))

const themeSwitch = document.getElementById('theme-switch')
themeSwitch.addEventListener('change', (e) => (e.target.checked ? setTheme('dark') : setTheme('light')))

// const nav = document.querySelector('nav')

let previousScrollPosition = 0

const isScrollingDown = () => {
  let scrolledPosition = document.body.scrollTop
  let isScrollDown

  if (scrolledPosition > previousScrollPosition) {
    isScrollDown = true
  } else {
    isScrollDown = false
  }
  previousScrollPosition = scrolledPosition
  return isScrollDown
}

// const handleNavScroll = () => {
//   if (isScrollingDown() && !nav.contains(document.activeElement)) {
//     nav.classList.add('scroll-down')
//     nav.classList.remove('scroll-up')
//   } else {
//     nav.classList.add('scroll-up')
//     nav.classList.remove('scroll-down')
//   }
// }

// var throttleTimer

// const throttle = (callback, time) => {
//   if (throttleTimer) return

//   throttleTimer = true
//   setTimeout(() => {
//     callback()
//     throttleTimer = false
//   }, time)
// }

// const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

window.addEventListener('scroll', () => {
  console.log(isScrollingDown)
})
