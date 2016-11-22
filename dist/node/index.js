"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPlain = exports.createFrom = exports.create = exports.accessbuilder = exports.builder = undefined;

var _builder = require("./builder");

var builder = _interopRequireWildcard(_builder);

var _accessbuilder = require("./accessbuilder");

var accessbuilder = _interopRequireWildcard(_accessbuilder);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const { create, createFrom, createPlain } = builder;

exports.default = builder.create;
exports.builder = builder;
exports.accessbuilder = accessbuilder;
exports.create = create;
exports.createFrom = createFrom;
exports.createPlain = createPlain;