import React,{useState} from 'react';
import './questions.css'

function Question(){
    const [items, setItems] = useState([]);
    // const [orItems ,setOrItems]=useState([]);

  const handleQuestions = () => {
    setItems(prevItems => [
      ...prevItems,
      <div className="question-div" key={prevItems.length}>
        <label>Enter Question:</label>
        <textarea className="longtext"></textarea>
                    <label htmlFor="">Marks:</label>
            <input type="number" className="marks-box" />
      </div>
    ]);
  };
  const handleOr=()=>{setItems(i =>[...i,<center><h3>OR</h3></center>])}
    return(
        <div>
        <div className="question-div">
            <label htmlFor="">Enter Question:</label>
            <textarea name="" className="longtext"></textarea>
            <label htmlFor="">Marks:</label>
            <input type="number"  className="marks-box" />
            <button onClick={handleQuestions} type="button"><i className="fa-solid fa-plus"></i></button>
            <button onClick={handleOr} type="button" >OR</button>
        </div>
            <div>
              {items}
            </div>
        </div>
    );
}
export default Question;