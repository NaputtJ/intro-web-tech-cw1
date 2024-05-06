let bDropDownActive = false;
let bSidebarActive = false;

$(document).ready(() => {
  $("#menu-button").mouseup(toggleMenu);

  if ($("#sidebar-button").length) {
    $("#sidebar-button").mouseup(toggleSidebar);
  }

  $("#content-section").mouseup(clickOutSide);

  $("#footer").mouseup(clickOutSide);
  $("#header").mouseup(() => {
    if (bSidebarActive) {
      toggleSidebar();
    }
  });
});

function clickOutSide() {
  if (bDropDownActive) {
    toggleMenu();
  }

  if (bSidebarActive) {
    toggleSidebar();
  }
}

function toggleMenu() {
  $("#dropdown-menu").css("display", bDropDownActive ? "none" : "block");
  $("#menu-button > img").attr(
    "src",
    bDropDownActive
      ? "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM4ODg4ODgiIGQ9Ik00IDE4cS0uNDI1IDAtLjcxMi0uMjg4VDMgMTdxMC0uNDI1LjI4OC0uNzEyVDQgMTZoMTZxLjQyNSAwIC43MTMuMjg4VDIxIDE3cTAgLjQyNS0uMjg4LjcxM1QyMCAxOHptMC01cS0uNDI1IDAtLjcxMi0uMjg4VDMgMTJxMC0uNDI1LjI4OC0uNzEyVDQgMTFoMTZxLjQyNSAwIC43MTMuMjg4VDIxIDEycTAgLjQyNS0uMjg4LjcxM1QyMCAxM3ptMC01cS0uNDI1IDAtLjcxMi0uMjg4VDMgN3EwLS40MjUuMjg4LS43MTJUNCA2aDE2cS40MjUgMCAuNzEzLjI4OFQyMSA3cTAgLjQyNS0uMjg4LjcxM1QyMCA4eiIvPjwvc3ZnPg=="
      : "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM4ODg4ODgiIGQ9Im0xMiAxMy40bC00LjkgNC45cS0uMjc1LjI3NS0uNy4yNzV0LS43LS4yNzVxLS4yNzUtLjI3NS0uMjc1LS43dC4yNzUtLjdsNC45LTQuOWwtNC45LTQuOXEtLjI3NS0uMjc1LS4yNzUtLjd0LjI3NS0uN3EuMjc1LS4yNzUuNy0uMjc1dC43LjI3NWw0LjkgNC45bDQuOS00LjlxLjI3NS0uMjc1LjctLjI3NXQuNy4yNzVxLjI3NS4yNzUuMjc1Ljd0LS4yNzUuN0wxMy40IDEybDQuOSA0LjlxLjI3NS4yNzUuMjc1Ljd0LS4yNzUuN3EtLjI3NS4yNzUtLjcuMjc1dC0uNy0uMjc1eiIvPjwvc3ZnPg=="
  );
  bDropDownActive = !bDropDownActive;

  if (bSidebarActive && bDropDownActive) {
    toggleSidebar();
  }
}

function toggleSidebar() {
  $("#sidebar-content-wrapper").css(
    "display",
    bSidebarActive ? "none" : "block"
  );
  bSidebarActive = !bSidebarActive;
}

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