String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "");
};

function goOnClick(word) {
    String.prototype.trim(word.selectionText)
    console.log(word.selectionText);
    var url = "http://www.wordreference.com/enru/" + word.selectionText;
    chrome.tabs.create({"url":url, "selected":true});
}
var context = "selection";
var title = "Go to wordreference.com";
var id = chrome.contextMenus.create({"title":title, "contexts":[context],
    "onclick":goOnClick});


