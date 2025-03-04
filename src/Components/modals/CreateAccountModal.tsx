import React from "react";
import Modal from "./AuthModal";

interface CreateAccountModalProps {
  show: boolean;
  loginModalOpen: () => void;
  onClose: () => void;
}

const CreateAccountModal: React.FC<CreateAccountModalProps> = ({
  loginModalOpen,
  onClose,
  show,
}) => {
  const signUpFields = [
    {
      id: "name",
      name: "Full Name",
      type: "text",
      placeholder: "Enter your name",
      autoComplete: "new-name",
    },
    {
      id: "mobile",
      name: "Mobile No",
      type: "text",
      placeholder: "Enter mobile no",
      autoComplete: "new-mobile",
    },
    {
      id: "email",
      name: "Email",
      type: "email",
      placeholder: "Enter your email",
      autoComplete: "new-email",
    },
    {
      id: "password",
      name: "Password",
      type: "password",
      placeholder: "Create a password",
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
      footerText="Already have an account?"
      footerLinkText="Login"
      footerLinkAction={loginModalOpen}
      inputFields={signUpFields}
    />
  );
};

export default CreateAccountModal;
