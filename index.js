const genArray = (len) => {
	const arr = []
	let i = 0
	while (i < len) {
		arr.push(i + 1)
		i++
	}
	return arr
}

const array = genArray(85)
console.log('Array', array)

const returnRandomSection = (arr, step) => {
	if (!arr) return arr
	const len = arr.length
	const points = Math.floor(len / step)
	const remainder = len % step
	let i = 0
	const indices = []
	while (i <= points) {
		indices.push(i * step)
		i++
	}
	const selectedPortion =
		indices[Math.floor(Math.random(points) * indices.length)]
	const stop =
		selectedPortion === points * step
			? selectedPortion + remainder
			: selectedPortion + (step - 1)
	let x = selectedPortion
	const ret = []
	while (x < stop) {
		ret.push(arr[x])
		x++
	}

	return ret
}

const amount = 40
console.log('Requested Amount', amount)
const randomSelection = returnRandomSection(array, amount)
console.log('Randomly Selected Portion', randomSelection)

const randomize = (arr = []) => {
	let i = 0
	const array = arr,
		ret = [],
		getLength = () => array.length,
		len = getLength(),
		getIndex = () => Math.floor(Math.random(getLength() - 1) * getLength())
	while (i < len) {
		const index = getIndex()
		ret.push(array.splice(index, 1)[0])
		i++
	}
	return ret
}

console.log('Shuffled Selection', randomize(randomSelection))
