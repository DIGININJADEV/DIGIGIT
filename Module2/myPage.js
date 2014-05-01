$(document).ready(function(){
	/*
	*
	* Navigation Functionality
	* Main / Sub-Menu
	*
	*/
	subMenuFocused = false;
	$('#nav1').mouseenter(function(){
		$('#submenu1').css('display','block');
		$('#nav1').css('color','#ffffff');
		$('#nav1').css('background-color','#99ADAD');
		$('#submenu1').addClass('submenuOpen');
		$('#submenu1').mouseenter(function(){subMenuFocused = true;});
		$('#submenu1').mouseleave(function(){
			subMenuFocused = false;
			$('#submenu1').css('display','none');
		  $('#nav1').css('color','#333333');
		  $('#nav1').css('background-color','');
		});
	});
	$('#nav1').mouseleave(function(){
		setTimeout(function() {
			if(subMenuFocused === false){
				$('#submenu1').css('display','none');
		    $('#nav1').css('color','#333333');
		    $('#nav1').css('background-color','');				
			}
    }, 500);		
	});
	
	$('#nav2').mouseenter(function(){
		$('#submenu2').css('display','block');
		$('#nav2').css('color','#ffffff');
		$('#nav2').css('background-color','#99ADAD');
		$('#submenu2').addClass('submenuOpen');
		$('#submenu2').mouseenter(function(){subMenuFocused = true;});
		$('#submenu2').mouseleave(function(){
			subMenuFocused = false;
			$('#submenu2').css('display','none');
		  $('#nav2').css('color','#333333');
		  $('#nav2').css('background-color','');
		});
	});
	$('#nav2').mouseleave(function(){
		setTimeout(function() {
			if(subMenuFocused === false){
				$('#submenu2').css('display','none');
		    $('#nav2').css('color','#333333');
		    $('#nav2').css('background-color','');				
			}
    }, 500);		
	});
	
	/*
	*
	* Sidebar Functionality
	* 
	*
	*/
	
	var sidebarOpened = true;
	
	$('#sidebarToggle').click(function(){
		if(sidebarOpened){
			sidebarOpened = false;
			$('.sidebarToggle').css('background-image','url(../images/arrow-left.png)');
			$('#sidebarContent').css('display','none');
			$('sidebar').css('width','5%');
			$('main').css('width','85%');
		}else{
			sidebarOpened = true;
			$('.sidebarToggle').css('background-image','url(../images/arrow-right.png)');
			$('#sidebarContent').css('display','block');
			$('sidebar').css('width','20%');
			$('main').css('width','75%');
		}
	});
	
	
});