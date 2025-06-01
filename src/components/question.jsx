import React,{useState} from 'react';
import './questions.css'

function Question(){
    const [items, setItems] = useState([]);
    // const [orItems ,setOrItems]=useState([]);

  const handleQuestions = () => {
    setItems(prevItems => [
      ...prevItems,
      <div id="question-div" key={prevItems.length}>
        <label>Enter Question:</label>
        <textarea id="longtext"></textarea>
                    <label htmlFor="">Marks:</label>
            <input type="number" id="marks-box" />
      </div>
    ]);
  };
  const handleOr=()=>{
    setItems(i =>[
        ...i,
        <center><h3>OR</h3></center>
    ])
  }
    return(
        <div>
        <div id="question-div">
            <label htmlFor="">Enter Question:</label>
            <textarea name="" id="longtext"></textarea>
            <label htmlFor="">Marks:</label>
            <input type="number"  id="marks-box" />
            <button onClick={handleQuestions}><i class="fa-solid fa-plus"></i></button>
            <button onClick={handleOr}>OR</button>
        </div>
          
            <div>
{items}
            </div>
            
        </div>
    );
}
export default Question;