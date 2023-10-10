import { MapLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "lrm-google";
import { withLeaflet } from "react-leaflet";

class Routing extends MapLayer {
  createLeafletElement() {
    const { map } = this.props;
    let leafletElement = L.Routing.control({
      waypoints: [
        L.latLng(32.227032, -9.249758),
        L.latLng(32.224285, -9.249723),
        L.latLng(32.224009, -9.251422),
        L.latLng(32.21971, -9.250794),
        L.latLng(32.216186, -9.250887),
        L.latLng(32.214756, -9.251099),
        L.latLng(32.214166, -9.250661)
      ],
      lineOptions: {
        styles: [
          {
            color: "rgb(0,175,255)",
            opacity: 0.9,
            weight: 10
          }
        ]
      },
      addWaypoints: true,
      draggableWaypoints: false,
      fitSelectedRoutes: false,
      showAlternatives: true
    }).addTo(map.leafletElement);
    return leafletElement.getPlan();
  }
}
export default withLeaflet(Routing);
