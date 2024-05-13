$(document).ready(function(){
	// Sự kiện click vào ô checkbox
	
	$("#check").click(function(){
		if ($("#check").is(":checked"))  // Ô checkbox được check
			$("#pass").attr("type","text");
		else 							 // Ô checkbox không được check
			$("#pass").attr("type","password");
	});
	
	// Sự kiện click vào button Đăng ký
	$("#bt").click(function(){
		
		if ($("#user").val() == "") {
			$("#userErr").text("Chưa nhập username");
			$("#user").css("background","yellow");
		}
		
		if ($("#pass").val() == "") {
			$("#check").hide();
			$("#show").hide();
			$("#passErr").text("Chưa nhập password");
			$("#pass").css("background","yellow");
		}
		
		$('img').stop(true).animate({ 
			width:'200px', 
			height:'auto' 
		},3000,function(){alert("Hello")});
		
	});
	
	// Sự kiện gõ chữ vào textbox username
	$("#user").keypress(function(){
		$("#userErr").text("");
		$("#user").css("background","#FFF");
	});
	
	// Sự kiện gõ chữ vào textbox password
	$("#pass").keypress(function(){
		$("#check").show();
		$("#show").show();
		$("#passErr").text("");
		$("#pass").css("background","#FFF");
	});
	
	/* Sự kiện click vào các button cùng class .cal 
	   và chọn hiển thị nhãn của button được click */
	$(".cal").click(function(e){	// Tham số e dành cho hệ thống
		alert("Button clicked: "+ e.currentTarget.value);
	});
	
	// Thêm các năm vào select option	
	d = new Date();
	for (i=1950; i <= d.getFullYear(); i++){
		$("select").append("<option>" + i + "</option>");
	}
	
	// Hiển thị ngày hiện tại
	d = new Date();
	$("h1").text("Hôm nay, ngày " + d.getDate() + " tháng " + (d.getMonth()+1) + " năm " + d.getFullYear());
	
	// Sự kiện click vào link để mở cửa sổ/tab mới
	$("#ntu").click(function(){
		//location.href = "http://www.ntu.edu.vn";	// Load trang web mới
		window.open("http://www.ntu.edu.vn"); 		// Mở cửa sổ/tab mới
	});
	
	// Sự kiện click và chọn đúng ô chọn radio để hiển thị
	$('.rd').click(function(){		// Các radio của class .rd được click
		alert($(".rd:checked").val());	// radio được chọn
	});
});		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	

