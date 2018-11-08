document.addEventListener('DOMContentLoaded', function () {
    var elements = [
      { name: 'Hydrogen', number: 1, symbol: 'H' },
      { name: 'Mercury', number: 80, symbol: 'Hg' },
      { name: 'Lead', number: 82, symbol: 'Pb' },
      { name: 'Bismuth', number: 83, symbol: 'Bi' },
      { name: 'Neon', number: 10, symbol: 'Ne' }
    ];
    
    var table = document.getElementById('table');

    for (var i = 0; i < elements.length; i++){

        var row =  table.insertRow();
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        var cell3 = row.insertCell();

        var element = elements[i];
        var name = element.name;
        var number = element.number;
        var symbol = element.symbol;

        cell1.innerHTML = `${number}`;
        cell2.innerHTML = `${symbol}`;
        cell3.innerHTML = `${name}`;

    }
    
  })
  