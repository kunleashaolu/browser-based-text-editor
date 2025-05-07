import {setDate} from './clock'

const clock = document.getElementById('clock')
const selected_font_type = document.getElementById('selected-font-type')
const font_type_options = document.getElementById('font-type-options')
const select_font_type_button = document.getElementById('select-font-type-btn')
const select_text_align_button = document.getElementById('select-text-align-btn')
const selected_align_style = document.getElementById('selected-text-align-style')
const text_align_options = document.getElementById('text-align-options')
const notes_toggle_button = document.getElementById('notes-toggle')
const notes_sidenav = document.getElementById('notes-sidenav')
const textArea = document.getElementById('text-area')
const menu_overlay = document.getElementsByClassName('menu-overlay')
const theme_switch_button = document.getElementById('theme-switch')

const screen = document.firstElementChild

function _createElement(_e) {
  switch (_e) {
    case 'Heading 1':
      return document.createElement('h1')
    case 'Heading 2':
      return document.createElement('h2')
    case 'Paragraph':
      return document.createElement('p')
    default:
      return document.createElement('p')
  }
}

function onFontTypeChange(_e) {
  const _v = _e.target.value
  selected_font_type.innerHTML = _v

  const _element = _createElement(_v)
  _element.innerText = _v
  _element.setAttribute('class', 'text-box')
  _element.setAttribute('contenteditable', 'true')
  textArea.appendChild(_element)

  _removeAttr(font_type_options, 'visible')
}

function onFontStyleChange(_e) {
  const svgIcon = _e.target.nextElementSibling
  selected_align_style.replaceChildren(svgIcon.cloneNode(true))

  _removeAttr(text_align_options, 'visible')
}

function openNotes() {
  const isOpen = notes_sidenav.hasAttribute('opened')
  isOpen ? _removeAttr(notes_sidenav, 'opened') : _setAttr(notes_sidenav, 'opened')
}

function switchTheme(_element) {
  _element.checked ? _setTheme('dark') : _setTheme('light')
}

function _setTheme(theme) {
  screen.setAttribute('color-scheme', theme)
}

function _setAttr(_element, _attribute) {
  _element.setAttribute(_attribute, '')
}

function _removeAttr(_element, _attribute) {
  _element.removeAttribute(_attribute)
}

select_font_type_button.addEventListener('click', () => _setAttr(font_type_options, 'visible'))
select_text_align_button.addEventListener('click', () => _setAttr(text_align_options, 'visible'))
notes_toggle_button.addEventListener('click', () => openNotes())
theme_switch_button.addEventListener('click', (e) => switchTheme(e.target))

font_type_options.addEventListener('click', (e) => onFontTypeChange(e))
text_align_options.addEventListener('click', (e) => onFontStyleChange(e))

menu_overlay[0].addEventListener('click', () => _removeAttr(font_type_options, 'visible'))
menu_overlay[1].addEventListener('click', () => _removeAttr(text_align_options, 'visible'))


setInterval(() => setDate(clock), 1000)