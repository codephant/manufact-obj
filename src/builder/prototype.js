import prototype from "./withPrototype"
import commit from "./commit"
import getObject from "./getObject"

import property from "./property"
import method from "./method"
import key from "./key"

import setEnumerable from "./setEnumerable"
import setConfigurable from "./setConfigurable"
import setWritable from "./setWritable"
import setHidden from "./setHidden"
import setReadonly from "./setReadonly"
import setFixed from "./setFixed"

export default Object.create(Object.prototype
,	{ prototype:{ value:prototype }
	, _commit:{ value:commit }
	, end:{ get:getObject }

	, property:{ value:property }
	, method:{ value:method }
	, key:{ value:key }

	, enum:{ get:setEnumerable }
	, config:{ get:setConfigurable }
	, write:{ get:setWritable }
	, hidden:{ get:setHidden }
	, readonly:{ get:setReadonly }
	, fixed:{ get:setFixed }
	}
)
