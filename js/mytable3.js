function openDialog(){
	document.getElementById("dialogContainer").style.display="block";
}

function cancelDialog(){
	document.getElementById("dialogContainer").style.display="none";
	clearDialogFields();
}

function saveData(){
	var ryhjl=document.getElementById("ryhjl").value;
	var hdsj=document.getElementById("hdsj").value;
	var zzdw=document.getElementById("zzdw").value;
	var jysm=document.getElementById("jysm").value;
	
	var table=document.getElementById("memberTable");
	var row=table.insertRow(-1);
	
	var ryhjlCell=row.insertCell(0);
	ryhjlCell.innerHTML=ryhjl;
	
	var hdsjCell=row.insertCell(1);
	hdsjCell.innerHTML=hdsj;
	
	var zzdwCell=row.insertCell(2);
	zzdwCell.innerHTML=zzdw;
	
	var jysmCell=row.insertCell(3);
	jysmCell.innerHTML=jysm;
	
	var actionCell=row.insertCell(4);
	actionCell.innerHTML='<a href="#" onclick="editRow(this)" style="color:blue;font-size:16px;">编辑</a> <span style="color:blue;font-size:16px;">|</span> <a href="#" onclick="deleteRow(this)" style="color:blue;font-size:16px;">删除</a>';
	
	clearDialogFields();
	document.getElementById("dialogContainer").style.display="none";
}

function clearDialogFields(){
	document.getElementById("ryhjl").value="";
	document.getElementById("hdsj").value="";
	document.getElementById("zzdw").value="";
	document.getElementById("jysm").value="";
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



function openAchievementDialog(){
	document.getElementById("achievementDialogContainer").style.display="block";
}
function cancelAchievementDialog(){
	document.getElementById("achievementDialogContainer").style.display="none";
	clearAchievementDialogFields();
}
function saveAchievementData(){
	var mc=document.getElementById("mc").value;
	var fbsj=document.getElementById("fbsj").value;
	var fbqk=document.getElementById("fbqk").value;
	var lwtm=document.getElementById("lwtm").value;
	var djzz=document.getElementById("djzz").value;
	
	var table=document.getElementById("achievementTable");
	var row=table.insertRow(-1);
	
	var mcCell=row.insertCell(0);
	mcCell.innerHTML=mc;
	
	var fbsjCell=row.insertCell(1);
	fbsjCell.innerHTML=fbsj;
	
	var fbqkCell=row.insertCell(2);
	fbqkCell.innerHTML=fbqk;
	
	var lwtmCell=row.insertCell(3);
	lwtmCell.innerHTML=lwtm;
	
	var djzzCell=row.insertCell(4);
	djzzCell.innerHTML=djzz;
	
	var actionCell=row.insertCell(5);
	actionCell.innerHTML='<a href="#" onclick="editAchievementRow(this)" style="color:blue;font-size:16px;">编辑</a> <span style="color:blue;font-size:16px;">|</span> <a href="#" onclick="deleteAchievementRow(this)" style="color:blue;font-size:16px;">删除</a>';
	
	clearAchievementDialogFields();
	document.getElementById("achievementDialogContainer").style.display="none";
}
function clearAchievementDialogFields(){
	document.getElementById("mc").value="";
	document.getElementById("fbsj").value="";
	document.getElementById("fbqk").value="";
	document.getElementById("lwtm").value="";
	document.getElementById("djzz").value="";
}
function editAchievementRow(link) {
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
function saveAchievementRow(link){
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
function deleteAchievementRow(link){
	var confirmDelete=confirm("确定要删除这一行吗？");
	if (confirmDelete){
		var row=link.parentNode.parentNode;
		row.parentNode.removeChild(row);
	}
}