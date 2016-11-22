"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prototype = exports.create = exports.AccessBuilder = undefined;

var _create = require("./accessbuilder/create");

var _create2 = _interopRequireDefault(_create);

var _ctor = require("./accessbuilder/ctor");

var _ctor2 = _interopRequireDefault(_ctor);

var _prototype = require("./accessbuilder/prototype");

var _prototype2 = _interopRequireDefault(_prototype);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const define = Object.defineProperty;

define(_ctor2.default, "prototype", { value: _prototype2.default });
define(_prototype2.default, "constructor", { value: _ctor2.default });

exports.default = _ctor2.default;
const AccessBuilder = exports.AccessBuilder = _ctor2.default;
const create = exports.create = _create2.default;
const prototype = exports.prototype = _prototype2.default;