
const owns = Object.prototype.hasOwnProperty

export default function firstKey (o) {
	let k
	for (k in o) break
	return k != null && owns.call(o, k) ? k : null
}
