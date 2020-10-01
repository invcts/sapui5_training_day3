sap.ui.define([
	"com/esr/myfirstapplication/controller/BaseController",
	"sap/m/MessageToast"
], function (BaseController, MessageToast) {
	"use strict";

	return BaseController.extend("com.esr.myfirstapplication.controller.Home", {
		onInit: function () {
			console.log("I'm called in the rendering process");
		},
		
		onPress: function () {
			var sName = this.getElement("iName").getValue();
			var sSurname = this.getElement("iSurname").getValue();
			var sEmail = this.getElement("iEmail").getValue();
			var oDateOfBirth = this.getElement("iDateOfBirth").getDateValue();
			
			// reset input
			this.getElement("iName").setValue("");
			this.getElement("iSurname").setValue("");
			this.getElement("iEmail").setValue("");
			this.getElement("iDateOfBirth").setDateValue();

			
			var oUserData = {
				name: sName,
				surname: sSurname,
				email: sEmail,
				dateOfBirth: oDateOfBirth
			};
			
			this.setUserData(oUserData);
			
			console.log(this.getView().getModel("userdata"));
			
			MessageToast.show("Userdata has been saved!");
			
			this.getRouter().navTo("User");
		}
	});
});