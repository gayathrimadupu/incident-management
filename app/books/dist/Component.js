sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","com/app/books/model/models"],function(e,t,i){"use strict";return e.extend("com.app.books.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device")}})});