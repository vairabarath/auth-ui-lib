import React from "react";
import { LoginForm, RegisterForm } from "./components";

function App() {
  const handleLoginSubmit = (email: string, password: string) => {
    console.log(email, password);
  };
  return (
    <div className="flex justify-center gap-11 h-screen items-center">
      <LoginForm
        customStyle={{
          form: "bg-white shadow-md rounded p-6",
          input: "border border-gray-300 p-2 mb-4 w-full",
          button: "bg-blue-500 text-white py-2 rounded w-full",
          title: "text-xl font-bold mb-4 text-center",
        }}
        onSubmit={handleLoginSubmit}
      />
      <RegisterForm />
    </div>
  );
}

export default App;
