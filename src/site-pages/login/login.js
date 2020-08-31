import { importCommon, importContext } from '../../imports';
import initHeaders from '../../page-elements/header/init';

initHeaders();

importCommon();
importContext(require.context('./', true, /\.(js|scss)$/));
