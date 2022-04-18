import React, { useState } from "react";
import plus from "../form practice/plus.svg";

const Todotoo = () => {
  const [inputData, setInputData] = useState("");
  const [item, setItem] = useState([]);

  const addItem = () => {
    if (!inputData) {
    } else {
      setItem([...item, inputData]);
      setInputData("");
    }
  };
  // delete a particular task

  const deletItem=(id)=>{
      console.log(id)
      const updatesItems=item.filter((elem,index)=>{
          return index !==id;
      });

      setItem(updatesItems);

  }

  // delete all

  const deleteAll=()=>{
      setItem([]);



  }


  return (
    <>
      <center>
        <h1 className="text-center">Todo 2</h1>
        <div>
          <figure>
            <img src={plus} alt="trashlogo" />
            <figcaption>Add your list here</figcaption>
          </figure>
          <div>
            <input
              className="form-label"
              type="text"
              placeholder="Add items"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <i
              className="bi bi-plus-circle"
              title="click to Add items"
              onClick={addItem}
            />
          </div>
          <div>
            {item.map((ele, index) => {
              return (
                <div key={index}>
                  <h3>
                    {ele} <i className="bi bi-trash2" onClick={()=>deletItem(index)}></i>
                  </h3>
                </div>
              );
            })}
          </div>

          <button onClick={deleteAll} className="btn-outline-danger" type="reset">
            Delete all
          </button>
        </div>
      </center>
    </>
  );
};

export default Todotoo;
