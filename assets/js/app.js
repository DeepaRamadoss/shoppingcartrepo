define(
		['angular',
	     './controllers/homepagecontroller',
	     './directives/homepagedirective',
	     './filters/homepagefilter',
	     './services/homepageservice'], function (ng) {
	    	'use strict';
	    	return ng.module('app', [
		 		'app.services',
		 		'app.controllers',
		 		'app.filters',
		 		'app.directives'
		]);
	}
);