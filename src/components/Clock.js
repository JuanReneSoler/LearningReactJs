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
        var result = this.props.format.toString();
        result = result.replace("date", this.state.date.toLocaleDateString());
        result = result.replace("time", this.state.date.toLocaleTimeString());

        return result;
    }
}

export default Clock
