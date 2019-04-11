import React, {Component} from 'react';
import SeriesList from '../../components/SeriesList/SeriesList'

class Series extends Component {

  state = {
    series: []
  }


    componentDidMount() {
      fetch('https://api.tvmaze.com/search/shows?q=narcos')
      .then((response) => response.json())
      .then(json => this.setState ({series: json}))


      // const series = ["Stranger Things", "Narcos"];
      //
      // setTimeout(() => {
      //   this.setState({ series })
      // }, 2000);
    }

  render() {
    return (
      <div>
        <p>
          The series length is - {this.state.series.length}
        </p>
        <SeriesList list = {this.state.series}/>
      </div>
      )
  }
}

export default Series;
