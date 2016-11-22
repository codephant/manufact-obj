
const create = Object.create

export default function builder_init (object) {
	this.__object = object
	this.__descriptor = create(null)
	this.__key = null
}
