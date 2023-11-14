import Map from 'ol/Map.js';
import StadiaMaps from 'ol/source/StadiaMaps.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import {fromLonLat} from 'ol/proj.js';

const map = new Map({
  layers: [
    // NOTE: Layers from Stadia Maps do not require an API key for localhost development or most production
    // web deployments. See https://docs.stadiamaps.com/authentication/ for details.
    new TileLayer({
      source: new StadiaMaps({
        layer: 'stamen_watercolor',
        // apiKey: 'OPTIONAL'
      }),
    }),
    new TileLayer({
      source: new StadiaMaps({
        layer: 'stamen_terrain_labels',
        // apiKey: 'OPTIONAL'
      }),
    }),
  ],
  target: 'map',
  view: new View({
    center: fromLonLat([-122.416667, 37.783333]),
    zoom: 12,
  }),
});
