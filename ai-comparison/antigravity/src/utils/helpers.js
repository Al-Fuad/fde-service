/**
 * Utility functions for class combining and smooth scrolling
 */

/**
 * Combines conditional class names
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Smoothly scrolls to an anchor element on the page
 */
export function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    const yOffset = -80; // Account for fixed navbar height
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
