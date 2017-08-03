'use strict';

/**
 * @ngdoc function
 * @name portfolio3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the portfolio3App
 */
angular.module('portfolio3App')
  .controller('AboutCtrl', function () {
	// Instantiate the Bootstrap carousel
 $(document).ready(function() {
    $('.carousel').carousel({
      interval: 6000
    })
  });
});
		

 
