import React,{ useState } from 'react';
import Section from './section';
import './forms.css';

function Forms(){
const [count, setCount]=useState(1);
const handleSection=(e)=>{
    setCount(e.target.value);
    // console.log(e.target.value);
};
// collection of all data in form
const [formData, setFormData]=useState({
    department:'',
    pageTitle:'',
    semester:'',


});
const handleChange=(e)=>{
    const {name , value}=e.target;
    setFormData((prev)=>({...prev,[name]:value}));
    console.log(value);
};


return (
<div> 
    <form >
    {/* head sector */}
    <h1>Question paper Generator</h1>
    <p>Enrter the required detils below </p>
    <div id="table-dez">
        {/* input data */}
        <table>
          <tr>
            <th><label htmlFor="">Department :</label></th>
            <td>
              <input type="radio" id='cse' name='department' value="CSE" checked={formData.department === 'CSE'} onChange={handleChange}/>
              <label htmlFor="cse">CSE</label>
              <input type="radio" id='aiml' name='department' value="AIML" checked={formData.department === 'AIML'} onChange={handleChange} />
              <label htmlFor="aiml">AIML</label>
              <input type="radio" id='ec' name='department' value="EC" checked={formData.department === 'EC'} onChange={handleChange} />
              <label htmlFor="ec">EC</label>
            </td>
          </tr>
          <tr>
            <th><label htmlFor="">Paper Title:</label></th>
            <td><input type="text" className='title'name="pageTitle" value={formData.pageTitle} onChange={handleChange}/></td>
          </tr>
          <tr>
            <th><label htmlFor="">Semister: </label></th>
            <td><input type="number" className='title' name="semester" value={formData.semester} onChange={handleChange} /></td>
          </tr>
          <tr>
            <th><label htmlFor="">Subject Name: </label></th>
            <td><input type="text" className='title'/></td>
          </tr>
          <tr>
            <th><label htmlFor="">Subject code: </label></th>
            <td><input type="text" className='title'/></td> 
          </tr>
          <tr>
            <th><label htmlFor="">Duration(Minutes): </label></th>
            <td><input type="number" className='title'/></td> 
          </tr>
          <tr>
            <th><label htmlFor="">Max Marks: </label></th>
            <td><input type="number" className='title'/></td> 
          </tr>
          <tr>
            <th><label htmlFor="">Date : </label></th>
            <td><input type="date" className='title'/></td> 
          </tr>
          <tr>
            <th><label htmlFor="">Time </label></th>
            <td id="time-box">
              <div>
                <label htmlFor=""><b>From:</b></label>
                <input type="time" className='time-box'/> 
              </div>
              <div>
                <label htmlFor=""><b>To:</b> </label>
                <input type="time" className='time-box'/> 
              </div>
            </td> 
          </tr>
          <tr>
            <th>General Instruction:</th>
            <td><textarea name="" id="GI"></textarea></td>
          </tr>
          <tr>
            <th>No. of Section: </th>
            <td><input type="number" className="title" onChange={handleSection}/></td>
          </tr>
        </table>
    </div>
    {/* question sector */}

        <Section key={count} index={count} />
      
        {/* <button className="submit-but">Submit</button> */}
        <button className="submit-but">Print</button>
        </form>
</div>
    );
}
export default Forms;