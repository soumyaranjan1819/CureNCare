import React from "react";
import Modal from "./Modal";

interface ForgotPasswordModalProps {
  show: boolean;
  onClose: () => void;
  loginModalOpen: () => void;
}

const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({
  show,
  onClose,
  loginModalOpen
}) => {
  const inputFields = [
    {
      id: "email",
      name: "Email",
      type: "text",
      placeholder: "Enter email",
      autoComplete: "new-email",
    },
    {
      id: "new-password",
      name: "Password",
      type: "password",
      placeholder: "Enter new password",
      autoComplete: "new-password",
    },
    {
      id: "reenter-password",
      name: "Confirm password",
      type: "password",
      placeholder: "Confirm password",
      autoComplete: "reenter-password",
    },
  ];

  if (!show) return null;
  return (
    <Modal
      show={show}
      onClose={onClose}
      title="Reset password"
      submitLabel="Reset password"
      onSubmit={onClose}
      inputFields={inputFields}
      footerText="Already have an account?"
      footerLinkText="Login"
      footerLinkAction={loginModalOpen}
    />
  );
};

export default ForgotPasswordModal;
