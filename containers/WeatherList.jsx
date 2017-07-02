import React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart.jsx'
import GoogleMap from '../components/GoogleMap.jsx'

class WeatherList extends React.Component {
  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name} className="weather-result-row">
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units="&deg;C" /></td>
        <td><Chart data={humidities} color="green" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table>
        <thead className="table table-hover">
          <tr>
            <th>City</th>
            <th>Temperature (&deg;C)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}){
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
