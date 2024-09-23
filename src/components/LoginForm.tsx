import React, { useState } from "react";

interface LoginFormProps {
  title?: string;
  button?: string;
  customStyle?: {
    form?: string;
    input?: string;
    button?: string;
    title?: string;
  };
  onSubmit?: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  title = "Login",
  button = "Login",
  customStyle = {},
  onSubmit,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (onSubmit) {
      onSubmit(email, password);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`p-4 border rounded shadow-md ${customStyle.form}`}>
      <h2 className={`text-lg font-bold mb-4 text-center ${customStyle.title}`}>
        {title}
      </h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className={`border p-2 mb-4 w-full ${customStyle.input}`}
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        className={`border p-2 mb-4 w-full ${customStyle.input}`}
        required
      />

      <button
        type="submit"
        className={`bg-blue-500 text-white py-2 w-full rounded ${customStyle.button}`}>
        {button}
      </button>
    </form>
  );
};

export default LoginForm;
