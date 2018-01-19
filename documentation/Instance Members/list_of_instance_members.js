/**
 * ---------
 * resize()
 * ---------
 * Resizes the map according to the dimensions of its container element.
 * This method must be called after the map's container is resized by another script, or when the map is 
 * shown after being initially hidden with CSS.
 * 
 *      Returns
 *          Map: this
 * 
 * ------------
 * getBounds()
 * ------------
 * Returns the map's geographical bounds.
 * 
 *      Returns
 *          LngLatBounds: The map's geographical bounds.
 * 
 * ---------------
 * getMaxBounds()
 * ---------------
 * Gets the map's geographical bounds.
 * Returns the LngLatBounds by which pan and zoom operations on the map are constrained.
 * 
 *      Returns
 *          (LngLatBounds | null): The maximum bounds the map is constrained to, or null if none set.
 * 
 * ---------------------------
 * setMaxBounds(lnglatbounds)
 * ---------------------------
 * Sets or clears the map's geographical bounds.
 * Pan and zoom operations are constrained within these bounds. If a pan or zoom is performed that would 
 * display regions outside these bounds, the map will instead display a position and zoom level as close 
 * as possible to the operation's request while still remaining within the bounds.
 * 
 *      Parameters
 *          - lnglatbounds ((LngLatBoundsLike | null | undefined)): The maximum bounds to set. If null or
 *                          undefined is provided, the function removes the map's maximum bounds.
 * 
 *      Returns
 *          Map: this
 * 
 * --------------------
 * setMinZoom(minZoom)
 * --------------------
 * Sets or clears the map's minimum zoom level. If the map's current zoom level is lower than the new 
 * minimum, the map will zoom to the new minimum.
 * 
 *      Parameters
 *          - minZoom ((number | null | undefined)): The minimum zoom level to set (0-24). If  null or 
 *                      undefined is provided, the function removes the current minimum zoom 
 *                      (i.e. sets it to 0).
 * 
 *      Returns
 *          Map: this
 * 
 * -------------
 * getMinZoom()
 * -------------
 * Returns the map's minimum allowable zoom level.
 * 
 *      Returns
 *          number: minZoom
 * 
 * --------------------
 * setMaxZoom(maxZoom)
 * --------------------
 * Sets or clears the map's maximum zoom level. If the map's current zoom level is higher than the 
 * new maximum, the map will zoom to the new maximum.
 * 
 *      Parameters
 *          maxZoom ((number | null | undefined)): The maximum zoom level to set. If  null or undefined 
 *                      is provided, the function removes the current maximum zoom (sets it to 22).
 * 
 *      Returns
 *          Map: this
 * 
 * -------------
 * getMaxZoom()
 * -------------
 * Returns the map's maximum allowable zoom level.
 * 
 *      Returns
 *          number: maxZoom
 * 
 * ----------------
 * project(lnglat)
 * ----------------
 * 
 */