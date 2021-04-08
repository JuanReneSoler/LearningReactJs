import React from "react";

function SideBar(props)
{
    return(
        <ul>{
            props.items.map((item, index)=>{
                return (<li key={index}>{item}</li>);
            })
        }</ul>
    );
}

function Posts(props)
{
    return(
        <ul>{
            props.posts.map((post, index)=>{
                return (
                    <li key={index}>
                        <div><h3>{post.title}</h3><p>{post.content}</p></div>
                    </li>
                );
            })
        }</ul>
    );
}

function Blog(props)
{
    return(
        <div>
            <SideBar items={props.posts.map(x=>x.title)} />
            <hr />
            <Posts posts={props.posts} />
        </div>
    );
}

export default Blog;
