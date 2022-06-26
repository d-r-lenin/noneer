console.log("hellosdjasndkj");
document.oncontextmenu = (e)=>{
    let a ;
    if(!e.target.id){
        e.target.id = 'id' + Math.round(Math.random()*100000);
    }
    a = getElementText(e.target);
    console.log(a);
    chrome.storage.sync.set({"lastClicked":a});
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