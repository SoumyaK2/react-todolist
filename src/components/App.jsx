import React, { useState } from "react";
import Content from "./Content";

function App() {
  const [text, savedText] = useState("");
  const [arr, setArr] = useState([]);

  function handleChange(event) {
    const value = event.target.value;

    savedText(value);
  };

  function addText() {
    setArr((prevValue) => {
      return (
        [...prevValue, text]
      );
    })

    savedText("");
  }

  function deleteItem(id){
    setArr( prevValue =>{
      return prevValue.filter((item, index)=>{
        return index!==id;
      })
    })

  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={text} />
        <button onClick={addText} >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>

          {arr.map((content,index) => (<Content onChange={deleteItem} id={index} list={content} />))}


        </ul>
      </div>
    </div>
  );
}

export default App;