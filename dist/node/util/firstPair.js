"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = firstPair;

var _firstKey = require("./firstKey");

var _firstKey2 = _interopRequireDefault(_firstKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function firstPair(o) {
	var k = (0, _firstKey2.default)(o);
	return [k, k === null ? k : o[k]];
}