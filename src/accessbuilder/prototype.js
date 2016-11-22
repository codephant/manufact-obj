import commitToParent from "./commitToParent"
import get from "./setGetter"
import set from "./setSetter"
import only from "./only"

export default Object.create(Object.prototype
,	{ _commitToParent:{ value:commitToParent }
	, set:{ value:set }
	, get:{ value:get }
	, only: { get:only }
	}
)

