
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



  export const questions = [
  {
    id: 1,
    text: "Question 1: Do you agree with the statement?",
  },
  {
    id: 2,
    text: "Question 2: Do you enjoy coding?",
  },
  
  {
    id: 3,
    text: "Question 3: Do you support digitalization?",
  },

  {
    id: 4,
    text: "Question 4: Do you disagree with the statement?",
  },
  
];

const Questionnaire = () => {
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const handleAnswerChange = (questionId, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: value,
    }));
  };

  const handleSubmit = () => {
    const answersString = encodeURIComponent(JSON.stringify(answers));
    navigate(`/dashboard?answers=${answersString}`); 
  };

  return (
    <div className="questionnaire-container">
      <h1>Questionnaire</h1>
    <div className="questionnaire">
      {questions.map((question) => (
        <div key={question.id} className="question">
          <p>{question.text}</p>
          <div className="options">
            <label>
              <input
                type="radio"
                name={`question_${question.id}`}
                value="agree"
                checked={answers[question.id] === 'agree'}
                onChange={() => handleAnswerChange(question.id, 'agree')}
              />
              Agree
            </label>
            <label>
              <input
                type="radio"
                name={`question_${question.id}`}
                value="disagree"
                checked={answers[question.id] === 'disagree'}
                onChange={() => handleAnswerChange(question.id, 'disagree')}
              />
              Disagree
            </label>
            <label>
              <input
                type="radio"
                name={`question_${question.id}`}
                value="neutral"
                checked={answers[question.id] === 'neutral'}
                onChange={() => handleAnswerChange(question.id, 'neutral')}
              />
              Neutral
            </label>
          </div>
        </div>
      ))}
      <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
    </div>
    </div>
  );
};



export default Questionnaire;


