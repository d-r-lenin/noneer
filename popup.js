const undoBtn = document.querySelector('#undo-btn');
const resetBtn = document.querySelector('#reset-btn');

undoBtn.addEventListener('click',async e =>{
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: ()=>{
            let item = historyStack.pop();
            if(item === 'overflow')return;
            const el = document.querySelector(item.selector);
            el.style.display = item.display;
        },
    });
})


resetBtn.addEventListener('click', async e => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: () => {
            const items = historyStack.getAll();
            if (items.length === 0) return;
            items.forEach(item => {
                const el = document.querySelector(item.selector);
                el.style.display = item.display;
            });

            historyStack.clear();
        },
    });
})