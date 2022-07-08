"use strict";
(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_clickableArea_js_timedclickable_js"],{

/***/ 51168:
/*!***************************************************!*\
  !*** ./runestone/clickableArea/css/clickable.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 5464:
/*!*************************************************!*\
  !*** ./runestone/clickableArea/js/clickable.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CAList": () => (/* binding */ CAList),
/* harmony export */   "default": () => (/* binding */ ClickableArea)
/* harmony export */ });
/* harmony import */ var _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/runestonebase.js */ 2568);
/* harmony import */ var _css_clickable_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/clickable.css */ 51168);
/*==========================================
=======     Master clickable.js     ========
============================================
===   This file contains the JS for the  ===
===  Runestone clickable area component. ===
============================================
===              Created by              ===
===           Isaiah Mayerchak           ===
===                7/1/15                ===
==========================================*/





var CAList = {}; // Object that contains all instances of ClickableArea objects

class ClickableArea extends _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(opts) {
        super(opts);
        var orig = opts.orig; // entire <div> element that will be replaced by new HTML
        this.origElem = orig;
        this.divid = orig.id;
        this.useRunestoneServices = opts.useRunestoneServices;
        this.clickableArray = []; // holds all clickable elements
        this.correctArray = []; // holds the IDs of all correct clickable span elements, used for eval
        this.incorrectArray = []; // holds IDs of all incorrect clickable span elements, used for eval
        //For use with Sphinx-rendered html
        this.isTable = false;
        if ($(this.origElem).data("cc") !== undefined) {
            if ($(this.origElem).is("[data-table]")) {
                this.isTable = true;
                this.ccArray = $(this.origElem).data("cc").split(";");
                this.ciArray = $(this.origElem).data("ci").split(";");
            } else {
                this.ccArray = $(this.origElem).data("cc").split(",");
                this.ciArray = $(this.origElem).data("ci").split(",");
            }
        }
        // For use in the recursive replace function
        this.clickIndex = 0; // Index of this.clickedIndexArray that we're checking against
        this.clickableCounter = 0; // Index of the current clickable element
        this.getQuestion();
        this.getFeedback();
        this.renderNewElements();
        this.caption = "Clickable";
        this.addCaption("runestone");
        this.checkServer("clickableArea", true);
    }
    /*===========================
    == Update basic attributes ==
    ===========================*/
    getQuestion() {
        for (var i = 0; i < this.origElem.childNodes.length; i++) {
            if ($(this.origElem.childNodes[i]).is("[data-question]")) {
                this.question = this.origElem.childNodes[i];
                break;
            }
        }
    }
    getFeedback() {
        this.feedback = "";
        for (var i = 0; i < this.origElem.childNodes.length; i++) {
            if ($(this.origElem.childNodes[i]).is("[data-feedback]")) {
                this.feedback = this.origElem.childNodes[i];
            }
        }
        if (this.feedback !== "") {
            // Get the feedback element out of the container if the user has defined feedback
            $(this.feedback).remove();
            this.feedback = this.feedback.innerHTML;
        }
    }
    /*===========================================
    ====   Functions generating final HTML   ====
    ===========================================*/
    renderNewElements() {
        // wrapper function for generating everything
        this.containerDiv = document.createElement("div");
        this.containerDiv.id = this.origElem.id;
        this.containerDiv.appendChild(this.question);
        $(this.containerDiv).addClass(this.origElem.getAttribute("class"));
        this.newDiv = document.createElement("div");
        var newContent = $(this.origElem).html();
        while (newContent[0] === "\n") {
            newContent = newContent.slice(1);
        }
        this.newDiv.innerHTML = newContent;
        this.containerDiv.appendChild(this.newDiv);
        this.createButtons();
        this.createFeedbackDiv();
        $(this.origElem).replaceWith(this.containerDiv);
    }
    createButtons() {
        this.submitButton = document.createElement("button"); // Check me button
        this.submitButton.textContent = "Check Me";
        $(this.submitButton).attr({
            class: "btn btn-success",
            name: "do answer",
            type: "button",
        });
        this.submitButton.onclick = function () {
            this.checkCurrentAnswer();
            this.logCurrentAnswer();
            this.renderFeedback();
        }.bind(this);
        this.containerDiv.appendChild(this.submitButton);
    }
    createFeedbackDiv() {
        this.feedBackDiv = document.createElement("div");
        this.containerDiv.appendChild(document.createElement("br"));
        this.containerDiv.appendChild(this.feedBackDiv);
    }
    /*===================================
    === Checking/restoring from storage ===
    ===================================*/
    restoreAnswers(data) {
        // Restore answers from storage retrieval done in RunestoneBase or from local storage
        if (data.answer !== undefined) {
            // if we got data from the server
            this.hasStoredAnswers = true;
            this.clickedIndexArray = data.answer.split(";");
        }
        if (this.ccArray === undefined) {
            this.modifyClickables(this.newDiv.childNodes);
        } else {
            // For use with Sphinx-rendered HTML
            this.ccCounter = 0;
            this.ccIndex = 0;
            this.ciIndex = 0;
            if (!this.isTable) {
                this.modifyViaCC(this.newDiv.children);
            } else {
                this.modifyTableViaCC(this.newDiv.children);
            }
        }
    }
    checkLocalStorage() {
        if (this.graderactive) {
            return;
        }
        var storageObj;
        // Gets previous answer data from local storage if it exists
        this.hasStoredAnswers = false;
        var len = localStorage.length;
        if (len > 0) {
            var ex = localStorage.getItem(this.localStorageKey());
            if (ex !== null) {
                this.hasStoredAnswers = true;
                try {
                    storageObj = JSON.parse(ex);
                    this.clickedIndexArray = storageObj.answer.split(";");
                } catch (err) {
                    // error while parsing; likely due to bad value stored in storage
                    console.log(err.message);
                    localStorage.removeItem(this.localStorageKey());
                    this.hasStoredAnswers = false;
                    this.restoreAnswers({});
                    return;
                }
                if (this.useRunestoneServices) {
                    // log answer to server
                    this.givenIndexArray = [];
                    for (var i = 0; i < this.clickableArray.length; i++) {
                        if (
                            $(this.clickableArray[i]).hasClass(
                                "clickable-clicked"
                            )
                        ) {
                            this.givenIndexArray.push(i);
                        }
                    }
                    this.logBookEvent({
                        event: "clickableArea",
                        act: this.clickedIndexArray.join(";"),
                        answer: this.clickedIndexArray.join(";"),
                        div_id: this.divid,
                        correct: storageObj.correct,
                    });
                }
            }
        }
        this.restoreAnswers({}); // pass empty object
    }
    setLocalStorage(data) {
        // Array of the indices of clicked elements is passed to local storage
        var answer;
        if (data.answer !== undefined) {
            // If we got data from the server, we can just use that
            answer = this.clickedIndexArray.join(";");
        } else {
            this.givenIndexArray = [];
            for (var i = 0; i < this.clickableArray.length; i++) {
                if ($(this.clickableArray[i]).hasClass("clickable-clicked")) {
                    this.givenIndexArray.push(i);
                }
            }
            answer = this.givenIndexArray.join(";");
        }
        var timeStamp = new Date();
        var correct = data.correct;
        var storageObject = {
            answer: answer,
            correct: correct,
            timestamp: timeStamp,
        };
        localStorage.setItem(
            this.localStorageKey(),
            JSON.stringify(storageObject)
        );
    }
    /*==========================
    === Auxilliary functions ===
    ==========================*/
    modifyClickables(childNodes) {
        // Strips the data-correct/data-incorrect labels and updates the correct/incorrect arrays
        for (var i = 0; i < childNodes.length; i++) {
            if (
                $(childNodes[i]).is("[data-correct]") ||
                $(childNodes[i]).is("[data-incorrect]")
            ) {
                this.manageNewClickable(childNodes[i]);
                if ($(childNodes[i]).is("[data-correct]")) {
                    $(childNodes[i]).removeAttr("data-correct");
                    this.correctArray.push(childNodes[i]);
                } else {
                    $(childNodes[i]).removeAttr("data-incorrect");
                    this.incorrectArray.push(childNodes[i]);
                }
            }
            if (childNodes[i].childNodes.length !== 0) {
                this.modifyClickables(childNodes[i].childNodes);
            }
        }
    }
    modifyViaCC(children) {
        for (var i = 0; i < children.length; i++) {
            if (children[i].children.length !== 0) {
                this.modifyViaCC(children[i].children);
            } else {
                this.ccCounter++;
                if (this.ccCounter === Math.floor(this.ccArray[this.ccIndex])) {
                    this.manageNewClickable(children[i]);
                    this.correctArray.push(children[i]);
                    this.ccIndex++;
                } else if (
                    this.ccCounter === Math.floor(this.ciArray[this.ciIndex])
                ) {
                    this.manageNewClickable(children[i]);
                    this.incorrectArray.push(children[i]);
                    this.ciIndex++;
                }
            }
        }
    }
    modifyTableViaCC(children) {
        // table version of modifyViaCC
        var tComponentArr = [];
        for (let i = 0; i < children.length; i++) {
            if (children[i].nodeName === "TABLE") {
                let tmp = children[i];
                for (let j = 0; j < tmp.children.length; j++) {
                    if (tmp.children[j].nodeName === "THEAD") {
                        tComponentArr.push(tmp.children[j]);
                    } else if (tmp.children[j].nodeName === "TBODY") {
                        tComponentArr.push(tmp.children[j]);
                    } else if (tmp.children[j].nodeName === "TFOOT") {
                        tComponentArr.push(tmp.children[j]);
                    }
                }
            }
        }
        for (var t = 0; t < tComponentArr.length; t++) {
            for (let i = 0; i < tComponentArr[t].children.length; i++) {
                this.ccCounter++;
                // First check if the entire row needs to be clickable
                if (
                    this.ccIndex < this.ccArray.length &&
                    this.ccCounter ===
                        Math.floor(this.ccArray[this.ccIndex].split(",")[0]) &&
                    Math.floor(this.ccArray[this.ccIndex].split(",")[1]) === 0
                ) {
                    this.manageNewClickable(tComponentArr[t].children[i]);
                    this.correctArray.push(tComponentArr[t].children[i]);
                    this.ccIndex++;
                } else if (
                    this.ciIndex < this.ciArray.length &&
                    this.ccCounter ===
                        Math.floor(this.ciArray[this.ciIndex].split(",")[0]) &&
                    Math.floor(this.ciArray[this.ciIndex].split(",")[1]) === 0
                ) {
                    this.manageNewClickable(tComponentArr[t].children[i]);
                    this.incorrectArray.push(tComponentArr[t].children[i]);
                    this.ciIndex++;
                } else {
                    // If not, check the individual data cells
                    for (
                        let j = 0;
                        j < tComponentArr[t].children[i].children.length;
                        j++
                    ) {
                        let tmp = j + 1;
                        if (
                            this.ccIndex < this.ccArray.length &&
                            tmp ===
                                Math.floor(
                                    this.ccArray[this.ccIndex].split(",")[1]
                                ) &&
                            this.ccCounter ===
                                Math.floor(
                                    this.ccArray[this.ccIndex].split(",")[0]
                                )
                        ) {
                            this.manageNewClickable(
                                tComponentArr[t].children[i].children[j]
                            );
                            this.correctArray.push(
                                tComponentArr[t].children[i].children[j]
                            );
                            this.ccIndex++;
                        } else if (
                            this.ciIndex < this.ciArray.length &&
                            tmp ===
                                Math.floor(
                                    this.ciArray[this.ciIndex].split(",")[1]
                                ) &&
                            this.ccCounter ===
                                Math.floor(
                                    this.ciArray[this.ciIndex].split(",")[0]
                                )
                        ) {
                            this.manageNewClickable(
                                tComponentArr[t].children[i].children[j]
                            );
                            this.incorrectArray.push(
                                tComponentArr[t].children[i].children[j]
                            );
                            this.ciIndex++;
                        }
                    }
                }
            }
        }
    }
    manageNewClickable(clickable) {
        // adds the "clickable" functionality
        $(clickable).addClass("clickable");
        if (this.hasStoredAnswers) {
            // Check if the element we're about to append to the pre was in local storage as clicked via its index
            if (
                this.clickedIndexArray[this.clickIndex].toString() ===
                this.clickableCounter.toString()
            ) {
                $(clickable).addClass("clickable-clicked");
                this.clickIndex++;
                if (this.clickIndex === this.clickedIndexArray.length) {
                    // Stop doing this if the index array is used up
                    this.hasStoredAnswers = false;
                }
            }
        }
        let self = this;
        clickable.onclick = function () {
            self.isAnswered = true;
            if ($(this).hasClass("clickable-clicked")) {
                $(this).removeClass("clickable-clicked");
                $(this).removeClass("clickable-incorrect");
            } else {
                $(this).addClass("clickable-clicked");
            }
        };
        this.clickableArray.push(clickable);
        this.clickableCounter++;
    }
    /*======================================
    == Evaluation and displaying feedback ==
    ======================================*/
    checkCurrentAnswer() {
        // Evaluation is done by iterating over the correct/incorrect arrays and checking by class
        this.correct = true;
        this.correctNum = 0;
        this.incorrectNum = 0;
        for (let i = 0; i < this.correctArray.length; i++) {
            if (!$(this.correctArray[i]).hasClass("clickable-clicked")) {
                this.correct = false;
            } else {
                this.correctNum++;
            }
        }
        for (let i = 0; i < this.incorrectArray.length; i++) {
            if ($(this.incorrectArray[i]).hasClass("clickable-clicked")) {
                this.correct = false;
                this.incorrectNum++;
            } else {
                $(this.incorrectArray[i]).removeClass("clickable-incorrect");
            }
        }
        this.percent =
            (this.correctNum - this.incorrectNum) / this.correctArray.length;
        this.setLocalStorage({ correct: this.correct ? "T" : "F" });
    }

    async logCurrentAnswer(sid) {
        const answer = this.givenIndexArray.join(";");
        let data = {
            event: "clickableArea",
            answer: answer,
            act: answer,
            div_id: this.divid,
            correct: this.correct ? "T" : "F",
        };
        if (typeof sid !== "undefined") {
            data.sid = sid;
        }
        await this.logBookEvent(data);
    }

    renderFeedback() {
        if (this.correct) {
            $(this.feedBackDiv).html("You are Correct!");
            $(this.feedBackDiv).attr("class", "alert alert-info");
        } else {
            for (let i = 0; i < this.incorrectArray.length; i++) {
                if ($(this.incorrectArray[i]).hasClass("clickable-clicked")) {
                    $(this.incorrectArray[i]).addClass("clickable-incorrect");
                } else {
                    $(this.incorrectArray[i]).removeClass(
                        "clickable-incorrect"
                    );
                }
            }
            $(this.feedBackDiv).html(
                "Incorrect. You clicked on " +
                    this.correctNum +
                    " of the " +
                    this.correctArray.length.toString() +
                    " correct elements and " +
                    this.incorrectNum +
                    " of the " +
                    this.incorrectArray.length.toString() +
                    " incorrect elements. " +
                    this.feedback
            );
            $(this.feedBackDiv).attr("class", "alert alert-danger");
        }
    }

    disableInteraction() {
        for (var i = 0; i < this.clickableArray.length; i++) {
            $(this.clickableArray[i]).css("cursor", "initial");
            this.clickableArray[i].onclick = function () {
                return;
            };
        }
    }
}

