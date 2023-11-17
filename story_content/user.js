function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5nJSM6ZhQQc":
        Script1();
        break;
      case "6rEwobGLZRK":
        Script2();
        break;
      case "5slBvuWd6VV":
        Script3();
        break;
  }
}

function Script1()
{
  if(localStorage.getItem("noteApp")){

	GetPlayer().SetVar("noteApp",JSON.parse(localStorage.getItem("noteApp")));
	var noteStr = "";
	var notes = JSON.parse(localStorage.getItem("noteApp"));
	for(var i = 0 ; i < notes.length ; i++){
		noteStr += notes[i] + "\n";
	}
	GetPlayer().SetVar("notes",noteStr);
}else{
	var noteApp = [];
	localStorage.setItem("noteApp",JSON.stringify(noteApp));
}
}

function Script2()
{
  var noteApp = JSON.parse(localStorage.getItem("noteApp"));
//var notes = [];
//var noteStr = GetPlayer().GetVar("notes");

noteApp.push(GetPlayer().GetVar("note_data"));
localStorage.setItem("noteApp",JSON.stringify(noteApp));
var noteStr = "";
for(var i = 0 ; i < noteApp.length ; i++){
	noteStr += noteApp[i]+'\n';
}
GetPlayer().SetVar("notes",noteStr);
}

function Script3()
{
  var noteStr = GetPlayer().GetVar("notes");
var notes = noteStr.split("\n");
var str = "";
for(var i = 0 ; i < notes.length ; i++){
	if(notes[i] == GetPlayer().GetVar("word")){
		str += (i+1) + " - " + notes[i] + "\n";
	}
}
GetPlayer().SetVar("writeHere",str);
}

