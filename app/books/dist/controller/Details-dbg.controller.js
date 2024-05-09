sap.ui.define(
    [
      "./BaseController",
      "sap/m/MessageBox"
    ],
    function (BaseController, MessageBox) {
      "use strict";
  
      return BaseController.extend("com.app.books.controller.Details",
       {
        onInit: function () {
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.attachRoutePatternMatched(this.onBookDetailsLoad, this);
        },
        onBookDetailsLoad: function (oEvent) {
          const { bookID } = oEvent.getParameter("arguments");
          this.ID = bookID;
  
          // const author = oEvent.getParameter("author");
  
          // const oForm = this.getView().byId("idbooksDetailsForm");
          const oForm = this.getView().byId("_IDGenObjectPageLayout1");
  
          oForm.bindElement(`/Books(${bookID})`, {
            expand: 'Dict, stmarks'
          });
  
        },
        onDeleteBooks: async function () {
          const oModel = this.getView().getModel("ModelV2");
          try {
            await this.deleteData(oModel, "/Books", this.ID);
            this.getRouter().navTo("RouteView1");
          } catch (error) {
            MessageBox.error("Some Technical Issue");
          }
        }
        
      });
    }
  )
  // const oObjectPage = this.getView().byId("idEmployeeDetailsObjectPage");
  // oObjectPage.bindElement(`/Employee(${empId})`, {
  
  
  