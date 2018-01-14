import React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends React.Component {

  renderWeather(cityData) {
    const name = cityData.location.name;
    const forecasts = cityData.forecast.forecastday;
    const temps = forecasts.map(weather => weather.day.maxtemp_c);
    const humidities = forecasts.map(weather => weather.day.avghumidity);
    const { lon, lat } = cityData.location;

    return (
      <tr key={name} className="weather-result-row">
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units="&deg;C" /></td>
        <td><Chart data={humidities} color="green" units="%" /></td>
      </tr>
    );
  }

  render() {
  console.log('WeatherList props:', this.props);
  console.log('WeatherList props.weather.length:', this.props.weather.length);
    // if (this.props.weather.length === 1) {
    //   return (
    //     <div style={{ "color":"red", "margin-left":"4px" }}>
    //       {this.props.weather[0]}
    //     </div>
    //   );
    //   // return null;
    // }

    return (
      <div className="search-weather-results">
        <table>
          <thead className="table table-hover">
            <tr>
              <th>City</th>
              <th>Avg. Temp (&deg;C)</th>
              <th>Avg. Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
