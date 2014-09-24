Compatible for CMV v1.2.0. 
Please note that CMV v1.3.0 was released recently and this widget is not yet compatible.
I will update this widget asap for use in CMV v1.3.0

This widget was created as an addition to [David Spriggs Configurable Map Viewer](https://github.com/DavidSpriggs/ConfigurableViewerJSAPI), aka CMV. Designed for use in his project using the file structure indicated there. Original source code was from this ESRI sample https://developers.arcgis.com/javascript/jssamples/toolbar_navigation.html which was a single html page. ArcGIS_JS_NavigationTools is in widget format with seperate css, html, and javascript files for use in CMV.

Please see this projects [how-to Wiki] (https://github.com/friendde/ArcGIS_JS_NavigationTools/wiki/How-to-add-widget-to-CMV) for details on how to configure CMV to load this widget.

## NavToolbar

![navtoolsscreenshot](https://cloud.githubusercontent.com/assets/7818309/4076966/d57254fe-2ebe-11e4-9590-2988bf24bd38.JPG)

## Adding to CMV
```javascript
panes: {
	// left: {
	// 	splitter: true
	// },
	// right: {
	// 	id: 'sidebarRight',
	// 	placeAt: 'outer',
	// 	region: 'right',
	// 	splitter: true,
	// 	collapsible: true
	// },
	// bottom: {
	// 	id: 'sidebarBottom',
	// 	placeAt: 'outer',
	// 	splitter: true,
	// 	collapsible: true,
	// 	region: 'bottom'
	// },
	top: {
		id: 'sidebarTop',
		placeAt: 'outer',
		collapsible: true,
		region: 'top'
	}
},
widgets: {
	navtools: {
    		include: true, // false will not load widget
    		id: 'navtools',
    		type: 'contentPane', // can be titlePane
    		canFloat: false, // if titlePane, can use true
    		path: 'gis/dijit/NavTools',
    		title: 'Navigation Tools', // title appears if titlePane
    		open: false, // this value is used for titlePane
    		position: 0, // use your position value as needed
    		placeAt: 'top', // top looks best if contentPane, your choice
    		options: { // map and mapClickMode are required to use the widget
        		map: true, // true required
	        	mapClickMode: true // true required
    		}
	},
```
