self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/FormularioContacto.jsx":
/*!*******************************************!*\
  !*** ./components/FormularioContacto.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useField */ "./hooks/useField.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\joels\\OneDrive\\Documentos\\Rediot\\proyectos\\PsicologaGestalt\\components\\FormularioContacto.jsx",
    _this = undefined,
    _s = $RefreshSig$();





var FormularioContacto = function FormularioContacto() {
  _s();

  //estado del nombre de usuario para login
  var _useField = (0,_hooks_useField__WEBPACK_IMPORTED_MODULE_3__.useField)({
    initialValue: ' '
  }),
      valueNombre = _useField.value,
      setValueNombre = _useField.setValue,
      errorsNombre = _useField.errors,
      addErrorNombre = _useField.addError;

  var _useField2 = (0,_hooks_useField__WEBPACK_IMPORTED_MODULE_3__.useField)({
    initialValue: ' '
  }),
      valueEmail = _useField2.value,
      setValueEmail = _useField2.setValue,
      errorsEmail = _useField2.errors,
      addErrorEmail = _useField2.addError;

  var _useField3 = (0,_hooks_useField__WEBPACK_IMPORTED_MODULE_3__.useField)({
    initialValue: ' '
  }),
      valueTelefono = _useField3.value,
      setValueTelefono = _useField3.setValue,
      errorsTelefono = _useField3.errors,
      addErrorTelefono = _useField3.addError;

  var _useField4 = (0,_hooks_useField__WEBPACK_IMPORTED_MODULE_3__.useField)({
    initialValue: ' '
  }),
      valueMotivo = _useField4.value,
      setValueMotivo = _useField4.setValue,
      errorsMotivo = _useField4.errors,
      addErrorMotivo = _useField4.addError; //metodo de adicion de errores


  var onFieldError = react__WEBPACK_IMPORTED_MODULE_2___default().useCallback(function (_ref) {
    var message = _ref.message,
        path = _ref.path;

    switch (path[0]) {
      case "nombre":
        addErrorNombre(e.target.value);
        break;

      case "email":
        addErrorEmail(e.target.value);
        break;

      case "telefono":
        addErrorTelefono(e.target.value);
        break;

      case "motivo":
        addErrorMotivo(e.target.value);
        break;
    }
  }, [addErrorNombre, addErrorEmail, addErrorTelefono, addErrorMotivo]); //metodo para el manejo del cambio de datos en los campos

  var handleChange = function handleChange(e) {
    switch (e.target.name) {
      case "nombre":
        setValueNombre(e.target.value);
        break;

      case "email":
        setValueEmail(e.target.value);
        break;

      case "telefono":
        setValuePais(e.target.value);
        break;

      case "motivo":
        setValueMotivo(e.target.value);
        break;
    }
  };

  var onSubmit = function onSubmit(e) {
    e.preventDefault();
    fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nombre: valueNombre,
        email: valueEmail,
        telefono: valueTelefono,
        motivo: valueMotivo
      })
    });
    alert("Contact email has been sent successfully");
    window.location.href = "/";
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "jsx-1432014958" + " " + "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "jsx-1432014958" + " " + "banner"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 21
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "jsx-1432014958" + " " + "formulario",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          onSubmit: onSubmit,
          className: "jsx-1432014958" + " " + "ContactForm",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-1432014958" + " " + "titulo",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "jsx-1432014958" + " " + "Titulo",
              children: "Contacto"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 29
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-1432014958" + " " + "inputs",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "jsx-1432014958" + " " + "contenedorInput",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "jsx-1432014958",
                children: "Nombre"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 37
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                name: "nombre",
                type: "text",
                required: "true",
                title: "Tu nombre y apellidos, para saber como dirigirnos a ti",
                onChange: handleChange,
                className: "jsx-1432014958" + " " + "nombre"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 33
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "jsx-1432014958" + " " + "contenedorInput",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "jsx-1432014958",
                children: "Correo Electronico"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 37
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                name: "email",
                type: "email",
                title: "Un correo electronico que se de tu uso habitual",
                required: "true",
                onChange: handleChange,
                className: "jsx-1432014958" + " " + "email"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 33
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "jsx-1432014958" + " " + "contenedorInput",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "jsx-1432014958",
                children: "Telefono"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 37
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                name: "nombre",
                type: "tel",
                pattern: "[ +][0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2} [0-9]{2}",
                title: "Un numero de telefono con la posibilidad de +000 de la procedencia, seguido de 9 digitos entre el 0 al 9",
                required: "true",
                onChange: handleChange,
                className: "jsx-1432014958" + " " + "nombre"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 33
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 29
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-1432014958" + " " + "containerMotivo",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "jsx-1432014958" + " " + "spanMotivo",
              children: "Motivo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 33
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
              name: "motivo",
              type: "text",
              title: "Explicar brevemente el motivo de contacto",
              onChange: handleChange,
              className: "jsx-1432014958" + " " + "inputFormMotivo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 33
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 29
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-1432014958" + " " + "boton",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "jsx-1432014958" + " " + "submitForm",
              children: "Enviar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 21
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "jsx-1432014958" + " " + "banner"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "1432014958",
      children: ".container.jsx-1432014958{border-bottom-right-radius:1.5em;border-bottom-left-radius:1.5em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:linear-gradient(180deg,#FFB26B 0,#FF9524 60%,#E68620);color:#007099;}.formulario.jsx-1432014958{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;width:70%;}.banner.jsx-1432014958{width:25%;}.inputs.jsx-1432014958{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.inputs.jsx-1432014958 div.jsx-1432014958{text-align:center;margin:10px;padding:20px;font-size:30px;}.inputs.jsx-1432014958 span.jsx-1432014958{font-family:'RymanEco';}.contenedorInput.jsx-1432014958{display:grid;-webkit-box-pack:center;-webkit-jusfify-content:center;-ms-flex-pack:center;jusfify-content:center;margin:auto;}.Titulo.jsx-1432014958{font-family:'RymanEco';padding-top:1rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:3em;}input.jsx-1432014958{padding:0.8em;text-rendering:optimizeLegibility;}.email.jsx-1432014958{width:30em;}.containerMotivo.jsx-1432014958{display:grid;max-width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.containerMotivo.jsx-1432014958 span.jsx-1432014958{font-size:30px;font-family:'RymanEco';}.inputFormMotivo.jsx-1432014958{max-width:100%;width:60em;height:10em;text-rendering:optimizeLegibility;padding:0.8em;resize:none;border-radius:4px;border:2px solid #ccc;}.submitForm.jsx-1432014958{box-sizing:border-box;color:#fff;cursor:pointer;display:inline-block;border:none;display:block;margin-left:auto;margin-right:auto;margin-bottom:2em;margin-top:2em;background-color:#0a8ecd;box-shadow:0 2px 13px 0 rgba(4,116,186,0.5);border-radius:0 3px 3px 0;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;padding:10px 1rem;height:50px;margin-bottom:25px;font-size:1.2rem;}@media only screen and (max-width:1600px){.email.jsx-1432014958{width:20em;}}@media only screen and (max-width:1400px){.banner.jsx-1432014958{width:15%;}}@media only screen and (max-width:1200px){.banner.jsx-1432014958{width:5%;}.formulario.jsx-1432014958{width:90%;}}@media only screen and (max-width:1000px){.banner.jsx-1432014958{width:0%;}.formulario.jsx-1432014958{width:100%;}}@media only screen and (max-width:900px){.formulario.jsx-1432014958{width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.ContactForm.jsx-1432014958{max-width:100%;}.inputs.jsx-1432014958{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:auto;}.email.jsx-1432014958{width:100%;max-width:100%;}.nombre.jsx-1432014958{width:100%;max-width:100%;}.containerMotivo.jsx-1432014958{display;-webkit-flex;-ms-flex;flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.inputFormMotivo.jsx-1432014958{width:30em;max-width:90%;margin-left:2em;}}@media only screen and (max-width:600px){.inputFormMotivo.jsx-1432014958{width:20rem;}}@media only screen and (max-width:420px){.inputs.jsx-1432014958{max-width:80%;}.inputFormMotivo.jsx-1432014958{width:15rem;max-width:80%;margin-left:1em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcam9lbHNcXE9uZURyaXZlXFxEb2N1bWVudG9zXFxSZWRpb3RcXHByb3llY3Rvc1xcUHNpY29sb2dhR2VzdGFsdFxcY29tcG9uZW50c1xcRm9ybXVsYXJpb0NvbnRhY3RvLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEySnFCLEFBRzhELEFBT3JCLEFBTUwsQUFHTSxBQUdLLEFBTUssQUFHVixBQUtVLEFBT1YsQUFJSCxBQUdFLEFBS0csQUFJQSxBQVVPLEFBcUJQLEFBS0QsQUFLRCxBQUdDLEFBS0QsQUFHRSxBQUtBLEFBSUksQUFHTyxBQUlYLEFBSUEsQUFJSixBQUlJLEFBT0MsQUFLRSxBQUdGLFFBbkJBLENBbENoQixBQVFBLENBNUZKLEFBK0VJLEFBUUEsQ0F4REwsQUEyQ0ssQUFxQkEsQUFLMkIsQUFXUixBQUlBLEFBUUQsQ0FPbEIsQUFRa0IsQ0EzSEssQUFtQlQsQ0FQbUIsQUE0R2pDLENBaEd1QixBQUlaLEFBNkRYLEdBbEdZLElBK0NELENBekNmLEFBUXFCLEVBd0dHLENBaEZSLEFBb0VaLEFBSUEsQUF1Qm9CLEVBeEdFLEVBNUJULEdBcEJtQixBQW1FakIsRUFpRVcsR0EvRS9CLEFBS3VDLEVBeEJyQixDQXdHYixDQWVBLENBcEllLEtBb0JwQixBQTJCMEIsVUE5Q3pCLE9BckJpQixJQW9FRCxHQVZFLEVBcERRLEFBUzFCLElBd0dvQixHQWxERixLQVZGLElBNkRaLEtBbERpQixHQVZDLFlBcURsQixFQXJGWSxBQTJDTSxDQTZEbEIsQ0FsR3VCLEVBMkJELFFBaEMxQixHQW1CRCxHQXdCdUIsUUFWdkIsQ0E3RHlFLFNBd0VyRCxlQUNVLFVBbkVSLGVBb0UyQixHQW5FbkMsVUFDZCxHQVBtQixTQWlDQSxLQWhDbkIsU0FpQ0EsS0F3QytCLDBCQUNaLHdEQUNJLGtCQUNOLFlBQ08sbUJBQ0YsaUJBQ3RCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcam9lbHNcXE9uZURyaXZlXFxEb2N1bWVudG9zXFxSZWRpb3RcXHByb3llY3Rvc1xcUHNpY29sb2dhR2VzdGFsdFxcY29tcG9uZW50c1xcRm9ybXVsYXJpb0NvbnRhY3RvLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7dXNlRmllbGR9IGZyb20gJy4uL2hvb2tzL3VzZUZpZWxkJ1xyXG5cclxuY29uc3QgRm9ybXVsYXJpb0NvbnRhY3RvID0gKCkgPT4ge1xyXG5cclxuICAgIC8vZXN0YWRvIGRlbCBub21icmUgZGUgdXN1YXJpbyBwYXJhIGxvZ2luXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgdmFsdWU6IHZhbHVlTm9tYnJlLFxyXG4gICAgICAgIHNldFZhbHVlOiBzZXRWYWx1ZU5vbWJyZSxcclxuICAgICAgICBlcnJvcnM6IGVycm9yc05vbWJyZSwgLy9lc3RhIHZhcmlhYmxlIGRlYmUgY29udGVuZXIgdW4gU3RyaW5nIHBhcmEgbW9zdHJhcmxvIGNvbW8gbWVuc2FqZSBkZSB2YWxpZGFjaW9uIHBlcnNvbmFsaXphZG8gZW4gbG9zIGlucHV0IHRleHQgYWdub3N0aWNvc1xyXG4gICAgICAgIGFkZEVycm9yOiBhZGRFcnJvck5vbWJyZSwgLy9tZXRvZG8gcGFyYSBhw7FhZGlyIG8gY29uY2F0ZW5lciBudWV2b3MgbWVuc2FqZXMgYWwgU3RyaW5nIGRlIGVycm9yc05vbWJyZVxyXG4gICAgICB9ID0gdXNlRmllbGQoeyBpbml0aWFsVmFsdWU6ICcgJyB9KTtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgdmFsdWU6IHZhbHVlRW1haWwsXHJcbiAgICAgICAgc2V0VmFsdWU6IHNldFZhbHVlRW1haWwsXHJcbiAgICAgICAgZXJyb3JzOiBlcnJvcnNFbWFpbCwgLy9lc3RhIHZhcmlhYmxlIGRlYmUgY29udGVuZXIgdW4gU3RyaW5nIHBhcmEgbW9zdHJhcmxvIGNvbW8gbWVuc2FqZSBkZSB2YWxpZGFjaW9uIHBlcnNvbmFsaXphZG8gZW4gbG9zIGlucHV0IHRleHQgYWdub3N0aWNvc1xyXG4gICAgICAgIGFkZEVycm9yOiBhZGRFcnJvckVtYWlsLCAvL21ldG9kbyBwYXJhIGHDsWFkaXIgbyBjb25jYXRlbmVyIG51ZXZvcyBtZW5zYWplcyBhbCBTdHJpbmcgZGUgZXJyb3JzTm9tYnJlXHJcbiAgICAgIH0gPSB1c2VGaWVsZCh7IGluaXRpYWxWYWx1ZTogJyAnIH0pO1xyXG4gICAgICBcclxuICAgIGNvbnN0IHtcclxuICAgICAgICB2YWx1ZTogdmFsdWVUZWxlZm9ubyxcclxuICAgICAgICBzZXRWYWx1ZTogc2V0VmFsdWVUZWxlZm9ubyxcclxuICAgICAgICBlcnJvcnM6IGVycm9yc1RlbGVmb25vLCAvL2VzdGEgdmFyaWFibGUgZGViZSBjb250ZW5lciB1biBTdHJpbmcgcGFyYSBtb3N0cmFybG8gY29tbyBtZW5zYWplIGRlIHZhbGlkYWNpb24gcGVyc29uYWxpemFkbyBlbiBsb3MgaW5wdXQgdGV4dCBhZ25vc3RpY29zXHJcbiAgICAgICAgYWRkRXJyb3I6IGFkZEVycm9yVGVsZWZvbm8sIC8vbWV0b2RvIHBhcmEgYcOxYWRpciBvIGNvbmNhdGVuZXIgbnVldm9zIG1lbnNhamVzIGFsIFN0cmluZyBkZSBlcnJvcnNOb21icmVcclxuICAgICAgfSA9IHVzZUZpZWxkKHsgaW5pdGlhbFZhbHVlOiAnICcgfSk7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIHZhbHVlOiB2YWx1ZU1vdGl2byxcclxuICAgICAgICBzZXRWYWx1ZTogc2V0VmFsdWVNb3Rpdm8sXHJcbiAgICAgICAgZXJyb3JzOiBlcnJvcnNNb3Rpdm8sIC8vZXN0YSB2YXJpYWJsZSBkZWJlIGNvbnRlbmVyIHVuIFN0cmluZyBwYXJhIG1vc3RyYXJsbyBjb21vIG1lbnNhamUgZGUgdmFsaWRhY2lvbiBwZXJzb25hbGl6YWRvIGVuIGxvcyBpbnB1dCB0ZXh0IGFnbm9zdGljb3NcclxuICAgICAgICBhZGRFcnJvcjogYWRkRXJyb3JNb3Rpdm8sIC8vbWV0b2RvIHBhcmEgYcOxYWRpciBvIGNvbmNhdGVuZXIgbnVldm9zIG1lbnNhamVzIGFsIFN0cmluZyBkZSBlcnJvcnNOb21icmVcclxuICAgICAgfSA9IHVzZUZpZWxkKHsgaW5pdGlhbFZhbHVlOiAnICcgfSk7XHJcbiAgICBcclxuICAgIC8vbWV0b2RvIGRlIGFkaWNpb24gZGUgZXJyb3Jlc1xyXG4gICAgY29uc3Qgb25GaWVsZEVycm9yID0gUmVhY3QudXNlQ2FsbGJhY2soXHJcbiAgICAgICAgKHsgbWVzc2FnZSwgcGF0aCB9KSA9PiB7XHJcbiAgICAgICAgICBzd2l0Y2ggKHBhdGhbMF0pIHtcclxuICAgICAgICAgICAgY2FzZSBcIm5vbWJyZVwiOlxyXG4gICAgICAgICAgICAgICAgYWRkRXJyb3JOb21icmUoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImVtYWlsXCI6XHJcbiAgICAgICAgICAgICAgICBhZGRFcnJvckVtYWlsKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICBjYXNlIFwidGVsZWZvbm9cIjpcclxuICAgICAgICAgICAgICAgIGFkZEVycm9yVGVsZWZvbm8oZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgIGNhc2UgXCJtb3Rpdm9cIjpcclxuICAgICAgICAgICAgICAgIGFkZEVycm9yTW90aXZvKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFthZGRFcnJvck5vbWJyZSwgYWRkRXJyb3JFbWFpbCwgYWRkRXJyb3JUZWxlZm9ubywgYWRkRXJyb3JNb3Rpdm9dXHJcbiAgICAgICk7XHJcbiAgICAvL21ldG9kbyBwYXJhIGVsIG1hbmVqbyBkZWwgY2FtYmlvIGRlIGRhdG9zIGVuIGxvcyBjYW1wb3NcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKXtcclxuICAgICAgICAgICBjYXNlIFwibm9tYnJlXCI6XHJcbiAgICAgICAgICAgICAgIHNldFZhbHVlTm9tYnJlKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICBjYXNlIFwiZW1haWxcIjpcclxuICAgICAgICAgICAgICAgc2V0VmFsdWVFbWFpbChlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ0ZWxlZm9ub1wiOlxyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVQYWlzKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJtb3Rpdm9cIjpcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlTW90aXZvKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICB9XHJcbiAgIH1cclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGZldGNoKCcvYXBpL3NlbmQtZW1haWwnLCB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBub21icmU6IHZhbHVlTm9tYnJlLCBlbWFpbDogdmFsdWVFbWFpbCwgdGVsZWZvbm86IHZhbHVlVGVsZWZvbm8sIG1vdGl2bzogdmFsdWVNb3Rpdm8gfSlcclxuICAgICAgICB9KTtcclxuICAgICAgICBhbGVydChcIkNvbnRhY3QgZW1haWwgaGFzIGJlZW4gc2VudCBzdWNjZXNzZnVsbHlcIilcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZj0gXCIvXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm11bGFyaW9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIkNvbnRhY3RGb3JtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtvblN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXR1bG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJUaXR1bG9cIj5Db250YWN0bzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW5lZG9ySW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Tm9tYnJlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJub21icmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVHUgbm9tYnJlIHkgYXBlbGxpZG9zLCBwYXJhIHNhYmVyIGNvbW8gZGlyaWdpcm5vcyBhIHRpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVuZWRvcklucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkNvcnJlbyBFbGVjdHJvbmljbzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVW4gY29ycmVvIGVsZWN0cm9uaWNvIHF1ZSBzZSBkZSB0dSB1c28gaGFiaXR1YWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW5lZG9ySW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VGVsZWZvbm88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm49XCJbICtdWzAtOV17M30gWzAtOV17M30gWzAtOV17Mn0gWzAtOV17Mn0gWzAtOV17Mn1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJVbiBudW1lcm8gZGUgdGVsZWZvbm8gY29uIGxhIHBvc2liaWxpZGFkIGRlICswMDAgZGUgbGEgcHJvY2VkZW5jaWEsIHNlZ3VpZG8gZGUgOSBkaWdpdG9zIGVudHJlIGVsIDAgYWwgOVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibm9tYnJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyTW90aXZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Bhbk1vdGl2b1wiPk1vdGl2bzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1vdGl2b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJFeHBsaWNhciBicmV2ZW1lbnRlIGVsIG1vdGl2byBkZSBjb250YWN0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0Rm9ybU1vdGl2b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdWJtaXRGb3JtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVudmlhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMS41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI0ZGQjI2QiAwLCAjRkY5NTI0IDYwJSwgI0U2ODYyMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwNzA5OTtcclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgLmZvcm11bGFyaW97XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIC5iYW5uZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbnB1dHN7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbnB1dHMgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmlucHV0cyBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSeW1hbkVjbyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbmVkb3JJbnB1dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXNmaWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIC5UaXR1bG97XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1J5bWFuRWNvJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjhlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgLmVtYWlse1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lck1vdGl2b3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lck1vdGl2byBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSeW1hbkVjbyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIC5pbnB1dEZvcm1Nb3Rpdm97XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjBlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTBlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjhlbTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAuc3VibWl0Rm9ybXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGE4ZWNkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggMTNweCAwIHJnYmEoNCwxMTYsMTg2LDAuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZW1haWx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJhbm5lcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5iYW5uZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm11bGFyaW97XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYmFubmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtdWxhcmlve1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm11bGFyaW97XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuQ29udGFjdEZvcm17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmlucHV0c3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lbWFpbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubm9tYnJle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb250YWluZXJNb3Rpdm97XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTsgZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmlucHV0Rm9ybU1vdGl2b3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmlucHV0Rm9ybU1vdGl2b3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5wdXRze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmlucHV0Rm9ybU1vdGl2b3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFlbTtzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD4gICAgICAgICBcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybXVsYXJpb0NvbnRhY3RvIl19 */\n/*@ sourceURL=C:\\\\Users\\\\joels\\\\OneDrive\\\\Documentos\\\\Rediot\\\\proyectos\\\\PsicologaGestalt\\\\components\\\\FormularioContacto.jsx */"
    }, void 0, false, void 0, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 13
  }, _this);
};

