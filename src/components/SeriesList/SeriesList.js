import React from 'react';
import './series-list.css';

const SeriesListItem = ({series}) => (
  <li key={series.show.id}>
    {series.show.name}
  </li>
)

const SeriesList = (props) => {
  return (
    <div>
      <ul className="series-list">
        {props.list.map(series => (
          <SeriesListItem series={series}/>
        ))}
      </ul>
    </div>
  )
}

export default SeriesList;
