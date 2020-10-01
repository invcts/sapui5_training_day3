sap.ui.define([
	"com/esr/myfirstapplication/controller/BaseController",
	"../model/formatter"
], function (BaseController, formatter) {
	"use strict";

	return BaseController.extend("com.esr.myfirstapplication.controller.User", {
		// init formatter
		formatter: formatter,
		
		onInit: function () {
			
		},
		
		onNavBack: function () {
			this.getRouter().navTo("backHome");
		}
	});
});