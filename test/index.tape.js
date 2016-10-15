import tape from "tape"
const describe = ((tape) => {
	function wrapEnsure (t) { return (msg, cb) => t.test("it " + msg, cb) }
	function wrapOuterCb (cb) {
		return t => { const it = wrapEnsure(t); cb.call(it, it); t.end() }
	}
	return function describe(something, cb) { tape(something, wrapOuterCb(cb)) }
})(tape)
const not = { describe:(msg, cb)=>tape.skip(msg, cb) }


import obj from "./index"

const { getOwnPropertyNames:props, getOwnPropertyDescriptor:desc } = Object

describe("builder$property", it => {
	it("defines with default descriptor ", ensure => {
		ensure.deepEquals
		( desc(obj({}).property("foo", 42).end, "foo")
		, { enumerable:false, configurable:false, writable:false, value:42 }
		)
		ensure.end()
	})

	it("defines with custom flags and name by key", ensure => {
		ensure.deepEquals
		( desc(obj({}).enum.write.config.property({foo:42}).end, "foo")
		, { enumerable:true, configurable:true, writable:true, value:42 }
		)
		ensure.end()
	})

	it("allows detailed access specs", ensure => {
		const getFoo = ()=>{}
		const setFoo = ()=>{}
		ensure.deepEquals
		( desc(obj({}).enum.property("foo").set(setFoo).get(getFoo).end, "foo")
		, { configurable:false, enumerable:true, get:getFoo, set:setFoo }
		)
		ensure.deepEquals
		( desc(obj({}).enum.property("foo").only.get(getFoo).end, "foo")
		, { configurable:false,  enumerable:true, get:getFoo, set:undefined }
		)
		ensure.deepEquals
		( desc(obj({}).enum.property("foo").only.set(setFoo).end, "foo")
		, { configurable:false,  enumerable:true, set:setFoo, get:undefined }
		)
		ensure.end()
	})
})