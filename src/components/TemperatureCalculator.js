import React from "react";

const scaleName = {
    c:"Celsius",
    f:"Fahrenheit"
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
  
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function BoilingVerdict(props)
{
    if(props.celcius >= 100)
    {
        return <p>El agua hervira.</p>
    }
    return <p>El agua no hervira.</p>
}

class TemperatureInput extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handlerInput = this.handlerInput.bind(this);
    }

    handlerInput(e)
    {
        this.props.onChange(e);
    }

    render()
    {
        if(this.props.scale === undefined || this.props.scale === "")
            return <p>Input not has property scale defined.</p>
        return(
            <div>
                <label>Ingrese la temperatura en {scaleName[this.props.scale]}: </label>
                <input value={this.props.value} onChange={this.handlerInput} />
            </div>
        );
    }
}

class TemperatureCalculator extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {temperature:"0", scale:"c"}
        this.handlerCelsiusChanged = this.handlerCelsiusChanged.bind(this);
        this.handlerFahrenheitChanged = this.handlerFahrenheitChanged.bind(this);
    }

    handlerCelsiusChanged(e)
    {
        this.setState({temperature:e.target.value, scale:"c"});
    }

    handlerFahrenheitChanged(e)
    {
        this.setState({temperature:e.target.value, scale:"f"});
    }

    render()
    {
        let scale = this.state.scale;
        let temperature = this.state.temperature;
        let celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
        let fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
        return(
            <div>
                <TemperatureInput scale="c" value={celsius} onChange={this.handlerCelsiusChanged} />
                <TemperatureInput scale="f" value={fahrenheit} onChange={this.handlerFahrenheitChanged} />
                <BoilingVerdict celcius={parseFloat(celsius)} />
            </div>
        );
    }
}

export default TemperatureCalculator;
