$(document).ready(function(){
  
  $("#btn1").click(function(){
	var valu=$('#idd').val();
	$("main").append('<section><h1>'+valu+'<button onclick=myFunction(this)>X</button></h1></section>');
	$("#cars option").remove();
	$(".formhead_list option").remove();      
	$("#cars").append('<option value="select">select</option>');
	$(".formhead_list").append('<option value="select">select</option>');
	$( "main section h1" ).each(function(key) {
	  key=key+1
	  var head = $(this).text().replace("X","");      
	  $(".form-group select").append('<option value="'+key+'">'+ head +'</option>');
	  $(".form-group1 select").append('<option value="'+key+'">'+ head +'</option>');
	
	});
  });
  $("#btn2").click(function(){
	var sel=$('#cars').val();
	var invl=$('#iddd').val();
	$( "main section:nth-child(" +sel+ ")" ).append( '<div><h2> '+invl+'<button onclick=myFunctionn(this)>X</button></h2></div>' );
	$(".formsubhead_list option").remove();
	//$(".itt").append('<option value="select">select</option>');
  });

  
  $( ".formhead_list" ).change(function () {
	$(".formsubhead_list option").remove();
	$(".formsubhead_list").append('<option value="select">select</option>');
	var se=$('.formhead_list').val();
	
	$( "main section:nth-child("+se+") h2" ).each(function(k) {
	  k=k+1
	  var subhead = $(this).text().replace("X","");
	        
	  $(".form-group2 select").append('<option value="'+k+'">'+ subhead +'</option>');


	});  
  }); 

  $("#btn3").click(function(){ 
		//var x=$("#it").val();
	   // var y=$("#itt").val();
		var head_select=  $('#formhead_list option:selected').val();
		var subhead_select=  $('#formsubhead_list option:selected').val();
		var itype_select=  $('#inputtype_list option:selected').val();
		var inputid_value=$("#inputid_id").val();
		var label_value=  $("#lab").val();
		var name_value=  $("#namec").val();
		var pholder_value=  $("#ph").val();
		var class_value=  $("#cll").val();
		var value_value=  $("#vall").val();
		var option_value=  $("#op").val();
		var cc = parseInt(subhead_select)+1;
		var radioo_select=option_value.split(",");
		var disable_check=$(".check_class").val();
		var read_only=$(".r_o").val();

		//console.log(cc)
		//var o=  $("dis").val()
		//var p=  $("").text()
		//var q=  $("").text()
		//var r=  $('#itt option:selected').text()
		//console.log(head_select)
		//console.log(subhead_select)
		//console.log(itype_select)
		//console.log(inputid_value)
		//console.log(label_value)
		//console.log(name_value)
		//console.log(pholder_value)
		//console.log(class_value)
		//console.log(value_value)
		//console.log(option_value)
		//console.log(radioo_select.length);
		console.log(read_only);

		//console.log(b)  value="'+key+'">'+ head +'</option>
		//$("main h1:nth-child(" +head_select+ ") h2:nth-child(" +subhead_select+ ")").append('hello');
		if (itype_select == "radio"){
			if ($('.check_class').is(":checked")){					
				$( radioo_select ).each(function(i) {
  					$('main section:nth-child('+head_select+' ) div:nth-child(' +cc+ ') ').append('<p><label>'+radioo_select[i]+'</label><input type="'+itype_select+'" id="'+inputid_value+'" name="'+radioo_select+'" value="'+radioo_select+'" disabled ></p>');
						i=i+1
				});
			}
			else if($('.req').is(":checked")){
				$( radioo_select ).each(function(i) {
  					$('main section:nth-child('+head_select+' ) div:nth-child(' +cc+ ') ').append('<p><label>'+radioo_select[i]+'</label><input type="'+itype_select+'" id="'+inputid_value+'" name="'+radioo_select+'" value="'+radioo_select+'" required ></p>');
						i=i+1
				});
			}
			else{
				$( radioo_select ).each(function(i){
	  				$('main section:nth-child('+head_select+' ) div:nth-child(' +cc+ ') ').append('<p><label>'+radioo_select[i]+'</label><input type="'+itype_select+'" id="'+inputid_value+'" name="'+radioo_select+'" value="'+radioo_select+'" ></p>');
					i=i+1
				});
			}
		}	
		else if (itype_select == "checkbox"){
			if ($('.check_class').is(":checked")){
				$( radioo_select ).each(function(i) {
	  			$('main section:nth-child('+head_select+' ) div:nth-child(' +cc+ ') ').append('<p><label>'+radioo_select[i]+'</label><input type="'+itype_select+'" id="'+inputid_value+'" name="'+radioo_select+'" value="'+radioo_select+'" disabled></p>');				i=i+1
				});
			}
			else{
				$( radioo_select ).each(function(i) {
				$('main section:nth-child('+head_select+' ) div:nth-child(' +cc+ ') ').append('<p><label>'+radioo_select[i]+'</label><input type="'+itype_select+'" id="'+inputid_value+'" name="'+radioo_select+'" value="'+radioo_select+'" ></p>');
				i=i+1
				});
			}
		}
		else if (itype_select == "select"){
			if ($('.check_class').is(":checked")){
				$('main section:nth-child('+head_select+' ) div:nth-child(' +cc+ ') ').append('<p><label for="select">'+label_value+'</label><select class="'+class_value+'" disabled></select></p>');
				var op_select_len =radioo_select.length;
				for(i = 0; i < op_select_len; i++){					
					console.log('<option value="'+i+'">'+radioo_select[i]+'</option>')
					$('<option value="'+i+'">'+radioo_select[i]+'</option>').appendTo('main section:nth-child('+head_select+' ) div:nth-child(' +cc+ ') p select ');	
				}
			}
			else{
				$('main section:nth-child('+head_select+' ) div:nth-child(' +cc+ ') ').append('<p><label for="select">'+label_value+'</label><select class="'+class_value+'"></select></p>');
				var op_select_len =radioo_select.length;
				for(i = 0; i < op_select_len; i++){					
					console.log('<option value="'+i+'">'+radioo_select[i]+'</option>')
					$('<option value="'+i+'">'+radioo_select[i]+'</option>').appendTo('main section:nth-child('+head_select+' ) div:nth-child(' +cc+ ') p select ');	
				}
			}
		}
		else if (itype_select == "textarea"){
			if ($('.check_class').is(":checked")){
				$('main section:nth-child('+head_select+' ) div:nth-child(' +cc+ ') ').append('<p><label>'+label_value+'</label><input type="'+itype_select+'" id="'+inputid_value+'" name="'+name_value+'" value="'+value_value+'" disabled></p>');
			}
			else if($('.r_o').is(":checked")){
				$('main section:nth-child('+head_select+' ) div:nth-child(' +cc+ ') ').append('<p><label>'+label_value+'</label><input type="'+itype_select+'" id="'+inputid_value+'" name="'+name_value+'" value="'+value_value+'" readonly></p>');
			}
			else{
				$('main section:nth-child('+head_select+' ) div:nth-child(' +cc+ ') ').append('<p><label>'+label_value+'</label><input type="'+itype_select+'" id="'+inputid_value+'" name="'+name_value+'" value="'+value_value+'" ></p>');
			}
		}
		else {
			if ($('.check_class').is(":checked")){
				$('main section:nth-child('+head_select+' ) div:nth-child(' +cc+ ') ').append('<p><label>'+label_value+'</label><input type="'+itype_select+'" id="'+inputid_value+'" name="'+name_value+'" value="'+value_value+'" disabled></p>');
			}
			else if($('.r_o').is(":checked")){
				$('main section:nth-child('+head_select+' ) div:nth-child(' +cc+ ') ').append('<p><label>'+label_value+'</label><input type="'+itype_select+'" id="'+inputid_value+'" name="'+name_value+'" value="'+value_value+'" readonly></p>');
			}
			else if($('.req').is(":checked")){
				$('main section:nth-child('+head_select+' ) div:nth-child(' +cc+ ') ').append('<p><label>'+label_value+'</label><input type="'+itype_select+'" id="'+inputid_value+'" name="'+name_value+'" value="'+value_value+'" required></p>');
			}
			else{
				$('main section:nth-child('+head_select+' ) div:nth-child(' +cc+ ') ').append('<p><label>'+label_value+'</label><input type="'+itype_select+'" id="'+inputid_value+'" name="'+name_value+'" value="'+value_value+'" ></p>');
			}

		}
	});     
});


function myFunction(t) {
  $(t).parent().remove();
  $("#cars option").remove();
  $(".formhead_list option").remove(); 
  $( "main h1" ).each(function(key) {
	key=key+1
	 // var head = $(this).text().replace("X",""); 
	var head = $(this)
	.clone()    //clone the element
	.children() //select all the children
	.remove()   //remove all the children
	.end()  //again go back to selected element
	.text();
	   
		
	  $(".form-group select").append('<option value="'+key+'">'+ head +'</option>');
	  $(".form-group1 select").append('<option value="'+key+'">'+ head +'</option>');
	  
	});
}

function myFunctionn(u) {
  $(u).parent().remove();
  $(".formsubhead_list option").remove();


  
}

