(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_fitb_js_timedfitb_js"],{

/***/ 68007:
/*!*************************************!*\
  !*** ./runestone/fitb/css/fitb.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 86151:
/*!*******************************************!*\
  !*** ./runestone/fitb/js/fitb-i18n.en.js ***!
  \*******************************************/
/***/ (() => {

$.i18n().load({
    en: {
        msg_no_answer: "No answer provided.",
        msg_fitb_check_me: "Check me",
        msg_fitb_compare_me: "Compare me",
    },
});


/***/ }),

/***/ 61353:
/*!**********************************************!*\
  !*** ./runestone/fitb/js/fitb-i18n.pt-br.js ***!
  \**********************************************/
/***/ (() => {

$.i18n().load({
    "pt-br": {
        msg_no_answer: "Nenhuma resposta dada.",
        msg_fitb_check_me: "Verificar",
        msg_fitb_compare_me: "Comparar"
    },
});


/***/ }),

/***/ 99184:
/*!***********************************!*\
  !*** ./runestone/fitb/js/fitb.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FITBList": () => (/* binding */ FITBList),
/* harmony export */   "default": () => (/* binding */ FITB)
/* harmony export */ });
/* harmony import */ var _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/runestonebase.js */ 2568);
/* harmony import */ var _fitb_i18n_en_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fitb-i18n.en.js */ 86151);
/* harmony import */ var _fitb_i18n_en_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fitb_i18n_en_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fitb_i18n_pt_br_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fitb-i18n.pt-br.js */ 61353);
/* harmony import */ var _fitb_i18n_pt_br_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fitb_i18n_pt_br_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_fitb_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/fitb.css */ 68007);
// *********
// |docname|
// *********
// This file contains the JS for the Runestone fillintheblank component. It was created By Isaiah Mayerchak and Kirby Olson, 6/4/15 then revised by Brad Miller, 2/7/20.







var FITBList = {}; // Object containing all instances of FITB that aren't a child of a timed assessment.

