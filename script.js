function insert_Row() {
    //Write your code here
	// Appraoch 1 (insert row and cell table begin)
	let table=document.getElementById('sampleTable');
	let newRow=table.insertRow(0)
	let cell1=newRow.insertCell(0)
	let cell2=newRow.insertCell(1)
	cell1.innerText="New Cell1"
	cell2.innerText="New Cell2" 

	// Approach 2 (insert row and cell table end)
	/*let table=document.getElementById("sampleTable")
	let row=document.createElement('tr')
	let cell1=document.createElement('td')
	cell1.innerText="New Cell1"
	let cell2=document.createElement('td')
	cell2.innerText="New Cell2"
	let rowCell=row.appendChild(cell1)
	rowCell=row.appendChild(cell2)
	table.appendChild(row)
	*/
}
