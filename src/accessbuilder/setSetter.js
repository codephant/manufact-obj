
export default function accessbuild$setSetter (func) {
	if (typeof(func) !== "function") throw new TypeError("setter must be function")
	const { __doneAfterNext:done } = this
	this.__doneAfterNext = true
	this.__descriptor.set = func
	return done ? this._commitToParent() : this
}