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

browser.menus.create(
  {
    id: "Translate&Replace",
    title: browser.i18n.getMessage("menuItem1"),
    contexts: ["selection"],
  },
  onCreated
);

browser.menus.create(
  {
    id: "Translate&Copy",
    title: browser.i18n.getMessage("menuItem2"),
    contexts: ["selection"],
  },
  onCreated
);

browser.menus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "Translate&Replace":
      browser.tabs.executeScript({
        file: "./translate-replace.js",
      });
      break;
    case "Translate&Copy":
      browser.tabs.executeScript({
        file: "./translate-copy.js",
      });
      break;
  }
});
