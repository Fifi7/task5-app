
import React from 'react';
import { Link, useLocation} from 'react-router-dom';


function SideNav() {
  const location = useLocation();
  const isDashboardPage = location.pathname === '/dashboard';

  
  return (
    <div className="side-nav">
      <Link to = "/" className='nav-link'>Welcome-Page</Link>
      <Link to="/create" className='nav-link'>Create</Link>
      <Link to="/questionnaire" className='nav-link'>Questionnaire</Link>
      <Link to="/dashboard" className={`nav-link ${isDashboardPage ? 'dashboard-link' : ''}`}>
        Dashboard</Link>
     
    </div>
  );
}

export default SideNav;
