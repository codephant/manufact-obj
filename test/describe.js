import tape from "tape"

const firstPair = o => {
	const owns = Object.prototype.hasOwnProperty
	let k
	for (k in o) break
	k = k != null && owns.call(o, k) ? k : null
	return [k, k == null ? void 0 : o[k]]
}

const noMore = (msg, cb) => tape.skip(msg, cb)
const only = (msg, cb) => tape.only(msg, cb)
const many = (...tests) =>
	tests.forEach(t => typeof t === "function"
		? t(describe)
		: describe.apply(void 0, firstPair(t))
	)

const describe = (tape => {
	function wrapEnsure (t) { return (msg, cb) => t.test("it " + msg, cb) }
	function wrapOuterCb (cb) {
		return t => { const it = wrapEnsure(t); cb.call(it, it); t.end() }
	}
	return function describe(something, cb) { tape(something, wrapOuterCb(cb)) }
})(tape)

Object.defineProperties(describe
,	{ noMore:{ value:noMore }
	, only:{ value:only }
	, many:{ value:many }
	}
)

export default describe