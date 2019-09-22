var $imports = __webpack_require__("./node_modules/art-template/lib/runtime.js);


module.exports = function ($data) {
    $data = $data || {};
     var $$out = '', $escape = $imports.$escape, name = $data.name;
     $$out += 'export default function testArt(){console.log('$$out += $escape(name);$$out += ')}';
     return $$out;
};



__webpack_require__.r(__webpack_exports__);
var _test_js_art__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/test.js.art\");
var _test_js_art__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_test_js_art__WEBPACK_IMPORTED_MODULE_0__);
console.log(\"aaa\");
_test_js_art__WEBPACK_IMPORTED_MODULE_0___default()();
