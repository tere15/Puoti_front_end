main_module.directive('navBar',function(){
	
	var directive = {};
	
	directive.restrict = 'AE';
	directive.templateUrl = '/FrontEnd/views/navbar.html';
	/*directive.scope = {
		navbarData = urls:['/Login','#/shoppings','#/payment','#/guide'],
		texts:['Kirjautuminen','Ostokset','Maksaminen','Ohjeet']
	}*/
    
    directive.scope = {
		
		navbarData:'='
	}
	
	directive.link = function(scope,elem,attrs){
		
		//$('a').first.addClass('active');
		$('a').click(function(){
			console.log('Link cliked');
			
            if(!this.hasClass('active'))
				this.addClass('active');
		});
	}
	
    console.log("navbar_directive loaded")
	
    return directive;
	
});