import describe from "tape-describe"

import builder$end from "./end.tape"
import builder$property from "./property.tape"
import builder$from from "./from.tape"
import builder$method from "./method.tape"
import builder$key from "./key.tape"

describe.many
( builder$end
, builder$property
, builder$from
, builder$method
, builder$key
)
