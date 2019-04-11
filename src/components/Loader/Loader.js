/*Created by Kishore Kumar Govindaradjou on 4/4/2019 */
import React from 'react';
import loaderSrc from '../../assets/loader.gif';
import './loader.css';

const Loader = (props) => (
  <div>
    <img className="loader-size"
      alt = "Loader Icon"
      src = {loaderSrc}
    />
  </div>
);

export default Loader;
