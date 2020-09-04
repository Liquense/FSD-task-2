import { importContext, importCommon } from '../../imports';

importCommon();
importContext(require.context('../../page-elements', true, /\.(js|scss)$/));
importContext(require.context('./', true, /\.(js|scss)$/));
