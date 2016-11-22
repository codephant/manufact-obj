import factory from "./accessbuilder/create"
import ctor from "./accessbuilder/ctor"
import protoaccbuild from "./accessbuilder/prototype"

const define = Object.defineProperty

define(ctor, "prototype", {value:protoaccbuild})
define(protoaccbuild, "constructor", {value:ctor})

export default ctor
export const AccessBuilder = ctor
export const create = factory
export const prototype = protoaccbuild