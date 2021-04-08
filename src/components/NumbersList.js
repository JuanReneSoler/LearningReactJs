import React from "react";

function NumbersList(props)
{
    let items = props.array.map((number, index) =><li key={index} >{number}</li>);
    return(<ul>{items}</ul>);
}

export default NumbersList;
