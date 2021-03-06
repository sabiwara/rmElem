
function forEachEl(cb) {
  for (let el of document.getElementsByTagName("*")) {
    cb(el);
  }
}

function addCss() {
  if (!window.rmElCss) {
    window.rmElCss = document.createElement("style");
    rmElCss.type = "text/css";
    rmElCss.innerHTML = "*:hover { background: rgba(128, 16, 0, 0.15) !important; }";
  }
  document.body.appendChild(window.rmElCss);
}

function rmOnClick(event) {
  event.stopPropagation();
  console.log("rmEl deleted:", event.target);
  event.target.remove();
  return false;
}

function addRmHandler(el) {
  el._onclickBkp = el.onclick;
  el._cursorBkp = el.style.cursor;
  el.onclick = rmOnClick;
  el.style.cursor = "crosshair";
}

function restoreHandler(el) {
  el.onclick = el._onclickBkp;
  el.style.cursor = el._cursorBkp;
}

function addEscapeHandler(cb) {
  window.rmElKeyDown = document.addEventListener("keydown", (evt) => {
    evt = evt || window.event;
    if (evt.key === "Escape") cb();
  });
}

function toggleOn() {
  if (window.rmElOn) return;

  addCss();
  forEachEl(addRmHandler);
  addEscapeHandler(toggleOff);
  window.rmElOn = true;
}

function toggleOff() {
  if (!window.rmElOn) return;

  document.body.removeChild(window.rmElCss);
  forEachEl(restoreHandler);
  document.removeEventListener("keydown", window.rmElKeyDown);
  window.rmElOn = false;
}

function toggle() {
  if (window.rmElOn) {
    toggleOff();
  } else {
    toggleOn();
  }
}

toggle();
