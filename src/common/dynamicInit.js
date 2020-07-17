/* eslint-disable no-undef */
function initBlocks(rootElement, selector, ClassToInit) {
  const blockInstanceKey = `${ClassToInit.className}Instance`;
  const blocks = [];
  const $blocks = rootElement ? $(rootElement).find(selector) : $(selector);

  $blocks.each((index, element) => {
    const $block = $(element);

    if ($block.data(blockInstanceKey)) {
      blocks.push($block.data(blockInstanceKey));
      return;
    }
    const blockInstance = new ClassToInit(element);
    $block.data(blockInstanceKey, blockInstance);
    blocks.push(blockInstance);
  });

  return blocks;
}

export default initBlocks;
