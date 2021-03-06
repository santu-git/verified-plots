"use strict";

// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
   "materialize": "vendor/materialize-css",
   "angular2-materialize": "vendor/angular2-materialize",
   "jquery": "vendor/jquery",
   'ng2-completer': 'vendor/ng2-completer',
   "leaflet": "vendor/leaflet",
   "google-layer": 'vendor/leaflet-plugins'
};

/** User packages configuration. */
const packages: any = {
  'materialize': { "format": "global", "main": "dist/js/materialize","defaultExtension": "js"},
  'angular2-materialize': { "main": "dist/index", "defaultExtension": "js"},
  'ng2-completer': { main: 'bundles/ng2-completer.js', format: 'cjs'},
  'leaflet': {main: 'dist/leaflet.js', format: 'cjs'},
  'google-layer': {main: 'layer/tile/Google.js', format: 'cjs'}
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/router-deprecated',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/home',
  'app/result',
  'app/menu',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
