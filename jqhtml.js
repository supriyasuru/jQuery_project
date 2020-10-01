$(document).ready(function(){
	var stor = [];
  	var data = JSON.parse(localStorage.getItem('stor'));
  	//console.log(data);
  	$(data).each(function(hkey,hvalue){
  		//console.log(hkey,hvalue)
  		$("main").append('<section><h1>'+hvalue.title+'<button onclick=myFunction(this)>X</button></h1></section>');	
  		$(hvalue.sub).each(function(skey,svalue){
  			//console.log(skey,svalue)
			$( "main section:nth-child(" +(hkey+1)+ ")" ).append( '<div><h2> '+svalue.title+'<button onclick=myFunctionn(this)>X</button></h2></div>' );
			$(svalue.form).each(function(fkey,fvalue){
				//console.log(fvalue)
  				//console.log(fvalue.option)
	  			if (fvalue.input == "radio"){
	  				var rdo=$('<p>')
	  				$(fvalue.option).each(function(rdkey,rdvalue){
	  					$('<label>'+rdvalue+'</label><input type="'+fvalue.input+'" id="'+fvalue.id+'" name="'+fvalue.name+'" value="'+fvalue.value+'" placeholder="'+fvalue.placeholder+'" option="'+fvalue.option+'">').appendTo(rdo)
						rdo.appendTo('main section:nth-child('+(hkey+1)+' ) div:nth-child(' +(skey+2)+ ') ')
					

						//$( "main section:nth-child(" +(hkey+1)+ ") div:nth-child("+(skey+2)+")" ).append( '<p><label>'+rdvalue+'</label> <input type="'+fvalue.input+'" id="'+fvalue.id+'" name="'+fvalue.name+'" value="'+fvalue.value+'" placeholder="'+fvalue.placeholder+'" option="'+fvalue.option+'"></p>');
	  				});
	  			}
	  	  		else if(fvalue.input == "checkbox"){
	  	  			var chkk=$('<p>')

				 	$(fvalue.option).each(function(chkkey,chkvalue){
				 		$('<label>'+chkvalue+'</label><input type="'+fvalue.input+'" id="'+fvalue.id+'" name="'+fvalue.name+'" value="'+fvalue.value+'" placeholder="'+fvalue.placeholder+'" option="'+fvalue.option+'">').appendTo(chkk)
						chkk.appendTo('main section:nth-child('+(hkey+1)+' ) div:nth-child(' +(skey+2)+ ') ')
					
				 		//$( "main section:nth-child(" +(hkey+1)+ ") div:nth-child("+(skey+2)+")" ).append( '<p><label>'+chkvalue+'</label> <input type="'+fvalue.input+'" id="'+fvalue.id+'" name="'+fvalue.name+'" value="'+fvalue.value+' placeholder="'+fvalue.placeholder+'" option="'+fvalue.option+'"></p>');
	  	 			});	  			
				 }
	  	 		else if (fvalue.input == "textarea"){
					$( "main section:nth-child(" +(hkey+1)+ ") div:nth-child("+(skey+2)+")" ).append( '<p><label>'+fvalue.label+'</label> <'+fvalue.input+' id="'+fvalue.id+'" name="'+fvalue.name+'" value="'+fvalue.value+' placeholder="'+fvalue.placeholder+'" option="'+fvalue.option+'"></'+fvalue.input+'></p>');
	  			}
	  			else if (fvalue.input == "select"){
	  				// var option_value=  $(".op").val();
	  				var radioo_select=$(".op").val().split(",");
	  				var selec=$('<p>')
					var select_tag=$('<select>').appendTo(selec)
					//$('main section:nth-child('+head_select+' ) div:nth-child(' +cc+ ') ').append('<p><label for="select">'+label_value+'</label><select class="'+class_value+'" disabled></select></p>');
					var op_select_len =radioo_select.length;
					$(fvalue.option).each(function(selkkey,selvalue){
						$('<option value="'+selkkey+'">'+selvalue+'</option>').appendTo(select_tag);	
					});
					selec.appendTo('main section:nth-child('+(hkey+1)+' ) div:nth-child(' +(skey+2)+ ') ')
				}
	  			else{
	  				$( "main section:nth-child(" +(hkey+1)+ ") div:nth-child("+(skey+2)+")" ).append( '<p><label>'+fvalue.label+'</label> <input type="'+fvalue.input+'" id="'+fvalue.id+'" name="'+fvalue.name+'" value="'+fvalue.value+'" placeholder="'+fvalue.placeholder+'" option="'+fvalue.option+'"></p>');

	  			}
  			});
  		});  		
  	});


   	

  	$(".form_head").submit(function(event){
		event.preventDefault()
		var valu=$('.inputhead_class').val();
		$("main").append('<section><h1>'+valu+'<button onclick=myFunction(this)>X</button></h1></section>');
		$(".head_dropdown1 option").remove();
		$(".formhead_list option").remove();      
		$(".head_dropdown1").append('<option value="select">select</option>');
		$(".formhead_list").append('<option value="select">select</option>');
		$( "main section h1" ).each(function(key) {
	  		key=key+1
	  		var head = $(this).text().replace("X","");      
	  		$(".form-group select").append('<option value="'+key+'">'+ head +'</option>');
	  		$(".form-group1 select").append('<option value="'+key+'">'+ head +'</option>');	
		});
		
		stor.push({'title':valu,'sub':[]});
		localStorage.setItem('stor',JSON.stringify(stor));

		$(".form_head").trigger('reset');	
  	});
	

  	$(".formsub_head").submit(function(event){
		event.preventDefault()
		var sel=$('.head_dropdown1').val();
		console.log(sel)
		var invl=$('.inputsubhead_class').val();
		$( "main section:nth-child(" +sel+ ")" ).append( '<div><h2> '+invl+'<button onclick=myFunctionn(this)>X</button></h2></div>' );
		$(".formsubhead_list option").remove();

		stor[sel-1].sub.push({'title':invl,'form':[] });
		localStorage.setItem('stor',JSON.stringify(stor));
		
		$(".formsub_head").trigger('reset');

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
		var head_select=  $('.formhead_list option:selected').val();
		var subhead_select=  $('.formsubhead_list option:selected').val();
		var itype_select=  $('.inputtype_list option:selected').val();
		var inputid_value=$(".inputid_id").val();
		var label_value=  $(".lab").val();
		var name_value=  $(".namec").val();
		var pholder_value=  $(".ph").val();
		var class_value=  $(".cll").val();
		var value_value=  $(".vall").val();
		var option_value=  $(".op").val();
		var cc = parseInt(subhead_select)+1;
		var radioo_select=option_value.split(",");
		var disable_check=$(".check_class").val();
		var read_only=$(".r_o").val();
		//var disb=False;
		//var read_ly=False;
		//var reqq=False;

		//console.log(cc)
		//var o=  $("dis").val()
		//var p=  $("").text()
		//var q=  $("").text()
		
		console.log(radioo_select.length);
		

		if (itype_select == "radio"){
			//if ($('.check_class').is(":checked")){
			var rad=$('<p>')
			$( radioo_select ).each(function(i,j) {
				$('<label>'+j+'</label><input type="'+itype_select+'" id="'+inputid_value+'" name="'+name_value+'" value="'+value_value+'" placeholder="'+pholder_value+'" >').appendTo(rad)
				rad.appendTo('main section:nth-child('+head_select+' ) div:nth-child(' +cc+ ') ')
				});
				$('<button onclick=myFunform(this)>X</button>').appendTo(rad)
				stor[head_select-1].sub[subhead_select-1].form.push({'input':'radio', 'label':label_value, 'id':inputid_value, 'name':name_value, 'value':value_value, 'placeholder':pholder_value, 'option':radioo_select});

			//}
		}
		

			
			// else if($('.req').is(":checked")){
			// 	$( radioo_select ).each(function(i) {
			// 		$('main section:nth-child('+head_select+' ) div:nth-child(' +cc+ ') ').append('<p><label>'+radioo_select[i]+'</label><input type="'+itype_select+'" id="'+inputid_value+'" name="'+name_value+'" value="'+value_value+'" placeholder="'+pholder_value+'" required ></p>');
			// 			i=i+1
			// 	});
			// //stor[head_select-1].sub[subhead_select-2].form.push({'input':'radio', 'label':label_value, 'id':inputid_value, 'name':name_value, 'value':value_value, 'placeholder':pholder_value, 'option':radioo_select});

			// }
		// 	else{
		// 		$( radioo_select ).each(function(i){
		// 			$('main section:nth-child('+head_select+' ) div:nth-child(' +cc+ ') ').append('<p><label>'+radioo_select[i]+'</label><input type="'+itype_select+'" id="'+inputid_value+'" name="'+name_value+'" value="'+value_value+'" placeholder="'+pholder_value+'" ></p>');
		// 			i=i+1
		// 			stor[head_select-1].sub[subhead_select-2].form.push({'input':'radio', 'label':label_value, 'id':inputid_value, 'name':name_value, 'value':value_value, 'placeholder':pholder_value, 'option':radioo_select});

		// 		});

		// 	}
		// }	
		else if (itype_select == "checkbox"){
			//if ($('.check_class').is(":checked")){
			var check=$('<p>')
			$( radioo_select ).each(function(i,j) {
				//$('main section:nth-child('+head_select+' ) div:nth-child(' +cc+ ') ').append('<p><label>'+radioo_select[i]+'</label><input type="'+itype_select+'" id="'+inputid_value+'" name="'+name_value+'" value="'+value_value+'" disabled></p>');				i=i+1
				//stor[head_select-1].sub[subhead_select-2].form.push({'input':'itype_select', 'label':label_value, 'id':inputid_value, 'name':name_value, 'value':value_value, 'placeholder':pholder_value, 'option':radioo_select});
				$('<label>'+j+'</label><input type="'+itype_select+'" id="'+inputid_value+'" name="'+name_value+'" value="'+value_value+'" placeholder="'+pholder_value+'"  >').appendTo(check)
				check.appendTo('main section:nth-child('+head_select+' ) div:nth-child(' +cc+ ') ')
			});
			$('<button onclick=myFunform(this)>X</button>').appendTo(check)
			stor[head_select-1].sub[subhead_select-1].form.push({'input':'checkbox', 'label':label_value, 'id':inputid_value, 'name':name_value, 'value':value_value, 'placeholder':pholder_value, 'option':radioo_select});


			//}
			// else{
			// 	$( radioo_select ).each(function(i) {
			// 	$('main section:nth-child('+head_select+' ) div:nth-child(' +cc+ ') ').append('<p><label>'+radioo_select[i]+'</label><input type="'+itype_select+'" id="'+inputid_value+'" name="'+name_value+'" value="'+value_value+'" ></p>');
			// 	i=i+name_value
			// 	});
			// }
		}
		else if (itype_select == "select"){
			//if ($('.check_class').is(":checked")){
			var selec=$('<p>')
			var select_tag=$('<select>').appendTo(selec)
				//$('main section:nth-child('+head_select+' ) div:nth-child(' +cc+ ') ').append('<p><label for="select">'+label_value+'</label><select class="'+class_value+'" disabled></select></p>');
			var op_select_len =radioo_select.length;
			for(i = 0; i < op_select_len; i++){					
				console.log('<option value="'+i+'">'+radioo_select[i]+'</option>')
				$('<option value="'+i+'">'+radioo_select[i]+'</option>').appendTo(select_tag);	
				selec.appendTo('main section:nth-child('+head_select+' ) div:nth-child(' +cc+ ') ')
			}
			$('<button onclick=myFunform(this)>X</button>').appendTo(selec)
			stor[head_select-1].sub[subhead_select-1].form.push({'input':'select', 'label':label_value, 'id':inputid_value, 'name':name_value, 'value':value_value, 'placeholder':pholder_value, 'option':radioo_select});
		}
			//else{
			// 	$('main section:nth-child('+head_select+' ) div:nth-child(' +cc+ ') ').append('<p><label for="select">'+label_value+'</label><select class="'+class_value+'"></select></p>');
			// 	var op_select_len =radioo_select.length;
			// 	for(i = 0; i < op_select_len; i++){					
			// 		console.log('<option value="'+i+'">'+radioo_select[i]+'</option>')
			// 		$('<option value="'+i+'">'+radioo_select[i]+'</option>').appendTo('main section:nth-child('+head_select+' ) div:nth-child(' +cc+ ') p select ');	
			// 	}
			// }
		//}
		else if (itype_select == "textarea"){
			//if ($('.check_class').is(":checked")){
			var text_area=$('<p>')
			$('<label>'+label_value+'</label><textarea id="'+inputid_value+'" name="'+name_value+'" value="'+value_value+'" placeholder="'+pholder_value+'"></textarea>').appendTo(text_area)
			text_area.appendTo('main section:nth-child('+head_select+' ) div:nth-child(' +cc+ ') ')
			$('<button onclick=myFunform(this)>X</button>').appendTo(text_area)
			stor[head_select-1].sub[subhead_select-1].form.push({'input':'textarea', 'label':label_value, 'id':inputid_value, 'name':name_value, 'value':value_value, 'placeholder':pholder_value, 'option':radioo_select});


				//$('main section:nth-child('+head_select+' ) div:nth-child(' +cc+ ') ').append('<p><label>'+label_value+'</label><textarea id="'+inputid_value+'" name="'+name_value+'" value="'+value_value+'" disabled></textarea></p>');
			//}
			//else if($('.r_o').is(":checked")){
				//$('main section:nth-child('+head_select+' ) div:nth-child(' +cc+ ') ').append('<p><label>'+label_value+'</label><textarea id="'+inputid_value+'" name="'+name_value+'" value="'+value_value+'" readonly></textarea></p>');
			//}
			//else{
				//$('main section:nth-child('+head_select+' ) div:nth-child(' +cc+ ') ').append('<p><label>'+label_value+'</label><textarea id="'+inputid_value+'" name="'+name_value+'" value="'+value_value+'" ></textarea></p>');
			//}
		}
		else {
			var others_it=$('<p>')
			$('<label>'+label_value+'</label><input type="'+itype_select+'" id="'+inputid_value+'" name="'+name_value+'" value="'+value_value+'" placeholder="'+pholder_value+'"></textarea>').appendTo(others_it)
			others_it.appendTo('main section:nth-child('+head_select+' ) div:nth-child(' +cc+ ') ')
			$('<button onclick=myFunform(this)>X</button>').appendTo(others_it)
			stor[head_select-1].sub[subhead_select-1].form.push({'input':itype_select, 'label':label_value, 'id':inputid_value, 'name':name_value, 'value':value_value, 'placeholder':pholder_value, 'option':radioo_select});
			}

		if ($('.check_class').is(":checked")){
			var che_ck = itype_select
			if(itype_select=='text' || itype_select=='email' || itype_select=='number' || itype_select=='radio' || itype_select=='checkbox' || itype_select=='file')
			{
			 	che_ck='input';	
			}
		 	$('main section:nth-child('+head_select+' ) div:nth-child(' +cc+ ') p:last-child '+che_ck).attr('disabled','disabled');
		}
		if ($('.r_o').is(":checked")){
			var forread = itype_select
			if(itype_select=='text' || itype_select=='email' || itype_select=='number' || itype_select=='radio' || itype_select=='checkbox' || itype_select=='file')
			{
			 	forread='input';	
			}
			$('main section:nth-child('+head_select+' ) div:nth-child(' +cc+ ') p:last-child '+forread).attr('readonly','readonly');
		}
		if ($('.req').is(":checked")){
			var reqd = itype_select
			if(itype_select=='text' || itype_select=='email' || itype_select=='number' || itype_select=='radio' || itype_select=='checkbox' || itype_select=='file')
			{
			 	reqd='input';	
			}
			$('main section:nth-child('+head_select+' ) div:nth-child(' +cc+ ') p:last-child '+reqd).attr('required','required');
		}
		//}

		//if ($('.check_class').is(":checked")){
			//var dd=
			

		//}
	// stor[sel-1].sub.push({'title':invl,'form':[]});
	localStorage.setItem('stor',JSON.stringify(stor));
	
	 //$(".formhead_subhead").trigger('reset');
	});     
});


function myFunction(t) {
  $(t).parent().parent().remove();
  $(".head_dropdown1 option").remove();
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
  $(u).parent().parent().remove();
  $(".formsubhead_list option").remove();
}

function myFunform(v) {
  $(v).parent().remove();
}

