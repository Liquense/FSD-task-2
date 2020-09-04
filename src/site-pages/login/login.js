import { importCommon, importContext } from '../../imports';

importCommon();
importContext(require.context('./', true, /\.(js|scss)$/));
