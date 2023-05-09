const row = document.getElementsByClassName("reports");
let rows = 1;

function addRow() {
	var table = document.getElementById("report-table");
	var row = table.insertRow(rows);
	var cellType = row.insertCell(0);
	var cellArea = row.insertCell(1);
	var cellFinding = row.insertCell(2);
	var cellAdditional = row.insertCell(3);
	var cellSpecifics = row.insertCell(4);

	cellType.innerHTML = Type;
	cellArea.innerHTML = Area;
	cellFinding.innerHTML = Finding;
	cellAdditional.innerHTML = Additional;
	cellSpecifics.innerHTML = Specifics;

	cellType.id = "type";
	cellArea.id = "area";
	cellFinding.id = "finding";
	cellAdditional.id = "additional";
	cellSpecifics.id = "specifics";

	rows++;
}
