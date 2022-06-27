chrome.runtime.onInstalled.addListener(() => {
    console.log('installed');
});

chrome.contextMenus.create({
    title: 'Just Delete',
    id:'justdelete',
    contexts: ['all']
}, (e) => {
    console.log("hay",e)
})

chrome.contextMenus.onClicked.addListener(async(data,tab)=>{
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: async()=>{
            let selector = await chrome.storage.sync.get(["lastClicked"]);
            selector = selector.lastClicked;
            let el;
            console.log(selector);
            el = document.querySelector(selector);
            console.log(el);
            historyStack.push({
                selector,
                display : window.getComputedStyle(el).display
            });
            el.style.display = 'none';
        },
    });
})