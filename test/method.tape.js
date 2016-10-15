import obj from ".."

export default describe => {
	describe("builder$method", it => {
		it("assigns the given function", ensure => {
			const Sentinel = function Sentinel () { return Sentinel }
			ensure.equals(obj({}).method("foo", Sentinel).end.foo, Sentinel
			, "passed with name"
			)
			ensure.equals(obj({}).method({foo:Sentinel}).end.foo, Sentinel
			, "passed by key"
			)
			ensure.equals(obj({}).method(Sentinel).end.Sentinel, Sentinel
			, "passed as named function"
			)
			ensure.end()
		})

		it("fails on non-function value", ensure => {
			ensure.throws(() => { obj({}).method("foo", 42) }, TypeError
			, "passing number"
			)
			ensure.throws(() => { obj({}).method({ foo:42 }) }, TypeError
			, "passing key with number"
			)
			ensure.end()
		})
	})
}