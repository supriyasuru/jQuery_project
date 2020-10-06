$(document).ready(function(){
	//var stor = [];
  	var data = JSON.parse(localStorage.getItem('stor'));
  	$(data).each(function(hkey,hvalue){
  		$("main").append('<section><h1>'+hvalue.title+'<button onclick=myFunction(this)>X</button></h1></section>');	
  		$(hvalue.sub).each(function(skey,svalue){
			$( "main section:nth-child(" +(hkey+1)+ ")" ).append( '<div><h2> '+svalue.title+'<button onclick=myFunctionn(this)>X</button></h2></div>' );
			$(svalue.formm).each(function(fkey,fvalue){
				console.log(fvalue.option)
	  			if (fvalue.input == "radio"){
	  				var rdo=$('<p>')
	  				var optt=fvalue.option.split(",");
	  				$(optt).each(function(rdkey,rdvalue){
	  					$('<label>'+rdvalue+'</label><input type="'+fvalue.input+'" id="'+fvalue.id+'" name="'+fvalue.name+'" value="'+fvalue.value+'" placeholder="'+fvalue.placeholder+'" option="'+fvalue.option+'">').appendTo(rdo)
						rdo.appendTo('main section:nth-child('+(hkey+1)+' ) div:nth-child(' +(skey+2)+ ') ')
	  				});
	  				$('<button onclick=myFunform(this)>X</button>').appendTo(rdo)
	  			}
	  	  		else if(fvalue.input == "checkbox"){
	  	  			var chkk=$('<p>')
	  	  			var optt=fvalue.option.split(",");
				 	$(optt).each(function(chkkey,chkvalue){
				 		$('<label>'+chkvalue+'</label><input type="'+fvalue.input+'" id="'+fvalue.id+'" name="'+fvalue.name+'" value="'+fvalue.value+'" placeholder="'+fvalue.placeholder+'" option="'+fvalue.option+'">').appendTo(chkk)
						chkk.appendTo('main section:nth-child('+(hkey+1)+' ) div:nth-child(' +(skey+2)+ ') ')
	  	 			});
	  	 			$('<button onclick=myFunform(this)>X</button>').appendTo(chkk)	  			
				}
	  	 		else if (fvalue.input == "textarea"){
	  	 			var txt_area=$('<p>')
					$('<label>'+fvalue.label+'</label><'+fvalue.input+' id="'+fvalue.id+'" name="'+fvalue.name+'" value="'+fvalue.value+'" placeholder="'+fvalue.placeholder+'"></textarea>').appendTo(txt_area)
					txt_area.appendTo('main section:nth-child('+hkey+1+' ) div:nth-child(' +skey+2+ ') ')
					$('<button onclick=myFunform(this)>X</button>').appendTo(txt_area)
	  			}
	  			else if (fvalue.input == "select"){
	  				var radioo_select=$(".op").val().split(",");
	  				var selec=$('<p>')
					var select_tag=$('<select>').appendTo(selec)
					var op_select_len =radioo_select.length;
					var optt=fvalue.option.split(",");
					console.log(optt)
					$(optt).each(function(selkkey,selvalue){
						console.log(selvalue)
						$('<option value="'+selkkey+'">'+selvalue+'</option>').appendTo(select_tag);	
					});
					$('<button onclick=myFunform(this)>X</button>').appendTo(selec)
					selec.appendTo('main section:nth-child('+(hkey+1)+' ) div:nth-child(' +(skey+2)+ ') ')
				}
	  			else{
	  				$( "main section:nth-child(" +(hkey+1)+ ") div:nth-child("+(skey+2)+")" ).append( '<p><label>'+fvalue.label+'</label> <input type="'+fvalue.input+'" id="'+fvalue.id+'" name="'+fvalue.name+'"  placeholder="'+fvalue.placeholder+'"><button onclick=myFunform(this)>X</button></p>');
	  			}
  			});
  		});  		
  	});

  	$(".form_head").submit(function(event){
		event.preventDefault()					//using this to hold page
		var valu=$('.inputhead_class').val();
		console.log(valu)
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
		
		//stor.push({'title':valu,'sub':[]});
		//localStorage.setItem('stor',JSON.stringify(stor));

		$(".form_head").trigger('reset');
		strgeform();
  	});
	
  	$(".formsub_head").submit(function(event){
		event.preventDefault()
		var sel=$('.head_dropdown1').val();
		console.log(sel)
		var invl=$('.inputsubhead_class').val();
		$( "main section:nth-child(" +sel+ ")" ).append( '<div><h2> '+invl+'<button onclick=myFunctionn(this)>X</button></h2></div>' );
		$(".formsubhead_list option").remove();

		//stor[sel-1].sub.push({'title':invl,'form':[] });
		//localStorage.setItem('stor',JSON.stringify(stor));
		
		$(".formsub_head").trigger('reset');
		strgeform();
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

	//$("#btn3").click(function(){ 
	$('.formhead_subhead').submit(function(event){
		event.preventDefault()
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
		console.log(itype_select)
		if (itype_select == "radio"){
			var rad=$('<p data-type="'+itype_select+'" data-placeholder="'+pholder_value+'" id-holder="'+inputid_value+'" name-holder="'+name_value+'" op-holder="'+radioo_select+'" lab-holder="'+label_value+'" value-holder="'+value_value+'">')
			$( radioo_select ).each(function(i,j) {
				$('<label>'+j+'</label><input type="'+itype_select+'" id="'+inputid_value+'" name="'+name_value+'" value="'+value_value+'" placeholder="'+pholder_value+'" >').appendTo(rad)
				rad.appendTo('main section:nth-child('+head_select+' ) div:nth-child(' +cc+ ') ')
				});
			$('<button onclick=myFunform(this)>X</button>').appendTo(rad)
			//stor[head_select-1].sub[subhead_select-1].form.push({'input':itype_select, 'label':label_value, 'id':inputid_value, 'name':name_value, 'value':value_value, 'placeholder':pholder_value, 'option':radioo_select});
		}
					
		else if (itype_select == "checkbox"){
			var check=$('<p data-type="'+itype_select+'" data-placeholder="'+pholder_value+'" id-holder="'+inputid_value+'" name-holder="'+name_value+'" op-holder="'+radioo_select+'" lab-holder="'+label_value+'">')
			$( radioo_select ).each(function(i,j) {
				$('<label>'+j+'</label><input type="'+itype_select+'" id="'+inputid_value+'" name="'+name_value+'" value="'+value_value+'" placeholder="'+pholder_value+'"  >').appendTo(check)
				check.appendTo('main section:nth-child('+head_select+' ) div:nth-child(' +cc+ ') ')
			});
			$('<button onclick=myFunform(this)>X</button>').appendTo(check)
			//stor[head_select-1].sub[subhead_select-1].form.push({'input':itype_select, 'label':label_value, 'id':inputid_value, 'name':name_value, 'value':value_value, 'placeholder':pholder_value, 'option':radioo_select});
		}
		else if (itype_select == "select"){
			var selec=$('<p data-type="'+itype_select+'" data-placeholder="'+pholder_value+'" id-holder="'+inputid_value+'" name-holder="'+name_value+'" op-holder="'+radioo_select+'" lab-holder="'+label_value+'">')
			var select_tag=$('<select>').appendTo(selec)
			var op_select_len =radioo_select.length;
			for(i = 0; i < op_select_len; i++){					
				console.log('<option value="'+i+'">'+radioo_select[i]+'</option>')
				$('<option value="'+i+'">'+radioo_select[i]+'</option>').appendTo(select_tag);	
				selec.appendTo('main section:nth-child('+head_select+' ) div:nth-child(' +cc+ ') ')
			}
			$('<button onclick=myFunform(this)>X</button>').appendTo(selec)
			//stor[head_select-1].sub[subhead_select-1].form.push({'input':itype_select, 'label':label_value, 'id':inputid_value, 'name':name_value, 'value':value_value, 'placeholder':pholder_value, 'option':radioo_select});
		}			
		else if (itype_select == "textarea"){
			var text_area=$('<p data-type="'+itype_select+'" data-placeholder="'+pholder_value+'" id-holder="'+inputid_value+'" name-holder="'+name_value+'" op-holder="'+radioo_select+'" lab-holder="'+label_value+'">')
			$('<label>'+label_value+'</label><textarea id="'+inputid_value+'" name="'+name_value+'"  placeholder="'+pholder_value+'"></textarea>').appendTo(text_area)
			text_area.appendTo('main section:nth-child('+head_select+' ) div:nth-child(' +cc+ ') ')
			$('<button onclick=myFunform(this)>X</button>').appendTo(text_area)
			//stor[head_select-1].sub[subhead_select-1].form.push({'input':itype_select, 'label':label_value, 'id':inputid_value, 'name':name_value, 'value':value_value, 'placeholder':pholder_value, 'option':radioo_select});
		}
		else {
			var others_it=$('<p data-type="'+itype_select+'" data-placeholder="'+pholder_value+'" id-holder="'+inputid_value+'" name-holder="'+name_value+'" op-holder="'+radioo_select+'" lab-holder="'+label_value+'">')
			$('<label>'+label_value+'</label><input type="'+itype_select+'" id="'+inputid_value+'" name="'+name_value+'"  placeholder="'+pholder_value+'">').appendTo(others_it)
			others_it.appendTo('main section:nth-child('+head_select+' ) div:nth-child(' +cc+ ') ')
			$('<button onclick=myFunform(this)>X</button>').appendTo(others_it)
			//stor[head_select-1].sub[subhead_select-1].form.push({'input':itype_select, 'label':label_value, 'id':inputid_value, 'name':name_value, 'value':value_value, 'placeholder':pholder_value});
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
		// if(disb==true){
		// 	var che_ck = itype_select
		// 	var disb = itype_select
		// 	if(itype_select=='text' || itype_select=='email' || itype_select=='number' || itype_select=='radio' || itype_select=='checkbox' || itype_select=='file')
		// 	{
		// 	 	disb='input';	
		// 	}
		// 	$('main section:nth-child('+head_select+' ) div:nth-child(' +cc+ ') p:last-child '+disb).attr('disabled','disabled');
		// }
		
		//localStorage.setItem('stor',JSON.stringify(stor));
	
		//$(".formhead_subhead").trigger('reset');
		strgeform();
	});     
});


function myFunction(t) {
	$(t).parent().parent().remove();
	$(".head_dropdown1 option").remove();
	$(".formhead_list option").remove(); 
	$( "main h1" ).each(function(key) {    //adding so that heading do not disappear from second and third form.
		key=key+1
		var head = $(this)
		.clone()    //clone the element
		.children() //select all the children
		.remove()   //remove all the children
		.end()  //again go back to selected element
		.text();		
	  $(".form-group select").append('<option value="'+key+'">'+ head +'</option>');
	  $(".form-group1 select").append('<option value="'+key+'">'+ head +'</option>');	  	
	});
	strgeform()
}

function myFunctionn(u) {
	$(u).parent().parent().remove();
	$(".formsubhead_list option").remove();
	strgeform()
}

function myFunform(v) {
  $(v).parent().remove();
  strgeform()
  // $(localStorage.removeItem(v));
}

function strgeform() {
	var stor = [];
	$("main section h1").each(function(hkey,hvalue){
		hkey=hkey+1
		var head = $(this).text().replace("X","");
		stor.push({'title':head,'sub':[]});		
		$("main section:nth-child(" +hkey+ ") div h2").each(function(shkey,shvalue){
			shkey=shkey+2
			var subhead = $(this).text().replace("X","");
			console.log(shkey)			
			stor[hkey-1].sub.push({'title':subhead,'formm':[] });	
			$("main section:nth-child("+hkey+") div:nth-child("+shkey+") p").each(function(fkey,fvalue){
				var dtype= $(this).attr('data-type')
				var lab_holder= $(this).attr('lab-holder')
				var p_holder= $(this).attr('data-placeholder')
				var id_holder= $(this).attr('id-holder')
				var name_holder= $(this).attr('name-holder')
				var op_holder= $(this).attr('op-holder')
				var value_holder= $(this).attr('value-holder')
				
				stor[hkey-1].sub[shkey-2].formm.push({'input':dtype, 'label':lab_holder, 'id':id_holder, 'name':name_holder, 'value':value_holder, 'placeholder':p_holder, 'option':op_holder});
			});
		});
	});
	localStorage.setItem('stor',JSON.stringify(stor));
}

