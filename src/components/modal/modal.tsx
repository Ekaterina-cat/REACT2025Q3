import { type ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { useModalLogic } from './hooks';

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ onClose, children }: ModalProps) => {
  const { modalRef } = useModalLogic(onClose);
  const modalRoot = document.getElementById('modal-root');

  if (modalRoot) {
    return createPortal(
      <div className="fixed inset-0 z-1 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50" />
        <div
          ref={modalRef}
          className="relative max-h-screen overflow-y-auto rounded-lg bg-white p-6 shadow-lg"
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-2 cursor-pointer text-xl font-bold text-gray-500 hover:text-gray-900"
          >
            ✕
          </button>
          {children}
        </div>
      </div>,
      modalRoot
    );
  }
  if (!modalRoot) return null;
};
