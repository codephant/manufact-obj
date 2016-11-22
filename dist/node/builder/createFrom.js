"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = builder_createFrom;

var _create = require("./create");

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function builder_createFrom(proto) {
	return (0, _create2.default)(Object.create(proto));
}