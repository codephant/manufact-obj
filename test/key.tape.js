import obj from ".."

const { getOwnPropertyDescriptor:desc, defineProperty:define } = Object

export default { "builder$key":
	it => {
		it("assigns the same way a normal assignment", ensure => {
			const propdesc = Object.getOwnPropertyDescriptor
			const Sentinel = { Sentinel:true }
			const o = {}
			o.keyByEqual = Sentinel
			try {
				obj(o)
				.key("keyByBuilder", Sentinel)
				.key({ keyByPair:Sentinel })
				.end
			}
			catch(e) { ensure.error(e) }
			ensure.deepEquals(propdesc(o, "keyByBuilder"), propdesc(o, "keyByEqual")
			, "key with name and value"
			)
			ensure.deepEquals(propdesc(o, "keyByPair"), propdesc(o, "keyByEqual")
			, "key with key-value pair"
			)
			ensure.end()
		})

		it("allows detailed access specs", ensure => {
			const getFoo = ()=>{}
			const setFoo = ()=>{}
			try {
				ensure.deepEquals
				( desc(obj({}).key("foo").set(setFoo).get(getFoo).end, "foo")
				, { configurable:true, enumerable:true, get:getFoo, set:setFoo }
				, "property with setter and getter"
				)
			}
			catch(e) { ensure.error(e, "property with setter and getter") }
			try {
				ensure.deepEquals
				( desc(obj({}).key("foo").only.get(getFoo).end, "foo")
				, { configurable:true,  enumerable:true, get:getFoo, set:undefined }
				, "property with only getter"
				)
			} catch (e) { ensure.error(e, "property with only getter") }
			try {
				ensure.deepEquals
				( desc(obj({}).key("foo").only.set(setFoo).end, "foo")
				, { configurable:true,  enumerable:true, set:setFoo, get:undefined }
				, "property with only setter"
				)
			} catch (e) { ensure.error(e, "property with only setter") }
			ensure.end()
		})
	}
}
