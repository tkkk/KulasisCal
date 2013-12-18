function func(){
	'use strict';
	var i = 0;
	$("[id=id_a_1172_0]").each(function(){
		$("#test").append($(this).html());
	});
	
};

window.onload = func;