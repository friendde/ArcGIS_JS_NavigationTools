Compatible for CMV v1.3.0..

This widget was created as an addition to [David Spriggs Configurable Map Viewer](https://github.com/DavidSpriggs/ConfigurableViewerJSAPI), aka CMV. Designed for use in his project using the file structure indicated there. Original source code was from this ESRI sample https://developers.arcgis.com/javascript/jssamples/toolbar_navigation.html which was a single html page. ArcGIS_JS_NavigationTools is in widget format with seperate css, html, and javascript files for use in CMV.

Please see this projects [how-to Wiki] (https://github.com/friendde/ArcGIS_JS_NavigationTools/wiki/How-to-add-widget-to-CMV) for details on how to configure CMV to load this widget.

## NavToolbar

![navtoolsscreenshot](https://cloud.githubusercontent.com/assets/7818309/4076966/d57254fe-2ebe-11e4-9590-2988bf24bd38.JPG)

## Adding to CMV
```javascript

widgets: {
	navtools: {
		include: true,
		id: 'navtools',
		type: 'titlePane',
		canFloat: false,
		path: 'gis/dijit/NavTools',
		title: 'Navigation Tools',
		open: false,
		position: 0,
		placeAt: 'right',
		options: {
			map: true,
			mapRightClickMenu: true,
			mapClickMode: true
		}
	}
}
```
