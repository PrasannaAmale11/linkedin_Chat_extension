export default defineBackground(() => {
  console.log('Hello background!', { id: browser.runtime.id });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'start_extension') {

    sendResponse({ success: true });
  }
});
