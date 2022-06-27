const historyStack = new Stack();

document.oncontextmenu = (e)=>{
    if(!e.target.id){
        e.target.id = 'id' + Math.round(Math.random()*10000000); //in case if the element don't have id
    }
    let selector = getElementText(e.target);
    chrome.storage.sync.set({"lastClicked":selector});
}


function getElementText(el){
    let elname = el.nodeName;
    let elid = el.id;
    let elclasslist = el.classList;
    let result = elname;
    if(elid){
        result += '#' + elid
    }
    if(elclasslist[0]){
        elclasslist.forEach(c => {
            if (c.includes(":"))return;
            result += '.' + c;
        });
    }
    return result;
}