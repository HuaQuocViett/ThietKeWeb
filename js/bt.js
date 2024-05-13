window.onload = function(){
	d = new Date();
	birthYear = document.getElementById("birthYear");
	
	s = "";
	for (i=1950; i <= d.getFullYear(); i++){
		s += "<option>" + i + "</option>";
	}

	birthYear.innerHTML = s;
	
/*	
	d = new Date();
	today = document.getElementById("today");
	today.innerText = "Hôm nay, ngày " + d.getDate() + " tháng " + (d.getMonth()+1) + " năm " + d.getFullYear();
	
	
	
/*	
	ntu = document.getElementById("ntu");
	ntu.onclick = function(){
		if (confirm("Di chuyển đến liên kết Đại học Nha Trang?")){
			//location.href = "http://www.ntu.edu.vn";
			window.open("http://www.ntu.edu.vn");
		}
	}
	
	
	
/*	
	r = document.getElementsByName("number");
	for (i in r){
		r[i].onclick = function(){
			alert(this.value);
		}
	}
*/
}