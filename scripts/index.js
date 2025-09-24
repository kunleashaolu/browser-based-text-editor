import {setDate} from './clock'

const $screen = document.firstElementChild
const $clock = document.querySelector('.clock')
const $sidenav = document.querySelector('.sidenav')
const $themeSwitch = document.querySelector('.theme-switch')
const $sidebarToggle = document.querySelector('.sidebar-toggle')


// set clock
setInterval(() => setDate($clock), 1000)

// functions
function openSidenav() {
  const isOpen = $sidenav.hasAttribute('opened')

  isOpen ?
      $sidenav.removeAttribute('opened')
      : $sidenav.setAttribute('opened', '')
}

function switchTheme() {
  $themeSwitch.querySelector(':scope input').checked ?
      $screen.setAttribute('color-scheme','dark')
      : $screen.setAttribute('color-scheme','light')
}

// event listeners
$sidebarToggle.addEventListener('click', () => {openSidenav()})
$themeSwitch.addEventListener('click', () => {switchTheme()})