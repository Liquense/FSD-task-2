import { importContext, importCommon } from '../../imports';

importCommon();
importContext(require.context('./', true, /\.(js|scss)$/));
