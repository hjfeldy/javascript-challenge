// from data.js
var tableData = data;

// YOUR CODE HERE!


let tbody = document.getElementById('ufo-table').children[1];

function append(dataRow) {
	// Create row element
	let htmlRow = document.createElement('tr')
	tbody.appendChild(htmlRow)

	// Iterate over keys (columns) 
	let keys = Object.keys(dataRow)
	for( let i = 0; i < keys.length; i++) {
		// Create row element and append data to it
		let htmlDataPoint = document.createElement('td')
		let htmlData = document.createTextNode(dataRow[keys[i]])
		htmlDataPoint.append(htmlData)
		htmlRow.append(htmlDataPoint)
	}
}

// Populate table

function clearTable() {
	let rows = tbody.getElementsByTagName('tr')
	while (rows.length > 0) {
		rows[0].remove();
	}
}

function populate() {
	clearTable();
	data.forEach(row => append(row));
}


function filterInput (input) {
	// Get text value of the user input
	let value = document.getElementById(input).value
	
	// Don't filter if inpput is empty
	if(!value) {
		return
	}
	// Iterate over rows and remove non-criteria-meeters
	let rows = tbody.getElementsByTagName('tr')
	let columns = ['datetime', 'city', 'state', 'country', 'shape']
	
	// Only look at column for THIS input box
	let colIndex = columns.indexOf(input)
	let i = 0
	while(i < rows.length) {
		let element = rows[i].getElementsByTagName('td')[colIndex]
		if(element.textContent != value) {
			// Remove / Hide row
			rows[i].remove()
			
			// Move the index back one
			i--;
			console.log(`${i} -- ${element.textContent}`)
		}
		i++
	}
}

// Find each item to be filtered, and pass it to the filterInput function
function filter() {
	// Begin by re-setting the table
	populate();
	let inputs = document.getElementsByTagName('input')
	for(let i = 0; i < inputs.length; i++) {
		filterInput(inputs[i].id)
	}
}

populate()
