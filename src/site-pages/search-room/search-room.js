import { importCommon, importContext } from '../../index';
import initRoomPreviewCards from '../../cards/room-preview-card/init';
import initPaginations from '../../blocks/pagination/init';
import initDatepickers from '../../blocks/datepicker-block/init';
import initDropdowns from '../../blocks/dropdown/init';
import initSliders from '../../blocks/slider/init';
import initLists from '../../blocks/list/init';
import initHeaders from '../../page-elements/header/init';

initHeaders();

importCommon();
importContext(require.context('./', true, /\.(js|scss)$/));

// для отображения/скрытия меню на маленьких экранах
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
