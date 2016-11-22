import firstPair from "../util/firstPair"

export default function builder$method (name, func) {
	if (arguments.length < 2) {
		if (typeof(name) === "function") {
			func = name
			name = func.name
		}
		else {
			[name, func] = firstPair(name)
		}
	}
	if (typeof(func) !== "function") throw new TypeError("only functions for method")
	this.property(name, func)
	return this
}