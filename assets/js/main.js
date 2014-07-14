require.config({
	baseUrl: 'bower_components',
	waitSeconds: 0,
  	paths: {
    	angular : 'angular/angular.min',
		angularjsui : 'angularjs/src/js/angular-ui-bootstrap.js',
    	underscore : "underscore/underscore",
		domReady : "requirejs-domready/domReady"
  	},
  	shim: {
    	'angular' : {
      		exports : 'angular'
    	},
    	'underscore' : {
      		exports : "_"
    	},
    	'angularjsui' : {
      		exports: "angularjsui"
    	},
		'domReady' : {
			exports: "domReady"
		}
  	},
	deps: ['./bootstrap']
});
/*
var setupApp = function () {
  	require(["app",'angular', '_'], function (app,angular,_) {
    	app.advanceReadiness(); 
    });
};
window.addEventListener("load", setupApp(), false);
*/