import React, { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");

  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!input) {
    } else {
      setItems([...items, input]);
      setInput("");
    }
  };

  //delete items

  const deleteItem = (id) => {
    console.log(id);
    const updateditems = items.filter((ele, ind) => {
      return ind !== id;
    });
    setItems(updateditems);

   

    
  };
   // Remove all
  const remove = () => {
    setItems([""]);
  };

  return (
    <>
      <center>
        <h1>Todo list</h1>
        <div>
          <div>
            <figure>
              <figcaption>Add your List here</figcaption>
            </figure>

            <input
              type="text"
              placeholder="Add Items.."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <i
              className="bi bi-plus-circle-fill"
              title="Add new item"
              onClick={addItem}
            ></i>
          </div>
          <div>
            {items.map((ele, ind) => {
              return (
                <div key={ind}>
                  <h1>{ele}</h1>
                  <i
                    className="bi bi-recycle"
                    title="Delete Item"
                    onClick={() => deleteItem(ind)}
                  />
                </div>
              );
            })}
          </div>

          <div>
            <button className="btn-info" type="reset" onClick={remove}>
              check list
            </button>
          </div>
        </div>
      </center>
    </>
  );
};

export default Todo;
