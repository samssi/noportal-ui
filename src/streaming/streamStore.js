"use strict";

import Rx from "rxjs";

const subject = new Rx.Subject();

function subjectStream() {
    return subject;
}

module.exports = { subjectStream };