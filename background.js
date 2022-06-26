let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Default background color set to %cgreen', `color: ${color}`);
});

chrome.contextMenus.create({
    title: 'Just Delete',
    id:'justdelete',
    contexts: ['all']
}, (e) => {
    console.log("hay",e)
})

chrome.contextMenus.onClicked.addListener(async(data,tab)=>{
    // console.log(data,tab);
    let e = await chrome.storage.sync.get(['lastClicked']);
    // if(!e.target)return;/
    console.log(e);
    // e.target.style.display = "none";
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: async()=>{
            let e = await chrome.storage.sync.get(["lastClicked"]);
            let el;
            console.log(e);
            el = document.querySelector(e.lastClicked);
            console.log(el);
            el.style.display = 'none';
        },
    });
    e.target.style.backgroundColor = "blue";

})

// async function h(){
//     let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//     chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         function: listenbob,
//     });
// }
// h();

// function listenbob(){
//     console.log("helloo")
// }
