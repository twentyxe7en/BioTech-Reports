let blank = '<option></option>';

// data.Type
var txt;
for (var i = 0; i < data.Type.length; i++) {
	txt += '<option>' + data.Type[i] + '</option>';
}

let Type = '<select name="type">' + blank + txt + '</select>';

// data.Area
txt = ""
for (var i = 0; i < data.Area.length; i++) {
	txt += '<option>' + data.Area[i] + '</option>';
}

let Area = '<select name="area">' + blank + txt + '</select>';

// data.Finding
txt = ""
for (var i = 0; i < data.Finding.length; i++) {
	txt += '<option>' + data.Finding[i] + '</option>';
}

let Finding = '<select name="finding">' + blank + txt + '</select>';

// data.Additional
txt = ""
for (var i = 0; i < data.Additional.length; i++) {
	txt += '<option>' + data.Additional[i] + '</option>';
}

let Additional = '<select name="additional">' + blank + txt + '</select>';

// data.Specifics
txt = ""
for (var i = 0; i < data.Specifics.length; i++) {
	txt += '<option>' + data.Specifics[i] + '</option>';
}

let Specifics = '<select name="specifics">' + blank + txt + '</select>';
