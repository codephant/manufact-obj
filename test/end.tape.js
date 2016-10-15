import obj from ".."

export default describe => {
	describe ("builder$end", it => {
		it("returns the object given", ensure => {
			const Sentinel = {Sentinel:true}
			ensure.equals(obj(Sentinel).end, Sentinel, "returns Sentinel")
			ensure.end()
		})
	})
}