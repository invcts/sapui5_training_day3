/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/esr/myfirstapplication/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});