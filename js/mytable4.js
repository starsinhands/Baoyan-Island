function openDialog(){
	document.getElementById("dialogContainer").style.display="block";
}

function cancelDialog(){
	document.getElementById("dialogContainer").style.display="none";
	clearDialogFields();
}

function saveData(){
	var name=document.getElementById("name").value;
	var shifou=document.getElementById("shifou").value;
	var sex=document.getElementById("sex").value;
	var unit=document.getElementById("unit").value;
	var zw=document.getElementById("zw").value;
	var zc=document.getElementById("zc").value;
	var gx=document.getElementById("gx").value;
	var yx=document.getElementById("yx").value;
	var sj=document.getElementById("sj").value;
	var dz=document.getElementById("dz").value;
	
	var table=document.getElementById("memberTable");
	var row=table.insertRow(-1);
	
	var nameCell=row.insertCell(0);
	nameCell.innerHTML=name;
	
	var shifouCell=row.insertCell(1);
	shifouCell.innerHTML=shifou;
	
	var sexCell=row.insertCell(2);
	sexCell.innerHTML=sex;
	
	var unitCell=row.insertCell(3);
	unitCell.innerHTML=unit;
	
	var zwCell=row.insertCell(4);
	zwCell.innerHTML=zw;
	
	var zcCell=row.insertCell(5);
	zcCell.innerHTML=zc;
	
	var gxCell=row.insertCell(6);
	gxCell.innerHTML=gx;
	
	var yxCell=row.insertCell(7);
	yxCell.innerHTML=yx;
	
	var sjCell=row.insertCell(8);
	sjCell.innerHTML=sj;
	
	var dzCell=row.insertCell(9);
	dzCell.innerHTML=dz;
	
	var actionCell=row.insertCell(10);
	actionCell.innerHTML='<a href="#" onclick="editRow(this)" style="color:blue;font-size:16px;">编辑</a> <span style="color:blue;font-size:16px;">|</span> <a href="#" onclick="deleteRow(this)" style="color:blue;font-size:16px;">删除</a>';
	
	clearDialogFields();
	document.getElementById("dialogContainer").style.display="none";
}

function clearDialogFields(){
	document.getElementById("name").value="";
	document.getElementById("shifou").value="";
	document.getElementById("sex").value="";
	document.getElementById("unit").value="";
	document.getElementById("zw").value="";
	document.getElementById("zc").value="";
	document.getElementById("gx").value="";
	document.getElementById("yx").value="";
	document.getElementById("sj").value="";
	document.getElementById("dz").value="";
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