import { paragraphEls, conversionForm, resultsContainer, conversionEl, submitBtn, } from "./elements.js";

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const conversion = [3.281, 0.3048, 0.264, 3.785, 2.204, 0.453, 3.281, 0.3048, 0.264, 3.785, 2.204, 0.453]
const conversionStrings = ['meters', 'feet', 'liters', 'gallons', 'kilos', 'pounds', 'meters', 'feet', 'liters', 'gallons', 'kilos', 'pounds']
function handleConversion(event) {
  event.preventDefault();
  event.stopPropagation();

  const formData = new FormData(conversionForm, submitBtn)
  const conversionNumber = Number.parseInt(formData.get('conversion-number'))
  if (typeof conversionNumber === 'number') {
    paragraphEls.forEach((p, i) => {
      let conversionInfo = ''
      if (i % 2 === 0) { conversionInfo = `${conversionNumber} ${conversionStrings[i]} = ${(conversionNumber * conversion[i]).toFixed(3)} ${conversionStrings[i + 1]}` }
      else { conversionInfo = `${conversionNumber} ${conversionStrings[i - 1]} = ${(conversionNumber * conversion[i]).toFixed(3)} ${conversionStrings[i]}` }
      p.textContent = conversionInfo;
    });
  } else {
    alert('Please enter a valid number')
  }
}

export { handleConversion }