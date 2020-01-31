import React from "react";

class Weather extends React.Component {
    render () {
        return (
            <div>
                <p>Местоположение: {this.props.city}</p>
                <p>Температура: {this.props.temp}</p>
                <p>Восход: {this.props.sunrise}</p>
                <p>Закат: {this.props.sunset}</p>
            </div>
        );
    }
}

export default Weather;