import React from 'react';
import { questions } from './Questionnaire';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faThumbsUp, faThumbsDown, faMeh } from '@fortawesome/free-solid-svg-icons';




const Dashboard = () => {
  const location = useLocation();
  const answersString = new URLSearchParams(location.search).get('answers');
  const answers = JSON.parse(decodeURIComponent(answersString));
  
  const hasNoData = !answers || Object.keys(answers).length === 0;

  const calculateSummary = () => {
    if (!answers) {
      return null; 
    }

    const totalQuestions = questions.length;
    const agreeCount = Object.values(answers).filter(answer => answer === 'agree').length;
    const disagreeCount = Object.values(answers).filter(answer => answer === 'disagree').length;
    const neutralCount = Object.values(answers).filter(answer => answer === 'neutral').length;

    return {
      totalQuestions,
      agreeCount,
      disagreeCount,
      neutralCount,
    };
  };

  const summary = calculateSummary();

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      {hasNoData ? (
        <p>No data to display</p>
      ) : (
      <div className="summary">
        <div className='summary-item'>
          <div className='square'>
        <FontAwesomeIcon icon={faQuestion} className="summary-icon" />
        </div>
        <p>Total Questions</p>
            <span>{summary.totalQuestions}</span>
          </div>
        <div className="summary-item">
        <div className="square">
            <FontAwesomeIcon icon={faThumbsUp} className="summary-icon agree-icon" />
            </div>
            <p>Agreements</p>
            <span>{summary.agreeCount}</span>
          </div>
        <div className="summary-item">
        <div className="square">
            <FontAwesomeIcon icon={faThumbsDown} className="summary-icon disagree-icon" />
            </div>
            <p>Disagreements</p>
            <span>{summary.disagreeCount}</span>
          </div>
        <div className="summary-item">
        <div className="square">
            <FontAwesomeIcon icon={faMeh} className="summary-icon neutral-icon" />
            </div>
            <p>Neutral</p>
            <span>{summary.neutralCount}</span>
          </div>
      </div>
  )}
  </div>
  )
}

export default Dashboard;
