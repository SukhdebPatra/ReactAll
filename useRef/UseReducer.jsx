import React, { useReducer } from "react";

const intialState = 0;
const reducer = (state, action) => {
  console.log(state, action);
  
  if(action.type==='increment'){
      return state + 1;
  }
  if(action.type === 'decrement'){
      return state -1;
  }
  
 
};
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, intialState);

  return (
    <>
    <center>
        <h1>{state}</h1>
        

        <div style={{marginTop:'50px'}}>
        <button onClick={() => dispatch({ type: "increment" })}>Incr</button>
        <button onClick={() => dispatch({ type: "decrement" })}>Decr</button>
        </div>
      
        
      
      </center>
    </>
  );
};

export default UseReducer;
