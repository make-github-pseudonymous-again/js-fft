'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = fft;

var _fft2 = require('./_fft');

var _fft3 = _interopRequireDefault(_fft2);

var _zip2 = require('./_zip');

var _zip3 = _interopRequireDefault(_zip2);

var _unzip = require('./unzip');

var _unzip2 = _interopRequireDefault(_unzip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fft($1, add, sub, mul, imul, root2n) {

	return (0, _fft3.default)(_unzip2.default, (0, _zip3.default)($1, add, sub, mul, imul, root2n));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mZnQuanMiXSwibmFtZXMiOlsiZmZ0IiwiJDEiLCJhZGQiLCJzdWIiLCJtdWwiLCJpbXVsIiwicm9vdDJuIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFJd0JBLEc7O0FBSnhCOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRWUsU0FBU0EsR0FBVCxDQUFlQyxFQUFmLEVBQW9CQyxHQUFwQixFQUEwQkMsR0FBMUIsRUFBZ0NDLEdBQWhDLEVBQXNDQyxJQUF0QyxFQUE2Q0MsTUFBN0MsRUFBc0Q7O0FBRXBFLFFBQU8sb0NBQWMsbUJBQU1MLEVBQU4sRUFBV0MsR0FBWCxFQUFpQkMsR0FBakIsRUFBdUJDLEdBQXZCLEVBQTZCQyxJQUE3QixFQUFvQ0MsTUFBcEMsQ0FBZCxDQUFQO0FBRUEiLCJmaWxlIjoiZmZ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9mZnQgZnJvbSAnLi9fZmZ0JyA7XG5pbXBvcnQgX3ppcCBmcm9tICcuL196aXAnIDtcbmltcG9ydCB1bnppcCBmcm9tICcuL3VuemlwJyA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZmdCAoICQxICwgYWRkICwgc3ViICwgbXVsICwgaW11bCAsIHJvb3QybiApIHtcblxuXHRyZXR1cm4gX2ZmdCggdW56aXAgLCBfemlwKCAkMSAsIGFkZCAsIHN1YiAsIG11bCAsIGltdWwgLCByb290Mm4gKSApIDtcblxufVxuIl19