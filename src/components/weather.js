import React from "react";

class Weather extends React.Component {
  render () {
    return (
      <div>

        {this.props.city &&
          <div>
           <p>City: {this.props.city}</p>
           <p>Temperature: {(this.props.temp-273.15).toFixed(0)} °C</p>
           <p>Pressure: {this.props.pressure} mbar</p>
           <p>Humidity: {this.props.humidity} %</p>
           <p>Visibility: {this.props.visibility/1000} km</p>
           <p>Wind speed: {this.props.speed} mph</p>
         </div>
        }

        <p>{this.props.error}</p>
        
      </div>  
    );
  }
}

export default Weather;
