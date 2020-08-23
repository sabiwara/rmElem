// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage

let portFromCS;

function setIcon(toggled, tabId) {
  const icon = toggled ? "red-48.svg" : "icon-48.svg";
  const path = `./icons/${icon}`;
  browser.pageAction.setIcon({ path, tabId });
}

browser.runtime.onMessage.addListener((message, sender) => {
  // console.log("GOT", { message, sender })
  setIcon(message.toggled, sender.tab.id);
});

browser.pageAction.onClicked.addListener((tab) => {
  // console.log("CLICKED BACKGROUND", tab);
  browser.tabs.sendMessage(tab.id, { event: "rmElem" });
});