// FITB constructor
class FITB extends _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(opts) {
        super(opts);
        var orig = opts.orig; // entire <p> element
        this.useRunestoneServices = opts.useRunestoneServices;
        this.origElem = orig;
        this.divid = orig.id;
        this.correct = null;
        // See comments in fitb.py for the format of ``feedbackArray`` (which is identical in both files).
        //
        // Find the script tag containing JSON and parse it. See `SO <https://stackoverflow.com/questions/9320427/best-practice-for-embedding-arbitrary-json-in-the-dom>`_. If this parses to ``false``, then no feedback is available; server-side grading will be performed.
        this.feedbackArray = JSON.parse(
            this.scriptSelector(this.origElem).html()
        );
        this.createFITBElement();
        this.caption = "Fill in the Blank";
        this.addCaption("runestone");
        this.checkServer("fillb", true);
    }
    // Find the script tag containing JSON in a given root DOM node.
    scriptSelector(root_node) {
        return $(root_node).find(`script[type="application/json"]`);
    }
    /*===========================================
    ====   Functions generating final HTML   ====
    ===========================================*/
    createFITBElement() {
        this.renderFITBInput();
        this.renderFITBButtons();
        this.renderFITBFeedbackDiv();
        // replaces the intermediate HTML for this component with the rendered HTML of this component
        $(this.origElem).replaceWith(this.containerDiv);
    }
    renderFITBInput() {
        // The text [input] elements are created by the template.
        this.containerDiv = document.createElement("div");
        this.containerDiv.id = this.divid;
        // Copy the original elements to the container holding what the user will see.
        $(this.origElem).children().clone().appendTo(this.containerDiv);
        // Remove the script tag.
        this.scriptSelector(this.containerDiv).remove();
        // Set the class for the text inputs, then store references to them.
        let ba = $(this.containerDiv).find(":input");
        ba.attr("class", "form form-control selectwidthauto");
        ba.attr("aria-label", "input area");
        this.blankArray = ba.toArray();
        // When a blank is changed mark this component as interacted with.
        // And set a class on the component in case we want to render components that have been used
        // differently
        for (let blank of this.blankArray) {
            $(blank).change(this.recordAnswered.bind(this));
        }
    }

    recordAnswered() {
        this.isAnswered = true;
        //let rcontainer = this.containerDiv.closest(".runestone");
        //rcontainer.addClass("answered");
    }

    renderFITBButtons() {
        // "submit" button and "compare me" button
        this.submitButton = document.createElement("button");
        this.submitButton.textContent = $.i18n("msg_fitb_check_me");
        $(this.submitButton).attr({
            class: "btn btn-success",
            name: "do answer",
            type: "button",
        });
        this.submitButton.addEventListener(
            "click",
            function () {
                this.checkCurrentAnswer();
                this.logCurrentAnswer();
            }.bind(this),
            false
        );
        this.containerDiv.appendChild(document.createElement("br"));
        this.containerDiv.appendChild(document.createElement("br"));
        this.containerDiv.appendChild(this.submitButton);
        if (this.useRunestoneServices) {
            this.compareButton = document.createElement("button");
            $(this.compareButton).attr({
                class: "btn btn-default",
                id: this.origElem.id + "_bcomp",
                disabled: "",
                name: "compare",
            });
            this.compareButton.textContent = $.i18n("msg_fitb_compare_me");
            this.compareButton.addEventListener(
                "click",
                function () {
                    this.compareFITBAnswers();
                }.bind(this),
                false
            );
            this.containerDiv.appendChild(this.compareButton);
        }
        this.containerDiv.appendChild(document.createElement("div"));
    }
    renderFITBFeedbackDiv() {
        this.feedBackDiv = document.createElement("div");
        this.feedBackDiv.id = this.divid + "_feedback";
        this.containerDiv.appendChild(document.createElement("br"));
        this.containerDiv.appendChild(this.feedBackDiv);
    }
    /*===================================
    === Checking/loading from storage ===
    ===================================*/
    restoreAnswers(data) {
        var arr;
        // Restore answers from storage retrieval done in RunestoneBase.
        try {
            // The newer format encodes data as a JSON object.
            arr = JSON.parse(data.answer);
            // The result should be an array. If not, try comma parsing instead.
            if (!Array.isArray(arr)) {
                throw new Error();
            }
        } catch (err) {
            // The old format didn't.
            arr = data.answer.split(",");
        }
        for (var i = 0; i < this.blankArray.length; i++) {
            $(this.blankArray[i]).attr("value", arr[i]);
        }
        // Use the feedback from the server, or recompute it locally.
        if (!this.feedbackArray) {
            this.displayFeed = data.displayFeed;
            this.correct = data.correct;
            this.isCorrectArray = data.isCorrectArray;
            // Only render if all the data is present; local storage might have old data missing some of these items.
            if (
                typeof this.displayFeed !== "undefined" &&
                typeof this.correct !== "undefined" &&
                typeof this.isCorrectArray !== "undefined"
            ) {
                this.renderFeedback();
            }
        } else {
            this.checkCurrentAnswer();
        }
    }
    checkLocalStorage() {
        // Loads previous answers from local storage if they exist
        var storedData;
        if (this.graderactive) {
            return;
        }
        var len = localStorage.length;
        if (len > 0) {
            var ex = localStorage.getItem(this.localStorageKey());
            if (ex !== null) {
                try {
                    storedData = JSON.parse(ex);
                    var arr = storedData.answer;
                } catch (err) {
                    // error while parsing; likely due to bad value stored in storage
                    console.log(err.message);
                    localStorage.removeItem(this.localStorageKey());
                    return;
                }
                this.restoreAnswers(storedData);
            }
        }
    }
    setLocalStorage(data) {
        let key = this.localStorageKey();
        localStorage.setItem(key, JSON.stringify(data));
    }

    checkCurrentAnswer() {
        // Start of the evaluation chain
        this.isCorrectArray = [];
        this.displayFeed = [];
        this.given_arr = [];
        for (var i = 0; i < this.blankArray.length; i++)
            this.given_arr.push(this.blankArray[i].value);
        if (this.useRunestoneServices) {
            if (eBookConfig.enableCompareMe) {
                this.enableCompareButton();
            }
        }
        // Grade locally if we can't ask the server to grade.
        if (this.feedbackArray) {
            this.evaluateAnswers();
            if (!this.isTimed) {
                this.renderFeedback();
            }
        }
    }

    async logCurrentAnswer(sid) {
        let answer = JSON.stringify(this.given_arr);
        // Save the answer locally.
        let feedback = true;
        this.setLocalStorage({
            answer: answer,
            timestamp: new Date(),
        });
        let data = {
            event: "fillb",
            act: answer || "",
            answer: answer || "",
            correct: this.correct ? "T" : "F",
            div_id: this.divid,
        };
        if (typeof sid !== "undefined") {
            data.sid = sid;
            feedback = false;
        }
        // Per `logBookEvent <logBookEvent>`, the result is undefined if there's no server. Otherwise, the server provides the endpoint-specific results in ``data.details``; see `make_json_response`.
        data = await this.logBookEvent(data);
        let detail = data && data.detail;
        if (!feedback) return;
        if (!this.feedbackArray) {
            // On success, update the feedback from the server's grade.
            this.setLocalStorage({
                answer: answer,
                timestamp: detail.timestamp,
            });
            this.correct = detail.correct;
            this.displayFeed = detail.displayFeed;
            this.isCorrectArray = detail.isCorrectArray;
            if (!this.isTimed) {
                this.renderFeedback();
            }
        }
        return detail;
    }

    /*==============================
    === Evaluation of answer and ===
    ===     display feedback     ===
    ==============================*/
    // Inputs:
    //
    // - Strings entered by the student in ``this.blankArray[i].value``.
    // - Feedback in ``this.feedbackArray``.
    //
    // Outputs:
    //
    // - ``this.displayFeed`` is an array of HTML feedback.
    // - ``this.isCorrectArray`` is an array of true, false, or null (the question wasn't answered).
    // - ``this.correct`` is true, false, or null (the question wasn't answered).
    evaluateAnswers() {
        // Keep track if all answers are correct or not.
        this.correct = true;
        for (var i = 0; i < this.blankArray.length; i++) {
            var given = this.blankArray[i].value;
            // If this blank is empty, provide no feedback for it.
            if (given === "") {
                this.isCorrectArray.push(null);
                this.displayFeed.push($.i18n("msg_no_answer"));
                this.correct = false;
            } else {
                // Look through all feedback for this blank. The last element in the array always matches. If no feedback for this blank exists, use an empty list.
                var fbl = this.feedbackArray[i] || [];
                for (var j = 0; j < fbl.length; j++) {
                    // The last item of feedback always matches.
                    if (j === fbl.length - 1) {
                        this.displayFeed.push(fbl[j]["feedback"]);
                        break;
                    }
                    // If this is a regexp...
                    if ("regex" in fbl[j]) {
                        var patt = RegExp(
                            fbl[j]["regex"],
                            fbl[j]["regexFlags"]
                        );
                        if (patt.test(given)) {
                            this.displayFeed.push(fbl[j]["feedback"]);
                            break;
                        }
                    } else {
                        // This is a number.
                        console.assert("number" in fbl[j]);
                        var [min, max] = fbl[j]["number"];
                        // Convert the given string to a number. While there are `lots of ways <https://coderwall.com/p/5tlhmw/converting-strings-to-number-in-javascript-pitfalls>`_ to do this; this version supports other bases (hex/binary/octal) as well as floats.
                        var actual = +given;
                        if (actual >= min && actual <= max) {
                            this.displayFeed.push(fbl[j]["feedback"]);
                            break;
                        }
                    }
                }
                // The answer is correct if it matched the first element in the array. A special case: if only one answer is provided, count it wrong; this is a misformed problem.
                let is_correct = j === 0 && fbl.length > 1;
                this.isCorrectArray.push(is_correct);
                if (!is_correct) {
                    this.correct = false;
                }
            }
        }
        this.percent =
            this.isCorrectArray.filter(Boolean).length / this.blankArray.length;
    }

    renderFeedback() {
        if (this.correct) {
            $(this.feedBackDiv).attr("class", "alert alert-info");
            for (let j = 0; j < this.blankArray.length; j++) {
                $(this.blankArray[j]).removeClass("input-validation-error");
            }
        } else {
            if (this.displayFeed === null) {
                this.displayFeed = "";
            }
            for (let j = 0; j < this.blankArray.length; j++) {
                if (this.isCorrectArray[j] !== true) {
                    $(this.blankArray[j]).addClass("input-validation-error");
                } else {
                    $(this.blankArray[j]).removeClass("input-validation-error");
                }
            }
            $(this.feedBackDiv).attr("class", "alert alert-danger");
        }
        var feedback_html = "<ul>";
        for (var i = 0; i < this.displayFeed.length; i++) {
            feedback_html += "<li>" + this.displayFeed[i] + "</li>";
        }
        feedback_html += "</ul>";
        // Remove the list if it's just one element.
        if (this.displayFeed.length == 1) {
            feedback_html = feedback_html.slice(
                "<ul><li>".length,
                -"</li></ul>".length
            );
        }
        this.feedBackDiv.innerHTML = feedback_html;
        if (typeof MathJax !== "undefined") {
            this.queueMathJax(document.body);
        }
    }

    /*==================================
    === Functions for compare button ===
    ==================================*/
    enableCompareButton() {
        this.compareButton.disabled = false;
    }
    // _`compareFITBAnswers`
    compareFITBAnswers() {
        var data = {};
        data.div_id = this.divid;
        data.course = eBookConfig.course;
        jQuery.get(
            `${eBookConfig.new_server_prefix}/assessment/gettop10Answers`,
            data,
            this.compareFITB
        );
    }
    compareFITB(data, status, whatever) {
        var answers = data.detail.res;
        var misc = data.detail.miscdata;
        var body = "<table>";
        body += "<tr><th>Answer</th><th>Count</th></tr>";
        for (var row in answers) {
            body +=
                "<tr><td>" +
                answers[row].answer +
                "</td><td>" +
                answers[row].count +
                " times</td></tr>";
        }
        body += "</table>";
        var html =
            "<div class='modal fade'>" +
            "    <div class='modal-dialog compare-modal'>" +
            "        <div class='modal-content'>" +
            "            <div class='modal-header'>" +
            "                <button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>" +
            "                <h4 class='modal-title'>Top Answers</h4>" +
            "            </div>" +
            "            <div class='modal-body'>" +
            body +
            "            </div>" +
            "        </div>" +
            "    </div>" +
            "</div>";
        var el = $(html);
        el.modal();
    }

    disableInteraction() {
        for (var i = 0; i < this.blankArray.length; i++) {
            this.blankArray[i].disabled = true;
        }
    }
}

