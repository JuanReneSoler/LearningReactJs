import React from "react";

class Clock extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {date:new Date()}
    }

    componentDidMount()
    {
        this.timerId = setInterval(
            ()=>this.tick()
            , 1000);
    }

    componentWillUnmount()
    {
        clearInterval(this.timerId);
    }

    tick(){
        this.setState({date:new Date()});
    }

    render()
    {
        var result = this.state.date.toLocaleDateString();
        if(this.props.type == "time")
            result = this.state.date.toLocaleTimeString();
        return result;
    }
}

export default Clock
