"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * # API Ideas
 * object(prototype)
 *   .enum.config.method(function(){})
 *   .enum.property
 * 	   .set(function(){})
 * 	   .get(function(){})
 * .end
 * object.plain()
 */

const create = Object.create;
const define = Object.defineProperty;
const owns = Object.prototype.hasOwnProperty;

function firstKey(o) {
	var k;
	for (k in o) break;
	return k != null && owns.call(o, k) ? k : null;
}

function firstPair(o) {
	var k = firstKey(o);
	return [k, k == null ? void 0 : o[k]];
}

function builder_create(object) {
	var builder = create(builder_prototype);
	builder_init.apply(builder, arguments);
	return builder;
}

function builder_init(object) {
	this.__object = object;
	this.__descriptor = create(null);
	this.__key = null;
}

const builder_prototype = {};

function builder_constructor(object) {
	builder_init.apply(this, arguments);
}
define(builder_constructor, "prototype", { value: builder_prototype });
define(builder_prototype, "constructor", { value: builder_constructor });

function builder$prototype(prototype) {
	if (this.__object == null) this.__object = Object.create(prototype);else throw new TypeError("prototype creates new object");
	return this;
}
define(builder_prototype, "prototype", { value: builder$prototype });

function builder$commit() {
	var key = this.__key;
	var desc = this.__descriptor;
	if (key == null) throw new TypeError("missing property key");
	if (!("value" in desc || "set" in desc || "get" in desc)) throw new TypeError("missing property value");
	define(this.__object, key, desc);
	this.__key = null;
	this.__descriptor = create(null);
}
define(builder_prototype, "_commit", { value: builder$commit });

function builder$getObject() {
	return this.__object;
}
define(builder_prototype, "end", { get: builder$getObject });

function builder$property(name, value) {
	if (arguments.length < 2) {
		if (typeof name === "string") {
			this.__key = name;
			return accessbuild_create(this);
		}

		var _firstPair = firstPair(name);

		var _firstPair2 = _slicedToArray(_firstPair, 2);

		name = _firstPair2[0];
		value = _firstPair2[1];
	}
	this.__key = name;
	this.__descriptor.value = value;
	this._commit();
	return this;
}
define(builder_prototype, "property", { value: builder$property });

function builder$method(name, func) {
	if (arguments.length < 2) {
		if (typeof name === "function") {
			func = name;
			name = func.name;
		} else {
			var _firstPair3 = firstPair(name);

			var _firstPair4 = _slicedToArray(_firstPair3, 2);

			name = _firstPair4[0];
			func = _firstPair4[1];
		}
	}
	if (typeof func !== "function") throw new TypeError("only functions for method");
	this.property(name, func);
	return this;
}
define(builder_prototype, "method", { value: builder$method });

function builder$key(name, value) {
	if (arguments.length < 2) {
		var _firstPair5 = firstPair(name);

		var _firstPair6 = _slicedToArray(_firstPair5, 2);

		name = _firstPair6[0];
		value = _firstPair6[1];
	}
	return this.enum.config.write.property(name, value);
}
define(builder_prototype, "key", builder$key);

function builder$setEnumerable(value) {
	value = arguments.length < 1 || Boolean(value);
	this.__descriptor.enumerable = value;
	return this;
}
define(builder_prototype, "enum", { get: builder$setEnumerable });

function builder$setConfigurable(value) {
	value = arguments.length < 1 || Boolean(value);
	this.__descriptor.configurable = value;
	return this;
}
define(builder_prototype, "config", { get: builder$setConfigurable });

function builder$setWritable(value) {
	value = arguments.length < 1 || Boolean(value);
	this.__descriptor.writable = value;
	return this;
}
define(builder_prototype, "write", { get: builder$setWritable });

function builder$setHidden() {
	return this.enum(false);
}
define(builder_prototype, "hidden", { get: builder$setHidden });

function builder$setReadonly() {
	return this.write(false);
}
define(builder_prototype, "readonly", { get: builder$setReadonly });

function builder$setFixed() {
	return this.config(false);
}
define(builder_prototype, "fixed", { get: builder$setFixed });

function accessbuild_create(parent) {
	const ab = create(accessbuild_prototype);
	accessbuild_init.apply(ab, arguments);
	return ab;
}

function accessbuild_init(parent) {
	this.__parent = parent;
	this.__descriptor = parent.__descriptor;
	this.__doneAfterNext = false;
}

const accessbuild_prototype = {};

function accessbuild_constructor(parent) {
	accessbuild_init.apply(this, arguments);
}
define(accessbuild_constructor, "prototype", { value: accessbuild_prototype });
define(accessbuild_prototype, "constructor", { value: accessbuild_constructor });

function accessbuild$setSetter(func) {
	if (typeof func !== "function") throw new TypeError("setter must be function");
	this.__descriptor.set = func;
	const done = this.__doneAfterNext;
	this.__doneAfterNext = true;
	return done ? this._commitToParent() : this;
}
define(accessbuild_prototype, "set", { value: accessbuild$setSetter });

function accessbuild$setGetter(func) {
	if (typeof func !== "function") throw new TypeError("setter must be function");
	this.__descriptor.get = func;
	const done = this.__doneAfterNext;
	this.__doneAfterNext = true;
	return done ? this._commitToParent() : this;
}
define(accessbuild_prototype, "get", { value: accessbuild$setGetter });

function accessbuild$commitToParent() {
	this.__parent._commit();
	return this.__parent;
}
define(accessbuild_prototype, "_commitToParent", { value: accessbuild$commitToParent });

function accessbuild$only() {
	this.__doneAfterNext = true;
	return this;
}
define(accessbuild_prototype, "only", { get: accessbuild$only });

exports.default = builder_create;
exports.create = builder_create;
exports.prototype = builder_prototype;