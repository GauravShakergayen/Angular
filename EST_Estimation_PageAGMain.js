agGrid.initialiseAgGridWithAngular1(angular);

var dEstimator = angular.module("dEstimator", ["agGrid","ngAnimate"]);

dEstimator.controller("dEstimatorController", function($scope) {
	
    var columnDefs = [
        {headerName: "S.No.", field: "reqNo",width: 100},
        {headerName: "Requirement Detail", field: "reqDetail",width: 150},
		{headerName: "Functional Area", field: "funcArea",width: 150},
		{headerName: "User", field: "assignedUser",width: 150},
		{headerName: "Questions", field: "comm",width: 150,editable: true,cellEditor: "agLargeTextCellEditor",
		             cellEditorParams:{maxLength: 300, rows: 10, cols: 20}},
		{headerName: "Assumptions", field: "assump",width: 150,editable: true,  cellEditor: "agLargeTextCellEditor",
		              cellEditorParams:{maxLength: 300,rows: 10, cols: 20}},
		{headerName: "Scope Description", field: "confScope",width: 150,editable: true,
		              cellEditorParams:{maxLength: 300,rows: 10,cols: 20}},
		{headerName: "Scope Compxlexity", field: "ScopeComplexity",width: 150},
        {headerName: "Effort", field: "totalHours",width: 150}
    ];


    $scope.gridOptions = {
        columnDefs: columnDefs,
		angularCompileRows:true,
		enableSorting:"true",
		enableFilter: "true",
		enableColResize: "true",
		onGridReady: function(){
			 $scope.gridOptions.api.sizeColumnsToFit();
			 loadJSONData();
		}
    };
	
	function loadJSONData(){
	}

});