function importContext(r) {
  r.keys().forEach(r);
}

function importCommon() {
  importContext(require.context('./blocks', true, /\.(js|scss)$/));
  importContext(require.context('./common', true, /(.js|fonts.scss)$/));
  importContext(require.context('./cards', true, /\.(js|scss)$/));
  importContext(require.context('./assets/fonts', true, /\.(otf|ttf|svg|woff|woff2|eot)$/));
}

export { importCommon, importContext };
