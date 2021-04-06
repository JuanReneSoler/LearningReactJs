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

    toggleDate = ()=>
    {
        this.setState({showDate:!this.state.showDate});
    }

    toggleTime = ()=>
    {
        this.setState({showTime:!this.state.showTime});
    }

    render()
    {
        let clockDate = null;
        let clockTime = null;
        if(this.state.showDate)
            clockDate = <Clock type="date"/>
        if(this.state.showTime)
            clockTime = <Clock type="time"/>
        return (
            <div>
                {clockDate} {clockTime}
                <Toggle toggleConfiguration={{
                    defaultShowDate:this.state.showDate,
                    defaultShowTime:this.state.showTime,
                    onToggleDate:this.toggleDate,
                    onToggleTime:this.toggleTime
                }} />
            </div>
        );
    }
}

export default ToggleClock;