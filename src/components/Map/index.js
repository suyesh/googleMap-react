import React, {Component} from 'react';
import NavBar from '../NavBar';
import Logo from '../Logo';
import SearchBox from '../SearchBox';
import MapStyles from './MapStyles';
import './App.css';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 40.7032,
        lng: -74.0094
      },
      text: "55 Water st",
      title: "New York!",
      signs: []
    }
  }

  componentDidMount() {
    this.map = new window.google.maps.Map(this.refs.map, {
      center: this.state.center,
      zoom: 16,
      styles: MapStyles()
    });
    const contentString = this.state.text;
    const infoWindow = new window.google.maps.InfoWindow({content: contentString});
    const marker = new window.google.maps.Marker({position: this.state.center, map: this.map, title: this.state.title});
    marker.addListener('click', function() {
      infoWindow.open(this.map, marker);
    });
  }

  componentDidUpdate() {
    this.map = new window.google.maps.Map(this.refs.map, {
      center: this.state.center,
      zoom: 16,
      styles: MapStyles(),
      streetViewControl: true
    });
    const contentString = this.state.text;
    const infoWindow = new window.google.maps.InfoWindow({content: contentString});
    const marker = new window.google.maps.Marker({position: this.state.center, map: this.map, title: this.state.title});
    marker.addListener('click', function() {
      infoWindow.open(this.map, marker);
    });
  }

  handleMapUpdate = (results) => {
    let center = {};
    center['lat'] = results.data.results[0].geometry.location.lat;
    center['lng'] = results.data.results[0].geometry.location.lng;
    this.setState({center: center})
    console.log(center)
  }

  handleSignsResults = (response) => {
    this.setState({signs: response})
  }

  render() {
    return (
      <div>
        <Logo/>
        <SearchBox MapUpdate={this.handleMapUpdate} GetSigns={this.handleSignsResults}/>
        <NavBar/>
        <div ref="map" id="maps">Map is Loading</div>
      </div>
    );
  }
}

export default Map;
