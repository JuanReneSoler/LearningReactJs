import React from "react";

function ListItem(props)
{
    return(<li>{props.content}</li>);
}

function List(props)
{
    return(<ul>{props.items}</ul>);
}

function NumbersList(props)
{
    let items = props.array.map((number, index) =><ListItem key={index} content={number} />);
    return(<List items={items} />);
}

export {List, ListItem}
export default NumbersList;
