import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';





function CreateQuestion() {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [editedQuestion, setEditedQuestion] = useState('');
  const [editedQuestionIndex, setEditedQuestionIndex] = useState(-1);

  const handleAddQuestion = () => {
    if (newQuestion.trim() !== '') {
      setQuestions([...questions, newQuestion]);
      setNewQuestion('');
    }
    

  };

  const handleQuestionChange = (event) => {
    setNewQuestion(event.target.value);
  };

  const handleEditQuestion = (index) => {
    setEditedQuestion(questions[index]);
    setEditedQuestionIndex(index);
  };

  const handleUpdateQuestion = () => {
    if (editedQuestion.trim() !== '') {
      const updatedQuestions = [...questions];
      updatedQuestions[editedQuestionIndex] = editedQuestion;
      setQuestions(updatedQuestions);
      setEditedQuestion('');
      setEditedQuestionIndex(-1);
    }
  };

  const handleDeleteQuestion = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
  };

  return (
  
    <div className="create-question-container">
      <h1>Create New Question</h1>
      <div className="question-input-container">
      <div className="input-container">
        <input
          type="text"
          value={newQuestion}
          onChange={handleQuestionChange}
          placeholder="Enter your question"
        />
        </div>
        <button className="add-button" onClick={handleAddQuestion}>
          Add Question
        </button>
      </div>
        <div className="list-heading">
        <h2>List Of Questions:</h2>
      </div>
      <div className="question-list">
        {questions.map((question, index) => (
            <div key={index} className="question-item">
            <div className="buttons-container">
            {editedQuestionIndex === index ? (
              <>
                <input
                  type="text"
                  value={editedQuestion}
                  onChange={(e) => setEditedQuestion(e.target.value)}
                />
                <button onClick={handleUpdateQuestion}>Save</button>
              </>
            ) : (
              <>

              <span>{question}</span>
                <button onClick={() => handleEditQuestion(index)}>
                <FontAwesomeIcon icon={faEdit} /></button>
                <button onClick={() => handleDeleteQuestion(index)}>
                <FontAwesomeIcon icon={faTrash} /></button>
              </>
              
            )}
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};


export default CreateQuestion;


