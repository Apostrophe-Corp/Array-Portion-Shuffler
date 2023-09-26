const genArray = (len) => {
	const arr = []
	let i = 0
	while (i < len) {
		arr.push(i + 1)
		i++
	}
	return arr
}

const returnRandomSection = (arr, step) => {
	if (!arr) return arr
	const len = arr.length
	const points = Math.floor(len / step)
	const remainder = len % step
	console.log({ remainder })
	let i = 0
	const indices = []
	while (i <= points) {
		indices.push(i * step)
		i++
	}
	console.log({ indices })
	const index = Math.floor(Math.random(points) * indices.length)
	const start =
		indices[index] === points * step && !remainder
			? indices[index - 1]
			: indices[index] === points * step && remainder
			? indices[index] - (step - remainder)
			: indices[index]

	const stop =
		indices[index] === points * step && remainder
			? indices[index] + remainder
			: start + step
	let x = start
	console.log({ start, stop, x })
	const ret = []
	while (x < stop) {
		ret.push(arr[x])
		x++
	}

	return ret
}

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

const arrayLength = 10
console.log('Array Length:', arrayLength)
const array = genArray(arrayLength)
console.log('Generated Array:', array)
const amount = 5
console.log('Requested Amount:', amount)
const randomSelection = returnRandomSection(array, amount)
console.log('Randomly Selected Portion:', randomSelection)
console.log('Shuffled Selection:', randomize(randomSelection))
