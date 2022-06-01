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
	// let queryOption = {active:true,currentWindow:true};
	// let tab = getCurrentTab();
	// console.log(tab)
	// console.log(tab.index)

	chrome.tabs.create({
		url: "https://www.deepl.com/translator#en" +
			"/" +
			"ja" +
			"/" +
			encodeURIComponent(info.selectionText).replace(/%2F/g, "%5C%2F"),
		// replace(/%20%20/g, "%20"),
		// index: tab.index + 1,
	});	
}

chrome.contextMenus.onClicked.addListener(info => {
	translate(info);
});