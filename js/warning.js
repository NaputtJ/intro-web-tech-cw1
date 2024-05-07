let warningShow = false;

$(document).ready(() => {
  const cookie = (document.cookie.match(/^(?:.*;)?\s*warning\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1]
  if (cookie === null) {
    $("#content-warning-button").css("display", "block");
    $("div.warning").css("display", "block");
    warningShow = true;
  }
  
  $("#content-warning-button").mouseup(() => {
    if (!warningShow) {
      return;
    }
    
    $("#content-warning-button").css("display", "none");
    $("div.warning").css("display", "none");

    const d = new Date();
    d.setTime(d.getTime() + 3 * 2592000000);
    document.cookie = `warning=0;expires=${d.toUTCString()};path=/`;
  });
})