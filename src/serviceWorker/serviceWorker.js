import startedLog from "../utils/startedLog";

chrome.runtime.onInstalled.addListener(async () => {
    const response = await fetch("https://www.google.com", {
        method: "POST"
    });

    let responseText;
    try {
        responseText = await response.text();
    } catch(e) {}

    console.log(responseText);
});