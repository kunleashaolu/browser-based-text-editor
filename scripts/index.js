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

const screen = document.firstElementChild

font_type_options.addEventListener('click', (e) => onFontTypeChange(e.target.value))

select_font_type_button.addEventListener('click', () => setElementAttribute(font_type_options, 'visible'))

select_text_align_button.addEventListener('click', () => setElementAttribute(text_align_options, 'visible'))

text_align_options.addEventListener('change', (e) => {
  const svgIcon = e.target.nextElementSibling

  selected_align_style.replaceChildren(svgIcon.cloneNode(true))

  removeElementAttribute(text_align_options, 'visible')
})

menu_overlay[0].addEventListener('click', () => removeElementAttribute(font_type_options, 'visible'))
menu_overlay[1].addEventListener('click', () => removeElementAttribute(text_align_options, 'visible'))

function setTheme(theme) {
  screen.setAttribute('color-scheme', theme)
}

function setElementAttribute(_element, _attribute) {
  _element.setAttribute(_attribute, '')
}

function removeElementAttribute(_element, _attribute) {
  _element.removeAttribute(_attribute)
}

function onFontTypeChange(e) {
  selected_font_type.innerHTML = e

  removeElementAttribute(font_type_options, 'visible')

  const _element = _createElement(e)
  _element.setAttribute('contenteditable', true)
  _element.innerText = e

  textArea.appendChild(_element)
}

function openNotes() {
  const isOpen = notes_sidenav.hasAttribute('opened')

  isOpen ? removeElementAttribute(notes_sidenav, 'opened') : setElementAttribute(notes_sidenav, 'opened')
}

function switchTheme(e) {
  const element = document.getElementById(e.getAttribute('id'))
  const radioBtn = element.firstElementChild

  radioBtn.checked ? setTheme('dark') : setTheme('light')
}

function _createElement(_e) {
  switch (_e) {
    case 'Heading 1':
      return document.createElement('h1')
    case 'Heading 2':
      return document.createElement('h2')
    case 'Paragraph':
      return document.createElement('p')
    default:
      return document.createElement('span')
  }
}

function styleElement() {}
