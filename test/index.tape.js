import describe from "tape-describe"

import builder$end from "./end.tape"
import builder$property from "./property.tape"
import builder$prototype from "./prototype.tape"
import builder$method from "./method.tape"
import builder$key from "./key.tape"

describe.many
( builder$end
, builder$property
, builder$prototype
, builder$method
, builder$key
)
