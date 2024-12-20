const conversionForm = document.getElementById("conversion-form")


const submitBtn = document.querySelector('button[type="submit"]')

const resultsContainer = document.getElementById("results-container")

const conversionEl = document.getElementById("conversion-number")

const paragraphEls = document.querySelectorAll('.result > p')
console.log(paragraphEls)
export { paragraphEls, conversionForm, resultsContainer, conversionEl, submitBtn }