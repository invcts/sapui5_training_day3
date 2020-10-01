sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.esr.itemstorageESR.controller.Home", {
		onInit: function () {
			this.getOwnerComponent().getModel("items");
		},
		
		onEdit: function (oEvent) {
			var oButton = oEvent.getSource();
			var oColumn = oButton.getParent();
			var aCells = oColumn.getAggregation("cells");
			
			// set Inputfields editable
			aCells[1].setEditable(true);
			aCells[2].setEditable(true);
			aCells[3].setEditable(true);
			
			// set Button visible
			aCells[5].setVisible(true);
			aCells[4].setVisible(false);
		},
		
		onSave: function (oEvent) {
			var aCells = oEvent.getSource().getParent().getAggregation("cells");
			
			var name = aCells[1].getValue();
			var price = aCells[2].getValue();
			var stock = aCells[3].getValue();
			
			console.log(name, price, stock);
		}
	});
});