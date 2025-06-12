import React,{useState} from 'react';
import './questions.css'

function Question({sectionNo,setFormData}){
    const [items, setItems] = useState([]);
 
    // main data store for question with section number
const [questionData, setQuestionData] = useState([
  {section: sectionNo, type: 'question', question: '', marks: '' }
]);

// add of box and or html
const handleQuestions = () => {
  const index = questionData.length;
  setItems(prevItems => [
    ...prevItems,
    <div className="question-div" key={index}>
      <label>Enter Question:</label>
      <textarea
        className="longtext"
        onChange={(e) => updateQuestionData(index, 'question', e.target.value)}
      />
      <label>Marks:</label>
      <input
        type="number"
        className="marks-box"
        onChange={(e) => updateQuestionData(index, 'marks', e.target.value)}
      />
    </div>
  ]);
  setQuestionData(prev => [...prev, {section: sectionNo, type: 'question', question: '', marks: '' }]);
};

// set OR type and its html
 const handleOr = () => {
  const index = questionData.length;
  setItems(prevItems => [
    ...prevItems,
    <center key={index}><h3>OR</h3></center>
  ]);
  setQuestionData(prev => [...prev, {section: sectionNo, type: 'or' }]);
};
// feeding the questions values
const updateQuestionData = (index, field, value) => {
  setQuestionData(prev => {
    const updated = [...prev];
    if (updated[index] && updated[index].type === 'question') {
      updated[index][field] = value;
    }
    return updated;
  });
  setFormData(prev => ({
    ...prev,
    questions: questionData
  }));
};

// confrim questions
const submitQuestions=()=>{
  setFormData(prev => ({
    ...prev,
    sectionQuestions: [...prev.sectionQuestions, questionData]
  }));
}

    return(
        <div>
          <div className="question-div">
            <label htmlFor="">Enter Question:</label>
              <textarea className="longtext" onChange={(e) => updateQuestionData(0, 'question', e.target.value)}></textarea>
            <label htmlFor="">Marks:</label>
              <input type="number" className="marks-box" onChange={(e) => updateQuestionData(0, 'marks', e.target.value)} />
            <button onClick={handleQuestions} type="button"><i className="fa-solid fa-plus"></i></button>
            <button onClick={handleOr} type="button" >OR</button>
          </div>
                <div>{items}</div>
                <button type='button' onClick={submitQuestions}>submit Questions </button>
        </div>
    );
}
export default Question;