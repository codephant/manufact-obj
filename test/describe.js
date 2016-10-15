import tape from "tape"

const noMore = (msg, cb) => tape.skip(msg, cb)
const only = (msg, cb) => tape.only(msg, cb)

const describe = (tape => {
	function wrapEnsure (t) { return (msg, cb) => t.test("it " + msg, cb) }
	function wrapOuterCb (cb) {
		return t => { const it = wrapEnsure(t); cb.call(it, it); t.end() }
	}
	return function describe(something, cb) { tape(something, wrapOuterCb(cb)) }
})(tape)

Object.defineProperties(describe, { noMore:{ value:noMore }, only:{ value:only } })

export default describe