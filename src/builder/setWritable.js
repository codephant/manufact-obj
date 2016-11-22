
export default function builder$setWritable (value) {
	value = (arguments.length < 1) || Boolean(value)
	this.__descriptor.writable = value
	return this
}