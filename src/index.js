export function importContext(r) {
  r.keys().forEach(r);
}

export function importCommon() {
  importContext(require.context('./', false, /index\.scss$/));
  importContext(require.context('./blocks', true, /\.(js|scss)$/));
  importContext(require.context('./common', true, /\.(js|scss)$/));
  importContext(require.context('./cards', true, /\.(js|scss)$/));
  importContext(require.context('./page-elements', true, /\.(js|scss)$/));
}
