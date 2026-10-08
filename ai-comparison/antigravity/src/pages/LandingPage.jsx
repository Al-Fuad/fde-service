import React, { useState } from 'react';
import HeroSection from '../sections/HeroSection';
import TrustMetrics from '../sections/TrustMetrics';
import ServicesSection from '../sections/ServicesSection';
import TechStackSection from '../sections/TechStackSection';
import ProjectsSection from '../sections/ProjectsSection';
import ProcessSection from '../sections/ProcessSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import PricingSection from '../sections/PricingSection';
import FaqSection from '../sections/FaqSection';
import CtaSection from '../sections/CtaSection';
import Modal from '../components/Modal';

/**
 * LandingPage component aggregating all sections with interactive consultation modal
 */
export default function LandingPage({ modalState, setModalState }) {
  const handleOpenConsultation = (customData = {}) => {
    setModalState({
      isOpen: true,
      data: customData,
    });
  };

  const handleCloseModal = () => {
    setModalState({
      isOpen: false,
      data: {},
    });
  };

  return (
    <>
      <HeroSection onOpenConsultation={() => handleOpenConsultation()} />
      <TrustMetrics />
      <ServicesSection onOpenConsultation={handleOpenConsultation} />
      <TechStackSection />
      <ProjectsSection onOpenConsultation={handleOpenConsultation} />
      <ProcessSection onOpenConsultation={() => handleOpenConsultation()} />
      <PricingSection onOpenConsultation={handleOpenConsultation} />
      <TestimonialsSection />
      <FaqSection onOpenConsultation={() => handleOpenConsultation()} />
      <CtaSection onOpenConsultation={() => handleOpenConsultation()} />

      {/* Consultation & Discovery Booking Modal */}
      <Modal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        initialData={modalState.data}
      />
    </>
  );
}
