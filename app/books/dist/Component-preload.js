//@ui5-bundle com/app/books/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"com/app/books/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","com/app/books/model/models"],function(e,t,i){"use strict";return e.extend("com.app.books.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device")}})});
},
	"com/app/books/Fragments/CreateBooksDialog.fragment.xml":'<core:FragmentDefinition\n    xmlns:core="sap.ui.core"\n    xmlns:form="sap.ui.layout.form"\n    xmlns="sap.m"\n><Dialog\n        id="idCreateBooksDialog"\n        resizable="true"\n        draggable="true"\n        contentWidth="30%"\n        title="Create Books"\n    ><beginButton><Button\n                id="idCreateButton"\n                text="Create"\n                press="onCreateBooks"\n                type="Success"\n            /></beginButton><endButton><Button\n                id="idCancelButton"\n                text="Cancel"\n                press="onCloseDialog"\n                type="Negative"\n            /></endButton><content><form:SimpleForm\n                id="idbooksForm"\n                editable="true"\n                layout="ResponsiveGridLayout"\n                labelSpanXL="3"\n                labelSpanL="3"\n                labelSpanM="3"\n                labelSpanS="12"\n                adjustLabelSpan="false"\n                emptySpanXL="4"\n                emptySpanL="4"\n                emptySpanM="4"\n                emptySpanS="0"\n                columnsXL="1"\n                columnsL="1"\n                columnsM="1"\n                singleContainerFullSize="false"\n            ><Label\n                   \n                    text="Booktitle"\n                /><Input\n                   \n                    value="{localModel>/title}"\n                /><Label\n                    \n                    text="Bookstock"\n                /><Input\n                    \n                    value="{localModel>/stock}"\n                /><Label\n                    \n                    text="BookAuthor"\n                /><Input\n                    \n                    value="{localModel>/author}"\n                /><Label\n                    \n                    text="Language"\n                /><Input\n                    \n                    value="{localModel>/Language}"\n                /><Label\n                   \n                    text="Bookprice"\n                /><Input\n                    \n                    value="{localModel>/price}"\n                /><Label\n                   \n                    text="Bookpublication_yearl"\n                /><Input\n                   \n                    value="{localModel>/publication_year}"\n                /></form:SimpleForm></content></Dialog></core:FragmentDefinition>',
	"com/app/books/Fragments/bookinfo.fragment.xml":'<core:FragmentDefinition\n    xmlns:core="sap.ui.core"\n    xmlns:form="sap.ui.layout.form"\n    xmlns="sap.m"\n><form:SimpleForm\n        id="idBookDetailsForm"\n        editable="false"\n        layout="ColumnLayout"\n        columnsM="2"\n        columnsL="3"\n        columnsXL="4"\n    ><Label\n            id="idNametitle"\n            text="Name"\n        /><Text\n            id="idNameText"\n            text="{title}"\n        /><Label\n            id="idstockLabel"\n            text="stock"\n        /><Text\n            id="idstockText"\n            text="{stock}"\n        /><Label\n            id="idGenreLabel"\n            text="genre"\n        /><Text\n            id="idgenreText"\n            text="{genre}"\n        /><Label\n            id="idauthorLabel"\n            text="author"\n        /><Text\n            id="idauthorText"\n            text="{author}"\n        /></form:SimpleForm></core:FragmentDefinition>\n',
	"com/app/books/Fragments/dicdetails.fragment.xml":'<core:FragmentDefinition\n    xmlns:core="sap.ui.core"\n    xmlns:form="sap.ui.layout.form"\n    xmlns="sap.m"\n><form:SimpleForm\n        id="idDicDetailsForm"\n        editable="false"\n        layout="ColumnLayout"\n        columnsM="2"\n        columnsL="3"\n        columnsXL="4"\n        binding="{Dict}"\n    ><Label\n            id="idforlabel"\n            text="Dictname"\n        /><Text\n            id="idfortext"\n            text="{dicname}"\n        /><Label\n            \n            text="description"\n        /><Text\n        \n            text="{description}"\n        /><Label\n            \n            text="rating"\n        /><Text\n        \n            text="{rating}"\n        /></form:SimpleForm></core:FragmentDefinition>\n',
	"com/app/books/Fragments/studdetails.fragment.xml":'<core:FragmentDefinition\n    xmlns:core="sap.ui.core"\n    xmlns:form="sap.ui.layout.form"\n    xmlns="sap.m"\n><form:SimpleForm\n        id="idstudentDetailsForm"\n        editable="false"\n        layout="ColumnLayout"\n        columnsM="2"\n        columnsL="3"\n        columnsXL="4"\n        binding="{stmarks}"\n    ><Label\n            \n            text="studentname"\n        /><Text\n        \n            text="{stname}"\n        /><Label\n            \n            text="studentdetails"\n        /><Text\n        \n            text="{stdetails}"\n        /><Label\n            \n            text="studentmarks"\n        /><Text\n        \n            text="{st_marks}"\n        /></form:SimpleForm></core:FragmentDefinition>\n',
	"com/app/books/controller/App.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller"],function(n){"use strict";return n.extend("com.app.books.controller.App",{onInit:function(){}})});
},
	"com/app/books/controller/BaseController.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/Fragment"],function(e,t){"use strict";return e.extend("com.app.books.controller.BaseController",{getRouter:function(){return this.getOwnerComponent().getRouter()},loadFragment:async function(e){debugger;const n=await t.load({id:this.getView().getId(),name:`com.app.books.Fragments.${e}`,controller:this});this.getView().addDependent(n);return n},createData:async function(e,t,n){return new Promise((r,o)=>{e.create(n,t,{success:function(e){r(e)},error:function(e){o(e)}})})},deleteData:function(e,t,n){debugger;return new Promise((r,o)=>{e.remove(`${t}/${n}`,{success:function(e){r(e)},error:function(e){o(e)}})})}})});
},
	"com/app/books/controller/Details.controller.js":function(){sap.ui.define(["./BaseController","sap/m/MessageBox"],function(t,e){"use strict";return t.extend("com.app.books.controller.Details",{onInit:function(){const t=this.getOwnerComponent().getRouter();t.attachRoutePatternMatched(this.onBookDetailsLoad,this)},onBookDetailsLoad:function(t){const{bookID:e}=t.getParameter("arguments");this.ID=e;const o=this.getView().byId("_IDGenObjectPageLayout1");o.bindElement(`/Books(${e})`,{expand:"Dict, stmarks"})},onDeleteBooks:async function(){const t=this.getView().getModel("ModelV2");try{await this.deleteData(t,"/Books",this.ID);this.getRouter().navTo("RouteView1")}catch(t){e.error("Some Technical Issue")}}})});
},
	"com/app/books/controller/View1.controller.js":function(){sap.ui.define(["./BaseController","sap/ui/model/Filter","sap/ui/model/FilterOperator","sap/m/Token","sap/ui/core/Fragment","sap/ui/model/json/JSONModel","sap/m/MessageBox"],function(e,t,o,i,s,a,r){"use strict";return e.extend("com.app.books.controller.View1",{onInit:function(){const e=new a({title:"",stock:"",author:"",genre:"",publication_year:"",price:"",Language:""});this.getView().setModel(e,"localModel");this.getRouter().attachRoutePatternMatched(this.onBooksListLoad,this)},onBooksListLoad:function(){this.getView().byId("idBooksTable").getBinding("items").refresh();var e=this.getView();var t=e.byId("idTitleFilterValue");var o=e.byId("idStockFilterValue");var i=e.byId("idGenreFilterValue");var s=e.byId("idAuthorFilterValue");let a=function(e){if(true){var t=e.text;return new sap.m.Token({key:t,text:t})}};t.addValidator(a);o.addValidator(a);i.addValidator(a);s.addValidator(a)},onGoPress:function(){const e=this.getView(),i=e.byId("idTitleFilterValue"),s=i.getTokens(),a=e.byId("idStockFilterValue"),r=a.getTokens(),n=e.byId("idGenreFilterValue"),l=n.getTokens(),d=e.byId("idAuthorFilterValue"),g=d.getTokens(),u=e.byId("idBooksTable"),c=[];s.filter(e=>{e?c.push(new t("title",o.EQ,e.getKey())):""});r.filter(e=>{e?c.push(new t("stock",o.EQ,e.getKey())):""});l.filter(e=>{e?c.push(new t("genre",o.EQ,e.getKey())):""});g.filter(e=>{e?c.push(new t("author",o.EQ,e.getKey())):""});u.getBinding("items").filter(c)},onClearFilterPress:function(){const e=this.getView(),t=e.byId("idAuthorFilterValue").destroyTokens(),o=e.byId("idTitleFilterValue").destroyTokens(),i=e.byId("idStockFilterValue").destroyTokens(),s=e.byId("idPhoneFilterValue").destroyTokens()},onSelectBooks:function(e){debugger;const{ID:t,author:o,dicname:i,stname:s}=e.getSource().getSelectedItem().getBindingContext().getObject();const a=this.getRouter();a.navTo("RouteDetails",{bookID:t,author:o,dictionaryname:i,student1:s})},onCreateBtnPress:async function(){if(!this.oCreateBooksDialog){this.oCreateBooksDialog=await this.loadFragment("CreateBooksDialog");debugger}this.oCreateBooksDialog.open()},onCloseDialog:function(){if(this.oCreateBooksDialog.isOpen()){this.oCreateBooksDialog.close()}},onCreateBooks:async function(){debugger;const e=this.getView().getModel("localModel").getProperty("/"),t=this.getView().getModel("ModelV2");try{await this.createData(t,e,"/Books");this.getView().byId("idBooksTable").getBinding("items").refresh();this.oCreateBooksDialog.close()}catch(e){this.oCreateBooksDialog.close();r.error("Some technical Issue")}}})});
},
	"com/app/books/i18n/i18n.properties":'# This is the resource bundle for com.app.books\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=books\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n#XTIT: Main view title\ntitle=books',
	"com/app/books/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"com.app.books","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.13.3","toolsId":"d8c60d9f-924a-4ff5-8488-55418d6866ab"},"dataSources":{"mainService":{"uri":"odata/v4/catalog/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}},"mainServiceV2":{"uri":"v2/odata/v4/catalog/","type":"OData","settings":{"annotations":[],"odataVersion":"2.0"}}},"crossNavigation":{"inbounds":{"Books-Display":{"semanticObject":"Books","action":"Display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.123.1","libs":{"sap.m":{},"sap.ui.core":{},"sap.f":{},"sap.suite.ui.generic.template":{},"sap.ui.comp":{},"sap.ui.generic.app":{},"sap.ui.table":{},"sap.ushell":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"com.app.books.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"ModelV2":{"dataSource":"mainServiceV2","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"com.app.books.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteView1","pattern":"","target":["TargetView1"]},{"name":"RouteDetails","pattern":"Books/{bookID}/","target":["TargetDetails"]}],"targets":{"TargetView1":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"View1","viewName":"View1"},"TargetDetails":{"viewType":"XML","transition":"slide","viewId":"Details","viewName":"Details"}}},"rootView":{"viewName":"com.app.books.view.App","type":"XML","async":true,"id":"App"}},"sap.cloud":{"public":true,"service":"books"}}',
	"com/app/books/model/models.js":function(){sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"com/app/books/view/App.view.xml":'<mvc:View controllerName="com.app.books.controller.App"\n    xmlns:html="http://www.w3.org/1999/xhtml"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><App id="app"></App></mvc:View>\n',
	"com/app/books/view/Details.view.xml":'<mvc:View\n    xmlns:layout="sap.ui.layout"\n    xmlns:uxap="sap.uxap"\n    xmlns:form="sap.ui.layout.form"\n    controllerName="com.app.books.controller.Details"\n    xmlns:html="http://www.w3.org/1999/xhtml"\n    xmlns:mvc="sap.ui.core.mvc"\n    displayBlock="true"\n    xmlns:core="sap.ui.core"\n    xmlns="sap.m"\n><uxap:ObjectPageLayout id="_IDGenObjectPageLayout1"><uxap:headerTitle><uxap:ObjectPageDynamicHeaderTitle\n                id="_IDGenObjectPageDynamicHeaderTitle1"\n            ><uxap:expandedHeading><Title\n                        id="_IDGenTitle1"\n                        text="{author}"\n                    /></uxap:expandedHeading><uxap:actions><Button\n                        id="idBtnDelete"\n                        icon="sap-icon://delete"\n                        tooltip="Delete Books"\n                        type="Negative"\n                        press="onDeleteBooks"\n                    /></uxap:actions><uxap:actions><Button\n                        id="_IDGenButton1"\n                        text="Edit"\n                        type="Emphasized"\n                        press="onEdit"\n                    /><Button\n                        id="_IDGenButton2"\n                        type="Transparent"\n                        text="Delete"\n                    /><Button\n                        id="_IDGenButton3"\n                        type="Transparent"\n                        text="Copy"\n                    /><OverflowToolbarButton\n                        id="_IDGenOverflowToolbarButton1"\n                        icon="sap-icon://action"\n                        type="Transparent"\n                        text="Share"\n                        tooltip="action"\n                    /></uxap:actions></uxap:ObjectPageDynamicHeaderTitle></uxap:headerTitle><uxap:sections><uxap:ObjectPageSection\n                titleUppercase="true"\n                title="Book details"\n            ><uxap:subSections><uxap:ObjectPageSubSection><uxap:blocks><core:Fragment\n                                type="XML"\n                                fragmentName="com.app.books.Fragments.bookinfo"\n                            /></uxap:blocks></uxap:ObjectPageSubSection></uxap:subSections></uxap:ObjectPageSection><uxap:ObjectPageSection title="Dictionary details"><uxap:subSections><uxap:ObjectPageSubSection><uxap:blocks><core:Fragment\n                                type="XML"\n                                fragmentName="com.app.books.Fragments.dicdetails"\n                            /></uxap:blocks></uxap:ObjectPageSubSection></uxap:subSections></uxap:ObjectPageSection><uxap:ObjectPageSection\n                titleUppercase="true"\n                title="student details"\n            ><uxap:subSections><uxap:ObjectPageSubSection><uxap:blocks><core:Fragment\n                                type="XML"\n                                fragmentName="com.app.books.Fragments.studdetails"\n                            /></uxap:blocks></uxap:ObjectPageSubSection></uxap:subSections></uxap:ObjectPageSection></uxap:sections></uxap:ObjectPageLayout></mvc:View>\n\n\n',
	"com/app/books/view/View1.view.xml":'<mvc:View controllerName="com.app.books.controller.View1"\n    xmlns:mvc="sap.ui.core.mvc"\n    displayBlock="true"\n    xmlns="sap.m"\n    xmlns:layout="sap.ui.layout"\n    xmlns:f="sap.f"\n><f:DynamicPage\n        id="idBooksListPage"\n        headerExpanded="true"\n    ><f:title><f:DynamicPageTitle id="idBooksListPageTitle"><f:heading><Title\n                        id="idBooksPageHeadingTitle"\n                        text="BooksDetails"\n                    /></f:heading><f:expandedContent><Label\n                        id="idBooksListPageECL"\n                        text="The Books details"\n                    /></f:expandedContent><f:snappedContent><Label\n                        id="idBooksListPageESL"\n                        text="The Books details"\n                    /></f:snappedContent><f:snappedTitleOnMobile><Title\n                        id="idbooksListPageEST"\n                        text="The Books details"\n                    /></f:snappedTitleOnMobile><f:navigationActions><Button\n                        id="idBtnFullScreen"\n                        icon="sap-icon://full-screen"\n                        type="Transparent"\n                    /><Button\n                        id="idBtnDecline"\n                        icon="sap-icon://decline"\n                        type="Transparent"\n                    /></f:navigationActions></f:DynamicPageTitle></f:title><f:header><f:DynamicPageHeader\n                id="idDynamicPageHeader"\n                pinnable="true"\n            ><HBox\n                    id="idFilterHLayout"\n                    alignContent="SpaceAround"\n                    width="100vw"\n                ><VBox\n                        id="idTitleFilter"\n                        class="sapUiSmallMarginEnd"\n                    ><Label\n                            id="idFTitleFilterLabel"\n                            text="Title:"\n                        /><MultiInput\n                            id="idTitleFilterValue"\n                            value=""\n                        /></VBox><VBox\n                        id="idStockFilter"\n                        class="sapUiSmallMarginEnd"\n                    ><Label\n                            id="idStockFilterLabel"\n                            text="Stock:"\n                        /><MultiInput\n                            id="idStockFilterValue"\n                            value=""\n                        /></VBox><VBox\n                        id="idGenreFilter"\n                        class="sapUiSmallMarginEnd"\n                    ><Label\n                            id="idGenreFilterLabel"\n                            text="Genre:"\n                        /><MultiInput\n                            id="idGenreFilterValue"\n                            value=""\n                        /></VBox><VBox\n                        id="idAuthorFilter"\n                        class="sapUiSmallMarginEnd"\n                    ><Label\n                            id="idAuthorFilterLabel"\n                            text="Author:"\n                        /><MultiInput\n                            id="idAuthorFilterValue"\n                            value=""\n                        /></VBox><VBox\n\n                        id="idGoButton"\n                        class="sapUiSmallMarginEnd"\n                    ><Label\n                            id="idGoButtonLabel"\n                            text=""\n                        /><Button\n                            id="idGoButtonValue"\n                            text="Go"\n                            type="Emphasized"\n                            press="onGoPress"\n                        /></VBox><VBox\n                        id="idClearFilterButton"\n                        class="sapUiSmallMarginEnd"\n                    ><Label\n                            id="idClearFilterButtonLabel"\n                            text=""\n                        /><Button\n                            id="idClearFilterButtonValue"\n                            text="Clear Filter"\n                            type="Emphasized"\n                            press="onClearFilterPress"\n                        /></VBox></HBox></f:DynamicPageHeader></f:header><f:content><Table\n                id="idBooksTable"\n                mode="SingleSelectMaster"\n                alternateRowColors="false"\n                items="{/Books}"\n                selectionChange="onSelectBooks"\n            ><headerToolbar><OverflowToolbar id="idBooksTableHeader"><Title\n                            id="idTableHeaderTitle"\n                            text="Books"\n                        /><ToolbarSpacer id="idTableHeaderSpacer" /><Button\n                            id="idBtnCreate"\n                            icon="sap-icon://add"\n                            tooltip="Create Book"\n                            type="Success"\n                            press="onCreateBtnPress" \n                             \n                        /></OverflowToolbar></headerToolbar><columns><Column id="idAuthorCol"><Title\n                            id="idAuthorColTitle"\n                            text="ID"\n                        /></Column><Column id="idTitleCol"><Title\n                            id="idTitleColTitle"\n                            text="Title"\n                        /></Column><Column id="idStockCol"><Title\n                            id="idStockColTitle"\n                            text="Stock"\n                        /></Column><Column id="idPhoneCol"><Title\n                            id="idPhoneColTitle"\n                            text="Genre"\n                        /></Column><Column id="idautorCol"><Title\n                            id="idauthorColTitle"\n                            text="Author"\n                        /></Column></columns><items><ColumnListItem id="idBooksTableColListItem" type = "Navigation"><cells><Text\n                                id="idIDColValue"\n                                text="{ID}"\n                            /><Text\n                                id="idTitleColValue"\n                                text="{title}"\n                            /><Text\n                                id="idStockColValue"\n                                text="{stock}"\n                            /><Text\n                                id="idPhoneColValue"\n                                text="{genre}"\n                            /><Text\n                                id="idauthorColValue"\n                                text="{author}"\n                            /></cells></ColumnListItem></items></Table></f:content></f:DynamicPage></mvc:View>\n \n\n\n'
}});
