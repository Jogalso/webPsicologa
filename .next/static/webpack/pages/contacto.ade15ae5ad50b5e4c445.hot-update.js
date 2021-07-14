self["webpackHotUpdate_N_E"]("pages/contacto",{

/***/ "./components/Mapa.jsx":
/*!*****************************!*\
  !*** ./components/Mapa.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Mapa; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-google-maps/api */ "./node_modules/@react-google-maps/api/dist/reactgooglemapsapi.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\joels\\OneDrive\\Documentos\\Rediot\\proyectos\\PsicologaGestalt\\components\\Mapa.jsx";


function Mapa(_ref) {
  var lugar = _ref.lugar;
  var alcosser = {
    lat: 38.792552,
    lng: -0.402164
  };
  var valencia = {
    lat: 39.478026,
    lng: -0.394707
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "mapa",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.LoadScript, {
      googleMapsApiKey: "AIzaSyAPhMjLpbuYz155Vk0v47CqcTue5Z3Z1GM",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.GoogleMap, {
        zoom: 10,
        mapContainerStyle: {
          height: "600px",
          width: "100%"
        },
        center: lugar == "Alcosser" ? alcosser : valencia,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.Marker, {
          position: alcosser
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.Marker, {
          position: valencia
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("style", {
      children: "\n                .mapa{\n                    height: 100%;\n                    max-width: 80%;\n                    margin-left: auto;\n                    margin-right: auto;\n                    padding-bottom: 4em;\n                }\n                \n                "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}
_c = Mapa;

var _c;

$RefreshReg$(_c, "Mapa");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXBhLmpzeCJdLCJuYW1lcyI6WyJNYXBhIiwibHVnYXIiLCJhbGNvc3NlciIsImxhdCIsImxuZyIsInZhbGVuY2lhIiwiaGVpZ2h0Iiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULE9BQXVCO0FBQUEsTUFBUkMsS0FBUSxRQUFSQSxLQUFRO0FBRWxDLE1BQU1DLFFBQVEsR0FBRztBQUFDQyxPQUFHLEVBQUUsU0FBTjtBQUFpQkMsT0FBRyxFQUFDLENBQUM7QUFBdEIsR0FBakI7QUFDQSxNQUFNQyxRQUFRLEdBQUc7QUFBQ0YsT0FBRyxFQUFFLFNBQU47QUFBaUJDLE9BQUcsRUFBQyxDQUFDO0FBQXRCLEdBQWpCO0FBRUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBLDRCQUNJLDhEQUFDLDhEQUFEO0FBQVksc0JBQWdCLEVBQUcseUNBQS9CO0FBQUEsNkJBQ0ksOERBQUMsNkRBQUQ7QUFBVyxZQUFJLEVBQUUsRUFBakI7QUFDWSx5QkFBaUIsRUFBRTtBQUNmRSxnQkFBTSxFQUFFLE9BRE87QUFFZkMsZUFBSyxFQUFFO0FBRlEsU0FEL0I7QUFLWSxjQUFNLEVBQUdOLEtBQUssSUFBSSxVQUFWLEdBQXdCQyxRQUF4QixHQUFtQ0csUUFMdkQ7QUFBQSxnQ0FPSSw4REFBQywwREFBRDtBQUNJLGtCQUFRLEVBQUVIO0FBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQSixlQVVJLDhEQUFDLDBEQUFEO0FBQ0ksa0JBQVEsRUFBRUc7QUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQWlCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWdDSDtLQXJDdUJMLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGFjdG8uYWRlMTVhZTVhZDUwYjVlNGM0NDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvb2dsZU1hcCAsIExvYWRTY3JpcHQsIE1hcmtlciB9IGZyb20gXCJAcmVhY3QtZ29vZ2xlLW1hcHMvYXBpXCJcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFwYSh7bHVnYXJ9KSB7XHJcblxyXG4gICAgY29uc3QgYWxjb3NzZXIgPSB7bGF0OiAzOC43OTI1NTIsIGxuZzotMC40MDIxNjR9XHJcbiAgICBjb25zdCB2YWxlbmNpYSA9IHtsYXQ6IDM5LjQ3ODAyNiwgbG5nOi0wLjM5NDcwN31cclxuXHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcGFcIj5cclxuICAgICAgICAgICAgPExvYWRTY3JpcHQgZ29vZ2xlTWFwc0FwaUtleSA9IFwiQUl6YVN5QVBoTWpMcGJ1WXoxNTVWazB2NDdDcWNUdWU1WjNaMUdNXCI+XHJcbiAgICAgICAgICAgICAgICA8R29vZ2xlTWFwIHpvb209ezEwfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcENvbnRhaW5lclN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjYwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyPXsobHVnYXIgPT0gXCJBbGNvc3NlclwiKSA/IGFsY29zc2VyIDogdmFsZW5jaWF9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1hcmtlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj17YWxjb3NzZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TWFya2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPXt2YWxlbmNpYX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Hb29nbGVNYXA+ICBcclxuICAgICAgICAgICAgPC9Mb2FkU2NyaXB0PlxyXG4gICAgICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgLm1hcGF7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNGVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=