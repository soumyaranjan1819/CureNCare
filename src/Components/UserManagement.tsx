import React, { useState } from "react";
import CreateAccountModal from "./CreateAccount";
import LoginModal from "./LogIn";

const LoginButton: React.FC = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [createAccountModalOpen, setCreateAccountModalOpen] = useState(false);

  const showCreateAccountModal = () => {
    setCreateAccountModalOpen(true);
    setLoginModalOpen(false);
  };
  const showLoginModal = () => {
    setLoginModalOpen(true);
    setCreateAccountModalOpen(false);
  };

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
      />
      <CreateAccountModal
        show={createAccountModalOpen}
        loginModalOpen={showLoginModal}
        onClose={() => setCreateAccountModalOpen(false)}
      />
    </>
  );
};

export default LoginButton;
