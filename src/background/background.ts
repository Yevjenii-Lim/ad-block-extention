console.log('hello from backround');

// chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
//   console.log(msg);
//   console.log(sender);
//   sendResponse();
// });

chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    console.log(details);
    return {
      cancel: true,
    };
  },
  {
    urls: [
      '*://*.googleadservices.com/*',
      '*://canyoublockit.com/*',
      '*://*.tpc.googlesyndication.com/*',
    ],
  },
  ['blocking']
);
