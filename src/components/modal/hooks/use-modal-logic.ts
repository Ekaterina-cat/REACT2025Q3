import { useEffect, useRef } from 'react';

export const useModalLogic = (onClose: () => void) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const modalRoot = document.getElementById('modal-root');
    if (!modalRoot) return;

    // Close by pressing ESC key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Close on click outside the modal window
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    // Focus Trap
    const handleFocusTrap = () => {
      if (!modalRef.current) return;

      const focusableElements =
        modalRef.current.querySelectorAll('button, input');

      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[1] as HTMLElement;
      const lastElement = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement;

      const handleTabKeyPress = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      };

      document.addEventListener('keydown', handleTabKeyPress);

      setTimeout(() => {
        firstElement?.focus();
      }, 100);

      return () => {
        document.removeEventListener('keydown', handleTabKeyPress);
      };
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    handleFocusTrap();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return { modalRef };
};
