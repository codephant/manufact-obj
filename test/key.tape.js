import obj from ".."

export default { "builder$key":
	it => {
		it("assigns the same way a normal assignment", ensure => {
			const propdesc = Object.getOwnPropertyDescriptor
			const Sentinel = { Sentinel:true }
			const o = {}
			o.keyByEqual = Sentinel
			obj(o)
			.key("keyByBuilder", Sentinel)
			.key({ keyByPair:Sentinel })
			.end
			ensure.deepEquals(propdesc(o, "keyByBuilder"), propdesc(o, "keyByEqual")
			, "key with name and value"
			)
			ensure.deepEquals(propdesc(o, "keyByPair"), propdesc(o, "keyByEqual")
			, "key with key-value pair"
			)
			ensure.end()
		})
	}
}