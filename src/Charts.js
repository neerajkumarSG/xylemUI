import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class Charts extends React.Component {
  state = {
    lineChartOptions: {
      chart: {
        height: "1500px"
      },
      series: [
        {
          data: this.props.chart
        }
      ]
    },
    barChartOptions: {
      chart: {
        type: "bar",
        height: "1500px"
      },
      series: [
        {
          data: this.props.chart
        }
      ]
    }
  };

  render() {
    const { barChartOptions, lineChartOptions } = this.state;
    return (
      <div className="App">
        <HighchartsReact highcharts={Highcharts} options={barChartOptions} />

        <HighchartsReact highcharts={Highcharts} options={lineChartOptions} />
      </div>
    );
  }
}

export default Charts;
