

function getElementOffsetTop(element) {
  let offset = 0;
  while (element) {
    offset += element.offsetTop;
    element = element.offsetParent;
  }
  return offset;
}

$(document).ready(() => {
  $("button[scroll-to]").each((_, e) => {
    $(e).mouseup(() => {
      const element = $(`#${$(e).attr("scroll-to")}`);
      if (element.length) {
        const pos = element.offset().top;
        if (pos === 62) {
          return;
        }

        $("html,body").animate(
          { scrollTop: getElementOffsetTop(element[0]) - 62 },
          "fast"
        );
      }
    });
  });
})