/*=================================
== Find the custom HTML tags and ==
==   execute our code on them    ==
=================================*/
$(document).on("runestone:login-complete", function () {
    $("[data-component=clickablearea]").each(function (index) {
        if ($(this).closest("[data-component=timedAssessment]").length == 0) {
            // If this element exists within a timed component, don't render it here
            try {
                CAList[this.id] = new ClickableArea({
                    orig: this,
                    useRunestoneServices: eBookConfig.useRunestoneServices,
                });
            } catch (err) {
                console.log(`Error rendering ClickableArea Problem ${this.id}
                             Details: ${err}`);
            }
        }
    });
});


/***/ }),

/***/ 61581:
/*!******************************************************!*\
  !*** ./runestone/clickableArea/js/timedclickable.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TimedClickableArea)
/* harmony export */ });
/* harmony import */ var _clickable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickable.js */ 5464);


("use strict");

class TimedClickableArea extends _clickable_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(opts) {
        super(opts);
        this.restoreAnswers({});
        this.renderTimedIcon(this.containerDiv);
        this.hideButtons();
    }

    hideButtons() {
        $(this.submitButton).hide();
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
        if (this.correctNum === 0 && this.incorrectNum === 0) {
            this.correct = null;
        }
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
        $(this.feedBackDiv).hide();
    }
}

