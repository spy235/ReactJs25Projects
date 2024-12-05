import React, { useState } from "react";
import "./Accordian.css";
import data from "./data";

const Accordian = () => {
  const [selected, setSelected] = useState([]);
  const [isMultiple,setIsMultiple] = useState(false);

  function handleSelectedItem(id) {
    //  setSelected( selectedId => !selectedId.find(id) && selectedId.push(id));
    if(isMultiple){
        if (selected.indexOf(id) === -1) {
            const selectedItem = [...selected, id];
            setSelected(selectedItem);
          }
          else{
      //filter method:  Remove All Occurrences of a Value(why you need elephant to kill an ant)
            
      
      //we can use splice : Remove by Value (First Occurrence)
          //  const selectedItem = selected.splice(id,1); 
          //   setSelected(selectedItem);
                }

    }
    else{
              setSelected([id]);

    }
    
    

    console.log(selected);
  }

  return (
    <div className="acc-wrapper">
      <button onClick={()=>setIsMultiple(!isMultiple)}>Enable Multi Selection</button>
        {data.length === 0 ? (
          <div>No data found !</div>
        ) : (
            <div className="accordian">
          <div className="item">
            {data.map((accord) => (
              <>
                <div
                  onClick={() => handleSelectedItem(accord.id)}
                  className="title"
                >
                  <h3>{accord.question}</h3>
                  <span>+</span>
                </div>
                {selected.map(
                  (id) =>
                    accord.id === id && (
                      <div className="acc-content">{accord.answer}</div>
                    )
                )}
              </>
            ))}
          </div>
          </div>

        )}
    </div>
  );
};

export default Accordian;