/*=================================
== Find the custom HTML tags and ==
==   execute our code on them    ==
=================================*/
$(document).on("runestone:login-complete", function () {
    $("[data-component=fillintheblank]").each(function (index) {
        var opts = {
            orig: this,
            useRunestoneServices: eBookConfig.useRunestoneServices,
        };
        if ($(this).closest("[data-component=timedAssessment]").length == 0) {
            // If this element exists within a timed component, don't render it here
            try {
                FITBList[this.id] = new FITB(opts);
            } catch (err) {
                console.log(
                    `Error rendering Fill in the Blank Problem ${this.id}
                     Details: ${err}`
                );
            }
        }
    });
});


/***/ }),

/***/ 74309:
/*!****************************************!*\
  !*** ./runestone/fitb/js/timedfitb.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TimedFITB)
/* harmony export */ });
/* harmony import */ var _fitb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fitb.js */ 99184);

class TimedFITB extends _fitb_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(opts) {
        super(opts);
        this.renderTimedIcon(this.inputDiv);
        this.hideButtons();
        this.needsReinitialization = true;
    }
    hideButtons() {
        $(this.submitButton).hide();
        $(this.compareButton).hide();
    }
    renderTimedIcon(component) {
        // renders the clock icon on timed components.    The component parameter
        // is the element that the icon should be appended to.
        var timeIconDiv = document.createElement("div");
        var timeIcon = document.createElement("img");
        $(timeIcon).attr({
            src: "../_static/clock.png",
            style: "width:15px;height:15px",
        });
        timeIconDiv.className = "timeTip";
        timeIconDiv.title = "";
        timeIconDiv.appendChild(timeIcon);
        $(component).prepend(timeIconDiv);
    }
    checkCorrectTimed() {
        // Returns if the question was correct, incorrect, or skipped (return null in the last case)
        switch (this.correct) {
            case true:
                return "T";
            case false:
                return "F";
            default:
                return null;
        }
    }
    hideFeedback() {
        for (var i = 0; i < this.blankArray.length; i++) {
            $(this.blankArray[i]).removeClass("input-validation-error");
        }
        this.feedBackDiv.style.display = "none";
    }

    reinitializeListeners() {
        for (let blank of this.blankArray) {
            $(blank).change(this.recordAnswered.bind(this));
        }
    }
}

