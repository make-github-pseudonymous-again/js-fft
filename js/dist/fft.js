"use strict";

(function () {

	"use strict";

	var definition = function definition(exports, undefined) {

		/* js/src/_fft.js */

		var _fft = function _fft(unzip, zip) {

			var fft = function fft(l, m, u, ui, uj, v, vi, vj) {

				if (l === 0) {

					v[vi] = u[ui];
					return;
				}

				unzip(u, ui, uj, v, vi, vi + m);

				fft(l - 1, m >>> 1, v, vi, vi + m, u, ui, ui + m);
				fft(l - 1, m >>> 1, v, vi + m, vj, u, ui + m, uj);

				zip(l, u, ui, ui + m, v, vi, vi + m);
			};

			return fft;
		};

		exports._fft = _fft;

		/* js/src/_izip.js */

		var _izip = function _izip($1, add, sub, mul, imul, div2, root2n) {

			var izip = function izip(l, u, ui, um, v, vi, vm) {

				var z = root2n(l);

				var w = $1();

				var _vm = vm;

				while (vi < _vm) {

					v[vi] = div2(add(u[ui], mul(w, u[um])));
					v[vm] = div2(sub(u[ui], mul(w, u[um])));

					w = imul(w, z);

					++um;++vm;++ui;++vi;
				}
			};

			return izip;
		};

		exports._izip = _izip;

		/* js/src/_zip.js */

		var _zip = function _zip($1, add, sub, mul, imul, root2n) {

			var zip = function zip(l, u, ui, um, v, vi, vm) {

				var z = root2n(l);

				var w = $1();

				var _vm = vm;

				while (vi < _vm) {

					v[vi] = add(u[ui], mul(w, u[um]));
					v[vm] = sub(u[ui], mul(w, u[um]));

					w = imul(w, z);

					++um;++vm;++ui;++vi;
				}
			};

			return zip;
		};

		exports._zip = _zip;

		/* js/src/compile.js */

		var compile = function compile(_ref) {
			var $1 = _ref.$1;
			var add = _ref.add;
			var sub = _ref.sub;
			var mul = _ref.mul;
			var imul = _ref.imul;
			var div2 = _ref.div2;
			var root2n = _ref.root2n;
			var iroot2n = _ref.iroot2n;

			return {

				fft: fft($1, add, sub, mul, imul, root2n),

				ifft: ifft($1, add, sub, mul, imul, div2, iroot2n)

			};
		};

		exports.compile = compile;

		/* js/src/fft.js */

		var fft = function fft($1, add, sub, mul, imul, root2n) {

			return _fft(unzip, _zip($1, add, sub, mul, imul, root2n));
		};

		exports.fft = fft;

		/* js/src/ifft.js */

		var ifft = function ifft($1, add, sub, mul, imul, div2, iroot2n) {

			return _fft(unzip, _izip($1, add, sub, mul, imul, div2, iroot2n));
		};

		exports.ifft = ifft;

		/* js/src/unzip.js */

		// uj - ui = 2 ( vm - vi )

		var unzip = function unzip(u, ui, uj, v, vi, vm) {

			while (ui < uj) {

				v[vi] = u[ui];

				++ui;++vi;

				v[vm] = u[ui];

				++ui;++vm;
			}
		};

		exports.unzip = unzip;

		return exports;
	};
	if (typeof exports === "object") {
		definition(exports);
	} else if (typeof define === "function" && define.amd) {
		define("aureooms-js-fft", [], function () {
			return definition({});
		});
	} else if (typeof window === "object" && typeof window.document === "object") {
		definition(window["fft"] = {});
	} else console.error("unable to detect type of module to define for aureooms-js-fft");
})();