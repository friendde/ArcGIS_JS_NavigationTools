define([
	'dojo/_base/declare',
	'dijit/_WidgetBase',
	'dijit/_TemplatedMixin',
	'dijit/_WidgetsInTemplateMixin',
	'esri/toolbars/navigation',
	'dijit/form/Button',
	'dojo/_base/lang',
	'dojo/on',
	'dojo/text!./NavTools/templates/NavTools.html',
	'xstyle/css!./NavTools/css/NavTools.css'
], function (declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Navigation, Button, lang, on, NavToolsTemplate, css) {
    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        widgetsInTemplate: true,
        templateString: NavToolsTemplate,
        navTools: null,
        postCreate: function(){
          this.navTools = new Navigation(this.map);
          this.navTools.on('onExtentHistoryChange', lang.hitch(this, 'extentHistoryChangeHandler'));
		},

        zoomIn: function() {
			this.map.setMapCursor("url('js/gis/dijit/NavTools/images/zoomin.cur'),auto");
			this.navTools.activate(Navigation.ZOOM_IN);
        },
        zoomOut: function() {
			this.map.setMapCursor("url('js/gis/dijit/NavTools/images/zoomout.cur'),auto");
			this.navTools.activate(Navigation.ZOOM_OUT);
        },
        fullExtent: function () {
			this.navTools.zoomToFullExtent();
        },		
		prevExtent: function () {
			this.navTools.zoomToPrevExtent();
        },
        nextExtent: function () {
			this.navTools.zoomToNextExtent();
        },		
		pan: function () {
            this.map.setMapCursor("url('js/gis/dijit/NavTools/images/hand.cur'),auto");
			this.navTools.activate(Navigation.PAN);
        },
		deactivate: function () {
			this.navTools.deactivate();
        },

        disconnectMapClick: function() {
			this.mapClickMode.current = 'nav';
        },
        
		connectMapClick: function() {
            this.mapClickMode.current = this.mapClickMode.defaultMode;
        },
		
		extentHistoryChangeHandler: function (evt) {
            this.navTools.deactivate();
            this.connectMapClick();
        }
	});
});