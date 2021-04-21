import React from "react";
import Clock from "./Clock";

class ToggleClock extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {showDate:true, showTime:true}
    }

    toggleDate(e){
        this.setState({showDate:!this.state.showDate});
    }

    toggleTime(e){
        this.setState({showTime:!this.state.showTime});
    }

    render()
    {
        return (
            <div>
                {this.state.showDate && <Clock type="date" />}
                {(this.state.showDate && this.state.showTime) && "||"}
                {this.state.showTime && <Clock type="time" />}
                <div>
                    <input onChange={this.toggleDate.bind(this)} 
                        type="checkbox" 
                        checked={this.state.showDate} />Date
                    <input 
                        onChange={this.toggleTime.bind(this)} 
                        type="checkbox" 
                        checked={this.state.showTime} />Time
                </div>
            </div>
        );
    }
}

export default ToggleClock;