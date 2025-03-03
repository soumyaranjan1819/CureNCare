import React, { useState } from "react";
import CreateAccountModal from "./CreateAccountModal";
import LoginModal from "./LogIn";
import ForgotPasswordModal from "./ForgotPasswordModal";

const LoginButton: React.FC = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [createAccountModalOpen, setCreateAccountModalOpen] = useState(false);
  const [forgotPasswordModalOpen, setForgotPasswordModalOpen] = useState(false);

  const showCreateAccountModal = () => {
    setLoginModalOpen(false);
    setCreateAccountModalOpen(true);
  };
  const showLoginModal = () => {
    setCreateAccountModalOpen(false);
    setForgotPasswordModalOpen(false)
    setLoginModalOpen(true);
  };

  const showForgotPasswordModal = () => {
    setLoginModalOpen(false);
    setForgotPasswordModalOpen(true)
  }

  return (
    <>
      <button
        onClick={() => setLoginModalOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Login
      </button>
      <LoginModal
        show={loginModalOpen}
        createAccountModalOpen={showCreateAccountModal}
        onClose={() => setLoginModalOpen(false)}
        forgotPasswordModalOpen={showForgotPasswordModal}
      />
      <CreateAccountModal
        show={createAccountModalOpen}
        loginModalOpen={showLoginModal}
        onClose={() => setCreateAccountModalOpen(false)}
      />
      <ForgotPasswordModal
        show={forgotPasswordModalOpen}
        onClose={() => setForgotPasswordModalOpen(false)}
        loginModalOpen={showLoginModal}
      />
    </>
  );
};

export default LoginButton;
