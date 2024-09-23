import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
var LoginForm = function (_a) {
    var _b = _a.title, title = _b === void 0 ? "Login" : _b, _c = _a.button, button = _c === void 0 ? "Login" : _c, _d = _a.customStyle, customStyle = _d === void 0 ? {} : _d, onSubmit = _a.onSubmit;
    var _e = useState(""), email = _e[0], setEmail = _e[1];
    var _f = useState(""), password = _f[0], setPassword = _f[1];
    var handleSubmit = function (e) {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(email, password);
        }
    };
    return (_jsxs("form", { onSubmit: handleSubmit, className: "p-4 border rounded shadow-md ".concat(customStyle.form), children: [_jsx("h2", { className: "text-lg font-bold mb-4 text-center ".concat(customStyle.title), children: title }), _jsx("input", { type: "email", value: email, onChange: function (e) { return setEmail(e.target.value); }, placeholder: "Email", className: "border p-2 mb-4 w-full ".concat(customStyle.input), required: true }), _jsx("input", { type: "password", value: password, onChange: function (e) { return setPassword(e.target.value); }, placeholder: "password", className: "border p-2 mb-4 w-full ".concat(customStyle.input), required: true }), _jsx("button", { type: "submit", className: "bg-blue-500 text-white py-2 w-full rounded ".concat(customStyle.button), children: button })] }));
};
export default LoginForm;
