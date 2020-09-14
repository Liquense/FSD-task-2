function importContext(r) {
  r.keys().forEach(r);
}

function importCommon() {
  importContext(require.context('./blocks', true, /\.(js|scss)$/));
  importContext(require.context('./common', true, /\.(js|scss)$/));
  importContext(require.context('./cards', true, /\.(js|scss)$/));
  importContext(require.context('./assets/fonts', true, /\.(otf|ttf|svg|woff|woff2|eot)$/));
  importContext(require.context('./assets/favicons', true, /\.(svg|png|ico|xml|json|webmanifest)$/));
}

export { importCommon, importContext };
