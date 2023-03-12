import React from 'react';
import './Preloader.scss';

export const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader__spinner"></div>
      <span className="preloader__text">Loading...</span>
    </div>
  );
};
