"use strict";

function transform(component, contentData) {
    return {
        [component]: contentData
    };
}

module.exports = { transform };