let bDropDownActive = false;

$(document).ready(() => {
  $("#menu-button").mouseup(toggleMenu);
  $("#content-section").mouseup(clickOutSide);
  $(".warning-wrapper").each((_, e) => {
    $(e).mouseup(clickOutSide);
  });

  $("#footer").mouseup(clickOutSide);
})

function toggleMenu() {
  $("#dropdown-menu").css("display", bDropDownActive ? "none" : "block");
  $("#menu-button > img").attr(
    "src",
    bDropDownActive
      ? "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM4ODg4ODgiIGQ9Ik00IDE4cS0uNDI1IDAtLjcxMi0uMjg4VDMgMTdxMC0uNDI1LjI4OC0uNzEyVDQgMTZoMTZxLjQyNSAwIC43MTMuMjg4VDIxIDE3cTAgLjQyNS0uMjg4LjcxM1QyMCAxOHptMC01cS0uNDI1IDAtLjcxMi0uMjg4VDMgMTJxMC0uNDI1LjI4OC0uNzEyVDQgMTFoMTZxLjQyNSAwIC43MTMuMjg4VDIxIDEycTAgLjQyNS0uMjg4LjcxM1QyMCAxM3ptMC01cS0uNDI1IDAtLjcxMi0uMjg4VDMgN3EwLS40MjUuMjg4LS43MTJUNCA2aDE2cS40MjUgMCAuNzEzLjI4OFQyMSA3cTAgLjQyNS0uMjg4LjcxM1QyMCA4eiIvPjwvc3ZnPg=="
      : "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM4ODg4ODgiIGQ9Im0xMiAxMy40bC00LjkgNC45cS0uMjc1LjI3NS0uNy4yNzV0LS43LS4yNzVxLS4yNzUtLjI3NS0uMjc1LS43dC4yNzUtLjdsNC45LTQuOWwtNC45LTQuOXEtLjI3NS0uMjc1LS4yNzUtLjd0LjI3NS0uN3EuMjc1LS4yNzUuNy0uMjc1dC43LjI3NWw0LjkgNC45bDQuOS00LjlxLjI3NS0uMjc1LjctLjI3NXQuNy4yNzVxLjI3NS4yNzUuMjc1Ljd0LS4yNzUuN0wxMy40IDEybDQuOSA0LjlxLjI3NS4yNzUuMjc1Ljd0LS4yNzUuN3EtLjI3NS4yNzUtLjcuMjc1dC0uNy0uMjc1eiIvPjwvc3ZnPg=="
  );
  bDropDownActive = !bDropDownActive;
}

function clickOutSide() {
  if (bDropDownActive) {
    toggleMenu();
  }
}