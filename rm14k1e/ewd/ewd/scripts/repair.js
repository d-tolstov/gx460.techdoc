var R_INDEX = "../../../intro-wh/intro/index.html";

function h(c) { showHousing(c); }
function s(c) { showSealing(c); }
function l() { showSleeve(); }

function showHousing(id) {
	openWindow("./list/frame_housing.html#" + id, "_blank", 800, 600);
}

function showSealing(id) {
	openWindow("./list/frame_sealing.html#" + id, "_blank", 560, 600);
}

function showSleeve() {
	openWindow("./list/frame_sleeve.html", "ewd_html_whrm_sleeve", 450, 400);
}

function call_runOnClickClose() {
	parent.close();
}

function call_runOnClickPrint() {
	var oWnd = parent.list;
	oWnd.focus();
	oWnd.print();
}

function call_runOnClickShowRepairWireHarnessList(id)
{
	var w= 910;
	var h= 600;
	var x = (screen.width - w) / 2;
	var y = 0

	window.open("../../repair/index_repair.html#" + id, "_blank", makeStyle(x,y,w,h));
}

function openWindow(url, wname, w, h) {
	var x = (screen.width - w) / 2;
	var y = screen.height - h - 100;
	window.open(url, wname, makeStyle(x,y,w,h));
}

function call_runOnClickHintFromRepair()
{
	showHint(R_INDEX);
}


function call_runOnClickHintFromList()
{
	showHint("../" + R_INDEX);
}

function showHint(url)
{
	var w= 850;
	var h= 450;
	var x = (screen.width - w) / 2;
	var y = (screen.height - h) /2;
	
	var wnd = window.open(url, "ewd_html_whrm_hint", makeStyle(x,y,w,h) );
	                       
	wnd.focus();
}

function makeStyle(x, y, w, h)
{
	return "scrollbars=yes,Width=" + w + ",Height=" + h + ",resizable=yes," + "left=" + x + ",top=" + y;
}

function call_runOnLoadRepair()
{
	moveA("./list_repair.html");
}

function call_runOnLoadHousing()
{
	var connID = parent.location.hash.split('#')[1];
	window.location.href="./wire_housing/" + connID +".html#" + connID;
}

function call_runOnLoadSealing()
{
	moveA("./list_sealing.html");
}

function moveA(url)
{
	var cID = parent.location.hash.split('#')[1];
	window.location.href= url + "#" + cID;
}