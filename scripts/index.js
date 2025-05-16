import {setDate} from './clock'
import {loadNotes} from "./notes";

const screen = document.firstElementChild
const clock = document.querySelector('.clock')
const sidenav = document.querySelector('.sidenav')
const theme_switch = document.querySelector('.theme-switch')
const sidebar_toggle_btn = document.querySelector('.sidebar-toggle')
const menu_btn = document.querySelector('.menu-button')

// set clock
setInterval(() => setDate(clock), 1000)

// load notes
loadNotes()

// functions
function openSidenav() {
  const isOpen = sidenav.hasAttribute('opened')
  isOpen ?
      sidenav.removeAttribute('opened')
      : sidenav.setAttribute('opened', '')
}

function switchTheme() {
  theme_switch.querySelector(':scope input').checked ?
      screen.setAttribute('color-scheme','dark')
      : screen.setAttribute('color-scheme','light')
}

// event listeners
sidebar_toggle_btn.addEventListener('click', () => {openSidenav()})
theme_switch.addEventListener('click', () => {switchTheme()})