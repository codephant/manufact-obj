
export default function builder$setConfigurable (value) {
	value = (arguments.length < 1) || Boolean(value)
	this.__descriptor.configurable = value
	return this
}