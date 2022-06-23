chrome.runtime.onInstalled.addListener(() => {

	// console.log("aaa");
	chrome.contextMenus.create({
		id:"neko",
		title:"deepl call",
		type:"normal",
		contexts:["selection"],
		// onclick:translate(),
	});
});
async function getCurrentTab(){
	let queryOptions = { active: true, currentWindow: true };
	let [tab] = await chrome.tabs.query(queryOptions);
	return tab;
}

function translate(info) {

	chrome.tabs.create({
		url: "https://www.deepl.com/translator#en" +
			"/" +
			"ja" +
			"/" +
			encodeURIComponent(info.selectionText).replace(/%2F/g, "%5C%2F").replace(/%7C/g, "%5C%7C")

	});	
}

chrome.contextMenus.onClicked.addListener(info => {
	translate(info);
});