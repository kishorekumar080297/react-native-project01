import React, {Component} from 'react';
import SeriesList from '../../components/SeriesList/SeriesList'

class Series extends Component {

  state = {
    series: []
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

    fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)
    .then((response) => response.json())
    .then(json => this.setState ({series: json}))

    //console.log(e);
    //console.log(e.target.value);
  }

  render() {
    return (
      <div>
        The series length is - {this.state.series.length}
        <div>
          <input type="text" onChange={this.onSeriesInputChange} />
        </div>
        <SeriesList list = {this.state.series}/>
      </div>
      )
  }
}

export default Series;
