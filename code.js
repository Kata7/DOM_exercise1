document.addEventListener('DOMContentLoaded', function () {
    var elements = [
      { name: 'Hydrogen', number: 1, symbol: 'H' },
      { name: 'Mercury', number: 80, symbol: 'Hg' },
      { name: 'Lead', number: 82, symbol: 'Pb' },
      { name: 'Bismuth', number: 83, symbol: 'Bi' },
      { name: 'Neon', number: 10, symbol: 'Ne' }
    ]
    
    // create var for insertion location
    var table = document.getElementById('table');
    
    // Iterate through elements array
    for (var i = 0; i < elements.length; i++) {
    
        // assigning temp vars for element properties
        var name = elements[i].name;
        var num = elements[i].number;
        var sym = elements[i].symbol;
    
          table.createElement('th');
      
    }
    
  })
  