function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5yYowz9kNgO":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var GlobalNote = player.GetVar("GlobalNote");

var mywindow = window.open('', 'Printing', 'height=400,width=600');
mywindow.document.write('<html><head><title>Printing</title>');
mywindow.document.write('</head><body >');

mywindow.document.write('<h2 style="font-family:Quicksand Book">Power, Privilege, Prejudice, and Oppression: Notes</h2>');
mywindow.document.write(GlobalNote);
mywindow.document.write('</body></html>');

mywindow.document.close(); // necessary for IE >= 10
mywindow.focus(); // necessary for IE >= 10

mywindow.print();
mywindow.close();
}

