'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = compile;

var _fft = require('./fft');

var _fft2 = _interopRequireDefault(_fft);

var _ifft = require('./ifft');

var _ifft2 = _interopRequireDefault(_ifft);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function compile(_ref) {
	var $1 = _ref.$1,
	    add = _ref.add,
	    sub = _ref.sub,
	    mul = _ref.mul,
	    imul = _ref.imul,
	    div2 = _ref.div2,
	    root2n = _ref.root2n,
	    iroot2n = _ref.iroot2n;


	return {

		fft: (0, _fft2.default)($1, add, sub, mul, imul, root2n),

		ifft: (0, _ifft2.default)($1, add, sub, mul, imul, div2, iroot2n)

	};
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21waWxlLmpzIl0sIm5hbWVzIjpbImNvbXBpbGUiLCIkMSIsImFkZCIsInN1YiIsIm11bCIsImltdWwiLCJkaXYyIiwicm9vdDJuIiwiaXJvb3QybiIsImZmdCIsImlmZnQiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUd3QkEsTzs7QUFIeEI7Ozs7QUFDQTs7Ozs7O0FBRWUsU0FBU0EsT0FBVCxPQU9YO0FBQUEsS0FMSEMsRUFLRyxRQUxIQSxFQUtHO0FBQUEsS0FKSEMsR0FJRyxRQUpIQSxHQUlHO0FBQUEsS0FKR0MsR0FJSCxRQUpHQSxHQUlIO0FBQUEsS0FKU0MsR0FJVCxRQUpTQSxHQUlUO0FBQUEsS0FKZUMsSUFJZixRQUplQSxJQUlmO0FBQUEsS0FISEMsSUFHRyxRQUhIQSxJQUdHO0FBQUEsS0FGSEMsTUFFRyxRQUZIQSxNQUVHO0FBQUEsS0FGTUMsT0FFTixRQUZNQSxPQUVOOzs7QUFFSCxRQUFPOztBQUVOQyxPQUFNLG1CQUFLUixFQUFMLEVBQVVDLEdBQVYsRUFBZ0JDLEdBQWhCLEVBQXNCQyxHQUF0QixFQUE0QkMsSUFBNUIsRUFBbUNFLE1BQW5DLENBRkE7O0FBSU5HLFFBQU8sb0JBQU1ULEVBQU4sRUFBV0MsR0FBWCxFQUFpQkMsR0FBakIsRUFBdUJDLEdBQXZCLEVBQTZCQyxJQUE3QixFQUFvQ0MsSUFBcEMsRUFBMkNFLE9BQTNDOztBQUpELEVBQVA7QUFRQSIsImZpbGUiOiJjb21waWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZmdCBmcm9tICcuL2ZmdCcgO1xuaW1wb3J0IGlmZnQgZnJvbSAnLi9pZmZ0JyA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBpbGUgKCB7XG5cblx0JDEgLFxuXHRhZGQgLCBzdWIgLCBtdWwgLCBpbXVsICxcblx0ZGl2MiAsXG5cdHJvb3QybiAsIGlyb290Mm5cblxufSApIHtcblxuXHRyZXR1cm4ge1xuXG5cdFx0ZmZ0IDogZmZ0KCAkMSAsIGFkZCAsIHN1YiAsIG11bCAsIGltdWwgLCByb290Mm4gKSAsXG5cblx0XHRpZmZ0IDogaWZmdCggJDEgLCBhZGQgLCBzdWIgLCBtdWwgLCBpbXVsICwgZGl2MiAsIGlyb290Mm4gKVxuXG5cdH0gO1xuXG59XG4iXX0=