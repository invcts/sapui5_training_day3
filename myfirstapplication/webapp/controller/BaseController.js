sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
	], function (Controller, JSONModel) {
	"use strict";
	
	return Controller.extend("com.esr.myfirstapplication.controller.BaseController", {
		onInit: function () {
			console.log("Basecontroller loaded!");	
		},
		
		getElement: function (sId) {
			return this.getView().byId(sId);
		},
		
		setUserData: function (oData) {
			var json = new JSONModel(oData);
			this.getOwnerComponent().setModel(json, "userdata");
		},
		
		getRouter: function () {
			return this.getOwnerComponent().getRouter();
		}
	}); 
});