import React from "react";

const Result = (props) => {
  const img = `https://source.unsplash.com/300x300/? ${props.name}`;
  return (
    <>
      <center>
        <div>
          <img src={img} alt="this" />
        </div>
      </center>
    </>
  );
};

export default Result;
