import React, {useState} from "react";

function Content(props){
    const [isClicked, setClicked]= useState(false);    

    function handleChange(){
        setClicked(prevValue =>{
            return !prevValue
        });        
    }    

    return(
        <li style={{textDecoration: isClicked? "line-through" : "none"}} onClick={handleChange}>{props.list}</li>
    );
}

export default Content;