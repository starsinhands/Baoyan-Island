function openDialog(){
	document.getElementById("dialogContainer").style.display="block";
}

function cancelDialog(){
	document.getElementById("dialogContainer").style.display="none";
	clearDialogFields();
}

function saveData(){
	var relation=document.getElementById("relation").value;
	var name=document.getElementById("name").value;
	var workUnit=document.getElementById("workUnit").value;
	var position=document.getElementById("position").value;
	
	var table=document.getElementById("memberTable");
	var row=table.insertRow(-1);
	
	var relationCell=row.insertCell(0);
	relationCell.innerHTML=relation;
	
	var nameCell=row.insertCell(1);
	nameCell.innerHTML=name;
	
	var workUnitCell=row.insertCell(2);
	workUnitCell.innerHTML=workUnit;
	
	var positionCell=row.insertCell(3);
	positionCell.innerHTML=position;
	
	var actionCell=row.insertCell(4);
	actionCell.innerHTML='<a href="#" onclick="editRow(this)" style="color:blue;font-size:16px;">编辑</a> <span style="color:blue;font-size:16px;">|</span> <a href="#" onclick="deleteRow(this)" style="color:blue;font-size:16px;">删除</a>';
	
	clearDialogFields();
	document.getElementById("dialogContainer").style.display="none";
}

function clearDialogFields(){
	document.getElementById("relation").value="";
	document.getElementById("name").value="";
	document.getElementById("workUnit").value="";
	document.getElementById("position").value="";
}

function editRow(link) {
	var row=link.parentNode.parentNode;
	var cells=row.getElementsByTagName("td");
	
	for (var i=0;i<cells.length-1;i++){
		var cell=cells[i];
		var value=cell.innerHTML;
		cell.innerHTML='<input type="text" value="'+value+'">';
	}
	
	var actionCell=cells[cells.length-1];
	actionCell.innerHTML='<a href="#" onclick="saveRow(this)" style="color:blue;font-size:16px;">保存</a>';
}

function saveRow(link){
	var row=link.parentNode.parentNode;
	var cells=row.getElementsByTagName("td");

	for(var i=0;i<cells.length-1;i++){
		var cell=cells[i];
		var input=cell.getElementsByTagName("input")[0];
		var value=input.value;
		cell.innerHTML=value;
	}

	var actionCell=cells[cells.length-1];
	actionCell.innerHTML='<a href="#" onclick="editRow(this)" style="color:blue;font-size:16px;">编辑</a> <span style="color:blue;font-size:16px;">|</span> <a href="#" onclick="deleteRow(this)" style="color:blue;font-size:16px;">删除</a>';
}

function deleteRow(link){
	var confirmDelete=confirm("确定要删除这一行吗？");
	if (confirmDelete){
		var row=link.parentNode.parentNode;
		row.parentNode.removeChild(row);
	}
}