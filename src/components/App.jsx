import React, { useState } from "react";
import Content from "./Content";
import InputArea from "./InputArea";

function App() {  
  const [arr, setArr] = useState([]);  

  function addText(text) {
    setArr((prevValue) => {
      return (
        [...prevValue, text]
      );
    })    
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
            
      <InputArea onAdd={addText} />

      <div>
        <ul>

          {arr.map((content,index) => (<Content onChange={deleteItem} id={index} list={content} />))}


        </ul>
      </div>
    </div>
  );
}

export default App;