import React from "react";
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
declare const LoginForm: React.FC<LoginFormProps>;
export default LoginForm;
