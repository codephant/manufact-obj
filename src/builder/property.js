import accessbuild from "../accessbuilder/create"
import firstPair from "../util/firstPair"

export default function builder$property (name, value) {
	if (arguments.length < 2) {
		switch (typeof name) {
			case "string":
				this.__key = name
				return accessbuild(this)
			case "function":
				this.__key = name.name
				this.__descriptor.get = name
				this._commit()
				return this
			default:
				[name, value] = firstPair(name)
		}
	}
	this.__key = name
	this.__descriptor.value = value
	this._commit()
	return this
}
