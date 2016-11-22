import init from "./init"

export default function builder_constructor (object) {
	init.apply(this, arguments)
}