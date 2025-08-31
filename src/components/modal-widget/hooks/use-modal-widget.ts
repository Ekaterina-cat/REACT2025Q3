import { initialColumnsVisibility } from '@utils/constants';
import { useEffect, useRef, useState } from 'react';

export const useModalWidget = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [colVisibility, setColVisibility] = useState(initialColumnsVisibility);
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);
  return {
    isModalOpen,
    setIsModalOpen,
    colVisibility,
    setColVisibility,
    modalRef,
  };
};
