function insert_Row() {
    //Write your code here
	let table=document.getElementById('sampleTable');
	let newRow=table.insertRow(0)
	let cell1=newRow.insertCell(0)
	let cell2=newRow.insertCell(1)
	cell1.innerText="New cell1"
	cell2.innerText="New cell2"
	
  
  
}
