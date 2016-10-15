import obj from "../index"

const { getOwnPropertyNames:props, getOwnPropertyDescriptor:desc } = Object

export default describe => {
	describe("builder$property", it => {
		it("defines with default descriptor", ensure => {
			ensure.deepEquals
			( desc(obj({}).property("foo", 42).end, "foo")
			, { enumerable:false, configurable:false, writable:false, value:42 }
			, "all default values present"
			)
			ensure.end()
		})

		it("defines with custom flags and name by key", ensure => {
			ensure.deepEquals
			( desc(obj({}).enum.write.config.property({foo:42}).end, "foo")
			, { enumerable:true, configurable:true, writable:true, value:42 }
			, "flag values and prop value present"
			)
			ensure.end()
		})

		it("allows detailed access specs", ensure => {
			const getFoo = ()=>{}
			const setFoo = ()=>{}
			ensure.deepEquals
			( desc(obj({}).enum.property("foo").set(setFoo).get(getFoo).end, "foo")
			, { configurable:false, enumerable:true, get:getFoo, set:setFoo }
			, "property with setter and getter"
			)
			ensure.deepEquals
			( desc(obj({}).enum.property("foo").only.get(getFoo).end, "foo")
			, { configurable:false,  enumerable:true, get:getFoo, set:undefined }
			, "property with only getter"
			)
			ensure.deepEquals
			( desc(obj({}).enum.property("foo").only.set(setFoo).end, "foo")
			, { configurable:false,  enumerable:true, set:setFoo, get:undefined }
			, "property with only setter"
			)
			ensure.end()
		})
	})
}