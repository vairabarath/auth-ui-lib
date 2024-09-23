import React from "react";
interface RegisterFormProps {
    title?: string;
    button?: string;
    customStyle?: {
        form?: string;
        input?: string;
        button?: string;
        title?: string;
    };
    onSubmit?: (username: string, email: string, password: string) => void;
}
declare const RegisterForm: React.FC<RegisterFormProps>;
export default RegisterForm;
