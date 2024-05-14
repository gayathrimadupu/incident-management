sap.ui.define(["./BaseController","sap/ui/model/Filter","sap/ui/model/FilterOperator","sap/m/Token","sap/ui/core/Fragment","sap/ui/model/json/JSONModel","sap/m/MessageBox"],function(e,t,o,i,s,a,r){"use strict";return e.extend("com.app.books.controller.View1",{onInit:function(){const e=new a({title:"",stock:"",author:"",genre:"",publication_year:"",price:"",Language:""});this.getView().setModel(e,"localModel");this.getRouter().attachRoutePatternMatched(this.onBooksListLoad,this)},onBooksListLoad:function(){this.getView().byId("idBooksTable").getBinding("items").refresh();var e=this.getView();var t=e.byId("idTitleFilterValue");var o=e.byId("idStockFilterValue");var i=e.byId("idGenreFilterValue");var s=e.byId("idAuthorFilterValue");let a=function(e){if(true){var t=e.text;return new sap.m.Token({key:t,text:t})}};t.addValidator(a);o.addValidator(a);i.addValidator(a);s.addValidator(a)},onGoPress:function(){const e=this.getView(),i=e.byId("idTitleFilterValue"),s=i.getTokens(),a=e.byId("idStockFilterValue"),r=a.getTokens(),n=e.byId("idGenreFilterValue"),l=n.getTokens(),d=e.byId("idAuthorFilterValue"),g=d.getTokens(),u=e.byId("idBooksTable"),c=[];s.filter(e=>{e?c.push(new t("title",o.EQ,e.getKey())):""});r.filter(e=>{e?c.push(new t("stock",o.EQ,e.getKey())):""});l.filter(e=>{e?c.push(new t("genre",o.EQ,e.getKey())):""});g.filter(e=>{e?c.push(new t("author",o.EQ,e.getKey())):""});u.getBinding("items").filter(c)},onClearFilterPress:function(){const e=this.getView(),t=e.byId("idAuthorFilterValue").destroyTokens(),o=e.byId("idTitleFilterValue").destroyTokens(),i=e.byId("idStockFilterValue").destroyTokens(),s=e.byId("idPhoneFilterValue").destroyTokens()},onSelectBooks:function(e){debugger;const{ID:t,author:o,dicname:i,stname:s}=e.getSource().getSelectedItem().getBindingContext().getObject();const a=this.getRouter();a.navTo("RouteDetails",{bookID:t,author:o,dictionaryname:i,student1:s})},onCreateBtnPress:async function(){if(!this.oCreateBooksDialog){this.oCreateBooksDialog=await this.loadFragment("CreateBooksDialog");debugger}this.oCreateBooksDialog.open()},onCloseDialog:function(){if(this.oCreateBooksDialog.isOpen()){this.oCreateBooksDialog.close()}},onCreateBooks:async function(){debugger;const e=this.getView().getModel("localModel").getProperty("/"),t=this.getView().getModel("ModelV2");try{await this.createData(t,e,"/Books");this.getView().byId("idBooksTable").getBinding("items").refresh();this.oCreateBooksDialog.close()}catch(e){this.oCreateBooksDialog.close();r.error("Some technical Issue")}}})});