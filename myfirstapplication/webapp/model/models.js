sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		
		createCountryModel: function () {
			var oData = {
				supportedCountries: [
					{
						id: "DE",
						name: "Germany"
					},
					{
						id: "PL",
						name: "Poland"
					},
					{
						id: "AUT",
						name: "Austria"
					},
					{
						id: "CHE",
						name: "Switzerland"
					},
					{
						id: "FR",
						name: "France"
					}
				]
			};
			return new JSONModel(oData);
		}
	};
});