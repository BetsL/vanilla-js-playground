// 1. String Reversal 

// Chaining in-built methods
const reverseString = (text) => {
	return text.split('').reverse('').join('')
}

const reverseMe = (text) => [...text].reverse('').join('')

// With a For-Loop 
const reverseIt = (text) => {
	let result = '';

	for (let i = text.length - 1; i>= 0; i--) {
		result += text[i]
	}

	return result;
}

// For ... Of
const getBackJoJo = (text) => {
	let result = '';

	for (let char of text) {
		result = char + result
	}

	return result;
}

// Recursion
const getBackJoJo2 = (text) => {
	if (text === '') {
		return ''
	} else {
		return getBackJoJo2(text.substr(1)) + text[0]
	}
}

// Using Reduce // Most Optimal
const getBackJoJo3 = (text) => [...text].reduce((acc, char) => char + acc, '');

document.getElementById('solution').innerText = getBackJoJo3('thewalruswaspaul');




