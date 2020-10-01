sap.ui.define([], function() {
	return {
		
		formatDateString: function (sValue) {
			if (!sValue) {
				return "Invalid date!";
			}
			var oDate = new Date(sValue);
			
			return oDate.toLocaleDateString();
		}
	};		
});