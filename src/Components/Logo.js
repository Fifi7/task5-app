
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';

function Logo() {
  return (
    <div className="logo">
      <FontAwesomeIcon icon={faChartPie} className="logo-icon" />
    </div>
  );
}

export default Logo;
