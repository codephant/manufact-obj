import firstKey from "./firstKey"

export default function firstPair (o) {
	var k = firstKey(o)
	return [k, k === null ? k : o[k]]
}