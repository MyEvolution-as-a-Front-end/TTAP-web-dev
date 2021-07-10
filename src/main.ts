import './style.css'

const quotes = [
	'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
	'There is nothing more deceptive than an obvious fact.',
	'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
	'I never make exceptions. An exception disproves the rule.',
	'What one man can invent another can discover.',
	'Nothing clears up a case so much as stating it to another person.',
	'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
]

let words: string[] = []
let wordIndex = 0

let startTime = Date.now()

const quoteElement = document.getElementById('quote') as HTMLParagraphElement
const messageElement = document.getElementById(
	'message'
) as HTMLParagraphElement
const inputElement = document.getElementById('typed-value') as HTMLInputElement
const startButtonElement = document.getElementById('start-button')

startButtonElement?.addEventListener('click', () => {
	// Sort an initial word list
	const quoteIndex = Math.floor(Math.random() * quotes.length)
	const quote = quotes[quoteIndex]
	// Split words by spaces
	words = quote.split(' ')
	wordIndex = 0
	// Set an span to each word
	const spanWords = words.map(word => `<span>${word}</span>`)
	quoteElement.innerHTML = spanWords.join('')
	// Set initial word with highlight
	quoteElement.childNodes[0].className = 'highlight'
	// Reset values
	messageElement.innerHTML = ''
	inputElement.value = ''
	inputElement?.focus()
	startTime = new Date().getTime()
})

inputElement?.addEventListener('input', () => {
	const currentWord = words[wordIndex]
	const value = inputElement.value

	// Verify if finished list of words
	if (value === currentWord && wordIndex === words.length - 1) {
		const timeElapsed = new Date().getTime() - startTime
		messageElement.innerHTML = `You took ${
			timeElapsed / 100
		}ms to type ${value}`
	} else if (value.endsWith(' ') && value.trim() === currentWord) {
		inputElement.value = ''
		wordIndex++
		for (const wordElement of quoteElement.childNodes) {
			wordElement.className = ''
		}
		// Highlight the next word
		quoteElement.childNodes[wordIndex].className = 'highlight'
	} else if (currentWord.startsWith(value)) {
		inputElement.className = ''
	} else {
		inputElement.className = 'error'
	}
})
