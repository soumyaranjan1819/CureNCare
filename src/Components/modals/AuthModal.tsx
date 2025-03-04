import React from "react";
import { FaTimes } from "react-icons/fa";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  title: string;
  inputFields: InputField[];
  submitLabel: string;
  onSubmit: (formData: Record<string, string>) => void;
  footerText?: string;
  footerLinkText?: string;
  footerLinkAction?: () => void;
  extraLinkText?: string;
  extraLinkAction?: () => void;
}

interface InputField {
    id: string;
    name: string;
    type: string;
    placeholder: string;
    autoComplete?: string;
  }

const Modal: React.FC<ModalProps> = ({
  show,
  onClose,
  title,
  inputFields,
  submitLabel,
  onSubmit,
  footerText,
  footerLinkText,
  footerLinkAction,
  extraLinkText,
  extraLinkAction
}) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background blure effect*/}
      {/* <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div> */}

      {/* Modal container */}
      <div className="bg-white p-6 rounded-lg shadow-lg relative z-10 w-96">
        {/* Close icon at top-right */}
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
          <FaTimes size={20} />
        </button>

        <h2 className="text-xl font-bold mb-4 text-left">{title}</h2>
        <form autoComplete="off">
          {inputFields.map((field) => (
            <div key={field.id} className="mb-4">
              <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 text-left">
                {field.name}
              </label>
              <input
                type={field.type}
                id={field.id}
                name={field.id}
                placeholder={field.placeholder}
                autoComplete={field.autoComplete || "off"}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
          <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            {submitLabel}
          </button>
        </form>

        {/* Extra link */}
        {extraLinkText && (
          <div className="mt-3 text-center">
            <button onClick={extraLinkAction} className="text-sm text-blue-500 hover:underline">
              {extraLinkText}
            </button>
          </div>
        )}

        {/* Footer link */}
        {footerText && footerLinkText && (
          <div className="mt-4 text-center">
            <span className="text-sm text-gray-700">{footerText} </span>
            <button onClick={footerLinkAction} className="text-sm text-blue-500 hover:underline">
              {footerLinkText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
