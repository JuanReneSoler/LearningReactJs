import React from "react";
import { List, ListItem } from "./NumbersList";

function Blog(props)
{
    var content = props.posts.map((post, index)=>{
        var item = <div><h3>{post.title}</h3><p>{post.content}</p></div>
        return (
            <ListItem key={index} content={item} />
        );
    });
    
    var sidebar = props.posts.map((post, index)=>{
        return (<ListItem key={index} content={post.title} />);
    });
    
    return(
        <div>
            <List items={sidebar} />
            <hr />
            <List items={content} />
        </div>
    );
}

export default Blog;
