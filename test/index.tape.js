import tape from "tape"
import describe from "./describe"

import builder$end from "./end.tape"
import builder$property from "./property.tape"
import builder$prototype from "./prototype.tape"
import builder$method from "./method.tape"

describe.many
( builder$end
, builder$property
, builder$prototype
, builder$method
)
