import React from "react";
import Modal from "./AuthModal";

interface LoginModalProps {
  show: boolean;
  onClose: () => void;
  createAccountModalOpen: () => void;
  forgotPasswordModalOpen:()=>void
}

const LoginModal: React.FC<LoginModalProps> = ({
  show,
  createAccountModalOpen,
  onClose,
  forgotPasswordModalOpen
}) => {
  const loginFields = [
    {
      id: "email",
      name: "Email",
      type: "text",
      placeholder: "Enter email",
      autoComplete: "new-email",
    },
    {
      id: "password",
      name: "Password",
      type: "password",
      placeholder: "Enter password",
      autoComplete: "new-password",
    },
  ];

  if (!show) return null;

  return (
    <Modal
      show={show}
      onClose={onClose}
      title="Create your account"
      submitLabel="Create account"
      onSubmit={onClose}
      extraLinkText="Forgot password"
      extraLinkAction={forgotPasswordModalOpen}
      footerText="Do not have an account?"
      footerLinkText="Create one free"
      footerLinkAction={createAccountModalOpen}
      inputFields={loginFields}
    />
  );
};

export default LoginModal;
