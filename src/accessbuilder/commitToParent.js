
export default function accessbuild$commitToParent () {
	const { __parent:p } = this
	p._commit()
	return p
}