chrome.runtime.sendMessage({ todo: "showPageAction" });
const click = (name) => {
  const buttons = document.getElementsByClassName(name);
  for (const button of buttons) {
    button.click();
    console.log("No Ad");
  }
};

setInterval(() => {
  click("ytp-ad-skip-button-text");
  click("ytp-ad-overlay-close-button");
}, 300);
console.log("No Ad - Init");
