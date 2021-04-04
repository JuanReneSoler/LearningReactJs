import React from "react";
import Clock from "./Clock";

function Toggle(props){
    return (
        <div>
            <input onChange={props.toggleConfiguration.onToggleDate} 
            type="checkbox" 
            checked={props.toggleConfiguration.defaultShowDate} />Date
            <input 
            onChange={props.toggleConfiguration.onToggleTime} 
            type="checkbox" 
            checked={props.toggleConfiguration.defaultShowTime} />Time
        </div>);
}

class ToggleClock extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {showDate:true, showTime:true}
    }

    toggleDate()
    {
        this.setState({showDate:!this.state.showDate});
    }

    toggleTime()
    {
        this.setState({showTime:!this.state.showTime});
    }

    render()
    {
        let _format = "";
        if(this.state.showDate)
            _format += " date ";
        if(this.state.showTime)
            _format += " time ";

        _format = _format.trim();

        let _toggleConfiguration={
            defaultShowDate:this.state.showDate,
            defaultShowTime:this.state.showTime,
            onToggleDate:()=>this.toggleDate(),
            onToggleTime:()=>this.toggleTime()
        }

        return (
            <div>
                <Clock format={_format} />
                <Toggle toggleConfiguration={_toggleConfiguration} />
            </div>
        );
    }
}

export default ToggleClock;