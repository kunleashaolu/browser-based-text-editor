export function copy() {}

export function save() {}

export function toUppercase() {}

export function toLowercase() {}

export function textUnderline() {}

export function textCrossover() {}

export function textBold() {}

export function textAlign(position) {}

export function textStyle() {}

export function setElementAttribute(_element, _attribute) {
  _element.setAttribute(_attribute, '')
}

export function removeElementAttribute(_element, _attribute) {
  _element.removeAttribute(_attribute)
}

export function createElement(element) {
  return `<${element} contenteditable="true"></${element}>`
}