if (typeof window.component_factory === "undefined") {
    window.component_factory = {};
}
window.component_factory.clickablearea = function (opts) {
    if (opts.timed) {
        return new TimedClickableArea(opts);
    }
    return new _clickable_js__WEBPACK_IMPORTED_MODULE_0__["default"](opts);
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuZXN0b25lX2NsaWNrYWJsZUFyZWFfanNfdGltZWRjbGlja2FibGVfanMuNDBkNzNkYzBkNTdmZDdjZi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNhOztBQUVnRDtBQUMvQjs7QUFFdkIsaUJBQWlCOztBQUVULDRCQUE0QixtRUFBYTtBQUN4RDtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQyxnQ0FBZ0M7QUFDaEMsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkUsbUVBQW1FO0FBQ25FLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFDQUFxQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFDQUFxQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsNEJBQTRCLGdDQUFnQztBQUM1RDtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsZ0NBQWdDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2QscUVBQXFFO0FBQ3JFLHdDQUF3QyxJQUFJO0FBQzVDO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzVkMEM7O0FBRTNDOztBQUVlLGlDQUFpQyxxREFBYTtBQUM3RDtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscURBQWE7QUFDNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2NsaWNrYWJsZUFyZWEvY3NzL2NsaWNrYWJsZS5jc3M/NjFhNyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2NsaWNrYWJsZUFyZWEvanMvY2xpY2thYmxlLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvY2xpY2thYmxlQXJlYS9qcy90aW1lZGNsaWNrYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuPT09PT09PSAgICAgTWFzdGVyIGNsaWNrYWJsZS5qcyAgICAgPT09PT09PT1cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT0gICBUaGlzIGZpbGUgY29udGFpbnMgdGhlIEpTIGZvciB0aGUgID09PVxuPT09ICBSdW5lc3RvbmUgY2xpY2thYmxlIGFyZWEgY29tcG9uZW50LiA9PT1cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT0gICAgICAgICAgICAgIENyZWF0ZWQgYnkgICAgICAgICAgICAgID09PVxuPT09ICAgICAgICAgICBJc2FpYWggTWF5ZXJjaGFrICAgICAgICAgICA9PT1cbj09PSAgICAgICAgICAgICAgICA3LzEvMTUgICAgICAgICAgICAgICAgPT09XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdW5lc3RvbmVCYXNlIGZyb20gXCIuLi8uLi9jb21tb24vanMvcnVuZXN0b25lYmFzZS5qc1wiO1xuaW1wb3J0IFwiLi4vY3NzL2NsaWNrYWJsZS5jc3NcIjtcblxuZXhwb3J0IHZhciBDQUxpc3QgPSB7fTsgLy8gT2JqZWN0IHRoYXQgY29udGFpbnMgYWxsIGluc3RhbmNlcyBvZiBDbGlja2FibGVBcmVhIG9iamVjdHNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xpY2thYmxlQXJlYSBleHRlbmRzIFJ1bmVzdG9uZUJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgc3VwZXIob3B0cyk7XG4gICAgICAgIHZhciBvcmlnID0gb3B0cy5vcmlnOyAvLyBlbnRpcmUgPGRpdj4gZWxlbWVudCB0aGF0IHdpbGwgYmUgcmVwbGFjZWQgYnkgbmV3IEhUTUxcbiAgICAgICAgdGhpcy5vcmlnRWxlbSA9IG9yaWc7XG4gICAgICAgIHRoaXMuZGl2aWQgPSBvcmlnLmlkO1xuICAgICAgICB0aGlzLnVzZVJ1bmVzdG9uZVNlcnZpY2VzID0gb3B0cy51c2VSdW5lc3RvbmVTZXJ2aWNlcztcbiAgICAgICAgdGhpcy5jbGlja2FibGVBcnJheSA9IFtdOyAvLyBob2xkcyBhbGwgY2xpY2thYmxlIGVsZW1lbnRzXG4gICAgICAgIHRoaXMuY29ycmVjdEFycmF5ID0gW107IC8vIGhvbGRzIHRoZSBJRHMgb2YgYWxsIGNvcnJlY3QgY2xpY2thYmxlIHNwYW4gZWxlbWVudHMsIHVzZWQgZm9yIGV2YWxcbiAgICAgICAgdGhpcy5pbmNvcnJlY3RBcnJheSA9IFtdOyAvLyBob2xkcyBJRHMgb2YgYWxsIGluY29ycmVjdCBjbGlja2FibGUgc3BhbiBlbGVtZW50cywgdXNlZCBmb3IgZXZhbFxuICAgICAgICAvL0ZvciB1c2Ugd2l0aCBTcGhpbngtcmVuZGVyZWQgaHRtbFxuICAgICAgICB0aGlzLmlzVGFibGUgPSBmYWxzZTtcbiAgICAgICAgaWYgKCQodGhpcy5vcmlnRWxlbSkuZGF0YShcImNjXCIpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMub3JpZ0VsZW0pLmlzKFwiW2RhdGEtdGFibGVdXCIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNjQXJyYXkgPSAkKHRoaXMub3JpZ0VsZW0pLmRhdGEoXCJjY1wiKS5zcGxpdChcIjtcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5jaUFycmF5ID0gJCh0aGlzLm9yaWdFbGVtKS5kYXRhKFwiY2lcIikuc3BsaXQoXCI7XCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNjQXJyYXkgPSAkKHRoaXMub3JpZ0VsZW0pLmRhdGEoXCJjY1wiKS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5jaUFycmF5ID0gJCh0aGlzLm9yaWdFbGVtKS5kYXRhKFwiY2lcIikuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEZvciB1c2UgaW4gdGhlIHJlY3Vyc2l2ZSByZXBsYWNlIGZ1bmN0aW9uXG4gICAgICAgIHRoaXMuY2xpY2tJbmRleCA9IDA7IC8vIEluZGV4IG9mIHRoaXMuY2xpY2tlZEluZGV4QXJyYXkgdGhhdCB3ZSdyZSBjaGVja2luZyBhZ2FpbnN0XG4gICAgICAgIHRoaXMuY2xpY2thYmxlQ291bnRlciA9IDA7IC8vIEluZGV4IG9mIHRoZSBjdXJyZW50IGNsaWNrYWJsZSBlbGVtZW50XG4gICAgICAgIHRoaXMuZ2V0UXVlc3Rpb24oKTtcbiAgICAgICAgdGhpcy5nZXRGZWVkYmFjaygpO1xuICAgICAgICB0aGlzLnJlbmRlck5ld0VsZW1lbnRzKCk7XG4gICAgICAgIHRoaXMuY2FwdGlvbiA9IFwiQ2xpY2thYmxlXCI7XG4gICAgICAgIHRoaXMuYWRkQ2FwdGlvbihcInJ1bmVzdG9uZVwiKTtcbiAgICAgICAgdGhpcy5jaGVja1NlcnZlcihcImNsaWNrYWJsZUFyZWFcIiwgdHJ1ZSk7XG4gICAgfVxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgPT0gVXBkYXRlIGJhc2ljIGF0dHJpYnV0ZXMgPT1cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgIGdldFF1ZXN0aW9uKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub3JpZ0VsZW0uY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCQodGhpcy5vcmlnRWxlbS5jaGlsZE5vZGVzW2ldKS5pcyhcIltkYXRhLXF1ZXN0aW9uXVwiKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb24gPSB0aGlzLm9yaWdFbGVtLmNoaWxkTm9kZXNbaV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0RmVlZGJhY2soKSB7XG4gICAgICAgIHRoaXMuZmVlZGJhY2sgPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub3JpZ0VsZW0uY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCQodGhpcy5vcmlnRWxlbS5jaGlsZE5vZGVzW2ldKS5pcyhcIltkYXRhLWZlZWRiYWNrXVwiKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmVlZGJhY2sgPSB0aGlzLm9yaWdFbGVtLmNoaWxkTm9kZXNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZmVlZGJhY2sgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIC8vIEdldCB0aGUgZmVlZGJhY2sgZWxlbWVudCBvdXQgb2YgdGhlIGNvbnRhaW5lciBpZiB0aGUgdXNlciBoYXMgZGVmaW5lZCBmZWVkYmFja1xuICAgICAgICAgICAgJCh0aGlzLmZlZWRiYWNrKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMuZmVlZGJhY2sgPSB0aGlzLmZlZWRiYWNrLmlubmVySFRNTDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PT09ICAgRnVuY3Rpb25zIGdlbmVyYXRpbmcgZmluYWwgSFRNTCAgID09PT1cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICByZW5kZXJOZXdFbGVtZW50cygpIHtcbiAgICAgICAgLy8gd3JhcHBlciBmdW5jdGlvbiBmb3IgZ2VuZXJhdGluZyBldmVyeXRoaW5nXG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuaWQgPSB0aGlzLm9yaWdFbGVtLmlkO1xuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0aGlzLnF1ZXN0aW9uKTtcbiAgICAgICAgJCh0aGlzLmNvbnRhaW5lckRpdikuYWRkQ2xhc3ModGhpcy5vcmlnRWxlbS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSk7XG4gICAgICAgIHRoaXMubmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdmFyIG5ld0NvbnRlbnQgPSAkKHRoaXMub3JpZ0VsZW0pLmh0bWwoKTtcbiAgICAgICAgd2hpbGUgKG5ld0NvbnRlbnRbMF0gPT09IFwiXFxuXCIpIHtcbiAgICAgICAgICAgIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LnNsaWNlKDEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmV3RGl2LmlubmVySFRNTCA9IG5ld0NvbnRlbnQ7XG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHRoaXMubmV3RGl2KTtcbiAgICAgICAgdGhpcy5jcmVhdGVCdXR0b25zKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlRmVlZGJhY2tEaXYoKTtcbiAgICAgICAgJCh0aGlzLm9yaWdFbGVtKS5yZXBsYWNlV2l0aCh0aGlzLmNvbnRhaW5lckRpdik7XG4gICAgfVxuICAgIGNyZWF0ZUJ1dHRvbnMoKSB7XG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTsgLy8gQ2hlY2sgbWUgYnV0dG9uXG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDaGVjayBNZVwiO1xuICAgICAgICAkKHRoaXMuc3VibWl0QnV0dG9uKS5hdHRyKHtcbiAgICAgICAgICAgIGNsYXNzOiBcImJ0biBidG4tc3VjY2Vzc1wiLFxuICAgICAgICAgICAgbmFtZTogXCJkbyBhbnN3ZXJcIixcbiAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5jaGVja0N1cnJlbnRBbnN3ZXIoKTtcbiAgICAgICAgICAgIHRoaXMubG9nQ3VycmVudEFuc3dlcigpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJGZWVkYmFjaygpO1xuICAgICAgICB9LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHRoaXMuc3VibWl0QnV0dG9uKTtcbiAgICB9XG4gICAgY3JlYXRlRmVlZGJhY2tEaXYoKSB7XG4gICAgICAgIHRoaXMuZmVlZEJhY2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0aGlzLmZlZWRCYWNrRGl2KTtcbiAgICB9XG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgID09PSBDaGVja2luZy9yZXN0b3JpbmcgZnJvbSBzdG9yYWdlID09PVxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICByZXN0b3JlQW5zd2VycyhkYXRhKSB7XG4gICAgICAgIC8vIFJlc3RvcmUgYW5zd2VycyBmcm9tIHN0b3JhZ2UgcmV0cmlldmFsIGRvbmUgaW4gUnVuZXN0b25lQmFzZSBvciBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgaWYgKGRhdGEuYW5zd2VyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIGlmIHdlIGdvdCBkYXRhIGZyb20gdGhlIHNlcnZlclxuICAgICAgICAgICAgdGhpcy5oYXNTdG9yZWRBbnN3ZXJzID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY2xpY2tlZEluZGV4QXJyYXkgPSBkYXRhLmFuc3dlci5zcGxpdChcIjtcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2NBcnJheSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGlmeUNsaWNrYWJsZXModGhpcy5uZXdEaXYuY2hpbGROb2Rlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBGb3IgdXNlIHdpdGggU3BoaW54LXJlbmRlcmVkIEhUTUxcbiAgICAgICAgICAgIHRoaXMuY2NDb3VudGVyID0gMDtcbiAgICAgICAgICAgIHRoaXMuY2NJbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLmNpSW5kZXggPSAwO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzVGFibGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGlmeVZpYUNDKHRoaXMubmV3RGl2LmNoaWxkcmVuKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RpZnlUYWJsZVZpYUNDKHRoaXMubmV3RGl2LmNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGVja0xvY2FsU3RvcmFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JhZGVyYWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0b3JhZ2VPYmo7XG4gICAgICAgIC8vIEdldHMgcHJldmlvdXMgYW5zd2VyIGRhdGEgZnJvbSBsb2NhbCBzdG9yYWdlIGlmIGl0IGV4aXN0c1xuICAgICAgICB0aGlzLmhhc1N0b3JlZEFuc3dlcnMgPSBmYWxzZTtcbiAgICAgICAgdmFyIGxlbiA9IGxvY2FsU3RvcmFnZS5sZW5ndGg7XG4gICAgICAgIGlmIChsZW4gPiAwKSB7XG4gICAgICAgICAgICB2YXIgZXggPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmxvY2FsU3RvcmFnZUtleSgpKTtcbiAgICAgICAgICAgIGlmIChleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzU3RvcmVkQW5zd2VycyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmFnZU9iaiA9IEpTT04ucGFyc2UoZXgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWNrZWRJbmRleEFycmF5ID0gc3RvcmFnZU9iai5hbnN3ZXIuc3BsaXQoXCI7XCIpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAvLyBlcnJvciB3aGlsZSBwYXJzaW5nOyBsaWtlbHkgZHVlIHRvIGJhZCB2YWx1ZSBzdG9yZWQgaW4gc3RvcmFnZVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMubG9jYWxTdG9yYWdlS2V5KCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc1N0b3JlZEFuc3dlcnMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXN0b3JlQW5zd2Vycyh7fSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlUnVuZXN0b25lU2VydmljZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbG9nIGFuc3dlciB0byBzZXJ2ZXJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5naXZlbkluZGV4QXJyYXkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNsaWNrYWJsZUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzLmNsaWNrYWJsZUFycmF5W2ldKS5oYXNDbGFzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGlja2FibGUtY2xpY2tlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5naXZlbkluZGV4QXJyYXkucHVzaChpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ0Jvb2tFdmVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudDogXCJjbGlja2FibGVBcmVhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Q6IHRoaXMuY2xpY2tlZEluZGV4QXJyYXkuam9pbihcIjtcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXI6IHRoaXMuY2xpY2tlZEluZGV4QXJyYXkuam9pbihcIjtcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXZfaWQ6IHRoaXMuZGl2aWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3JyZWN0OiBzdG9yYWdlT2JqLmNvcnJlY3QsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc3RvcmVBbnN3ZXJzKHt9KTsgLy8gcGFzcyBlbXB0eSBvYmplY3RcbiAgICB9XG4gICAgc2V0TG9jYWxTdG9yYWdlKGRhdGEpIHtcbiAgICAgICAgLy8gQXJyYXkgb2YgdGhlIGluZGljZXMgb2YgY2xpY2tlZCBlbGVtZW50cyBpcyBwYXNzZWQgdG8gbG9jYWwgc3RvcmFnZVxuICAgICAgICB2YXIgYW5zd2VyO1xuICAgICAgICBpZiAoZGF0YS5hbnN3ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gSWYgd2UgZ290IGRhdGEgZnJvbSB0aGUgc2VydmVyLCB3ZSBjYW4ganVzdCB1c2UgdGhhdFxuICAgICAgICAgICAgYW5zd2VyID0gdGhpcy5jbGlja2VkSW5kZXhBcnJheS5qb2luKFwiO1wiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2l2ZW5JbmRleEFycmF5ID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2xpY2thYmxlQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzLmNsaWNrYWJsZUFycmF5W2ldKS5oYXNDbGFzcyhcImNsaWNrYWJsZS1jbGlja2VkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2l2ZW5JbmRleEFycmF5LnB1c2goaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYW5zd2VyID0gdGhpcy5naXZlbkluZGV4QXJyYXkuam9pbihcIjtcIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRpbWVTdGFtcCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHZhciBjb3JyZWN0ID0gZGF0YS5jb3JyZWN0O1xuICAgICAgICB2YXIgc3RvcmFnZU9iamVjdCA9IHtcbiAgICAgICAgICAgIGFuc3dlcjogYW5zd2VyLFxuICAgICAgICAgICAgY29ycmVjdDogY29ycmVjdCxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogdGltZVN0YW1wLFxuICAgICAgICB9O1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgIHRoaXMubG9jYWxTdG9yYWdlS2V5KCksXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShzdG9yYWdlT2JqZWN0KVxuICAgICAgICApO1xuICAgIH1cbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgPT09IEF1eGlsbGlhcnkgZnVuY3Rpb25zID09PVxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICBtb2RpZnlDbGlja2FibGVzKGNoaWxkTm9kZXMpIHtcbiAgICAgICAgLy8gU3RyaXBzIHRoZSBkYXRhLWNvcnJlY3QvZGF0YS1pbmNvcnJlY3QgbGFiZWxzIGFuZCB1cGRhdGVzIHRoZSBjb3JyZWN0L2luY29ycmVjdCBhcnJheXNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgJChjaGlsZE5vZGVzW2ldKS5pcyhcIltkYXRhLWNvcnJlY3RdXCIpIHx8XG4gICAgICAgICAgICAgICAgJChjaGlsZE5vZGVzW2ldKS5pcyhcIltkYXRhLWluY29ycmVjdF1cIilcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMubWFuYWdlTmV3Q2xpY2thYmxlKGNoaWxkTm9kZXNbaV0pO1xuICAgICAgICAgICAgICAgIGlmICgkKGNoaWxkTm9kZXNbaV0pLmlzKFwiW2RhdGEtY29ycmVjdF1cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgJChjaGlsZE5vZGVzW2ldKS5yZW1vdmVBdHRyKFwiZGF0YS1jb3JyZWN0XCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvcnJlY3RBcnJheS5wdXNoKGNoaWxkTm9kZXNbaV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQoY2hpbGROb2Rlc1tpXSkucmVtb3ZlQXR0cihcImRhdGEtaW5jb3JyZWN0XCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluY29ycmVjdEFycmF5LnB1c2goY2hpbGROb2Rlc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZXNbaV0uY2hpbGROb2Rlcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGlmeUNsaWNrYWJsZXMoY2hpbGROb2Rlc1tpXS5jaGlsZE5vZGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBtb2RpZnlWaWFDQyhjaGlsZHJlbikge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGRyZW5baV0uY2hpbGRyZW4ubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RpZnlWaWFDQyhjaGlsZHJlbltpXS5jaGlsZHJlbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY2NDb3VudGVyKys7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2NDb3VudGVyID09PSBNYXRoLmZsb29yKHRoaXMuY2NBcnJheVt0aGlzLmNjSW5kZXhdKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hbmFnZU5ld0NsaWNrYWJsZShjaGlsZHJlbltpXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdEFycmF5LnB1c2goY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNjSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNjQ291bnRlciA9PT0gTWF0aC5mbG9vcih0aGlzLmNpQXJyYXlbdGhpcy5jaUluZGV4XSlcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYW5hZ2VOZXdDbGlja2FibGUoY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluY29ycmVjdEFycmF5LnB1c2goY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNpSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbW9kaWZ5VGFibGVWaWFDQyhjaGlsZHJlbikge1xuICAgICAgICAvLyB0YWJsZSB2ZXJzaW9uIG9mIG1vZGlmeVZpYUNDXG4gICAgICAgIHZhciB0Q29tcG9uZW50QXJyID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjaGlsZHJlbltpXS5ub2RlTmFtZSA9PT0gXCJUQUJMRVwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRtcCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdG1wLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0bXAuY2hpbGRyZW5bal0ubm9kZU5hbWUgPT09IFwiVEhFQURcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdENvbXBvbmVudEFyci5wdXNoKHRtcC5jaGlsZHJlbltqXSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodG1wLmNoaWxkcmVuW2pdLm5vZGVOYW1lID09PSBcIlRCT0RZXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRDb21wb25lbnRBcnIucHVzaCh0bXAuY2hpbGRyZW5bal0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRtcC5jaGlsZHJlbltqXS5ub2RlTmFtZSA9PT0gXCJURk9PVFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0Q29tcG9uZW50QXJyLnB1c2godG1wLmNoaWxkcmVuW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IHRDb21wb25lbnRBcnIubGVuZ3RoOyB0KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdENvbXBvbmVudEFyclt0XS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2NDb3VudGVyKys7XG4gICAgICAgICAgICAgICAgLy8gRmlyc3QgY2hlY2sgaWYgdGhlIGVudGlyZSByb3cgbmVlZHMgdG8gYmUgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNjSW5kZXggPCB0aGlzLmNjQXJyYXkubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2NDb3VudGVyID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcih0aGlzLmNjQXJyYXlbdGhpcy5jY0luZGV4XS5zcGxpdChcIixcIilbMF0pICYmXG4gICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IodGhpcy5jY0FycmF5W3RoaXMuY2NJbmRleF0uc3BsaXQoXCIsXCIpWzFdKSA9PT0gMFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hbmFnZU5ld0NsaWNrYWJsZSh0Q29tcG9uZW50QXJyW3RdLmNoaWxkcmVuW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0QXJyYXkucHVzaCh0Q29tcG9uZW50QXJyW3RdLmNoaWxkcmVuW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jY0luZGV4Kys7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaUluZGV4IDwgdGhpcy5jaUFycmF5Lmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNjQ291bnRlciA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IodGhpcy5jaUFycmF5W3RoaXMuY2lJbmRleF0uc3BsaXQoXCIsXCIpWzBdKSAmJlxuICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKHRoaXMuY2lBcnJheVt0aGlzLmNpSW5kZXhdLnNwbGl0KFwiLFwiKVsxXSkgPT09IDBcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYW5hZ2VOZXdDbGlja2FibGUodENvbXBvbmVudEFyclt0XS5jaGlsZHJlbltpXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5jb3JyZWN0QXJyYXkucHVzaCh0Q29tcG9uZW50QXJyW3RdLmNoaWxkcmVuW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaUluZGV4Kys7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgbm90LCBjaGVjayB0aGUgaW5kaXZpZHVhbCBkYXRhIGNlbGxzXG4gICAgICAgICAgICAgICAgICAgIGZvciAoXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaiA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBqIDwgdENvbXBvbmVudEFyclt0XS5jaGlsZHJlbltpXS5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKytcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG1wID0gaiArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jY0luZGV4IDwgdGhpcy5jY0FycmF5Lmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcCA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2NBcnJheVt0aGlzLmNjSW5kZXhdLnNwbGl0KFwiLFwiKVsxXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jY0NvdW50ZXIgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNjQXJyYXlbdGhpcy5jY0luZGV4XS5zcGxpdChcIixcIilbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYW5hZ2VOZXdDbGlja2FibGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRDb21wb25lbnRBcnJbdF0uY2hpbGRyZW5baV0uY2hpbGRyZW5bal1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdEFycmF5LnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRDb21wb25lbnRBcnJbdF0uY2hpbGRyZW5baV0uY2hpbGRyZW5bal1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2NJbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNpSW5kZXggPCB0aGlzLmNpQXJyYXkubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG1wID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaUFycmF5W3RoaXMuY2lJbmRleF0uc3BsaXQoXCIsXCIpWzFdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNjQ291bnRlciA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2lBcnJheVt0aGlzLmNpSW5kZXhdLnNwbGl0KFwiLFwiKVswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hbmFnZU5ld0NsaWNrYWJsZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdENvbXBvbmVudEFyclt0XS5jaGlsZHJlbltpXS5jaGlsZHJlbltqXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmNvcnJlY3RBcnJheS5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Q29tcG9uZW50QXJyW3RdLmNoaWxkcmVuW2ldLmNoaWxkcmVuW2pdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNpSW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBtYW5hZ2VOZXdDbGlja2FibGUoY2xpY2thYmxlKSB7XG4gICAgICAgIC8vIGFkZHMgdGhlIFwiY2xpY2thYmxlXCIgZnVuY3Rpb25hbGl0eVxuICAgICAgICAkKGNsaWNrYWJsZSkuYWRkQ2xhc3MoXCJjbGlja2FibGVcIik7XG4gICAgICAgIGlmICh0aGlzLmhhc1N0b3JlZEFuc3dlcnMpIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBlbGVtZW50IHdlJ3JlIGFib3V0IHRvIGFwcGVuZCB0byB0aGUgcHJlIHdhcyBpbiBsb2NhbCBzdG9yYWdlIGFzIGNsaWNrZWQgdmlhIGl0cyBpbmRleFxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMuY2xpY2tlZEluZGV4QXJyYXlbdGhpcy5jbGlja0luZGV4XS50b1N0cmluZygpID09PVxuICAgICAgICAgICAgICAgIHRoaXMuY2xpY2thYmxlQ291bnRlci50b1N0cmluZygpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAkKGNsaWNrYWJsZSkuYWRkQ2xhc3MoXCJjbGlja2FibGUtY2xpY2tlZFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWNrSW5kZXgrKztcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jbGlja0luZGV4ID09PSB0aGlzLmNsaWNrZWRJbmRleEFycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTdG9wIGRvaW5nIHRoaXMgaWYgdGhlIGluZGV4IGFycmF5IGlzIHVzZWQgdXBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNTdG9yZWRBbnN3ZXJzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgY2xpY2thYmxlLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLmlzQW5zd2VyZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJjbGlja2FibGUtY2xpY2tlZFwiKSkge1xuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJjbGlja2FibGUtY2xpY2tlZFwiKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiY2xpY2thYmxlLWluY29ycmVjdFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImNsaWNrYWJsZS1jbGlja2VkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsaWNrYWJsZUFycmF5LnB1c2goY2xpY2thYmxlKTtcbiAgICAgICAgdGhpcy5jbGlja2FibGVDb3VudGVyKys7XG4gICAgfVxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PSBFdmFsdWF0aW9uIGFuZCBkaXNwbGF5aW5nIGZlZWRiYWNrID09XG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgIGNoZWNrQ3VycmVudEFuc3dlcigpIHtcbiAgICAgICAgLy8gRXZhbHVhdGlvbiBpcyBkb25lIGJ5IGl0ZXJhdGluZyBvdmVyIHRoZSBjb3JyZWN0L2luY29ycmVjdCBhcnJheXMgYW5kIGNoZWNraW5nIGJ5IGNsYXNzXG4gICAgICAgIHRoaXMuY29ycmVjdCA9IHRydWU7XG4gICAgICAgIHRoaXMuY29ycmVjdE51bSA9IDA7XG4gICAgICAgIHRoaXMuaW5jb3JyZWN0TnVtID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvcnJlY3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCEkKHRoaXMuY29ycmVjdEFycmF5W2ldKS5oYXNDbGFzcyhcImNsaWNrYWJsZS1jbGlja2VkXCIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0ID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdE51bSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pbmNvcnJlY3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCQodGhpcy5pbmNvcnJlY3RBcnJheVtpXSkuaGFzQ2xhc3MoXCJjbGlja2FibGUtY2xpY2tlZFwiKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5jb3JyZWN0TnVtKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQodGhpcy5pbmNvcnJlY3RBcnJheVtpXSkucmVtb3ZlQ2xhc3MoXCJjbGlja2FibGUtaW5jb3JyZWN0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucGVyY2VudCA9XG4gICAgICAgICAgICAodGhpcy5jb3JyZWN0TnVtIC0gdGhpcy5pbmNvcnJlY3ROdW0pIC8gdGhpcy5jb3JyZWN0QXJyYXkubGVuZ3RoO1xuICAgICAgICB0aGlzLnNldExvY2FsU3RvcmFnZSh7IGNvcnJlY3Q6IHRoaXMuY29ycmVjdCA/IFwiVFwiIDogXCJGXCIgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgbG9nQ3VycmVudEFuc3dlcihzaWQpIHtcbiAgICAgICAgY29uc3QgYW5zd2VyID0gdGhpcy5naXZlbkluZGV4QXJyYXkuam9pbihcIjtcIik7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgZXZlbnQ6IFwiY2xpY2thYmxlQXJlYVwiLFxuICAgICAgICAgICAgYW5zd2VyOiBhbnN3ZXIsXG4gICAgICAgICAgICBhY3Q6IGFuc3dlcixcbiAgICAgICAgICAgIGRpdl9pZDogdGhpcy5kaXZpZCxcbiAgICAgICAgICAgIGNvcnJlY3Q6IHRoaXMuY29ycmVjdCA/IFwiVFwiIDogXCJGXCIsXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0eXBlb2Ygc2lkICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBkYXRhLnNpZCA9IHNpZDtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB0aGlzLmxvZ0Jvb2tFdmVudChkYXRhKTtcbiAgICB9XG5cbiAgICByZW5kZXJGZWVkYmFjaygpIHtcbiAgICAgICAgaWYgKHRoaXMuY29ycmVjdCkge1xuICAgICAgICAgICAgJCh0aGlzLmZlZWRCYWNrRGl2KS5odG1sKFwiWW91IGFyZSBDb3JyZWN0IVwiKTtcbiAgICAgICAgICAgICQodGhpcy5mZWVkQmFja0RpdikuYXR0cihcImNsYXNzXCIsIFwiYWxlcnQgYWxlcnQtaW5mb1wiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pbmNvcnJlY3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMuaW5jb3JyZWN0QXJyYXlbaV0pLmhhc0NsYXNzKFwiY2xpY2thYmxlLWNsaWNrZWRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzLmluY29ycmVjdEFycmF5W2ldKS5hZGRDbGFzcyhcImNsaWNrYWJsZS1pbmNvcnJlY3RcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzLmluY29ycmVjdEFycmF5W2ldKS5yZW1vdmVDbGFzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2thYmxlLWluY29ycmVjdFwiXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJCh0aGlzLmZlZWRCYWNrRGl2KS5odG1sKFxuICAgICAgICAgICAgICAgIFwiSW5jb3JyZWN0LiBZb3UgY2xpY2tlZCBvbiBcIiArXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdE51bSArXG4gICAgICAgICAgICAgICAgICAgIFwiIG9mIHRoZSBcIiArXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdEFycmF5Lmxlbmd0aC50b1N0cmluZygpICtcbiAgICAgICAgICAgICAgICAgICAgXCIgY29ycmVjdCBlbGVtZW50cyBhbmQgXCIgK1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluY29ycmVjdE51bSArXG4gICAgICAgICAgICAgICAgICAgIFwiIG9mIHRoZSBcIiArXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5jb3JyZWN0QXJyYXkubGVuZ3RoLnRvU3RyaW5nKCkgK1xuICAgICAgICAgICAgICAgICAgICBcIiBpbmNvcnJlY3QgZWxlbWVudHMuIFwiICtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mZWVkYmFja1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICQodGhpcy5mZWVkQmFja0RpdikuYXR0cihcImNsYXNzXCIsIFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzYWJsZUludGVyYWN0aW9uKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2xpY2thYmxlQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICQodGhpcy5jbGlja2FibGVBcnJheVtpXSkuY3NzKFwiY3Vyc29yXCIsIFwiaW5pdGlhbFwiKTtcbiAgICAgICAgICAgIHRoaXMuY2xpY2thYmxlQXJyYXlbaV0ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuPT0gRmluZCB0aGUgY3VzdG9tIEhUTUwgdGFncyBhbmQgPT1cbj09ICAgZXhlY3V0ZSBvdXIgY29kZSBvbiB0aGVtICAgID09XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuJChkb2N1bWVudCkub24oXCJydW5lc3RvbmU6bG9naW4tY29tcGxldGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICQoXCJbZGF0YS1jb21wb25lbnQ9Y2xpY2thYmxlYXJlYV1cIikuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgaWYgKCQodGhpcykuY2xvc2VzdChcIltkYXRhLWNvbXBvbmVudD10aW1lZEFzc2Vzc21lbnRdXCIpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGlzIGVsZW1lbnQgZXhpc3RzIHdpdGhpbiBhIHRpbWVkIGNvbXBvbmVudCwgZG9uJ3QgcmVuZGVyIGl0IGhlcmVcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgQ0FMaXN0W3RoaXMuaWRdID0gbmV3IENsaWNrYWJsZUFyZWEoe1xuICAgICAgICAgICAgICAgICAgICBvcmlnOiB0aGlzLFxuICAgICAgICAgICAgICAgICAgICB1c2VSdW5lc3RvbmVTZXJ2aWNlczogZUJvb2tDb25maWcudXNlUnVuZXN0b25lU2VydmljZXMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3IgcmVuZGVyaW5nIENsaWNrYWJsZUFyZWEgUHJvYmxlbSAke3RoaXMuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIERldGFpbHM6ICR7ZXJyfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59KTtcbiIsImltcG9ydCBDbGlja2FibGVBcmVhIGZyb20gXCIuL2NsaWNrYWJsZS5qc1wiO1xuXG4oXCJ1c2Ugc3RyaWN0XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lZENsaWNrYWJsZUFyZWEgZXh0ZW5kcyBDbGlja2FibGVBcmVhIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIHN1cGVyKG9wdHMpO1xuICAgICAgICB0aGlzLnJlc3RvcmVBbnN3ZXJzKHt9KTtcbiAgICAgICAgdGhpcy5yZW5kZXJUaW1lZEljb24odGhpcy5jb250YWluZXJEaXYpO1xuICAgICAgICB0aGlzLmhpZGVCdXR0b25zKCk7XG4gICAgfVxuXG4gICAgaGlkZUJ1dHRvbnMoKSB7XG4gICAgICAgICQodGhpcy5zdWJtaXRCdXR0b24pLmhpZGUoKTtcbiAgICB9XG5cbiAgICByZW5kZXJUaW1lZEljb24oY29tcG9uZW50KSB7XG4gICAgICAgIC8vIHJlbmRlcnMgdGhlIGNsb2NrIGljb24gb24gdGltZWQgY29tcG9uZW50cy4gICAgVGhlIGNvbXBvbmVudCBwYXJhbWV0ZXJcbiAgICAgICAgLy8gaXMgdGhlIGVsZW1lbnQgdGhhdCB0aGUgaWNvbiBzaG91bGQgYmUgYXBwZW5kZWQgdG8uXG4gICAgICAgIHZhciB0aW1lSWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHZhciB0aW1lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICQodGltZUljb24pLmF0dHIoe1xuICAgICAgICAgICAgc3JjOiBcIi4uL19zdGF0aWMvY2xvY2sucG5nXCIsXG4gICAgICAgICAgICBzdHlsZTogXCJ3aWR0aDoxNXB4O2hlaWdodDoxNXB4XCIsXG4gICAgICAgIH0pO1xuICAgICAgICB0aW1lSWNvbkRpdi5jbGFzc05hbWUgPSBcInRpbWVUaXBcIjtcbiAgICAgICAgdGltZUljb25EaXYudGl0bGUgPSBcIlwiO1xuICAgICAgICB0aW1lSWNvbkRpdi5hcHBlbmRDaGlsZCh0aW1lSWNvbik7XG4gICAgICAgICQoY29tcG9uZW50KS5wcmVwZW5kKHRpbWVJY29uRGl2KTtcbiAgICB9XG5cbiAgICBjaGVja0NvcnJlY3RUaW1lZCgpIHtcbiAgICAgICAgLy8gUmV0dXJucyBpZiB0aGUgcXVlc3Rpb24gd2FzIGNvcnJlY3QsIGluY29ycmVjdCwgb3Igc2tpcHBlZCAocmV0dXJuIG51bGwgaW4gdGhlIGxhc3QgY2FzZSlcbiAgICAgICAgaWYgKHRoaXMuY29ycmVjdE51bSA9PT0gMCAmJiB0aGlzLmluY29ycmVjdE51bSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5jb3JyZWN0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHRoaXMuY29ycmVjdCkge1xuICAgICAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRcIjtcbiAgICAgICAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRlwiO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZGVGZWVkYmFjaygpIHtcbiAgICAgICAgJCh0aGlzLmZlZWRCYWNrRGl2KS5oaWRlKCk7XG4gICAgfVxufVxuXG5pZiAodHlwZW9mIHdpbmRvdy5jb21wb25lbnRfZmFjdG9yeSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHdpbmRvdy5jb21wb25lbnRfZmFjdG9yeSA9IHt9O1xufVxud2luZG93LmNvbXBvbmVudF9mYWN0b3J5LmNsaWNrYWJsZWFyZWEgPSBmdW5jdGlvbiAob3B0cykge1xuICAgIGlmIChvcHRzLnRpbWVkKSB7XG4gICAgICAgIHJldHVybiBuZXcgVGltZWRDbGlja2FibGVBcmVhKG9wdHMpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IENsaWNrYWJsZUFyZWEob3B0cyk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9