"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPlain = exports.createFrom = exports.create = exports.prototype = exports.ObjectBuilder = undefined;

var _create = require("./builder/create");

Object.defineProperty(exports, "create", {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_create).default;
  }
});

var _createFrom = require("./builder/createFrom");

Object.defineProperty(exports, "createFrom", {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_createFrom).default;
  }
});

var _createPlain = require("./builder/createPlain");

Object.defineProperty(exports, "createPlain", {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_createPlain).default;
  }
});

var _prototype = require("./builder/prototype");

var _prototype2 = _interopRequireDefault(_prototype);

var _ctor = require("./builder/ctor");

var _ctor2 = _interopRequireDefault(_ctor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const define = Object.defineProperty;
define(_prototype2.default, "constructor", { value: _ctor2.default });
define(_ctor2.default, "prototype", { value: _prototype2.default });

exports.default = _ctor2.default;
const ObjectBuilder = exports.ObjectBuilder = _ctor2.default;
const prototype = exports.prototype = _prototype2.default;