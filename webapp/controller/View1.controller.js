sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("project1.project1.controller.View1", {
            onInit: function () {
                console.log("child Class Constructor");
                var that = this;
                that.getView().byId("idButton").setEnabled(false);

                var oModel = new JSONModel();
                oModel.setData(
                    {
                        "empStr": {
                            "empId": "0001",
                            "empName": "Roger",
                            "salary": 8000,
                            "currency": "USD"
                        },
                        "empTab": []
                    });
                sap.ui.getCore().setModel("oModel");

            }
            // onBeforeRendering: function(){
            //     var that= this;
            //     that.getView().byId("idButton").setEnabled(false);
            // },
            // onAfterRendering: function(){

            //     $("#myView--myForm").hide().fadeIn(5000);
            // }
        });
    });
