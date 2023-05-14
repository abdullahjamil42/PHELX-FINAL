// get all editable table cells
var cells = document.querySelectorAll('td[contenteditable="true"]');

// add event listener to each cell
cells.forEach(function(cell) {
	cell.addEventListener('input', function() {
		// save cell value to localStorage
		localStorage.setItem(cell.parentNode.rowIndex + '-' + cell.cellIndex, cell.innerHTML);
	});
});

// load saved data from localStorage
for (var i = 0; i < localStorage.length; i++) {
	var key = localStorage.key(i);
	if (key.indexOf('-') !== -1) {
		var row = key.split('-')[0];
		var col = key.split('-')[1];
		var cell = document.querySelector('table').rows[row].cells[col];
		cell.innerHTML = localStorage.getItem(key);
	}
}
