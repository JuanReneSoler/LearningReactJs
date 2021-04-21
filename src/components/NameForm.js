import React from "react";

export default class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {value:""};
    }

    handleSubmit(e)
    {
        e.preventDefault();
        alert(`the value it's: ${this.state.value}`);
    }

    handleChange(e)
    {
        this.setState({value:e.target.value});
    }

    render()
    {
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>Text: </label>
                <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
                <button type="submit">Submit</button>
            </form>
        );
    }
}