"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = unzip;
// uj - ui = 2 ( vm - vi )

function unzip(u, ui, uj, v, vi, vm) {

	while (ui < uj) {

		v[vi] = u[ui];

		++ui;++vi;

		v[vm] = u[ui];

		++ui;++vm;
	}
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91bnppcC5qcyJdLCJuYW1lcyI6WyJ1bnppcCIsInUiLCJ1aSIsInVqIiwidiIsInZpIiwidm0iXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUV3QkEsSztBQUZ4Qjs7QUFFZSxTQUFTQSxLQUFULENBQWlCQyxDQUFqQixFQUFxQkMsRUFBckIsRUFBMEJDLEVBQTFCLEVBQStCQyxDQUEvQixFQUFtQ0MsRUFBbkMsRUFBd0NDLEVBQXhDLEVBQTZDOztBQUUzRCxRQUFRSixLQUFLQyxFQUFiLEVBQWtCOztBQUVqQkMsSUFBRUMsRUFBRixJQUFRSixFQUFFQyxFQUFGLENBQVI7O0FBRUEsSUFBRUEsRUFBRixDQUFPLEVBQUVHLEVBQUY7O0FBRVBELElBQUVFLEVBQUYsSUFBUUwsRUFBRUMsRUFBRixDQUFSOztBQUVBLElBQUVBLEVBQUYsQ0FBTyxFQUFFSSxFQUFGO0FBRVA7QUFFRCIsImZpbGUiOiJ1bnppcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHVqIC0gdWkgPSAyICggdm0gLSB2aSApXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVuemlwICggdSAsIHVpICwgdWogLCB2ICwgdmkgLCB2bSApIHtcblxuXHR3aGlsZSAoIHVpIDwgdWogKSB7XG5cblx0XHR2W3ZpXSA9IHVbdWldIDtcblxuXHRcdCsrdWkgOyArK3ZpIDtcblxuXHRcdHZbdm1dID0gdVt1aV0gO1xuXG5cdFx0Kyt1aSA7ICsrdm0gO1xuXG5cdH1cblxufVxuIl19