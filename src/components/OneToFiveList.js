import React from "react";

function OneToFiveList()
{
    var arr = [1,2,3,4,5];
    return(
        <ListItems array={arr}/>
    );
}

function ListItems(props)
{
    let items = props.array.map(item =><li key={item}>{item}</li>);
    return(<ul>{items}</ul>);
}

export {ListItems};
export default OneToFiveList;
