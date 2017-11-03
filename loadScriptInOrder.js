var scriptMap =["https://code.jquery.com/jquery-2.1.1.min.js","https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.11.5/paper-full.min.js","main.js"];

var order = 0;

function loadScriptInOrder(){

    if(order == scriptMap.length) {

        return;

    }

    var JSLink = scriptMap[order];
    var JSElement = document.createElement('script');
    JSElement.src = JSLink;
    JSElement.onload = callback;
    document.getElementsByTagName('body')[0].appendChild(JSElement);

    function callback(){
        order++;
        loadScriptInOrder();
        console.log("script "+order+" is loaded");
    }


};

loadScriptInOrder();