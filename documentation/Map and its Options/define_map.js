/**
 * ----
 * Map
 * ----
 * The Map object represents the map on your page. It exposes methods and properties that enable you to 
 * programmatically change the map, and fires events as users interact with it.
 * 
 * You create a Map by specifying a container and other options. Then Mapbox GL JS initializes the map on 
 * the page and returns your Map object.
 * 
 *      new Map(options: Object)
 * 
 * -----------------
 * Parameters
 * options (Object)
 * -----------------
 * - options.container (HTMLElement | string)
 *      The HTML element in which Mapbox GL JS will render the map, or the element's string id . The 
 *      specified element must have no children.
 * 
 * - options.minZoom (number with default value to 0)
 *      The minimum zoom level of the map (0-24).
 * 
 * - options.maxZoom (number, default value is 22)
 *      The maximum zoom level of the map (0-24).
 * 
 * - options.style (Object | string) ?
 *      The map's Mapbox style. This must be an a JSON object conforming to the schema described in the 
 *      Mapbox Style Specification , or a URL to such JSON.
 *      To load a style from the Mapbox API, you can use a URL of the 
 *      form mapbox://styles/:owner/:style, where :owner is your Mapbox account name and :style is the 
 *      style ID. Or you can use one of the following the predefined Mapbox styles:
 *          mapbox://styles/mapbox/streets-v9
 *          mapbox://styles/mapbox/outdoors-v9
 *          mapbox://styles/mapbox/light-v9
 *          mapbox://styles/mapbox/dark-v9
 *          mapbox://styles/mapbox/satellite-v9
 *          mapbox://styles/mapbox/satellite-streets-v9
 *      Tilesets hosted with Mapbox can be style-optimized if you append ?optimize=true to the end of 
 *      your style URL, like mapbox://styles/mapbox/streets-v9?optimize=true.
 * 
 * - options.hash boolean(default false)
 *      If  true , the map's position (zoom, center latitude, center longitude, bearing, and pitch) will 
 *      be synced with the hash fragment of the page's URL. 
 *      For example, http://path/to/my/page.html#2.59/39.26/53.07/-24.1/60
 * 
 * - options.interactive boolean(default true)
 *      If  false , no mouse, touch, or keyboard listeners will be attached to the map, so it will not 
 *      respond to interaction.
 * 
 * - options.bearingSnap number(default 7)
 *      The threshold, measured in degrees, that determines when the map's bearing will snap to north. 
 *      For example, with a  bearingSnap of 7, if the user rotates the map within 7 degrees of north, the 
 *      map will automatically snap to exact north.
 * 
 * - options.pitchWithRotate boolean(default true)
 *      If  false , the map's pitch (tilt) control with "drag to rotate" interaction will be disabled.
 * 
 * - options.attributionControl boolean(default true)
 *      If  true , an AttributionControl will be added to the map.
 * 
 * - options.logoPosition string(default 'bottom-left')
 *      A string representing the position of the Mapbox wordmark on the map. Valid options are  
 *      top-left , top-right ,  bottom-left ,  bottom-right .
 * 
 * - options.failIfMajorPerformanceCaveat boolean(default false)
 *      If  true , map creation will fail if the performance of Mapbox GL JS would be dramatically worse 
 *      than expected (i.e. a software renderer would be used).
 * 
 * - options.preserveDrawingBuffer boolean(default false)
 *      If  true , the map's canvas can be exported to a PNG using map.getCanvas().toDataURL() . 
 *      This is  false by default as a performance optimization.
 * 
 * - options.refreshExpiredTiles boolean(default true)
 *      If  false , the map won't attempt to re-request tiles once they expire per their HTTP 
 *      cacheControl / expires headers.
 * 
 * - options.maxBounds LngLatBoundsLike?
 *      If set, the map will be constrained to the given bounds.
 * 
 * - options.scrollZoom (boolean | Object) (default true)
 *      If  true , the "scroll to zoom" interaction is enabled. An  Object value is passed as options to 
 *      ScrollZoomHandler#enable .
 * 
 * - options.boxZoom boolean(default true)
 *      If  true , the "box zoom" interaction is enabled (see BoxZoomHandler ).
 * 
 * - options.dragRotate boolean(default true)
 *      If  true , the "drag to rotate" interaction is enabled (see DragRotateHandler ).
 * 
 * - options.dragPan boolean(default true)
 *      If  true , the "drag to pan" interaction is enabled (see DragPanHandler ).
 * 
 * - options.keyboard boolean(default true)
 *      If  true , keyboard shortcuts are enabled (see KeyboardHandler ).
 * 
 * - options.doubleClickZoom boolean(default true)
 *      If  true , the "double click to zoom" interaction is enabled (see DoubleClickZoomHandler ).
 * 
 * - options.touchZoomRotate (boolean | Object) (default true)
 *      If  true , the "pinch to rotate and zoom" interaction is enabled. An  Object value is passed 
 *      as options to TouchZoomRotateHandler#enable .
 * 
 * - options.trackResize boolean(default true)
 *      If  true , the map will automatically resize when the browser window resizes.
 * 
 * - options.center LngLatLike(default [0, 0])
 *      The inital geographical centerpoint of the map. If  center is not specified in the constructor 
 *      options, Mapbox GL JS will look for it in the map's style object. If it is not specified in the 
 *      style, either, it will default to  [0, 0] 
 *      Note: Mapbox GL uses longitude, latitude coordinate order (as opposed to latitude, longitude) 
 *      to match GeoJSON.
 * 
 * - options.zoom number(default 0)
 *      The initial zoom level of the map. If  zoom is not specified in the constructor options, 
 *      Mapbox GL JS will look for it in the map's style object. If it is not specified in the style, 
 *      either, it will default to  0 
 * 
 * - options.bearing number(default 0)
 *      The initial bearing (rotation) of the map, measured in degrees counter-clockwise from north. 
 *      If  bearing is not specified in the constructor options, Mapbox GL JS will look for it in the 
 *      map's style object. If it is not specified in the style, either, it will default to 0 
 * 
 * - options.pitch number(default 0)
 *      The initial pitch (tilt) of the map, measured in degrees away from the plane of the screen (0-60). 
 *      If  pitch is not specified in the constructor options, Mapbox GL JS will look for it in the map's 
 *      style object. If it is not specified in the style, either, it will default to  0 .
 * 
 * - options.renderWorldCopies boolean(default true)
 *      If  true , multiple copies of the world will be rendered, when zoomed out.
 * 
 * - options.maxTileCacheSize number(default null)
 *      The maxiumum number of tiles stored in the tile cache for a given source. If omitted, the cache 
 *      will be dynamically sized based on the current viewport.
 * 
 * - options.localIdeographFontFamily string(default null)
 *      If specified, defines a CSS font-family for locally overriding generation of glyphs in the 
 *      'CJK Unified Ideographs' and 'Hangul Syllables' ranges. In these ranges, font settings from the 
 *      map's style will be ignored, except for font-weight keywords (light/regular/medium/bold). The 
 *      purpose of this option is to avoid bandwidth-intensive glyph server requests. 
 *      (see Use locally generated ideographs )
 * 
 * - options.transformRequest RequestTransformFunction(default null)
 *      A callback run before the Map makes a request for an external URL. The callback can be used to 
 *      modify the url, set headers, or set the credentials property for cross-origin requests. Expected 
 *      to return an object with a  url property and optionally  headers and  credentials properties.
 * 
 *      var map = new mapboxgl.Map({
 *          container: 'map',
 *          center: [-122.420679, 37.772537],
 *          zoom: 13,
 *          style: style_object,
 *          hash: true,
 *          transformRequest: (url, resourceType) => {
 *              if (resoureType == 'Source' && url.startsWith('http://myHost') {
 *                  return {
 *                      url: url.replace('http', 'https'),
 *                      headers: { 'my-custom-header': true},
 *                      credentials: 'include'  // Include cookies for cross-origin requests
 *                  }
 *              });
 *          }
 *      });
 * 
 * ------------
 * accessToken
 * ------------
 * Gets and sets the map's access token.
 * 
 *      mapboxgl.accessToken = myAccessToken;
 * 
 * ----------
 * supported
 * ----------
 * Test whether the browser supports Mapbox GL JS.
 * 
 * Parameters
 * options (Object)
 * - options.failIfMajorPerformanceCaveat boolean(default false)
 *      If  true , the function will return  false if the performance of Mapbox GL JS would be dramatically 
 *      worse than expected (e.g. a software WebGL renderer would be used).
 * 
 *      mapboxgl.supportd() // = true
 * 
 * --------
 * version
 * --------
 * The version of Mapbox GL JS in use as specified in package.json, CHANGELOG.md, and the GitHub release.
 * 
 * -----------------
 * setRTLTextPlugin
 * -----------------
 * Sets the map's RTL text plugin. Necessary for supporting languages like Arabic and Hebrew that are 
 * written right-to-left.
 * 
 * Parameters
 *  - pluginURL (string): URL pointing to the Mapbox RTL text plugin source.
 *  - callback (Function): Called with an error argument if there is an error.
 * 
 *      mapboxgl.setRTLTextPlugin('https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.1.1/mapbox-gl-rtl-text.js');
 * 
 * -----------------
 * AnimationOptions
 * -----------------
 * Options common to map movement methods that involve animation, such as Map#panBy and Map#easeTo, 
 * controlling the duration and easing function of the animation. All properties are optional.
 * 
 * Properties
 *  - duration (number): The animation's duration, measured in milliseconds.
 *  - easing (Function): A function taking a time in the range 0..1 and returning a number where 0 is the 
 *                       initial state and 1 is the final state.
 *  - offset (PointLike): of the target center relative to real map container center at the end of animation.
 *  - animate (boolean): If  false , no animation will occur.
 * 
 * --------------
 * CameraOptions
 * --------------
 * 
 */
