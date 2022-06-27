class Stack{
    constructor(arr){
        if(arr){
            this.array = arr;
        }else{
            this.array = [];
        }
    }

    push(item){
        this.array.push(item);
        chrome.storage.sync.set({ "history": this.array });
    }

    pop(){
        if (this.array.length === 0) return 'overflow';
        chrome.storage.sync.set({ "history": this.array });
        return  this.array.pop();
    }

    getAll(){
        return this.array;
    }

    clear(){
        this.array = [];
        chrome.storage.sync.set({ "history": this.array });
    }

    peek(){
        return this.array[(this.array.length - 1)];
    }

    isEmpty(){
        return this.array.length === 0;
    }
}
