(function($){
	
	function Application() {
		
		var _self = this;
		
		var config = {
			IDS: {},
			CLASSES: {},
			SELECTORS: {},
			DATA: {},
			TEMPLATE: {}
		};
		
		/*
		STARTUP
		*/
		
		var init = function() {
			getElements();
			setUp();
			attachListeners();
		}
		
		var getElements = function() {

		}
		
		var	setUp = function() {

		}
		
		var attachListeners = function() {

		}
		
		/*
		PUBLIC FUNCTIONS
		*/

		_self.testPublicFunction = function(value){
			return value;
		}
		
		return init();
		
	}
	
	$(window).load(function(){
		application = new Application();
	});
	
})(jQuery);

