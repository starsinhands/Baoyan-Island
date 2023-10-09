window.onload=function(){
	var video=document.getElementById("myvideo");
	var play=document.getElementById("play");
	var progress=document.getElementById("progress");
	var bar=document.getElementById("bar");
	var control=document.getElementById("control");
	var sound=document.getElementById("sound");
	var full=document.getElementById("full");
	control.onmousedown=function(){
		video.pause();
		var curTime;
		document.onmousemove=function(e){
			var lef=e.clientX-box.offsetLeft-progress.offsetLeft;
			if(lef<=0)lef=0;
			else
			if(lef>=progress.offsetWidth)lef=progress.offsetWidth;
			bar.style.width=lef+"px";
			control.style.left=lef+"px";
			var scales=lef/progress.offsetWidth;
			curTime=video.duration*scales;
			
		}
		document.onmouseup=function(e){
			video.currentTime=curTime;
			video.play();
			document.onmousemove=null;
			document.onmousedown=null;
		}
	}
	video.ontimeupdate=function(){
		var curTime=video.currentTime;
		var countTime=video.duration;
		var scale=curTime/countTime;
		bar.style.width=progress.offsetWidth*scale+"px";
		control.style.left=progress.offsetWidth*scale-8+"px";
	}
	play.onclick=function(){
		if(video.paused){
			video.play();
			play.className="pause";
		}
		else{
			video.pause();
			play.className="play";
		}
	}
	sound.onclick=function(){
		if(video.muted){
			video.muted=false;
			sound.className="soundon";
		}
		else{
			video.muted=true;
			sound.className="soundoff";
		}
	}
	full.onclick=function(){
		video.webkitRequestFullScreen();
	}
}