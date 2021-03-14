import { importCommon } from '../../imports';
import initRoomPreviewCards from '../../cards/room-preview-card/init';
import initPaginations from '../../blocks/pagination/init';
import initDatepickers from '../../blocks/date-picker/init';
import initDropdowns from '../../blocks/dropdown/init';
import initSliders from '../../blocks/slider/init';
import initLists from '../../blocks/checkbox-list/init';
import './search-room.scss';

importCommon();

const $showSidebarButtons = $('.js-search-room__show-sidebar-button');
$showSidebarButtons.each((index, element) => {
  const $showSideBarButton = $(element);
  function handleButtonClick() {
    $showSideBarButton.toggleClass('search-room__sidebar-show-button_active');
  }

  $showSideBarButton.on('click', handleButtonClick);
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
