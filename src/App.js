import React from "react";
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "d55d039d8eb958c9eac5c983b435607e";

class App extends React.Component {

    state = {
        temp: undefined,
        city: undefined,
        sunrise: undefined,
        sunset: undefined,
    };

    gettingWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const api_url = await
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);﻿
        const data = await api_url.json();
        console.log(data);
        this.setState({
            temp: data.main.temp,
            city: data.name,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
        });
    };

    render () {
        return (
            <div>
                <Info />
                <Form weatherMethod={this.gettingWeather} />
                <Weather
                    temp={this.state.temp}
                    city={this.state.city}
                    sunrise={this.state.sunrise}
                    sunset={this.state.sunset}
                />
            </div>
        );
    };
}

export default App;