import { Asset } from 'expo-asset';
import React from 'react';
import { LeafletView, LatLng } from 'react-native-leaflet-view';

import {
  BASE_LAYERS,
  DEFAULT_CENTER,
  DEFAULT_ZOOM,
  DEFAULT_MARKER_ICON,
  DEFAULT_SHAPES,
  MAP_UI,
} from '../constant/map';

type Props = {
  center?: [number, number];
  zoomLevel?: number;
};

export default function NativeMap({
  center = [DEFAULT_CENTER.lng, DEFAULT_CENTER.lat],
  zoomLevel = DEFAULT_ZOOM,
}: Props): React.ReactElement {
  const centerLatLng: LatLng = { lat: center[1], lng: center[0] };
  const htmlAsset = Asset.fromModule(require('../../assets/leaflet.html'));
  const webviewSource = { uri: htmlAsset.uri };

  return (
    <LeafletView
      mapCenterPosition={centerLatLng}
      zoom={zoomLevel}
      mapLayers={BASE_LAYERS}
      mapMarkers={[{ id: 'pt', position: centerLatLng, ...DEFAULT_MARKER_ICON }]}
      mapShapes={DEFAULT_SHAPES}
      zoomControl={MAP_UI.zoomControl}
      attributionControl={MAP_UI.attributionControl}
      source={webviewSource}
      injectedJavaScript={`
        setTimeout(() => {
          if (window.ReactNativeWebView) {
            window.ReactNativeWebView.postMessage(JSON.stringify({ msg: 'MAP_READY', payload: {} }));
          }
        }, 1000);
        true;
      `}
    />
  );
}
