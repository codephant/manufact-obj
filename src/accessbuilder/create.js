import init from "./init"
import prototype from "./prototype"

const create = Object.create

export default function accessbuild_create (parent) {
	const ab = create(prototype)
	init.apply(ab, arguments)
	return ab
}