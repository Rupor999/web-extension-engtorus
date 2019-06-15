function onCreated() {
  if (browser.runtime.lastError) {
    console.log(`Error: ${browser.runtime.lastError}`);
  } else {
    console.log("Item created successfully");
  }
}

function onRemoved() {
  console.log("Item removed successfully");
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.menus.create({
  id: "Translate",
  title: browser.i18n.getMessage("menuItem"),
  contexts: ["selection"]
}, onCreated);

browser.menus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "Translate":
    browser.tabs.executeScript({
        file: "./translate.js"
      });
      break;
  }
});
