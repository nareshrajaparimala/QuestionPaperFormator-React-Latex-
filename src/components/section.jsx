import React,{useState} from 'react';
import Question from './question.jsx';

function Section({index}){
    const items=[];

    for(let i=1;i<=index;i++){
        console.log(i);
        items.push(<div className="sectioncount" style={{ border:'1px solid black',padding:'20px' }} >
                <center ><h3>Section{i} 
                    </h3></center>
                <Question />
            </div>)
    }
    return (
        <div>
            {items}
        </div>
    );
}
export default Section;