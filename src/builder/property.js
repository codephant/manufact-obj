import accessbuild from "../accessbuilder/create"
import firstPair from "../util/firstPair"

export default function builder$property (name, value) {
	if (arguments.length < 2) {
		if (typeof(name) === "string") {
			this.__key = name
			return accessbuild(this)
		}
		[name, value] = firstPair(name)
	}
	this.__key = name
	this.__descriptor.value = value
	this._commit()
	return this
}