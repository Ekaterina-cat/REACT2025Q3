import { useEffect, useRef, useState } from 'react';

import type { ColumnKey } from '../types';

export const useModalWidget = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [colVisibility, setColVisibility] = useState({
    cement_co2: true,
    cumulative_cement_co2: true,
    gdp: true,
    energy_per_capita: true,
    gas_co2: true,
    methane: true,
    methane_per_capita: true,
    oil_co2: true,
    temperature_change_from_ghg: true,
    total_ghg: true,
  });
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
  const toggleColumnVisibility = (columnKey: ColumnKey) => {
    setColVisibility((prev) => ({
      ...prev,
      [columnKey]: !prev[columnKey],
    }));
  };
  return {
    isModalOpen,
    setIsModalOpen,
    colVisibility,
    setColVisibility,
    toggleColumnVisibility,
    modalRef,
  };
};
