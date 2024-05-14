
    sap.ui.define([
        "./BaseController",
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator",
        "sap/m/Token",
        "sap/ui/core/Fragment",
        "sap/ui/model/json/JSONModel",
        "sap/m/MessageBox",
    
    ],
        /**
         * @param {typeof sap.ui.core.mvc.Controller} Controller
         */
        // function (Controller, Filter, FilterOperator,Token) {
            function (Controller, Filter, FilterOperator,Token,Fragment, JSONModel, MessageBox) {
            "use strict";
    
            return Controller.extend("com.app.books.controller.View1", {
                onInit: function () {
    
                    const oLocalModel = new JSONModel({
                        title            : "",
                        stock            : "",
                        author           : "",
                         genre           : "",
                        publication_year : "",
                        price            : "",
                         Language        : "",
     
    
                 });
                 this.getView().setModel(oLocalModel, "localModel");
                 this.getRouter().attachRoutePatternMatched(this.onBooksListLoad, this);
             },
             onBooksListLoad: function () {
                 this.getView().byId("idBooksTable").getBinding("items").refresh();
             
                    var oView = this.getView();
                    // var oMultiInput1 = oView.byId("idIDFilterValue");
                      var oMultiInput2 = oView.byId("idTitleFilterValue");
                     var oMultiInput3 = oView.byId("idStockFilterValue");
                     var oMultiInput4 = oView.byId("idGenreFilterValue");
                     var oMultiInput5 = oView.byId("idAuthorFilterValue");
                    let validate = function (args) {
                        if (true) {
                            var text = args.text;
                            return new sap.m.Token({ key: text, text: text });     
    
                        }
                    }
                    //   oMultiInput1.addValidator(validate);
                     oMultiInput2.addValidator(validate);
                     oMultiInput3.addValidator(validate);
                     oMultiInput4.addValidator(validate);
                    oMultiInput5.addValidator(validate);
    
                 },
    
                onGoPress: function () {
                    
    
                    const oView = this.getView(),
    
    
                    //     iIDFilterValue = iIDFilter.getValue(),
                    //    iIDFilter = oView.byId("idIDFilterValue").getValue(),
                        iTitleFilter = oView.byId("idTitleFilterValue"),
                        oTitleFilter = iTitleFilter.getTokens(),
    
                        sStockFilterLabel = oView.byId("idStockFilterValue"),
                        osStockFilterLabel = sStockFilterLabel.getTokens(),
                        sGenreFilterLabel = oView.byId("idGenreFilterValue"),
                        osGenreFilterLabel = sGenreFilterLabel.getTokens(),
                        sAuthorFilterLabel = oView.byId("idAuthorFilterValue"),
                        osAuthorFilterLabel = sAuthorFilterLabel.getTokens(),
                       oTable = oView.byId("idBooksTable"),
                        aFilter = [];
    
                    // sId.filter(() => {
                        // iIDFilter ? aFilter.push(new Filter("ID", FilterOperator.EQ, iIDFilterValue)) : "";
                        // oTable.getBinding("items").filter(aFilter);
    
                        oTitleFilter.filter((iTitleFilter) => {
                        iTitleFilter ? aFilter.push(new Filter("title", FilterOperator.EQ, iTitleFilter.getKey())) : "";
                       
                        });
                        osStockFilterLabel.filter((sStockFilterLabel) => {
                        sStockFilterLabel ? aFilter.push(new Filter("stock", FilterOperator.EQ, sStockFilterLabel.getKey() )) : "";
                      
                         });
    
                          osGenreFilterLabel.filter((sGenreFilterLabel) => {
                         sGenreFilterLabel ? aFilter.push(new Filter("genre", FilterOperator.EQ, sGenreFilterLabel.getKey())) : "";
                        
                             });
                             osAuthorFilterLabel.filter((sAuthorFilterLabel) => {
                         sAuthorFilterLabel ? aFilter.push(new Filter("author", FilterOperator.EQ, sAuthorFilterLabel.getKey())) : "";
                        
                   })
                   oTable.getBinding("items").filter(aFilter)
                    // 
                        // oTable = oView.byId("idBooksTable")
                },
                    
                
               
                //     //  oTable.getBinding("items").filter([]);
    
                 onClearFilterPress: function () {
                   const oView = this.getView(),
                   sAuthorFilterLabel = oView.byId("idAuthorFilterValue").destroyTokens(),
                   iTitleFilter = oView.byId("idTitleFilterValue").destroyTokens(),
                   sStockFilterLabel = oView.byId("idStockFilterValue").destroyTokens(),
                sGenreFilterLabel = oView.byId("idPhoneFilterValue").destroyTokens();
                },
                onSelectBooks: function (oEvent) {
                    debugger;
                    const { ID, author, dicname, stname } = oEvent.getSource().getSelectedItem().getBindingContext().getObject();
                    const oRouter = this.getRouter();
                    oRouter.navTo("RouteDetails", {
                        bookID: ID,
                        author: author,
                        dictionaryname : dicname,
                        student1 : stname
                    
                    })
                },
                
                onCreateBtnPress: async function () {
                    if (!this.oCreateBooksDialog) {
                       this.oCreateBooksDialog = await this.loadFragment("CreateBooksDialog")
                       debugger;
                    }
    
                    this.oCreateBooksDialog.open();
                },
                onCloseDialog: function(){
                    if(this.oCreateBooksDialog.isOpen()){
                        this.oCreateBooksDialog.close()
                    }
                
                }  ,
                onCreateBooks: async function () {
                    debugger;
                    const oPayload = this.getView().getModel("localModel").getProperty("/"),
                        oModel = this.getView().getModel("ModelV2");
                        
                    try {
                        await this.createData(oModel, oPayload, "/Books");
                        this.getView().byId("idBooksTable").getBinding("items").refresh();
                        this.oCreateBooksDialog.close();
                    } catch (error) {
                        this.oCreateBooksDialog.close();
                        MessageBox.error("Some technical Issue");
                    }
                }
            });
        })
    
         // to clear the applied filters,here's the logic below
                
    // onClearFilterPress: function () {
                //     const oView = this.getView(),
                //         // iIDFilter.setValue("");
                //         //you can assign oView.byId("idIDFilterValue") to one var and can write var.setvalue 
                //        // iIDFilter = oView.byId("idIDFilterValue").setValue("");
                //     iTitleFilter = oView.byId("idTitleFilterValue").setValue(""),
                //     sStockFilterLabel = oView.byId("idStockFilterValue").setValue(""),
                //     sGenreFilterLabel = oView.byId("idGenreFilterValue").setValue(""),
                //     sAuthorFilterLabel = oView.byId("idAuthorFilterValue").setValue("")
    