"use strict";
(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_webwork_js_webwork_js"],{

/***/ 66142:
/*!*****************************************!*\
  !*** ./runestone/webwork/js/webwork.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js_runestonebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/runestonebase */ 2568);


class WebWork extends _common_js_runestonebase__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(opts) {
        super(opts);
    }
}

let rb = new WebWork();

function logWebWork(e, data) {
    var correct = false;
    let correctCount = 0;
    let qCount = 0;
    let actString = "check:";
    for (let k of Object.keys(data.rh_result.answers)) {
        qCount += 1;
        if (data.rh_result.answers[k].score == 1) {
            correctCount += 1;
        }
        actString += `actual:${data.rh_result.answers[k].original_student_ans}:expected:${data.rh_result.answers[k].correct_value}:`;
    }
    let pct = correctCount / qCount;
    actString += `correct:${correctCount}:count:${qCount}:pct:${pct}`;
    if (pct == 1.0) {
        correct = true;
    }
    rb.logBookEvent({
        event: "webwork",
        div_id: data.inputs_ref.problemUUID,
        act: actString,
        correct: correct,
    });
}

function logShowCorrect(e, data) {
    rb.logBookEvent({
        event: "webwork",
        div_id: data.inputs_ref.problemUUID,
        act: "show",
    });
}

if (typeof window.component_factory === "undefined") {
    window.component_factory = {};
}

window.component_factory.webwork = function (opts) {
    return new WebWork();
};

$(function () {
    $("body").on("runestone_ww_check", logWebWork);
    $("body").on("runestone_show_correct", logShowCorrect);
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuZXN0b25lX3dlYndvcmtfanNfd2Vid29ya19qcy44ZmRhMThhZjZlMTI1OTFlLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwRDs7QUFFMUQsc0JBQXNCLGdFQUFhO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLCtDQUErQyxZQUFZLHdDQUF3QztBQUNsSTtBQUNBO0FBQ0EsNEJBQTRCLGFBQWEsU0FBUyxPQUFPLE9BQU8sSUFBSTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS93ZWJ3b3JrL2pzL3dlYndvcmsuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJ1bmVzdG9uZUJhc2UgZnJvbSBcIi4uLy4uL2NvbW1vbi9qcy9ydW5lc3RvbmViYXNlXCI7XG5cbmNsYXNzIFdlYldvcmsgZXh0ZW5kcyBSdW5lc3RvbmVCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIHN1cGVyKG9wdHMpO1xuICAgIH1cbn1cblxubGV0IHJiID0gbmV3IFdlYldvcmsoKTtcblxuZnVuY3Rpb24gbG9nV2ViV29yayhlLCBkYXRhKSB7XG4gICAgdmFyIGNvcnJlY3QgPSBmYWxzZTtcbiAgICBsZXQgY29ycmVjdENvdW50ID0gMDtcbiAgICBsZXQgcUNvdW50ID0gMDtcbiAgICBsZXQgYWN0U3RyaW5nID0gXCJjaGVjazpcIjtcbiAgICBmb3IgKGxldCBrIG9mIE9iamVjdC5rZXlzKGRhdGEucmhfcmVzdWx0LmFuc3dlcnMpKSB7XG4gICAgICAgIHFDb3VudCArPSAxO1xuICAgICAgICBpZiAoZGF0YS5yaF9yZXN1bHQuYW5zd2Vyc1trXS5zY29yZSA9PSAxKSB7XG4gICAgICAgICAgICBjb3JyZWN0Q291bnQgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICBhY3RTdHJpbmcgKz0gYGFjdHVhbDoke2RhdGEucmhfcmVzdWx0LmFuc3dlcnNba10ub3JpZ2luYWxfc3R1ZGVudF9hbnN9OmV4cGVjdGVkOiR7ZGF0YS5yaF9yZXN1bHQuYW5zd2Vyc1trXS5jb3JyZWN0X3ZhbHVlfTpgO1xuICAgIH1cbiAgICBsZXQgcGN0ID0gY29ycmVjdENvdW50IC8gcUNvdW50O1xuICAgIGFjdFN0cmluZyArPSBgY29ycmVjdDoke2NvcnJlY3RDb3VudH06Y291bnQ6JHtxQ291bnR9OnBjdDoke3BjdH1gO1xuICAgIGlmIChwY3QgPT0gMS4wKSB7XG4gICAgICAgIGNvcnJlY3QgPSB0cnVlO1xuICAgIH1cbiAgICByYi5sb2dCb29rRXZlbnQoe1xuICAgICAgICBldmVudDogXCJ3ZWJ3b3JrXCIsXG4gICAgICAgIGRpdl9pZDogZGF0YS5pbnB1dHNfcmVmLnByb2JsZW1VVUlELFxuICAgICAgICBhY3Q6IGFjdFN0cmluZyxcbiAgICAgICAgY29ycmVjdDogY29ycmVjdCxcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gbG9nU2hvd0NvcnJlY3QoZSwgZGF0YSkge1xuICAgIHJiLmxvZ0Jvb2tFdmVudCh7XG4gICAgICAgIGV2ZW50OiBcIndlYndvcmtcIixcbiAgICAgICAgZGl2X2lkOiBkYXRhLmlucHV0c19yZWYucHJvYmxlbVVVSUQsXG4gICAgICAgIGFjdDogXCJzaG93XCIsXG4gICAgfSk7XG59XG5cbmlmICh0eXBlb2Ygd2luZG93LmNvbXBvbmVudF9mYWN0b3J5ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgd2luZG93LmNvbXBvbmVudF9mYWN0b3J5ID0ge307XG59XG5cbndpbmRvdy5jb21wb25lbnRfZmFjdG9yeS53ZWJ3b3JrID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICByZXR1cm4gbmV3IFdlYldvcmsoKTtcbn07XG5cbiQoZnVuY3Rpb24gKCkge1xuICAgICQoXCJib2R5XCIpLm9uKFwicnVuZXN0b25lX3d3X2NoZWNrXCIsIGxvZ1dlYldvcmspO1xuICAgICQoXCJib2R5XCIpLm9uKFwicnVuZXN0b25lX3Nob3dfY29ycmVjdFwiLCBsb2dTaG93Q29ycmVjdCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==