
export default function accessbuild_init (parent) {
	this.__parent = parent
	this.__descriptor = parent.__descriptor
	this.__doneAfterNext = false
}