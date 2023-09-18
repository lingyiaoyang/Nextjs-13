import React from 'react';

const footer = () => {
  const currentYear = new Date().getFullYear();

  return <div>copy right 2001 - {currentYear}</div>;
};

export default footer;
