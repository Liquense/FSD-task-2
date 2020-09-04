import { importCommon, importContext } from '../../imports';
import initRoomPreviewCards from '../../cards/room-preview-card/init';
import initPaginations from '../../blocks/pagination/init';
import initDatepickers from '../../blocks/date-picker/init';
import initDropdowns from '../../blocks/dropdown/init';
import initSliders from '../../blocks/slider/init';
import initLists from '../../blocks/checkbox-list/init';

importCommon();
importContext(require.context('./', true, /\.(js|scss)$/));

const $showSidebarButtons = $('.js-search-room__show-sidebar-button');
$showSidebarButtons.each((index, element) => {
  const $showSideBarButton = $(element);

  $showSideBarButton.click(() => {
    $showSideBarButton.toggleClass('search-room__show-sidebar-button_active');
  });
});

const pagination = initPaginations();
pagination.$buttons.addHook('afterPaging', () => {
  initRoomPreviewCards();
});

initDatepickers();
initDropdowns();
initSliders();
initLists();
initRoomPreviewCards();
