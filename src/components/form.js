import React from "react";

class Form extends React.Component {
  render () {
    return (
        <form onSubmit={this.props.weatherInfo}>
          <input type="text" name="cityName" placeholder="city"/> 
          <button>Get info</button>
        </form>
    );
  }
}

export default Form;
