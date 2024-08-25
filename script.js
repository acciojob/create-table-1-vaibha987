function insert_Row() {
    //Write your code here
	let table=document.getElementById("sampleTable")
	let row=document.createElement('tr')
	let cell1=document.createElement('td')
	cell1.innerText="New Cell1"
	let cell2=document.createElement('td')
	cell2.innerText="New Cell2"
	let rowCell=row.appendChild(cell1)
	rowCell=row.appendChild(cell2)
	table.appendChild(row)
	
}
