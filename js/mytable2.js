function openDialog(){
	document.getElementById("dialogContainer").style.display="block";
}

function cancelDialog(){
	document.getElementById("dialogContainer").style.display="none";
	clearDialogFields();
}

function saveData(){
	var school=document.getElementById("school").value;
	var major=document.getElementById("major").value;
	var xueli=document.getElementById("xueli").value;
	var intime=document.getElementById("intime").value;
	var outtime=document.getElementById("outtime").value;
	var city=document.getElementById("city").value;
	var rank=document.getElementById("rank").value;
	
	var table=document.getElementById("memberTable");
	var row=table.insertRow(-1);
	
	var schoolCell=row.insertCell(0);
	schoolCell.innerHTML=school;
	
	var majorCell=row.insertCell(1);
	majorCell.innerHTML=major;
	
	var xueliCell=row.insertCell(2);
	xueliCell.innerHTML=xueli;
	
	var intimeCell=row.insertCell(3);
	intimeCell.innerHTML=intime;
	
	var outtimeCell=row.insertCell(4);
	outtimeCell.innerHTML=outtime;
	
	var cityCell=row.insertCell(5);
	cityCell.innerHTML=city;
	
	var rankCell=row.insertCell(6);
	rankCell.innerHTML=rank;
	
	var actionCell=row.insertCell(7);
	actionCell.innerHTML='<a href="#" onclick="editRow(this)" style="color:blue;font-size:16px;">编辑</a> <span style="color:blue;font-size:16px;">|</span> <a href="#" onclick="deleteRow(this)" style="color:blue;font-size:16px;">删除</a>';
	
	clearDialogFields();
	document.getElementById("dialogContainer").style.display="none";
}

function clearDialogFields(){
	document.getElementById("school").value="";
	document.getElementById("major").value="";
	document.getElementById("xueli").value="";
	document.getElementById("intime").value="";
	document.getElementById("outtime").value="";
	document.getElementById("city").value="";
	document.getElementById("rank").value="";
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