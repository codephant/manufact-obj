import create from "./create"

export default function builder_createFrom (proto) {
	return create(Object.create(proto))
}