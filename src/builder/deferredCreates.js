import createFrom from "./createFrom"
import createPlain from "./createPlain"

export default Object.create(Object.prototype
,	{ from:{ value:createFrom }
	, plain:{ value:createPlain }
	}
)