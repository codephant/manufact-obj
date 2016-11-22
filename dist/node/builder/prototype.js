"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _withPrototype = require("./withPrototype");

var _withPrototype2 = _interopRequireDefault(_withPrototype);

var _commit = require("./commit");

var _commit2 = _interopRequireDefault(_commit);

var _getObject = require("./getObject");

var _getObject2 = _interopRequireDefault(_getObject);

var _property = require("./property");

var _property2 = _interopRequireDefault(_property);

var _method = require("./method");

var _method2 = _interopRequireDefault(_method);

var _key = require("./key");

var _key2 = _interopRequireDefault(_key);

var _setEnumerable = require("./setEnumerable");

var _setEnumerable2 = _interopRequireDefault(_setEnumerable);

var _setConfigurable = require("./setConfigurable");

var _setConfigurable2 = _interopRequireDefault(_setConfigurable);

var _setWritable = require("./setWritable");

var _setWritable2 = _interopRequireDefault(_setWritable);

var _setHidden = require("./setHidden");

var _setHidden2 = _interopRequireDefault(_setHidden);

var _setReadonly = require("./setReadonly");

var _setReadonly2 = _interopRequireDefault(_setReadonly);

var _setFixed = require("./setFixed");

var _setFixed2 = _interopRequireDefault(_setFixed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Object.create(Object.prototype, { prototype: { value: _withPrototype2.default },
	_commit: { value: _commit2.default },
	end: { get: _getObject2.default },

	property: { value: _property2.default },
	method: { value: _method2.default },
	key: { value: _key2.default },

	enum: { get: _setEnumerable2.default },
	config: { get: _setConfigurable2.default },
	write: { get: _setWritable2.default },
	hidden: { get: _setHidden2.default },
	readonly: { get: _setReadonly2.default },
	fixed: { get: _setFixed2.default }
});