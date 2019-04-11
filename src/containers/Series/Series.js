import React, {Component} from 'react';
import SeriesList from '../../components/SeriesList/SeriesList'

class Series extends Component {

  state = {
    series: [],
    seriesName: '',
    isFetching: false
  }


    // componentDidMount() {
    //   fetch('https://api.tvmaze.com/search/shows?q=narcos')
    //   .then((response) => response.json())
    //   .then(json => this.setState ({series: json}))


      // const series = ["Stranger Things", "Narcos"];
      //
      // setTimeout(() => {
      //   this.setState({ series })
      // }, 2000);
    //}

  onSeriesInputChange = e => {
    this.setState({seriesName: e.target.value, isFetching: true });

    fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)
    .then((response) => response.json())
    .then(json => this.setState ({series: json, isFetching: false}))

    //console.log(e);
    //console.log(e.target.value);
  }

  render() {
    const {series, seriesName, isFetching} = this.state;

    return (
      <div>
        <div>
          <input
            value={seriesName}
            type="text"
            onChange={this.onSeriesInputChange} />
        </div>
        {
          series.length === 0 && seriesName.trim() === ''
          &&
          <p>Please enter series name into the input</p>
        }
        {
          series.length === 0 && seriesName.trim() !== ''
          &&
          <p>No TV series found with this name</p>
        }
        {
          isFetching === true
          &&
          <p>Loading...</p>
        }
        {
          isFetching === false
          &&
          <SeriesList list = {this.state.series} />
        }
      </div>
      )
  }
}

export default Series;
