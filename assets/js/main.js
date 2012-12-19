$(function(){
	$("button[rel='tooltip']").tooltip();
	$(".familiar .bar").progressbar({value: 25})
	$(".dabbled .bar").progressbar({value: 50})
	$(".used .bar").progressbar({value: 75})
	$(".immersed .bar").progressbar({value: 100})
	$("#evenespecially").mouseover(function(){$(this).text("especially")});
	//$('.masthead').scrollspy();
	
	var progSelected = new Array();
	$("#programmingbuttons .btn").click(function(){
		var progVal = $(this).val();
		if($(this).hasClass("active")){
			progSelected.splice(progSelected.indexOf(progVal), 1);
		}else{
			progSelected.push(progVal);
		}
		if(progSelected.length > 0){
			$("#technologies > div").hide();
			$.each(progSelected, function(index, value){
				$("#technologies > div." + value).show();
			});
		}else{
			$("#technologies > div").show();
		}
	});
});