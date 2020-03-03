import React from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import "./App.css";

class App extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  render() {
    const { locations, google } = this.props;
    const { selectedPlace, activeMarker, showingInfoWindow } = this.state;
    var bounds = new this.props.google.maps.LatLngBounds();

    locations.forEach(location => {
      const newLocation = {
        lat: parseFloat(location.lat),
        lng: parseFloat(location.lon)
      };
      bounds.extend(newLocation);
    });

    const markers = locations.map((location, index) => {
      return (
        <Marker
          key={index}
          position={{
            lat: location.lat,
            lng: location.lon
          }}
          onClick={this.onMarkerClick}
        />
      );
    });
    const placeLat = selectedPlace.position && selectedPlace.position.lat;
    const placeLong = selectedPlace.position && selectedPlace.position.lng;

    return (
      <div className="App">
        <Map google={google} zoom={8} bounds={bounds}>
          {markers}
          <InfoWindow marker={activeMarker} visible={showingInfoWindow}>
            <div>
              <p>{`Latitude : ${placeLat}`}</p>
              <p>{`Longitude : ${placeLong}`}</p>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "API KEY WIL COME HERE"
})(App);
