import React from "react";
import Info from "./components/info"
import Form from "./components/form"
import Weather from "./components/weather"

const API_key = "7716824392d321dc8749f477f9b8c1d6";

class App extends React.Component {

  state = {
    temp: undefined,
    pressure: undefined,
    humidity: undefined,
    city: undefined,
    visibility: undefined,
    speed: undefined,
    clouds: undefined,
    error: undefined
  }

getWeatherInfo = async (e) => {
  e.preventDefault();  
  const city = e.target.elements.cityName.value;
  

if (city) { 

  const url = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`);
  const data = await url.json();
  console.log(data);

  this.setState({
    city: data.name,
    temp: data.main.temp,
    pressure: data.main.pressure,
    humidity: data.main.humidity,
    visibility: data.visibility,
    speed: data.wind.speed,
    error: undefined
  });
 } else {
  this.setState({
    temp: undefined,
    pressure: undefined,
    humidity: undefined,
    city: undefined,
    visibility: undefined,
    speed: undefined,
    clouds: undefined,
    error: "Enter city name!"
  });
 }
}

  render () {
    return (
      <div className="wrapper">
       <div className="main">
        <div className="container">
          <div className="row">

            <div className="col-sm-5 info">
               <Info />
            </div>

            <div className="col-sm-7 form">

                <Form weatherInfo={this.getWeatherInfo} />

                <Weather
                 temp={this.state.temp}
                 pressure={this.state.pressure}
                 humidity={this.state.humidity}
                 city={this.state.city}
                 visibility={this.state.visibility}
                 speed={this.state.speed}
                 clouds={this.state.clouds}
                 error={this.state.error}
                />
                
            </div>
          </div>
         </div>
        </div>
      </div>  
    );
  }
}

export default App;
