import obj from ".."

export default describe => {
	describe("builder$prototype", it => {
		const Sentinel = {Sentinel:true}

		it("fails when trying to override", ensure => {
			ensure.throws
			(	() => { obj({}).prototype(Sentinel) }
			,	TypeError
			,	"fails with TypeError"
			)
			ensure.end()
		})

		it ("creates new obj with prototype", ensure => {
			ensure.equals
			( Object.getPrototypeOf(obj().prototype(Sentinel).end)
			, Sentinel
			, "prototype is same object"
			)
			ensure.end()
		})
	})
}