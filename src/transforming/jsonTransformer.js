"use strict";

function transform(component, contentData) {
    
    return JSON.stringify({
        [component]: contentData
    });
}

module.exports = { transform };