if (typeof window.component_factory === "undefined") {
    window.component_factory = {};
}
window.component_factory.fillintheblank = function (opts) {
    if (opts.timed) {
        return new TimedFITB(opts);
    }
    return new _fitb_js__WEBPACK_IMPORTED_MODULE_0__["default"](opts);
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuZXN0b25lX2ZpdGJfanNfdGltZWRmaXRiX2pzLjAxNTlmYWM5ODhkNGUyOGMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7Ozs7Ozs7Ozs7O0FDTkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05EO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7O0FBRWdEO0FBQ2xDO0FBQ0c7QUFDTDs7QUFFbEIsbUJBQW1COztBQUUxQjtBQUNlLG1CQUFtQixtRUFBYTtBQUMvQztBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdPQUF3TztBQUN4TztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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LGdEQUFJO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNEJBQTRCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0RBQUk7QUFDbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2ZpdGIvY3NzL2ZpdGIuY3NzPzllYmQiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9maXRiL2pzL2ZpdGItaTE4bi5lbi5qcyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2ZpdGIvanMvZml0Yi1pMThuLnB0LWJyLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvZml0Yi9qcy9maXRiLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvZml0Yi9qcy90aW1lZGZpdGIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiJC5pMThuKCkubG9hZCh7XG4gICAgZW46IHtcbiAgICAgICAgbXNnX25vX2Fuc3dlcjogXCJObyBhbnN3ZXIgcHJvdmlkZWQuXCIsXG4gICAgICAgIG1zZ19maXRiX2NoZWNrX21lOiBcIkNoZWNrIG1lXCIsXG4gICAgICAgIG1zZ19maXRiX2NvbXBhcmVfbWU6IFwiQ29tcGFyZSBtZVwiLFxuICAgIH0sXG59KTtcbiIsIiQuaTE4bigpLmxvYWQoe1xuICAgIFwicHQtYnJcIjoge1xuICAgICAgICBtc2dfbm9fYW5zd2VyOiBcIk5lbmh1bWEgcmVzcG9zdGEgZGFkYS5cIixcbiAgICAgICAgbXNnX2ZpdGJfY2hlY2tfbWU6IFwiVmVyaWZpY2FyXCIsXG4gICAgICAgIG1zZ19maXRiX2NvbXBhcmVfbWU6IFwiQ29tcGFyYXJcIlxuICAgIH0sXG59KTtcbiIsIi8vICoqKioqKioqKlxuLy8gfGRvY25hbWV8XG4vLyAqKioqKioqKipcbi8vIFRoaXMgZmlsZSBjb250YWlucyB0aGUgSlMgZm9yIHRoZSBSdW5lc3RvbmUgZmlsbGludGhlYmxhbmsgY29tcG9uZW50LiBJdCB3YXMgY3JlYXRlZCBCeSBJc2FpYWggTWF5ZXJjaGFrIGFuZCBLaXJieSBPbHNvbiwgNi80LzE1IHRoZW4gcmV2aXNlZCBieSBCcmFkIE1pbGxlciwgMi83LzIwLlxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdW5lc3RvbmVCYXNlIGZyb20gXCIuLi8uLi9jb21tb24vanMvcnVuZXN0b25lYmFzZS5qc1wiO1xuaW1wb3J0IFwiLi9maXRiLWkxOG4uZW4uanNcIjtcbmltcG9ydCBcIi4vZml0Yi1pMThuLnB0LWJyLmpzXCI7XG5pbXBvcnQgXCIuLi9jc3MvZml0Yi5jc3NcIjtcblxuZXhwb3J0IHZhciBGSVRCTGlzdCA9IHt9OyAvLyBPYmplY3QgY29udGFpbmluZyBhbGwgaW5zdGFuY2VzIG9mIEZJVEIgdGhhdCBhcmVuJ3QgYSBjaGlsZCBvZiBhIHRpbWVkIGFzc2Vzc21lbnQuXG5cbi8vIEZJVEIgY29uc3RydWN0b3JcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZJVEIgZXh0ZW5kcyBSdW5lc3RvbmVCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIHN1cGVyKG9wdHMpO1xuICAgICAgICB2YXIgb3JpZyA9IG9wdHMub3JpZzsgLy8gZW50aXJlIDxwPiBlbGVtZW50XG4gICAgICAgIHRoaXMudXNlUnVuZXN0b25lU2VydmljZXMgPSBvcHRzLnVzZVJ1bmVzdG9uZVNlcnZpY2VzO1xuICAgICAgICB0aGlzLm9yaWdFbGVtID0gb3JpZztcbiAgICAgICAgdGhpcy5kaXZpZCA9IG9yaWcuaWQ7XG4gICAgICAgIHRoaXMuY29ycmVjdCA9IG51bGw7XG4gICAgICAgIC8vIFNlZSBjb21tZW50cyBpbiBmaXRiLnB5IGZvciB0aGUgZm9ybWF0IG9mIGBgZmVlZGJhY2tBcnJheWBgICh3aGljaCBpcyBpZGVudGljYWwgaW4gYm90aCBmaWxlcykuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIEZpbmQgdGhlIHNjcmlwdCB0YWcgY29udGFpbmluZyBKU09OIGFuZCBwYXJzZSBpdC4gU2VlIGBTTyA8aHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvOTMyMDQyNy9iZXN0LXByYWN0aWNlLWZvci1lbWJlZGRpbmctYXJiaXRyYXJ5LWpzb24taW4tdGhlLWRvbT5gXy4gSWYgdGhpcyBwYXJzZXMgdG8gYGBmYWxzZWBgLCB0aGVuIG5vIGZlZWRiYWNrIGlzIGF2YWlsYWJsZTsgc2VydmVyLXNpZGUgZ3JhZGluZyB3aWxsIGJlIHBlcmZvcm1lZC5cbiAgICAgICAgdGhpcy5mZWVkYmFja0FycmF5ID0gSlNPTi5wYXJzZShcbiAgICAgICAgICAgIHRoaXMuc2NyaXB0U2VsZWN0b3IodGhpcy5vcmlnRWxlbSkuaHRtbCgpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuY3JlYXRlRklUQkVsZW1lbnQoKTtcbiAgICAgICAgdGhpcy5jYXB0aW9uID0gXCJGaWxsIGluIHRoZSBCbGFua1wiO1xuICAgICAgICB0aGlzLmFkZENhcHRpb24oXCJydW5lc3RvbmVcIik7XG4gICAgICAgIHRoaXMuY2hlY2tTZXJ2ZXIoXCJmaWxsYlwiLCB0cnVlKTtcbiAgICB9XG4gICAgLy8gRmluZCB0aGUgc2NyaXB0IHRhZyBjb250YWluaW5nIEpTT04gaW4gYSBnaXZlbiByb290IERPTSBub2RlLlxuICAgIHNjcmlwdFNlbGVjdG9yKHJvb3Rfbm9kZSkge1xuICAgICAgICByZXR1cm4gJChyb290X25vZGUpLmZpbmQoYHNjcmlwdFt0eXBlPVwiYXBwbGljYXRpb24vanNvblwiXWApO1xuICAgIH1cbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PT09ICAgRnVuY3Rpb25zIGdlbmVyYXRpbmcgZmluYWwgSFRNTCAgID09PT1cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICBjcmVhdGVGSVRCRWxlbWVudCgpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJGSVRCSW5wdXQoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJGSVRCQnV0dG9ucygpO1xuICAgICAgICB0aGlzLnJlbmRlckZJVEJGZWVkYmFja0RpdigpO1xuICAgICAgICAvLyByZXBsYWNlcyB0aGUgaW50ZXJtZWRpYXRlIEhUTUwgZm9yIHRoaXMgY29tcG9uZW50IHdpdGggdGhlIHJlbmRlcmVkIEhUTUwgb2YgdGhpcyBjb21wb25lbnRcbiAgICAgICAgJCh0aGlzLm9yaWdFbGVtKS5yZXBsYWNlV2l0aCh0aGlzLmNvbnRhaW5lckRpdik7XG4gICAgfVxuICAgIHJlbmRlckZJVEJJbnB1dCgpIHtcbiAgICAgICAgLy8gVGhlIHRleHQgW2lucHV0XSBlbGVtZW50cyBhcmUgY3JlYXRlZCBieSB0aGUgdGVtcGxhdGUuXG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuaWQgPSB0aGlzLmRpdmlkO1xuICAgICAgICAvLyBDb3B5IHRoZSBvcmlnaW5hbCBlbGVtZW50cyB0byB0aGUgY29udGFpbmVyIGhvbGRpbmcgd2hhdCB0aGUgdXNlciB3aWxsIHNlZS5cbiAgICAgICAgJCh0aGlzLm9yaWdFbGVtKS5jaGlsZHJlbigpLmNsb25lKCkuYXBwZW5kVG8odGhpcy5jb250YWluZXJEaXYpO1xuICAgICAgICAvLyBSZW1vdmUgdGhlIHNjcmlwdCB0YWcuXG4gICAgICAgIHRoaXMuc2NyaXB0U2VsZWN0b3IodGhpcy5jb250YWluZXJEaXYpLnJlbW92ZSgpO1xuICAgICAgICAvLyBTZXQgdGhlIGNsYXNzIGZvciB0aGUgdGV4dCBpbnB1dHMsIHRoZW4gc3RvcmUgcmVmZXJlbmNlcyB0byB0aGVtLlxuICAgICAgICBsZXQgYmEgPSAkKHRoaXMuY29udGFpbmVyRGl2KS5maW5kKFwiOmlucHV0XCIpO1xuICAgICAgICBiYS5hdHRyKFwiY2xhc3NcIiwgXCJmb3JtIGZvcm0tY29udHJvbCBzZWxlY3R3aWR0aGF1dG9cIik7XG4gICAgICAgIGJhLmF0dHIoXCJhcmlhLWxhYmVsXCIsIFwiaW5wdXQgYXJlYVwiKTtcbiAgICAgICAgdGhpcy5ibGFua0FycmF5ID0gYmEudG9BcnJheSgpO1xuICAgICAgICAvLyBXaGVuIGEgYmxhbmsgaXMgY2hhbmdlZCBtYXJrIHRoaXMgY29tcG9uZW50IGFzIGludGVyYWN0ZWQgd2l0aC5cbiAgICAgICAgLy8gQW5kIHNldCBhIGNsYXNzIG9uIHRoZSBjb21wb25lbnQgaW4gY2FzZSB3ZSB3YW50IHRvIHJlbmRlciBjb21wb25lbnRzIHRoYXQgaGF2ZSBiZWVuIHVzZWRcbiAgICAgICAgLy8gZGlmZmVyZW50bHlcbiAgICAgICAgZm9yIChsZXQgYmxhbmsgb2YgdGhpcy5ibGFua0FycmF5KSB7XG4gICAgICAgICAgICAkKGJsYW5rKS5jaGFuZ2UodGhpcy5yZWNvcmRBbnN3ZXJlZC5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlY29yZEFuc3dlcmVkKCkge1xuICAgICAgICB0aGlzLmlzQW5zd2VyZWQgPSB0cnVlO1xuICAgICAgICAvL2xldCByY29udGFpbmVyID0gdGhpcy5jb250YWluZXJEaXYuY2xvc2VzdChcIi5ydW5lc3RvbmVcIik7XG4gICAgICAgIC8vcmNvbnRhaW5lci5hZGRDbGFzcyhcImFuc3dlcmVkXCIpO1xuICAgIH1cblxuICAgIHJlbmRlckZJVEJCdXR0b25zKCkge1xuICAgICAgICAvLyBcInN1Ym1pdFwiIGJ1dHRvbiBhbmQgXCJjb21wYXJlIG1lXCIgYnV0dG9uXG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAkLmkxOG4oXCJtc2dfZml0Yl9jaGVja19tZVwiKTtcbiAgICAgICAgJCh0aGlzLnN1Ym1pdEJ1dHRvbikuYXR0cih7XG4gICAgICAgICAgICBjbGFzczogXCJidG4gYnRuLXN1Y2Nlc3NcIixcbiAgICAgICAgICAgIG5hbWU6IFwiZG8gYW5zd2VyXCIsXG4gICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQ3VycmVudEFuc3dlcigpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9nQ3VycmVudEFuc3dlcigpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGhpcy5zdWJtaXRCdXR0b24pO1xuICAgICAgICBpZiAodGhpcy51c2VSdW5lc3RvbmVTZXJ2aWNlcykge1xuICAgICAgICAgICAgdGhpcy5jb21wYXJlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgICQodGhpcy5jb21wYXJlQnV0dG9uKS5hdHRyKHtcbiAgICAgICAgICAgICAgICBjbGFzczogXCJidG4gYnRuLWRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICBpZDogdGhpcy5vcmlnRWxlbS5pZCArIFwiX2Jjb21wXCIsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJjb21wYXJlXCIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY29tcGFyZUJ1dHRvbi50ZXh0Q29udGVudCA9ICQuaTE4bihcIm1zZ19maXRiX2NvbXBhcmVfbWVcIik7XG4gICAgICAgICAgICB0aGlzLmNvbXBhcmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBhcmVGSVRCQW5zd2VycygpO1xuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHRoaXMuY29tcGFyZUJ1dHRvbik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XG4gICAgfVxuICAgIHJlbmRlckZJVEJGZWVkYmFja0RpdigpIHtcbiAgICAgICAgdGhpcy5mZWVkQmFja0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuZmVlZEJhY2tEaXYuaWQgPSB0aGlzLmRpdmlkICsgXCJfZmVlZGJhY2tcIjtcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGhpcy5mZWVkQmFja0Rpdik7XG4gICAgfVxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PT0gQ2hlY2tpbmcvbG9hZGluZyBmcm9tIHN0b3JhZ2UgPT09XG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgIHJlc3RvcmVBbnN3ZXJzKGRhdGEpIHtcbiAgICAgICAgdmFyIGFycjtcbiAgICAgICAgLy8gUmVzdG9yZSBhbnN3ZXJzIGZyb20gc3RvcmFnZSByZXRyaWV2YWwgZG9uZSBpbiBSdW5lc3RvbmVCYXNlLlxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gVGhlIG5ld2VyIGZvcm1hdCBlbmNvZGVzIGRhdGEgYXMgYSBKU09OIG9iamVjdC5cbiAgICAgICAgICAgIGFyciA9IEpTT04ucGFyc2UoZGF0YS5hbnN3ZXIpO1xuICAgICAgICAgICAgLy8gVGhlIHJlc3VsdCBzaG91bGQgYmUgYW4gYXJyYXkuIElmIG5vdCwgdHJ5IGNvbW1hIHBhcnNpbmcgaW5zdGVhZC5cbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgLy8gVGhlIG9sZCBmb3JtYXQgZGlkbid0LlxuICAgICAgICAgICAgYXJyID0gZGF0YS5hbnN3ZXIuc3BsaXQoXCIsXCIpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ibGFua0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAkKHRoaXMuYmxhbmtBcnJheVtpXSkuYXR0cihcInZhbHVlXCIsIGFycltpXSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXNlIHRoZSBmZWVkYmFjayBmcm9tIHRoZSBzZXJ2ZXIsIG9yIHJlY29tcHV0ZSBpdCBsb2NhbGx5LlxuICAgICAgICBpZiAoIXRoaXMuZmVlZGJhY2tBcnJheSkge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5RmVlZCA9IGRhdGEuZGlzcGxheUZlZWQ7XG4gICAgICAgICAgICB0aGlzLmNvcnJlY3QgPSBkYXRhLmNvcnJlY3Q7XG4gICAgICAgICAgICB0aGlzLmlzQ29ycmVjdEFycmF5ID0gZGF0YS5pc0NvcnJlY3RBcnJheTtcbiAgICAgICAgICAgIC8vIE9ubHkgcmVuZGVyIGlmIGFsbCB0aGUgZGF0YSBpcyBwcmVzZW50OyBsb2NhbCBzdG9yYWdlIG1pZ2h0IGhhdmUgb2xkIGRhdGEgbWlzc2luZyBzb21lIG9mIHRoZXNlIGl0ZW1zLlxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHR5cGVvZiB0aGlzLmRpc3BsYXlGZWVkICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIHRoaXMuY29ycmVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiB0aGlzLmlzQ29ycmVjdEFycmF5ICE9PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckZlZWRiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrQ3VycmVudEFuc3dlcigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoZWNrTG9jYWxTdG9yYWdlKCkge1xuICAgICAgICAvLyBMb2FkcyBwcmV2aW91cyBhbnN3ZXJzIGZyb20gbG9jYWwgc3RvcmFnZSBpZiB0aGV5IGV4aXN0XG4gICAgICAgIHZhciBzdG9yZWREYXRhO1xuICAgICAgICBpZiAodGhpcy5ncmFkZXJhY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbGVuID0gbG9jYWxTdG9yYWdlLmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbiA+IDApIHtcbiAgICAgICAgICAgIHZhciBleCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMubG9jYWxTdG9yYWdlS2V5KCkpO1xuICAgICAgICAgICAgaWYgKGV4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVkRGF0YSA9IEpTT04ucGFyc2UoZXgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXJyID0gc3RvcmVkRGF0YS5hbnN3ZXI7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGVycm9yIHdoaWxlIHBhcnNpbmc7IGxpa2VseSBkdWUgdG8gYmFkIHZhbHVlIHN0b3JlZCBpbiBzdG9yYWdlXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5sb2NhbFN0b3JhZ2VLZXkoKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0b3JlQW5zd2VycyhzdG9yZWREYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRMb2NhbFN0b3JhZ2UoZGF0YSkge1xuICAgICAgICBsZXQga2V5ID0gdGhpcy5sb2NhbFN0b3JhZ2VLZXkoKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgfVxuXG4gICAgY2hlY2tDdXJyZW50QW5zd2VyKCkge1xuICAgICAgICAvLyBTdGFydCBvZiB0aGUgZXZhbHVhdGlvbiBjaGFpblxuICAgICAgICB0aGlzLmlzQ29ycmVjdEFycmF5ID0gW107XG4gICAgICAgIHRoaXMuZGlzcGxheUZlZWQgPSBbXTtcbiAgICAgICAgdGhpcy5naXZlbl9hcnIgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmJsYW5rQXJyYXkubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB0aGlzLmdpdmVuX2Fyci5wdXNoKHRoaXMuYmxhbmtBcnJheVtpXS52YWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLnVzZVJ1bmVzdG9uZVNlcnZpY2VzKSB7XG4gICAgICAgICAgICBpZiAoZUJvb2tDb25maWcuZW5hYmxlQ29tcGFyZU1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmFibGVDb21wYXJlQnV0dG9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gR3JhZGUgbG9jYWxseSBpZiB3ZSBjYW4ndCBhc2sgdGhlIHNlcnZlciB0byBncmFkZS5cbiAgICAgICAgaWYgKHRoaXMuZmVlZGJhY2tBcnJheSkge1xuICAgICAgICAgICAgdGhpcy5ldmFsdWF0ZUFuc3dlcnMoKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1RpbWVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJGZWVkYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgbG9nQ3VycmVudEFuc3dlcihzaWQpIHtcbiAgICAgICAgbGV0IGFuc3dlciA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2l2ZW5fYXJyKTtcbiAgICAgICAgLy8gU2F2ZSB0aGUgYW5zd2VyIGxvY2FsbHkuXG4gICAgICAgIGxldCBmZWVkYmFjayA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0TG9jYWxTdG9yYWdlKHtcbiAgICAgICAgICAgIGFuc3dlcjogYW5zd2VyLFxuICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLFxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBldmVudDogXCJmaWxsYlwiLFxuICAgICAgICAgICAgYWN0OiBhbnN3ZXIgfHwgXCJcIixcbiAgICAgICAgICAgIGFuc3dlcjogYW5zd2VyIHx8IFwiXCIsXG4gICAgICAgICAgICBjb3JyZWN0OiB0aGlzLmNvcnJlY3QgPyBcIlRcIiA6IFwiRlwiLFxuICAgICAgICAgICAgZGl2X2lkOiB0aGlzLmRpdmlkLFxuICAgICAgICB9O1xuICAgICAgICBpZiAodHlwZW9mIHNpZCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgZGF0YS5zaWQgPSBzaWQ7XG4gICAgICAgICAgICBmZWVkYmFjayA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFBlciBgbG9nQm9va0V2ZW50IDxsb2dCb29rRXZlbnQ+YCwgdGhlIHJlc3VsdCBpcyB1bmRlZmluZWQgaWYgdGhlcmUncyBubyBzZXJ2ZXIuIE90aGVyd2lzZSwgdGhlIHNlcnZlciBwcm92aWRlcyB0aGUgZW5kcG9pbnQtc3BlY2lmaWMgcmVzdWx0cyBpbiBgYGRhdGEuZGV0YWlsc2BgOyBzZWUgYG1ha2VfanNvbl9yZXNwb25zZWAuXG4gICAgICAgIGRhdGEgPSBhd2FpdCB0aGlzLmxvZ0Jvb2tFdmVudChkYXRhKTtcbiAgICAgICAgbGV0IGRldGFpbCA9IGRhdGEgJiYgZGF0YS5kZXRhaWw7XG4gICAgICAgIGlmICghZmVlZGJhY2spIHJldHVybjtcbiAgICAgICAgaWYgKCF0aGlzLmZlZWRiYWNrQXJyYXkpIHtcbiAgICAgICAgICAgIC8vIE9uIHN1Y2Nlc3MsIHVwZGF0ZSB0aGUgZmVlZGJhY2sgZnJvbSB0aGUgc2VydmVyJ3MgZ3JhZGUuXG4gICAgICAgICAgICB0aGlzLnNldExvY2FsU3RvcmFnZSh7XG4gICAgICAgICAgICAgICAgYW5zd2VyOiBhbnN3ZXIsXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiBkZXRhaWwudGltZXN0YW1wLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNvcnJlY3QgPSBkZXRhaWwuY29ycmVjdDtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheUZlZWQgPSBkZXRhaWwuZGlzcGxheUZlZWQ7XG4gICAgICAgICAgICB0aGlzLmlzQ29ycmVjdEFycmF5ID0gZGV0YWlsLmlzQ29ycmVjdEFycmF5O1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzVGltZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckZlZWRiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRldGFpbDtcbiAgICB9XG5cbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgID09PSBFdmFsdWF0aW9uIG9mIGFuc3dlciBhbmQgPT09XG4gICAgPT09ICAgICBkaXNwbGF5IGZlZWRiYWNrICAgICA9PT1cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgIC8vIElucHV0czpcbiAgICAvL1xuICAgIC8vIC0gU3RyaW5ncyBlbnRlcmVkIGJ5IHRoZSBzdHVkZW50IGluIGBgdGhpcy5ibGFua0FycmF5W2ldLnZhbHVlYGAuXG4gICAgLy8gLSBGZWVkYmFjayBpbiBgYHRoaXMuZmVlZGJhY2tBcnJheWBgLlxuICAgIC8vXG4gICAgLy8gT3V0cHV0czpcbiAgICAvL1xuICAgIC8vIC0gYGB0aGlzLmRpc3BsYXlGZWVkYGAgaXMgYW4gYXJyYXkgb2YgSFRNTCBmZWVkYmFjay5cbiAgICAvLyAtIGBgdGhpcy5pc0NvcnJlY3RBcnJheWBgIGlzIGFuIGFycmF5IG9mIHRydWUsIGZhbHNlLCBvciBudWxsICh0aGUgcXVlc3Rpb24gd2Fzbid0IGFuc3dlcmVkKS5cbiAgICAvLyAtIGBgdGhpcy5jb3JyZWN0YGAgaXMgdHJ1ZSwgZmFsc2UsIG9yIG51bGwgKHRoZSBxdWVzdGlvbiB3YXNuJ3QgYW5zd2VyZWQpLlxuICAgIGV2YWx1YXRlQW5zd2VycygpIHtcbiAgICAgICAgLy8gS2VlcCB0cmFjayBpZiBhbGwgYW5zd2VycyBhcmUgY29ycmVjdCBvciBub3QuXG4gICAgICAgIHRoaXMuY29ycmVjdCA9IHRydWU7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ibGFua0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZ2l2ZW4gPSB0aGlzLmJsYW5rQXJyYXlbaV0udmFsdWU7XG4gICAgICAgICAgICAvLyBJZiB0aGlzIGJsYW5rIGlzIGVtcHR5LCBwcm92aWRlIG5vIGZlZWRiYWNrIGZvciBpdC5cbiAgICAgICAgICAgIGlmIChnaXZlbiA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNDb3JyZWN0QXJyYXkucHVzaChudWxsKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlGZWVkLnB1c2goJC5pMThuKFwibXNnX25vX2Fuc3dlclwiKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0ID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIExvb2sgdGhyb3VnaCBhbGwgZmVlZGJhY2sgZm9yIHRoaXMgYmxhbmsuIFRoZSBsYXN0IGVsZW1lbnQgaW4gdGhlIGFycmF5IGFsd2F5cyBtYXRjaGVzLiBJZiBubyBmZWVkYmFjayBmb3IgdGhpcyBibGFuayBleGlzdHMsIHVzZSBhbiBlbXB0eSBsaXN0LlxuICAgICAgICAgICAgICAgIHZhciBmYmwgPSB0aGlzLmZlZWRiYWNrQXJyYXlbaV0gfHwgW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBmYmwubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGxhc3QgaXRlbSBvZiBmZWVkYmFjayBhbHdheXMgbWF0Y2hlcy5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGogPT09IGZibC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlGZWVkLnB1c2goZmJsW2pdW1wiZmVlZGJhY2tcIl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHJlZ2V4cC4uLlxuICAgICAgICAgICAgICAgICAgICBpZiAoXCJyZWdleFwiIGluIGZibFtqXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhdHQgPSBSZWdFeHAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmJsW2pdW1wicmVnZXhcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmJsW2pdW1wicmVnZXhGbGFnc1wiXVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXR0LnRlc3QoZ2l2ZW4pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5RmVlZC5wdXNoKGZibFtqXVtcImZlZWRiYWNrXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBudW1iZXIuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmFzc2VydChcIm51bWJlclwiIGluIGZibFtqXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgW21pbiwgbWF4XSA9IGZibFtqXVtcIm51bWJlclwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbnZlcnQgdGhlIGdpdmVuIHN0cmluZyB0byBhIG51bWJlci4gV2hpbGUgdGhlcmUgYXJlIGBsb3RzIG9mIHdheXMgPGh0dHBzOi8vY29kZXJ3YWxsLmNvbS9wLzV0bGhtdy9jb252ZXJ0aW5nLXN0cmluZ3MtdG8tbnVtYmVyLWluLWphdmFzY3JpcHQtcGl0ZmFsbHM+YF8gdG8gZG8gdGhpczsgdGhpcyB2ZXJzaW9uIHN1cHBvcnRzIG90aGVyIGJhc2VzIChoZXgvYmluYXJ5L29jdGFsKSBhcyB3ZWxsIGFzIGZsb2F0cy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhY3R1YWwgPSArZ2l2ZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWN0dWFsID49IG1pbiAmJiBhY3R1YWwgPD0gbWF4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5RmVlZC5wdXNoKGZibFtqXVtcImZlZWRiYWNrXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBUaGUgYW5zd2VyIGlzIGNvcnJlY3QgaWYgaXQgbWF0Y2hlZCB0aGUgZmlyc3QgZWxlbWVudCBpbiB0aGUgYXJyYXkuIEEgc3BlY2lhbCBjYXNlOiBpZiBvbmx5IG9uZSBhbnN3ZXIgaXMgcHJvdmlkZWQsIGNvdW50IGl0IHdyb25nOyB0aGlzIGlzIGEgbWlzZm9ybWVkIHByb2JsZW0uXG4gICAgICAgICAgICAgICAgbGV0IGlzX2NvcnJlY3QgPSBqID09PSAwICYmIGZibC5sZW5ndGggPiAxO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNDb3JyZWN0QXJyYXkucHVzaChpc19jb3JyZWN0KTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzX2NvcnJlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucGVyY2VudCA9XG4gICAgICAgICAgICB0aGlzLmlzQ29ycmVjdEFycmF5LmZpbHRlcihCb29sZWFuKS5sZW5ndGggLyB0aGlzLmJsYW5rQXJyYXkubGVuZ3RoO1xuICAgIH1cblxuICAgIHJlbmRlckZlZWRiYWNrKCkge1xuICAgICAgICBpZiAodGhpcy5jb3JyZWN0KSB7XG4gICAgICAgICAgICAkKHRoaXMuZmVlZEJhY2tEaXYpLmF0dHIoXCJjbGFzc1wiLCBcImFsZXJ0IGFsZXJ0LWluZm9cIik7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuYmxhbmtBcnJheS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICQodGhpcy5ibGFua0FycmF5W2pdKS5yZW1vdmVDbGFzcyhcImlucHV0LXZhbGlkYXRpb24tZXJyb3JcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kaXNwbGF5RmVlZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheUZlZWQgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmJsYW5rQXJyYXkubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0NvcnJlY3RBcnJheVtqXSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMuYmxhbmtBcnJheVtqXSkuYWRkQ2xhc3MoXCJpbnB1dC12YWxpZGF0aW9uLWVycm9yXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcy5ibGFua0FycmF5W2pdKS5yZW1vdmVDbGFzcyhcImlucHV0LXZhbGlkYXRpb24tZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJCh0aGlzLmZlZWRCYWNrRGl2KS5hdHRyKFwiY2xhc3NcIiwgXCJhbGVydCBhbGVydC1kYW5nZXJcIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGZlZWRiYWNrX2h0bWwgPSBcIjx1bD5cIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRpc3BsYXlGZWVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmZWVkYmFja19odG1sICs9IFwiPGxpPlwiICsgdGhpcy5kaXNwbGF5RmVlZFtpXSArIFwiPC9saT5cIjtcbiAgICAgICAgfVxuICAgICAgICBmZWVkYmFja19odG1sICs9IFwiPC91bD5cIjtcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBsaXN0IGlmIGl0J3MganVzdCBvbmUgZWxlbWVudC5cbiAgICAgICAgaWYgKHRoaXMuZGlzcGxheUZlZWQubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgIGZlZWRiYWNrX2h0bWwgPSBmZWVkYmFja19odG1sLnNsaWNlKFxuICAgICAgICAgICAgICAgIFwiPHVsPjxsaT5cIi5sZW5ndGgsXG4gICAgICAgICAgICAgICAgLVwiPC9saT48L3VsPlwiLmxlbmd0aFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZlZWRCYWNrRGl2LmlubmVySFRNTCA9IGZlZWRiYWNrX2h0bWw7XG4gICAgICAgIGlmICh0eXBlb2YgTWF0aEpheCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy5xdWV1ZU1hdGhKYXgoZG9jdW1lbnQuYm9keSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PT0gRnVuY3Rpb25zIGZvciBjb21wYXJlIGJ1dHRvbiA9PT1cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICBlbmFibGVDb21wYXJlQnV0dG9uKCkge1xuICAgICAgICB0aGlzLmNvbXBhcmVCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gX2Bjb21wYXJlRklUQkFuc3dlcnNgXG4gICAgY29tcGFyZUZJVEJBbnN3ZXJzKCkge1xuICAgICAgICB2YXIgZGF0YSA9IHt9O1xuICAgICAgICBkYXRhLmRpdl9pZCA9IHRoaXMuZGl2aWQ7XG4gICAgICAgIGRhdGEuY291cnNlID0gZUJvb2tDb25maWcuY291cnNlO1xuICAgICAgICBqUXVlcnkuZ2V0KFxuICAgICAgICAgICAgYCR7ZUJvb2tDb25maWcubmV3X3NlcnZlcl9wcmVmaXh9L2Fzc2Vzc21lbnQvZ2V0dG9wMTBBbnN3ZXJzYCxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICB0aGlzLmNvbXBhcmVGSVRCXG4gICAgICAgICk7XG4gICAgfVxuICAgIGNvbXBhcmVGSVRCKGRhdGEsIHN0YXR1cywgd2hhdGV2ZXIpIHtcbiAgICAgICAgdmFyIGFuc3dlcnMgPSBkYXRhLmRldGFpbC5yZXM7XG4gICAgICAgIHZhciBtaXNjID0gZGF0YS5kZXRhaWwubWlzY2RhdGE7XG4gICAgICAgIHZhciBib2R5ID0gXCI8dGFibGU+XCI7XG4gICAgICAgIGJvZHkgKz0gXCI8dHI+PHRoPkFuc3dlcjwvdGg+PHRoPkNvdW50PC90aD48L3RyPlwiO1xuICAgICAgICBmb3IgKHZhciByb3cgaW4gYW5zd2Vycykge1xuICAgICAgICAgICAgYm9keSArPVxuICAgICAgICAgICAgICAgIFwiPHRyPjx0ZD5cIiArXG4gICAgICAgICAgICAgICAgYW5zd2Vyc1tyb3ddLmFuc3dlciArXG4gICAgICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXG4gICAgICAgICAgICAgICAgYW5zd2Vyc1tyb3ddLmNvdW50ICtcbiAgICAgICAgICAgICAgICBcIiB0aW1lczwvdGQ+PC90cj5cIjtcbiAgICAgICAgfVxuICAgICAgICBib2R5ICs9IFwiPC90YWJsZT5cIjtcbiAgICAgICAgdmFyIGh0bWwgPVxuICAgICAgICAgICAgXCI8ZGl2IGNsYXNzPSdtb2RhbCBmYWRlJz5cIiArXG4gICAgICAgICAgICBcIiAgICA8ZGl2IGNsYXNzPSdtb2RhbC1kaWFsb2cgY29tcGFyZS1tb2RhbCc+XCIgK1xuICAgICAgICAgICAgXCIgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWNvbnRlbnQnPlwiICtcbiAgICAgICAgICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtaGVhZGVyJz5cIiArXG4gICAgICAgICAgICBcIiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2Nsb3NlJyBkYXRhLWRpc21pc3M9J21vZGFsJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+JnRpbWVzOzwvYnV0dG9uPlwiICtcbiAgICAgICAgICAgIFwiICAgICAgICAgICAgICAgIDxoNCBjbGFzcz0nbW9kYWwtdGl0bGUnPlRvcCBBbnN3ZXJzPC9oND5cIiArXG4gICAgICAgICAgICBcIiAgICAgICAgICAgIDwvZGl2PlwiICtcbiAgICAgICAgICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtYm9keSc+XCIgK1xuICAgICAgICAgICAgYm9keSArXG4gICAgICAgICAgICBcIiAgICAgICAgICAgIDwvZGl2PlwiICtcbiAgICAgICAgICAgIFwiICAgICAgICA8L2Rpdj5cIiArXG4gICAgICAgICAgICBcIiAgICA8L2Rpdj5cIiArXG4gICAgICAgICAgICBcIjwvZGl2PlwiO1xuICAgICAgICB2YXIgZWwgPSAkKGh0bWwpO1xuICAgICAgICBlbC5tb2RhbCgpO1xuICAgIH1cblxuICAgIGRpc2FibGVJbnRlcmFjdGlvbigpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmJsYW5rQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYmxhbmtBcnJheVtpXS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PSBGaW5kIHRoZSBjdXN0b20gSFRNTCB0YWdzIGFuZCA9PVxuPT0gICBleGVjdXRlIG91ciBjb2RlIG9uIHRoZW0gICAgPT1cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4kKGRvY3VtZW50KS5vbihcInJ1bmVzdG9uZTpsb2dpbi1jb21wbGV0ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgJChcIltkYXRhLWNvbXBvbmVudD1maWxsaW50aGVibGFua11cIikuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdmFyIG9wdHMgPSB7XG4gICAgICAgICAgICBvcmlnOiB0aGlzLFxuICAgICAgICAgICAgdXNlUnVuZXN0b25lU2VydmljZXM6IGVCb29rQ29uZmlnLnVzZVJ1bmVzdG9uZVNlcnZpY2VzLFxuICAgICAgICB9O1xuICAgICAgICBpZiAoJCh0aGlzKS5jbG9zZXN0KFwiW2RhdGEtY29tcG9uZW50PXRpbWVkQXNzZXNzbWVudF1cIikubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIC8vIElmIHRoaXMgZWxlbWVudCBleGlzdHMgd2l0aGluIGEgdGltZWQgY29tcG9uZW50LCBkb24ndCByZW5kZXIgaXQgaGVyZVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBGSVRCTGlzdFt0aGlzLmlkXSA9IG5ldyBGSVRCKG9wdHMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgICAgIGBFcnJvciByZW5kZXJpbmcgRmlsbCBpbiB0aGUgQmxhbmsgUHJvYmxlbSAke3RoaXMuaWR9XG4gICAgICAgICAgICAgICAgICAgICBEZXRhaWxzOiAke2Vycn1gXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG4iLCJpbXBvcnQgRklUQiBmcm9tIFwiLi9maXRiLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lZEZJVEIgZXh0ZW5kcyBGSVRCIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIHN1cGVyKG9wdHMpO1xuICAgICAgICB0aGlzLnJlbmRlclRpbWVkSWNvbih0aGlzLmlucHV0RGl2KTtcbiAgICAgICAgdGhpcy5oaWRlQnV0dG9ucygpO1xuICAgICAgICB0aGlzLm5lZWRzUmVpbml0aWFsaXphdGlvbiA9IHRydWU7XG4gICAgfVxuICAgIGhpZGVCdXR0b25zKCkge1xuICAgICAgICAkKHRoaXMuc3VibWl0QnV0dG9uKS5oaWRlKCk7XG4gICAgICAgICQodGhpcy5jb21wYXJlQnV0dG9uKS5oaWRlKCk7XG4gICAgfVxuICAgIHJlbmRlclRpbWVkSWNvbihjb21wb25lbnQpIHtcbiAgICAgICAgLy8gcmVuZGVycyB0aGUgY2xvY2sgaWNvbiBvbiB0aW1lZCBjb21wb25lbnRzLiAgICBUaGUgY29tcG9uZW50IHBhcmFtZXRlclxuICAgICAgICAvLyBpcyB0aGUgZWxlbWVudCB0aGF0IHRoZSBpY29uIHNob3VsZCBiZSBhcHBlbmRlZCB0by5cbiAgICAgICAgdmFyIHRpbWVJY29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdmFyIHRpbWVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgJCh0aW1lSWNvbikuYXR0cih7XG4gICAgICAgICAgICBzcmM6IFwiLi4vX3N0YXRpYy9jbG9jay5wbmdcIixcbiAgICAgICAgICAgIHN0eWxlOiBcIndpZHRoOjE1cHg7aGVpZ2h0OjE1cHhcIixcbiAgICAgICAgfSk7XG4gICAgICAgIHRpbWVJY29uRGl2LmNsYXNzTmFtZSA9IFwidGltZVRpcFwiO1xuICAgICAgICB0aW1lSWNvbkRpdi50aXRsZSA9IFwiXCI7XG4gICAgICAgIHRpbWVJY29uRGl2LmFwcGVuZENoaWxkKHRpbWVJY29uKTtcbiAgICAgICAgJChjb21wb25lbnQpLnByZXBlbmQodGltZUljb25EaXYpO1xuICAgIH1cbiAgICBjaGVja0NvcnJlY3RUaW1lZCgpIHtcbiAgICAgICAgLy8gUmV0dXJucyBpZiB0aGUgcXVlc3Rpb24gd2FzIGNvcnJlY3QsIGluY29ycmVjdCwgb3Igc2tpcHBlZCAocmV0dXJuIG51bGwgaW4gdGhlIGxhc3QgY2FzZSlcbiAgICAgICAgc3dpdGNoICh0aGlzLmNvcnJlY3QpIHtcbiAgICAgICAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUXCI7XG4gICAgICAgICAgICBjYXNlIGZhbHNlOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZcIjtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGlkZUZlZWRiYWNrKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYmxhbmtBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgJCh0aGlzLmJsYW5rQXJyYXlbaV0pLnJlbW92ZUNsYXNzKFwiaW5wdXQtdmFsaWRhdGlvbi1lcnJvclwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZlZWRCYWNrRGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG5cbiAgICByZWluaXRpYWxpemVMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGZvciAobGV0IGJsYW5rIG9mIHRoaXMuYmxhbmtBcnJheSkge1xuICAgICAgICAgICAgJChibGFuaykuY2hhbmdlKHRoaXMucmVjb3JkQW5zd2VyZWQuYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlmICh0eXBlb2Ygd2luZG93LmNvbXBvbmVudF9mYWN0b3J5ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgd2luZG93LmNvbXBvbmVudF9mYWN0b3J5ID0ge307XG59XG53aW5kb3cuY29tcG9uZW50X2ZhY3RvcnkuZmlsbGludGhlYmxhbmsgPSBmdW5jdGlvbiAob3B0cykge1xuICAgIGlmIChvcHRzLnRpbWVkKSB7XG4gICAgICAgIHJldHVybiBuZXcgVGltZWRGSVRCKG9wdHMpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEZJVEIob3B0cyk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9