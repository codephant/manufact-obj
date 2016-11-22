
export default function builder$setEnumerable (value) {
	value = (arguments.length < 1) || Boolean(value)
	this.__descriptor.enumerable = value
	return this
}