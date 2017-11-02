const jsdom = require('jsdom')
const { JSDOM } = jsdom
//Import da função validadora de length
const { hasSpecificLength } = require('./validations.utils')

const getTextContent = (dom = {}, selector = '') => {
  if (dom.window === undefined) {
    throw new Error('DOM must contains a window property')
  }
  //Alterado para usar a função validadora de length
  if (hasSpecificLength({ target: selector, length: 0 })) {
    throw new Error('Selector is required')
  }

  return dom.window.document.querySelector(selector).textContent
}

const getDomFromURL = (url = '') => {
  //Alterado para usar a função validadora de length
  if (hasSpecificLength({ target: url, length: 0 })) {
    throw new Error('URL is required')
  }

  return JSDOM.fromURL(url)
}

const getHTMLElement = (selector = '', dom = {}) => {
  //Valida o DOM recebido
  if (dom.window === undefined) {
    throw new Error('DOM must contains a window property')
  }
  //Valida se foi passado o seletor
  if (hasSpecificLength({ target: selector, length: 0 })) {
    throw new Error('Selector is required')
  }

  return dom.window.document.querySelector(selector)
}

module.exports = {
  getDomFromURL,
  getHTMLElement,
  getTextContent,
}
