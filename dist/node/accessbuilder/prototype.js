"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _commitToParent = require("./commitToParent");

var _commitToParent2 = _interopRequireDefault(_commitToParent);

var _setGetter = require("./setGetter");

var _setGetter2 = _interopRequireDefault(_setGetter);

var _setSetter = require("./setSetter");

var _setSetter2 = _interopRequireDefault(_setSetter);

var _only = require("./only");

var _only2 = _interopRequireDefault(_only);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Object.create(Object.prototype, { _commitToParent: { value: _commitToParent2.default },
	set: { value: _setSetter2.default },
	get: { value: _setGetter2.default },
	only: { get: _only2.default }
});