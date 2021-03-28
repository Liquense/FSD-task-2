function importContext(r) {
  r.keys().forEach(r);
}

function importHeaderFooter() {
  importContext(require.context('../blocks/footer', true, /\.(js|scss)$/));
  importContext(require.context('../blocks/header', true, /\.(js|scss)$/));
}

function importCommon() {
  importContext(require.context('../site-pages', true, /page-template.scss$/));
  importContext(require.context('../shared', true, /fonts.scss$/));
  importContext(require.context('../assets/fonts', true, /\.(otf|ttf|svg|woff|woff2|eot)$/));
  importContext(require.context('../assets/favicons', true, /\.*$/));
}

export { importCommon, importContext, importHeaderFooter };