_s(FormularioContacto, "WWZHl59PFnx13XW5Hv1CalCFkGs=", false, function () {
  return [_hooks_useField__WEBPACK_IMPORTED_MODULE_3__.useField, _hooks_useField__WEBPACK_IMPORTED_MODULE_3__.useField, _hooks_useField__WEBPACK_IMPORTED_MODULE_3__.useField, _hooks_useField__WEBPACK_IMPORTED_MODULE_3__.useField];
});

_c = FormularioContacto;
/* harmony default export */ __webpack_exports__["default"] = (FormularioContacto);

var _c;

$RefreshReg$(_c, "FormularioContacto");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtdWxhcmlvQ29udGFjdG8uanN4Il0sIm5hbWVzIjpbIkZvcm11bGFyaW9Db250YWN0byIsInVzZUZpZWxkIiwiaW5pdGlhbFZhbHVlIiwidmFsdWVOb21icmUiLCJ2YWx1ZSIsInNldFZhbHVlTm9tYnJlIiwic2V0VmFsdWUiLCJlcnJvcnNOb21icmUiLCJlcnJvcnMiLCJhZGRFcnJvck5vbWJyZSIsImFkZEVycm9yIiwidmFsdWVFbWFpbCIsInNldFZhbHVlRW1haWwiLCJlcnJvcnNFbWFpbCIsImFkZEVycm9yRW1haWwiLCJ2YWx1ZVRlbGVmb25vIiwic2V0VmFsdWVUZWxlZm9ubyIsImVycm9yc1RlbGVmb25vIiwiYWRkRXJyb3JUZWxlZm9ubyIsInZhbHVlTW90aXZvIiwic2V0VmFsdWVNb3Rpdm8iLCJlcnJvcnNNb3Rpdm8iLCJhZGRFcnJvck1vdGl2byIsIm9uRmllbGRFcnJvciIsIlJlYWN0IiwibWVzc2FnZSIsInBhdGgiLCJlIiwidGFyZ2V0IiwiaGFuZGxlQ2hhbmdlIiwibmFtZSIsInNldFZhbHVlUGFpcyIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5vbWJyZSIsImVtYWlsIiwidGVsZWZvbm8iLCJtb3Rpdm8iLCJhbGVydCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBRUEsSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBQUE7O0FBRTdCO0FBRjZCLGtCQVF2QkMseURBQVEsQ0FBQztBQUFFQyxnQkFBWSxFQUFFO0FBQWhCLEdBQUQsQ0FSZTtBQUFBLE1BSWxCQyxXQUprQixhQUl6QkMsS0FKeUI7QUFBQSxNQUtmQyxjQUxlLGFBS3pCQyxRQUx5QjtBQUFBLE1B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QUFBQTtBQUFBLGFBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRlI7QUEwT0gsQ0F6VEQ7O0dBQU03QixrQjtVQVFJQyxxRCxFQU9BQSxxRCxFQU9BQSxxRCxFQU9BQSxxRDs7O0tBN0JKRCxrQjtBQTJUTiwrREFBZUEsa0JBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjJiOTQzYTY1YWQ3ZjZlYTNiYWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7dXNlRmllbGR9IGZyb20gJy4uL2hvb2tzL3VzZUZpZWxkJ1xyXG5cclxuY29uc3QgRm9ybXVsYXJpb0NvbnRhY3RvID0gKCkgPT4ge1xyXG5cclxuICAgIC8vZXN0YWRvIGRlbCBub21icmUgZGUgdXN1YXJpbyBwYXJhIGxvZ2luXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgdmFsdWU6IHZhbHVlTm9tYnJlLFxyXG4gICAgICAgIHNldFZhbHVlOiBzZXRWYWx1ZU5vbWJyZSxcclxuICAgICAgICBlcnJvcnM6IGVycm9yc05vbWJyZSwgLy9lc3RhIHZhcmlhYmxlIGRlYmUgY29udGVuZXIgdW4gU3RyaW5nIHBhcmEgbW9zdHJhcmxvIGNvbW8gbWVuc2FqZSBkZSB2YWxpZGFjaW9uIHBlcnNvbmFsaXphZG8gZW4gbG9zIGlucHV0IHRleHQgYWdub3N0aWNvc1xyXG4gICAgICAgIGFkZEVycm9yOiBhZGRFcnJvck5vbWJyZSwgLy9tZXRvZG8gcGFyYSBhw7FhZGlyIG8gY29uY2F0ZW5lciBudWV2b3MgbWVuc2FqZXMgYWwgU3RyaW5nIGRlIGVycm9yc05vbWJyZVxyXG4gICAgICB9ID0gdXNlRmllbGQoeyBpbml0aWFsVmFsdWU6ICcgJyB9KTtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgdmFsdWU6IHZhbHVlRW1haWwsXHJcbiAgICAgICAgc2V0VmFsdWU6IHNldFZhbHVlRW1haWwsXHJcbiAgICAgICAgZXJyb3JzOiBlcnJvcnNFbWFpbCwgLy9lc3RhIHZhcmlhYmxlIGRlYmUgY29udGVuZXIgdW4gU3RyaW5nIHBhcmEgbW9zdHJhcmxvIGNvbW8gbWVuc2FqZSBkZSB2YWxpZGFjaW9uIHBlcnNvbmFsaXphZG8gZW4gbG9zIGlucHV0IHRleHQgYWdub3N0aWNvc1xyXG4gICAgICAgIGFkZEVycm9yOiBhZGRFcnJvckVtYWlsLCAvL21ldG9kbyBwYXJhIGHDsWFkaXIgbyBjb25jYXRlbmVyIG51ZXZvcyBtZW5zYWplcyBhbCBTdHJpbmcgZGUgZXJyb3JzTm9tYnJlXHJcbiAgICAgIH0gPSB1c2VGaWVsZCh7IGluaXRpYWxWYWx1ZTogJyAnIH0pO1xyXG4gICAgICBcclxuICAgIGNvbnN0IHtcclxuICAgICAgICB2YWx1ZTogdmFsdWVUZWxlZm9ubyxcclxuICAgICAgICBzZXRWYWx1ZTogc2V0VmFsdWVUZWxlZm9ubyxcclxuICAgICAgICBlcnJvcnM6IGVycm9yc1RlbGVmb25vLCAvL2VzdGEgdmFyaWFibGUgZGViZSBjb250ZW5lciB1biBTdHJpbmcgcGFyYSBtb3N0cmFybG8gY29tbyBtZW5zYWplIGRlIHZhbGlkYWNpb24gcGVyc29uYWxpemFkbyBlbiBsb3MgaW5wdXQgdGV4dCBhZ25vc3RpY29zXHJcbiAgICAgICAgYWRkRXJyb3I6IGFkZEVycm9yVGVsZWZvbm8sIC8vbWV0b2RvIHBhcmEgYcOxYWRpciBvIGNvbmNhdGVuZXIgbnVldm9zIG1lbnNhamVzIGFsIFN0cmluZyBkZSBlcnJvcnNOb21icmVcclxuICAgICAgfSA9IHVzZUZpZWxkKHsgaW5pdGlhbFZhbHVlOiAnICcgfSk7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIHZhbHVlOiB2YWx1ZU1vdGl2byxcclxuICAgICAgICBzZXRWYWx1ZTogc2V0VmFsdWVNb3Rpdm8sXHJcbiAgICAgICAgZXJyb3JzOiBlcnJvcnNNb3Rpdm8sIC8vZXN0YSB2YXJpYWJsZSBkZWJlIGNvbnRlbmVyIHVuIFN0cmluZyBwYXJhIG1vc3RyYXJsbyBjb21vIG1lbnNhamUgZGUgdmFsaWRhY2lvbiBwZXJzb25hbGl6YWRvIGVuIGxvcyBpbnB1dCB0ZXh0IGFnbm9zdGljb3NcclxuICAgICAgICBhZGRFcnJvcjogYWRkRXJyb3JNb3Rpdm8sIC8vbWV0b2RvIHBhcmEgYcOxYWRpciBvIGNvbmNhdGVuZXIgbnVldm9zIG1lbnNhamVzIGFsIFN0cmluZyBkZSBlcnJvcnNOb21icmVcclxuICAgICAgfSA9IHVzZUZpZWxkKHsgaW5pdGlhbFZhbHVlOiAnICcgfSk7XHJcbiAgICBcclxuICAgIC8vbWV0b2RvIGRlIGFkaWNpb24gZGUgZXJyb3Jlc1xyXG4gICAgY29uc3Qgb25GaWVsZEVycm9yID0gUmVhY3QudXNlQ2FsbGJhY2soXHJcbiAgICAgICAgKHsgbWVzc2FnZSwgcGF0aCB9KSA9PiB7XHJcbiAgICAgICAgICBzd2l0Y2ggKHBhdGhbMF0pIHtcclxuICAgICAgICAgICAgY2FzZSBcIm5vbWJyZVwiOlxyXG4gICAgICAgICAgICAgICAgYWRkRXJyb3JOb21icmUoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImVtYWlsXCI6XHJcbiAgICAgICAgICAgICAgICBhZGRFcnJvckVtYWlsKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICBjYXNlIFwidGVsZWZvbm9cIjpcclxuICAgICAgICAgICAgICAgIGFkZEVycm9yVGVsZWZvbm8oZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgIGNhc2UgXCJtb3Rpdm9cIjpcclxuICAgICAgICAgICAgICAgIGFkZEVycm9yTW90aXZvKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFthZGRFcnJvck5vbWJyZSwgYWRkRXJyb3JFbWFpbCwgYWRkRXJyb3JUZWxlZm9ubywgYWRkRXJyb3JNb3Rpdm9dXHJcbiAgICAgICk7XHJcbiAgICAvL21ldG9kbyBwYXJhIGVsIG1hbmVqbyBkZWwgY2FtYmlvIGRlIGRhdG9zIGVuIGxvcyBjYW1wb3NcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKXtcclxuICAgICAgICAgICBjYXNlIFwibm9tYnJlXCI6XHJcbiAgICAgICAgICAgICAgIHNldFZhbHVlTm9tYnJlKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICBjYXNlIFwiZW1haWxcIjpcclxuICAgICAgICAgICAgICAgc2V0VmFsdWVFbWFpbChlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ0ZWxlZm9ub1wiOlxyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVQYWlzKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJtb3Rpdm9cIjpcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlTW90aXZvKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICB9XHJcbiAgIH1cclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGZldGNoKCcvYXBpL3NlbmQtZW1haWwnLCB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBub21icmU6IHZhbHVlTm9tYnJlLCBlbWFpbDogdmFsdWVFbWFpbCwgdGVsZWZvbm86IHZhbHVlVGVsZWZvbm8sIG1vdGl2bzogdmFsdWVNb3Rpdm8gfSlcclxuICAgICAgICB9KTtcclxuICAgICAgICBhbGVydChcIkNvbnRhY3QgZW1haWwgaGFzIGJlZW4gc2VudCBzdWNjZXNzZnVsbHlcIilcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZj0gXCIvXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm11bGFyaW9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIkNvbnRhY3RGb3JtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtvblN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXR1bG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJUaXR1bG9cIj5Db250YWN0bzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW5lZG9ySW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Tm9tYnJlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJub21icmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVHUgbm9tYnJlIHkgYXBlbGxpZG9zLCBwYXJhIHNhYmVyIGNvbW8gZGlyaWdpcm5vcyBhIHRpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVuZWRvcklucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkNvcnJlbyBFbGVjdHJvbmljbzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVW4gY29ycmVvIGVsZWN0cm9uaWNvIHF1ZSBzZSBkZSB0dSB1c28gaGFiaXR1YWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW5lZG9ySW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VGVsZWZvbm88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm49XCJbICtdWzAtOV17M30gWzAtOV17M30gWzAtOV17Mn0gWzAtOV17Mn0gWzAtOV17Mn1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJVbiBudW1lcm8gZGUgdGVsZWZvbm8gY29uIGxhIHBvc2liaWxpZGFkIGRlICswMDAgZGUgbGEgcHJvY2VkZW5jaWEsIHNlZ3VpZG8gZGUgOSBkaWdpdG9zIGVudHJlIGVsIDAgYWwgOVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibm9tYnJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyTW90aXZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Bhbk1vdGl2b1wiPk1vdGl2bzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1vdGl2b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJFeHBsaWNhciBicmV2ZW1lbnRlIGVsIG1vdGl2byBkZSBjb250YWN0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0Rm9ybU1vdGl2b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdWJtaXRGb3JtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVudmlhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMS41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI0ZGQjI2QiAwLCAjRkY5NTI0IDYwJSwgI0U2ODYyMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwNzA5OTtcclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgLmZvcm11bGFyaW97XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIC5iYW5uZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbnB1dHN7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbnB1dHMgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmlucHV0cyBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSeW1hbkVjbyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbmVkb3JJbnB1dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXNmaWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIC5UaXR1bG97XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1J5bWFuRWNvJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjhlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgLmVtYWlse1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lck1vdGl2b3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lck1vdGl2byBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSeW1hbkVjbyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIC5pbnB1dEZvcm1Nb3Rpdm97XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjBlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTBlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjhlbTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAuc3VibWl0Rm9ybXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGE4ZWNkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggMTNweCAwIHJnYmEoNCwxMTYsMTg2LDAuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZW1haWx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJhbm5lcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5iYW5uZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm11bGFyaW97XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYmFubmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtdWxhcmlve1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm11bGFyaW97XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuQ29udGFjdEZvcm17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmlucHV0c3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lbWFpbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubm9tYnJle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb250YWluZXJNb3Rpdm97XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTsgZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmlucHV0Rm9ybU1vdGl2b3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmlucHV0Rm9ybU1vdGl2b3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5wdXRze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmlucHV0Rm9ybU1vdGl2b3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFlbTtzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD4gICAgICAgICBcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybXVsYXJpb0NvbnRhY3RvIl0sInNvdXJjZVJvb3QiOiIifQ==