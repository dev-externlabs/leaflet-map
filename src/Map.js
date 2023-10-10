import React from "react";
import { Map, TileLayer } from "react-leaflet";
import Routing from "./RoutingMachine";

class MapComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 32.224285,
      lng: -9.249723,
      zoom: 15,
      isMapInit: false
    };
  }

  saveMap = (map) => {
    this.map = map;
    this.setState({
      isMapInit: true
    });
  };

  render() {
    const { lat, lng, zoom } = this.state;
    const position = [lat, lng];

    return (
      <Map center={position} zoom={zoom} ref={this.saveMap}>
        {/* <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        /> */}
        <TileLayer
          attribution="Google Maps"
          //  url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" // regular
          //  url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}" // terrain
          url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}" // satellite
          maxZoom={20}
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
        />
        {this.state.isMapInit && <Routing map={this.map} />}
      </Map>
    );
  }
}

export default MapComponent;
