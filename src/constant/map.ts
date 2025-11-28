import {
  LatLng,
  MapLayer,
  MapLayerType,
  MapMarker,
  MapShape,
  MapShapeType,
} from 'react-native-leaflet-view';

export const DEFAULT_CENTER: LatLng = { lat: 39.9042, lng: 116.4074 };
export const DEFAULT_ZOOM = 13;

export const BASE_LAYERS: MapLayer[] = [
  {
    id: 'arcgis',
    layerType: MapLayerType.TILE_LAYER,
    baseLayer: true,
    baseLayerIsChecked: true,
    baseLayerName: 'ArcGIS World Street',
    attribution: 'Tiles © Esri',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
    maxZoom: 19,
  },
];

export const DEFAULT_MARKER_ICON: Pick<MapMarker, 'icon' | 'size' | 'iconAnchor'> = {
  icon: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  size: { x: 25, y: 41 },
  iconAnchor: { x: 12, y: 41 },
};

export const DEFAULT_SHAPES: MapShape[] = [
  {
    id: 'line',
    shapeType: MapShapeType.POLYLINE,
    color: 'blue',
    positions: [
      { lat: 39.9042, lng: 116.4074 },
      { lat: 39.915, lng: 116.404 },
      { lat: 39.92, lng: 116.42 },
    ],
  },
  {
    id: 'poly',
    shapeType: MapShapeType.POLYGON,
    color: 'red',
    positions: [
      { lat: 39.91, lng: 116.39 },
      { lat: 39.92, lng: 116.39 },
      { lat: 39.92, lng: 116.4 },
      { lat: 39.91, lng: 116.4 },
    ],
  },
];

export const MAP_UI = {
  zoomControl: false,
  attributionControl: false,
};
