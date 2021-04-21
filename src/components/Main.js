import React from "react";
import ToggleClock from "./ToggleClock";
import NumbersList from "./NumbersList";
import Blog from "./Blog";
import NameForm from "./NameForm";

export default class Main extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {exercise:1}
    }

    handleChange(value, e)
    {
        this.setState({exercise:value});
    }

    render()
    {
        return(
            <div>
                <div>
                    <input 
                        onChange={this.handleChange.bind(this, 1)} 
                        type="checkbox" checked={this.state.exercise === 1} />Ejercicio 1 ||
                    <input 
                        onChange={this.handleChange.bind(this, 2)} 
                        type="checkbox" checked={this.state.exercise === 2} />Ejercicio 2 ||
                    <input 
                        onChange={this.handleChange.bind(this, 3)} 
                        type="checkbox" checked={this.state.exercise === 3} />Ejercicio 3 ||
                    <input 
                        onChange={this.handleChange.bind(this, 4)} 
                        type="checkbox" checked={this.state.exercise === 4} />Ejercicio 4
                </div>
                {
                    this.state.exercise === 1 && 
                    <div>
                        <h1>Ejercicio 1</h1>
                        <ToggleClock />
                    </div>
                }
                {
                    this.state.exercise === 2 &&
                    <div>
                        <h1>Ejercicio 2</h1>
                        <NumbersList array={[1,2,3,4,5]} />
                    </div>
                }
                {
                    this.state.exercise === 3 &&
                    <div>
                        <h1>Ejercicio 3</h1>
                        <Blog posts={
                            [
                                {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
                                {id: 2, title: 'Installation', content: 'You can install React from npm.'}
                            ]
                        } />
                    </div>
                }
                {
                    this.state.exercise === 4 &&
                    <div>
                        <h1>Ejercicio 4</h1>
                        <NameForm />
                    </div>
                }
            </div>
        );
    }
}
