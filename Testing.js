var demoApp = angular.module('TestingPhase', []);

demoApp.controller ('SimpleController', function ($scope) {
	$scope.customers = [ 
		{ name: "DaveJones", city: "Phoenix" },
		{ name: "Jamie Riley", city: "Atlanta"},
		{ name: "Heedy Wahlin", city: "Chandler"},
		{ name: "Thomas Winter", city: "Seattle"},
		{ name: 'Johnny Boy', city: "Seattle"},
		{ name: 'Sarah Girl', city: "Albany"}, 
		{ name: 'Baby Kid', city: "Womb"}
	];
)};