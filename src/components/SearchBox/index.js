import React from 'react';
import axios from 'axios';
import seedData from './test_data';
import './SearchBox.css';

class SearchBox extends React.Component {
  changeMap = (event) => {
    let input = event.target.value;
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${input}&key=AIzaSyCqW0rhJy8t8E7KrLgX-8sPB8T6fJyS0xM`).then((results) => {
      this.props.MapUpdate(results);
    }).then(() => {
      let data = seedData();
      this.props.GetSigns(data.data.features);
    });
  }

  render() {
    return (
      <div className="form">
        <div className="input-group search-box">
          <span className="input-group-addon">
            <i className="material-icons">search</i>
          </span>
          <input onKeyDown={(e) => e.keyCode == 32
            ? this.changeMap(e)
            : '0'} type="text" className="form-control" id="search_form" name="x" placeholder="Search Location" autoFocus/>
          <span className="form-control-feedback">
            <i className="material-icons">done</i>
          </span>
        </div>
      </div>
    );
  }
}

export default SearchBox;
