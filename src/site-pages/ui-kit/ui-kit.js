import { importContext, importCommon } from '../../index';

importCommon();
importContext(require.context('./', true, /\.(js|scss)$/));
