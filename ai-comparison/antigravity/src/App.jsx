import React, { useState } from 'react';
import MainLayout from './layouts/MainLayout';
import LandingPage from './pages/LandingPage';

/**
 * Root App component
 */
export default function App() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    data: {},
  });

  const handleOpenConsultation = (customData = {}) => {
    setModalState({
      isOpen: true,
      data: customData,
    });
  };

  return (
    <MainLayout onOpenConsultation={handleOpenConsultation}>
      <LandingPage modalState={modalState} setModalState={setModalState} />
    </MainLayout>
  );
}
