var $Element = require("./element"),
    documentElement = document.documentElement;
/**
 * Calculates offset of the current element
 * @return object with left, top, bottom, right, width and height properties
 */
$Element.prototype.offset = function() {
    if (!this._node) return;

    var boundingRect = this._node.getBoundingClientRect(),
        clientTop = documentElement.clientTop,
        clientLeft = documentElement.clientLeft,
        scrollTop = window.pageYOffset || documentElement.scrollTop,
        scrollLeft = window.pageXOffset || documentElement.scrollLeft;

    return {
        top: boundingRect.top + scrollTop - clientTop,
        left: boundingRect.left + scrollLeft - clientLeft,
        right: boundingRect.right + scrollLeft - clientLeft,
        bottom: boundingRect.bottom + scrollTop - clientTop,
        width: boundingRect.right - boundingRect.left,
        height: boundingRect.bottom - boundingRect.top
    };
};