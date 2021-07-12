import './style.css'
import {api} from './services'

const formElement = document.querySelector('.form-data') as HTMLFormElement
const regionElement = document.getElementById('region') as HTMLInputElement
const submitButton = document.querySelector('.search-btn') as HTMLButtonElement

const resultElement = document.querySelector('.result') as HTMLDivElement
const myRegionElement = document.querySelector('.my-region') as HTMLSpanElement
const carbonElement = document.querySelector('.carbon-usage') as HTMLSpanElement
const fossilElement = document.querySelector('.fossil-fuel') as HTMLSpanElement
const clearButton = document.querySelector('.clear-btn') as HTMLButtonElement

resultElement.hidden = true

submitButton.onclick = async e => {
	e.preventDefault()
	const result = await api.get('', {params: {countryCode: regionElement.value}})
	if (result.data) {
		formElement.hidden = true
		resultElement.hidden = false

		myRegionElement.textContent = result.data.countryCode
		carbonElement.textContent = result.data.data.carbonIntensity
		fossilElement.textContent = result.data.data.fossilFuelPercentage
	}
}

clearButton.onclick = e => {
	e.preventDefault()
	formElement.reset()
	formElement.hidden = false
	resultElement.hidden = true
}
