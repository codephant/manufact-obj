import init from "./init"
import deferredCreates from "./deferredCreates"
import protobuilder from "./prototype"

const create = Object.create

export default function builder_create (object) {
	if (arguments.length) {
		var builder = create(protobuilder)
		init.apply(builder, arguments)
		return builder
	}
	else {
		return deferredCreates
	}
}
