import React from "react";

function Content(props){    

    return(
        <li onClick={()=>{
            props.onChange(props.id);
        }}>
        {props.list}
        </li>
    );
}

export default Content;