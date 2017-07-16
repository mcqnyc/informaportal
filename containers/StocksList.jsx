import React from 'react';
import { connect } from 'react-redux';

class StocksList extends React.Component {

  renderStocks(stockData) {
    // const name = stockData.location.name;
    // const forecasts = stockData.forecast.forecastday;
    // const temps = forecasts.map(stock => stocksData.day.maxtemp_c);
    // const humidities = forecasts.map(stock => stocksData.day.avghumidity);
    // const { lon, lat } = stockData.location;

    return (
      <tr key={name} className="stocks-result-row">
      </tr>
    );
  }

  render() {
    if (this.props.stocksData < 1) {
      return null;
    }

    return (
      <div className="search-stocks-results">
        <table>
          <thead className="table table-hover">
            <tr>
              <th>City</th>
              <th>Avg. Temp (&deg;C)</th>
              <th>Avg. Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.stocks.map(this.renderStocks)}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ stocksData }) {
  return { stocksData };
}

export default connect(mapStateToProps)(StocksList);
