import protobuilder from "./builder/prototype"
import constructor from "./builder/ctor"

const define = Object.defineProperty
define(protobuilder, "constructor", {value:constructor})
define(constructor, "prototype", {value:protobuilder})

export default constructor
export const ObjectBuilder = constructor
export const prototype = protobuilder

export { default as create } from "./builder/create"
export { default as createFrom } from "./builder/createFrom"
export { default as createPlain } from "./builder/createPlain"
