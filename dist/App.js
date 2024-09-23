import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LoginForm, RegisterForm } from "./components";
function App() {
    var handleLoginSubmit = function (email, password) {
        console.log(email, password);
    };
    return (_jsxs("div", { className: "flex justify-center gap-11 h-screen items-center", children: [_jsx(LoginForm, { customStyle: {
                    form: "bg-white shadow-md rounded p-6",
                    input: "border border-gray-300 p-2 mb-4 w-full",
                    button: "bg-blue-500 text-white py-2 rounded w-full",
                    title: "text-xl font-bold mb-4 text-center",
                }, onSubmit: handleLoginSubmit }), _jsx(RegisterForm, {})] }));
}
export default App;
