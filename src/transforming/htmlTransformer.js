// Needed for the server side template engine some day move the code to other project
"use strict";

import R from "Ramda";

// Paragraph should be templated to html
const mapFn = (value, key, obj) => "<" + keyToTag(key) + ">" + value + "</" + keyToTag(key) + ">";

function renderHtmlFrom(json) {
    return R.values(R.mapObjIndexed(mapFn, json));
}

function keyToTag(key) {
    if (key === "paragraph") {
        return "p";
    }
    return key;
}

module.exports = { renderHtmlFrom };