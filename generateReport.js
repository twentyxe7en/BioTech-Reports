let hk = new Map();
let cw = new Map();
let report = document.getElementsByClassName("reports");
let type = document.getElementsByName("type");
let area = document.getElementsByName("area");
let findings = document.getElementsByName("finding");
let additional = document.getElementsByName("additional");
let specifics = document.getElementsByName("specifics");
let hkSize = 0;
let cwSize = 0;

function generate() {

	for (var i = 0; i < rows; i++) {
		var txt;
		
		// Generate text report
		try {
			if (additional[i].selectedOptions[0].text == "" && specifics[i].selectedOptions[0].text == "") {
				txt = findings[i].selectedOptions[0].text + " at the " + area[i].selectedOptions[0].text;
			} else if (additional[i].selectedOptions[0].text == "") {
				txt = findings[i].selectedOptions[0].text + " " + specifics[i].selectedOptions[0].text + " at the " + area[i].selectedOptions[0].text;
			} else if (specifics[i].selectedOptions[0].text == "") { 
				txt = findings[i].selectedOptions[0].text + " at the " + area[i].selectedOptions[0].text;
			} else {
				txt = findings[i].selectedOptions[0].text + " " + additional[i].selectedOptions[0].text + " " + specifics[i].selectedOptions[0].text + " at the " + area[i].selectedOptions[0].text;
			}
		} catch(err) {}
		// Output text report
		try {
			console.log(type[i].selectedOptions[0].text + ": " + txt);
		} catch (err) {}


		// Add text report to map by type
		try {
			if (type[i].selectedOptions[0].text == "Housekeeping") {
				hk.set(hkSize, txt);
				hkSize++;
			} else if (type[i].selectedOptions[0].text == "Civil Works") {
				cw.set(cwSize, txt);
				cwSize++;
			}
			printReport();
		} catch(err) {}
	}
}

function printReport() {
	let hkFind = document.getElementById("housekeep_findings");
	let cwFind = document.getElementById("civil_work_findings");
	let hkTxt = "";
	let cwTxt = "";

	// Get housekeeping reports
	for (var i = 0; i < hkSize; i++) {
		hkTxt += hk.get(i) + ", ";
	}
	// hkTxt = hkTxt.slice(-1);
	hkFind.innerHTML = hkTxt.slice(0, -2);
	console.log(hkTxt.slice(0, -2));

	// Get civil works reports
	for (var i = 0; i < cwSize; i++) {
		cwTxt += cw.get(i) + ", ";
	}
	// cwTxt = cwText.slice(-1);
	cwFind.innerHTML = cwTxt.slice(0, -2);
	console.log(cwTxt.slice(0, -2));
}
