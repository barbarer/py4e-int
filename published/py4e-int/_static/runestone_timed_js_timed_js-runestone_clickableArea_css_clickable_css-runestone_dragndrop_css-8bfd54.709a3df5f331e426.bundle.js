"use strict";
(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_timed_js_timed_js-runestone_clickableArea_css_clickable_css-runestone_dragndrop_css-8bfd54"],{

/***/ 23369:
/*!***************************************!*\
  !*** ./runestone/timed/css/timed.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 58707:
/*!*************************************!*\
  !*** ./runestone/timed/js/timed.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimedList": () => (/* binding */ TimedList),
/* harmony export */   "default": () => (/* binding */ Timed)
/* harmony export */ });
/* harmony import */ var _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/runestonebase.js */ 2568);
/* harmony import */ var _fitb_js_timedfitb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../fitb/js/timedfitb.js */ 74309);
/* harmony import */ var _mchoice_js_timedmc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mchoice/js/timedmc.js */ 95983);
/* harmony import */ var _shortanswer_js_timed_shortanswer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shortanswer/js/timed_shortanswer.js */ 87483);
/* harmony import */ var _activecode_js_acfactory_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../activecode/js/acfactory.js */ 86902);
/* harmony import */ var _clickableArea_js_timedclickable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../clickableArea/js/timedclickable */ 61581);
/* harmony import */ var _dragndrop_js_timeddnd_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dragndrop/js/timeddnd.js */ 47496);
/* harmony import */ var _parsons_js_timedparsons_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../parsons/js/timedparsons.js */ 79661);
/* harmony import */ var _selectquestion_js_selectone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../selectquestion/js/selectone */ 63931);
/* harmony import */ var _css_timed_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/timed.css */ 23369);
/*==========================================
========      Master timed.js     =========
============================================
===     This file contains the JS for    ===
===     the Runestone timed component.   ===
============================================
===              Created By              ===
===             Kirby Olson              ===
===               6/11/15                ===
==========================================*/













var TimedList = {}; // Timed dictionary

// Timed constructor
class Timed extends _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(opts) {
        super(opts);
        var orig = opts.orig;
        this.origElem = orig; // the entire element of this timed assessment and all of its children
        this.divid = orig.id;
        this.children = this.origElem.childNodes;
        this.visited = [];
        this.timeLimit = 0;
        this.limitedTime = false;
        if (!isNaN($(this.origElem).data("time"))) {
            this.timeLimit = parseInt($(this.origElem).data("time"), 10) * 60; // time in seconds to complete the exam
            this.startingTime = this.timeLimit;
            this.limitedTime = true;
        }
        this.showFeedback = true;
        if ($(this.origElem).is("[data-no-feedback]")) {
            this.showFeedback = false;
        }
        this.showResults = true;
        if ($(this.origElem).is("[data-no-result]")) {
            this.showResults = false;
        }
        this.random = false;
        if ($(this.origElem).is("[data-random]")) {
            this.random = true;
        }
        this.showTimer = true;
        if ($(this.origElem).is("[data-no-timer]")) {
            this.showTimer = false;
        }
        this.fullwidth = false;
        if ($(this.origElem).is("[data-fullwidth]")) {
            this.fullwidth = true;
        }
        this.nopause = false;
        if ($(this.origElem).is("[data-no-pause]")) {
            this.nopause = true;
        }
        eBookConfig.enableScratchAC = false;
        this.running = 0;
        this.paused = 0;
        this.done = 0;
        this.taken = 0;
        this.score = 0;
        this.incorrect = 0;
        this.correctStr = "";
        this.incorrectStr = "";
        this.skippedStr = "";
        this.skipped = 0;
        this.currentQuestionIndex = 0; // Which question is currently displaying on the page
        this.renderedQuestionArray = []; // list of all problems
        this.getNewChildren();
        // One small step to eliminate students from doing view source
        // this won't stop anyone with determination but may prevent casual peeking
        if (!eBookConfig.enableDebug) {
            document.body.oncontextmenu = function () {
                return false;
            };
        }
        this.checkAssessmentStatus().then(
            function () {
                this.renderTimedAssess();
            }.bind(this)
        );
    }

    getNewChildren() {
        this.newChildren = [];
        for (var i = 0; i < this.origElem.childNodes.length; i++) {
            this.newChildren.push(this.origElem.childNodes[i]);
        }
    }

    async checkAssessmentStatus() {
        // Has the user taken this exam?  Inquiring minds want to know
        // If a user has not taken this exam then we want to make sure
        // that if a question has been seen by the student before we do
        // not populate previous answers.
        let sendInfo = {
            div_id: this.divid,
            course_name: eBookConfig.course,
        };
        console.log(sendInfo);
        if (eBookConfig.useRunestoneServices) {
            let request = new Request(
                `${eBookConfig.new_server_prefix}/assessment/tookTimedAssessment`,
                {
                    method: "POST",
                    headers: this.jsonHeaders,
                    body: JSON.stringify(sendInfo),
                }
            );
            let response = await fetch(request);
            let data = await response.json();
            data = data.detail;
            this.taken = data.tookAssessment;
            this.assessmentTaken = this.taken;
            if (!this.taken) {
                localStorage.clear();
            }
            console.log("done with check status");
            return response;
        } else {
            this.taken = false;
            this.assessmentTaken = false;
            return Promise.resolve();
        }
    }

    /*===============================
    === Generating new Timed HTML ===
    ===============================*/
    async renderTimedAssess() {
        console.log("rendering timed ");
        // create renderedQuestionArray returns a promise
        //
        this.createRenderedQuestionArray();
        if (this.random) {
            this.randomizeRQA();
        }
        this.renderContainer();
        this.renderTimer();
        await this.renderControlButtons();
        this.containerDiv.appendChild(this.timedDiv); // This can't be appended in renderContainer because then it renders above the timer and control buttons.
        if (this.renderedQuestionArray.length > 1) this.renderNavControls();
        this.renderSubmitButton();
        this.renderFeedbackContainer();
        this.useRunestoneServices = eBookConfig.useRunestoneServices;
        // Replace intermediate HTML with rendered HTML
        $(this.origElem).replaceWith(this.containerDiv);
        // check if already taken and if so show results
        this.styleExamElements(); // rename to renderPossibleResults
        this.checkServer("timedExam", true);
    }

    renderContainer() {
        this.containerDiv = document.createElement("div"); // container for the entire Timed Component
        if (this.fullwidth) {
            // allow the container to fill the width - barb
            $(this.containerDiv).attr({
                style: "max-width:none",
            });
        }
        this.containerDiv.id = this.divid;
        this.timedDiv = document.createElement("div"); // div that will hold the questions for the timed assessment
        this.navDiv = document.createElement("div"); // For navigation control
        $(this.navDiv).attr({
            style: "text-align:center",
        });
        this.flagDiv = document.createElement("div"); // div that will hold the "Flag Question" button
        $(this.flagDiv).attr({
            style: "text-align: center",
        });
        this.switchContainer = document.createElement("div");
        this.switchContainer.classList.add("switchcontainer");
        this.switchDiv = document.createElement("div"); // is replaced by the questions
        this.timedDiv.appendChild(this.navDiv);
        this.timedDiv.appendChild(this.flagDiv); // add flagDiv to timedDiv, which holds components for navigation and questions for timed assessment
        this.timedDiv.appendChild(this.switchContainer);
        this.switchContainer.appendChild(this.switchDiv);
        $(this.timedDiv).attr({
            id: "timed_Test",
            style: "display:none",
        });
    }

    renderTimer() {
        this.wrapperDiv = document.createElement("div");
        this.timerContainer = document.createElement("P");
        this.wrapperDiv.id = this.divid + "-startWrapper";
        this.timerContainer.id = this.divid + "-output";
        this.wrapperDiv.appendChild(this.timerContainer);
        this.showTime();
    }

    renderControlButtons() {
        this.controlDiv = document.createElement("div");
        $(this.controlDiv).attr({
            id: "controls",
            style: "text-align: center",
        });
        this.startBtn = document.createElement("button");
        this.pauseBtn = document.createElement("button");
        $(this.startBtn).attr({
            class: "btn btn-success",
            id: "start",
            tabindex: "0",
            role: "button",
        });
        this.startBtn.textContent = "Start";
        this.startBtn.addEventListener(
            "click",
            async function () {
                $(this.finishButton).hide(); // hide the finish button for now
                $(this.flagButton).show();
                let mess = document.createElement("p");
                mess.innerHTML =
                    "<strong>Warning: You will not be able to continue the exam if you close this tab, close the window, or navigate away from this page!</strong>  Make sure you click the Finish Exam button when you are done to submit your work!";
                this.controlDiv.appendChild(mess);
                mess.classList.add("examwarning");
                await this.renderTimedQuestion();
                this.startAssessment();
            }.bind(this),
            false
        );
        $(this.pauseBtn).attr({
            class: "btn btn-default",
            id: "pause",
            disabled: "true",
            tabindex: "0",
            role: "button",
        });
        this.pauseBtn.textContent = "Pause";
        this.pauseBtn.addEventListener(
            "click",
            function () {
                this.pauseAssessment();
            }.bind(this),
            false
        );
        if (!this.taken) {
            this.controlDiv.appendChild(this.startBtn);
        }
        if (!this.nopause) {
            this.controlDiv.appendChild(this.pauseBtn);
        }
        this.containerDiv.appendChild(this.wrapperDiv);
        this.containerDiv.appendChild(this.controlDiv);
    }

    renderNavControls() {
        // making "Prev" button
        this.pagNavList = document.createElement("ul");
        $(this.pagNavList).addClass("pagination");
        this.leftContainer = document.createElement("li");
        this.leftNavButton = document.createElement("button");
        this.leftNavButton.innerHTML = "&#8249; Prev";
        $(this.leftNavButton).attr("aria-label", "Previous");
        $(this.leftNavButton).attr("tabindex", "0");
        $(this.leftNavButton).attr("role", "button");
        $(this.rightNavButton).attr("id", "prev");
        $(this.leftNavButton).css("cursor", "pointer");
        this.leftContainer.appendChild(this.leftNavButton);
        this.pagNavList.appendChild(this.leftContainer);
        // making "Flag Question" button
        this.flaggingPlace = document.createElement("ul");
        $(this.flaggingPlace).addClass("pagination");
        this.flagContainer = document.createElement("li");
        this.flagButton = document.createElement("button");
        $(this.flagButton).addClass("flagBtn");
        this.flagButton.innerHTML = "Flag Question"; // name on button
        $(this.flagButton).attr("aria-labelledby", "Flag");
        $(this.flagButton).attr("tabindex", "5");
        $(this.flagButton).attr("role", "button");
        $(this.flagButton).attr("id", "flag");
        $(this.flagButton).css("cursor", "pointer");
        this.flagContainer.appendChild(this.flagButton); // adding button to container
        this.flaggingPlace.appendChild(this.flagContainer); // adding container to flaggingPlace
        // making "Next" button
        this.rightContainer = document.createElement("li");
        this.rightNavButton = document.createElement("button");
        $(this.rightNavButton).attr("aria-label", "Next");
        $(this.rightNavButton).attr("tabindex", "0");
        $(this.rightNavButton).attr("role", "button");
        $(this.rightNavButton).attr("id", "next");
        this.rightNavButton.innerHTML = "Next &#8250;";
        $(this.rightNavButton).css("cursor", "pointer");
        this.rightContainer.appendChild(this.rightNavButton);
        this.pagNavList.appendChild(this.rightContainer);
        this.ensureButtonSafety();
        this.navDiv.appendChild(this.pagNavList);
        this.flagDiv.appendChild(this.flaggingPlace); // adds flaggingPlace to the flagDiv
        this.break = document.createElement("br");
        this.navDiv.appendChild(this.break);
        // render the question number jump buttons
        this.qNumList = document.createElement("ul");
        $(this.qNumList).attr("id", "pageNums");
        this.qNumWrapperList = document.createElement("ul");
        $(this.qNumWrapperList).addClass("pagination");
        var tmpLi, tmpA;
        for (var i = 0; i < this.renderedQuestionArray.length; i++) {
            tmpLi = document.createElement("li");
            tmpA = document.createElement("a");
            tmpA.innerHTML = i + 1;
            $(tmpA).css("cursor", "pointer");
            if (i === 0) {
                $(tmpLi).addClass("active");
            }
            tmpLi.appendChild(tmpA);
            this.qNumWrapperList.appendChild(tmpLi);
        }
        this.qNumList.appendChild(this.qNumWrapperList);
        this.navDiv.appendChild(this.qNumList);
        this.navBtnListeners();
        this.flagBtnListener(); // listens for click on flag button
        $(this.flagButton).hide();
    }

    // when moving off of a question in an active exam:
    // 1. show that the question has been seen, or mark it broken if it is in error.
    // 2. check and log the current answer
    async navigateAway() {
        if (
            this.renderedQuestionArray[this.currentQuestionIndex].state ==
            "broken_exam"
        ) {
            $(
                "ul#pageNums > ul > li:eq(" + this.currentQuestionIndex + ")"
            ).addClass("broken");
        }
        if (
            this.renderedQuestionArray[this.currentQuestionIndex].state ==
            "exam_ended"
        ) {
            $(
                "ul#pageNums > ul > li:eq(" + this.currentQuestionIndex + ")"
            ).addClass("toolate");
        }
        if (
            this.renderedQuestionArray[this.currentQuestionIndex].question
                .isAnswered
        ) {
            $(
                "ul#pageNums > ul > li:eq(" + this.currentQuestionIndex + ")"
            ).addClass("answered");
            await this.renderedQuestionArray[
                this.currentQuestionIndex
            ].question.checkCurrentAnswer();
            if (!this.done) {
                await this.renderedQuestionArray[
                    this.currentQuestionIndex
                ].question.logCurrentAnswer();
            }
        }
    }
    async handleNextPrev(event) {
        if (!this.taken) {
            await this.navigateAway();
        }
        var target = $(event.target).text();
        if (target.match(/Next/)) {
            // checks given text to match "Next"
            if ($(this.rightContainer).hasClass("disabled")) {
                return;
            }
            this.currentQuestionIndex++;
        } else if (target.match(/Prev/)) {
            // checks given text to match "Prev"
            if ($(this.leftContainer).hasClass("disabled")) {
                return;
            }
            this.currentQuestionIndex--;
        }
        await this.renderTimedQuestion();
        this.ensureButtonSafety();
        for (var i = 0; i < this.qNumList.childNodes.length; i++) {
            for (
                var j = 0;
                j < this.qNumList.childNodes[i].childNodes.length;
                j++
            ) {
                $(this.qNumList.childNodes[i].childNodes[j]).removeClass(
                    "active"
                );
            }
        }
        $(
            "ul#pageNums > ul > li:eq(" + this.currentQuestionIndex + ")"
        ).addClass("active");
        if (
            $(
                "ul#pageNums > ul > li:eq(" + this.currentQuestionIndex + ")"
            ).hasClass("flagcolor")
        ) {
            // checking for class
            this.flagButton.innerHTML = "Unflag Question"; // changes text on button
        } else {
            this.flagButton.innerHTML = "Flag Question"; // changes text on button
        }
    }

    async handleFlag(event) {
        // called when flag button is clicked
        var target = $(event.target).text();
        if (target.match(/Flag Question/)) {
            $(
                "ul#pageNums > ul > li:eq(" + this.currentQuestionIndex + ")"
            ).addClass("flagcolor"); // class will change color of question block
            this.flagButton.innerHTML = "Unflag Question";
        } else {
            $(
                "ul#pageNums > ul > li:eq(" + this.currentQuestionIndex + ")"
            ).removeClass("flagcolor"); // will restore current color of question block
            this.flagButton.innerHTML = "Flag Question"; // also sets name back
        }
    }

    async handleNumberedNav(event) {
        if (!this.taken) {
            await this.navigateAway();
        }
        for (var i = 0; i < this.qNumList.childNodes.length; i++) {
            for (
                var j = 0;
                j < this.qNumList.childNodes[i].childNodes.length;
                j++
            ) {
                $(this.qNumList.childNodes[i].childNodes[j]).removeClass(
                    "active"
                );
            }
        }

        var target = $(event.target).text();
        let oldIndex = this.currentQuestionIndex;
        this.currentQuestionIndex = parseInt(target) - 1;
        if (this.currentQuestionIndex > this.renderedQuestionArray.length) {
            console.log(`Error: bad index for ${target}`);
            this.currentQuestionIndex = oldIndex;
        }
        $(
            "ul#pageNums > ul > li:eq(" + this.currentQuestionIndex + ")"
        ).addClass("active");
        if (
            $(
                "ul#pageNums > ul > li:eq(" + this.currentQuestionIndex + ")" // checking for flagcolor class
            ).hasClass("flagcolor")
        ) {
            this.flagButton.innerHTML = "Unflag Question";
        } else {
            this.flagButton.innerHTML = "Flag Question";
        }
        await this.renderTimedQuestion();
        this.ensureButtonSafety();
    }

    // set up events for navigation
    navBtnListeners() {
        // Next and Prev Listener
        this.pagNavList.addEventListener(
            "click",
            this.handleNextPrev.bind(this),
            false
        );

        // Numbered Listener
        this.qNumList.addEventListener(
            "click",
            this.handleNumberedNav.bind(this),
            false
        );
    }

    // set up event for flag
    flagBtnListener() {
        this.flaggingPlace.addEventListener(
            "click",
            this.handleFlag.bind(this), // calls this to take action
            false
        );
    }

    renderSubmitButton() {
        this.buttonContainer = document.createElement("div");
        $(this.buttonContainer).attr({
            style: "text-align:center",
        });
        this.finishButton = document.createElement("button");
        $(this.finishButton).attr({
            id: "finish",
            class: "btn btn-primary",
        });
        this.finishButton.textContent = "Finish Exam";
        this.finishButton.addEventListener(
            "click",
            async function () {
                if (
                    window.confirm(
                        "Clicking OK means you are ready to submit your answers and are finished with this assessment."
                    )
                ) {
                    await this.finishAssessment();
                    $(this.flagButton).hide();
                }
            }.bind(this),
            false
        );
        this.controlDiv.appendChild(this.finishButton);
        $(this.finishButton).hide();
        this.timedDiv.appendChild(this.buttonContainer);
    }
    ensureButtonSafety() {
        if (this.currentQuestionIndex === 0) {
            if (this.renderedQuestionArray.length != 1) {
                $(this.rightContainer).removeClass("disabled");
            }
            $(this.leftContainer).addClass("disabled");
        }
        if (
            this.currentQuestionIndex >=
            this.renderedQuestionArray.length - 1
        ) {
            if (this.renderedQuestionArray.length != 1) {
                $(this.leftContainer).removeClass("disabled");
            }
            $(this.rightContainer).addClass("disabled");
        }
        if (
            this.currentQuestionIndex > 0 &&
            this.currentQuestionIndex < this.renderedQuestionArray.length - 1
        ) {
            $(this.rightContainer).removeClass("disabled");
            $(this.leftContainer).removeClass("disabled");
        }
    }
    renderFeedbackContainer() {
        this.scoreDiv = document.createElement("P");
        this.scoreDiv.id = this.divid + "results";
        this.scoreDiv.style.display = "none";
        this.containerDiv.appendChild(this.scoreDiv);
    }

    createRenderedQuestionArray() {
        // this finds all the assess questions in this timed assessment
        // We need to make a list of all the questions up front so we can set up navigation
        // but we do not want to render the questions until the student has navigated
        // Also adds them to this.renderedQuestionArray

        // todo:  This needs to be updated to account for the runestone div wrapper.

        // To accommodate the selectquestion type -- which is async! we need to wrap
        // all of this in a promise, so that we don't continue to render the timed
        // exam until all of the questions have been realized.
        var opts;
        for (var i = 0; i < this.newChildren.length; i++) {
            var tmpChild = this.newChildren[i];
            opts = {
                state: "prepared",
                orig: tmpChild,
                question: {},
                useRunestoneServices: eBookConfig.useRunestoneServices,
                timed: true,
                assessmentTaken: this.taken,
                timedWrapper: this.divid,
                initAttempts: 0,
            };
            if ($(tmpChild).children("[data-component]").length > 0) {
                tmpChild = $(tmpChild).children("[data-component]")[0];
                opts.orig = tmpChild;
            }
            if ($(tmpChild).is("[data-component]")) {
                this.renderedQuestionArray.push(opts);
            }
        }
    }

    randomizeRQA() {
        var currentIndex = this.renderedQuestionArray.length,
            temporaryValue,
            randomIndex;
        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = this.renderedQuestionArray[currentIndex];
            this.renderedQuestionArray[currentIndex] =
                this.renderedQuestionArray[randomIndex];
            this.renderedQuestionArray[randomIndex] = temporaryValue;
        }
    }

    async renderTimedQuestion() {
        if (this.currentQuestionIndex >= this.renderedQuestionArray.length) {
            // sometimes the user clicks in the event area for the qNumList
            // But misses a number in that case the text is the concatenation
            // of all the numbers in the list!
            return;
        }
        // check the renderedQuestionArray to see if it has been rendered.
        let opts = this.renderedQuestionArray[this.currentQuestionIndex];
        let currentQuestion;
        if (
            opts.state === "prepared" ||
            opts.state === "forreview" ||
            (opts.state === "broken_exam" && opts.initAttempts < 3)
        ) {
            let tmpChild = opts.orig;
            if ($(tmpChild).is("[data-component=selectquestion]")) {
                if (this.done && opts.state == "prepared") {
                    this.renderedQuestionArray[
                        this.currentQuestionIndex
                    ].state = "exam_ended";
                } else {
                    // SelectOne is async and will replace itself in this array with
                    // the actual selected question
                    opts.rqa = this.renderedQuestionArray;
                    let newq = new _selectquestion_js_selectone__WEBPACK_IMPORTED_MODULE_8__["default"](opts);
                    this.renderedQuestionArray[this.currentQuestionIndex] = {
                        question: newq,
                    };
                    try {
                        await newq.initialize();
                        if (opts.state == "broken_exam") {
                            // remove the broken class from this question if we get here.
                            $(
                                `ul#pageNums > ul > li:eq(${this.currentQuestionIndex})`
                            ).removeClass("broken");
                        }
                    } catch (e) {
                        opts.state = "broken_exam";
                        this.renderedQuestionArray[this.currentQuestionIndex] =
                            opts;
                        console.log(
                            `Error initializing question: Details ${e}`
                        );
                    }
                }
            } else if ($(tmpChild).is("[data-component]")) {
                let componentKind = $(tmpChild).data("component");
                this.renderedQuestionArray[this.currentQuestionIndex] = {
                    question: window.component_factory[componentKind](opts),
                };
            }
        } else if (opts.state === "broken_exam") {
            return;
        }

        currentQuestion =
            this.renderedQuestionArray[this.currentQuestionIndex].question;
        if (opts.state === "forreview") {
            await currentQuestion.checkCurrentAnswer();
            currentQuestion.renderFeedback();
            currentQuestion.disableInteraction();
        }

        if (!this.visited.includes(this.currentQuestionIndex)) {
            this.visited.push(this.currentQuestionIndex);
            if (
                this.visited.length === this.renderedQuestionArray.length &&
                !this.done
            ) {
                $(this.finishButton).show();
            }
        }

        if (currentQuestion.containerDiv) {
            $(this.switchDiv).replaceWith(currentQuestion.containerDiv);
            this.switchDiv = currentQuestion.containerDiv;
        }

        // If the timed component has listeners, those might need to be reinitialized
        // This flag will only be set in the elements that need it--it will be undefined in the others and thus evaluate to false
        if (currentQuestion.needsReinitialization) {
            currentQuestion.reinitializeListeners(this.taken);
        }
    }

    /*=================================
    === Timer and control Functions ===
    =================================*/
    handlePrevAssessment() {
        $(this.startBtn).hide();
        $(this.pauseBtn).attr("disabled", true);
        $(this.finishButton).attr("disabled", true);
        this.running = 0;
        this.done = 1;
        // showFeedback sand showResults should both be true before we show the
        // questions and their state of correctness.
        if (this.showResults && this.showFeedback) {
            $(this.timedDiv).show();
            this.restoreAnsweredQuestions(); // do not log these results
        } else {
            $(this.pauseBtn).hide();
            $(this.timerContainer).hide();
        }
    }
    startAssessment() {
        if (!this.taken) {
            $("#relations-next").hide(); // hide the next page button for now
            $("#relations-prev").hide(); // hide the previous button for now
            $(this.startBtn).hide();
            $(this.pauseBtn).attr("disabled", false);
            if (this.running === 0 && this.paused === 0) {
                this.running = 1;
                this.lastTime = Date.now();
                $(this.timedDiv).show();
                this.increment();
                this.logBookEvent({
                    event: "timedExam",
                    act: "start",
                    div_id: this.divid,
                });
                var timeStamp = new Date();
                var storageObj = {
                    answer: [0, 0, this.renderedQuestionArray.length, 0],
                    timestamp: timeStamp,
                };
                localStorage.setItem(
                    this.localStorageKey(),
                    JSON.stringify(storageObj)
                );
            }
            $(window).on(
                "beforeunload",
                function (event) {
                    // this actual value gets ignored by newer browsers
                    if (this.done) {
                        return;
                    }
                    event.preventDefault();
                    event.returnValue =
                        "Are you sure you want to leave?  Your work will be lost! And you will need your instructor to reset the exam!";
                    return "Are you sure you want to leave?  Your work will be lost!";
                }.bind(this)
            );
            window.addEventListener(
                "pagehide",
                async function (event) {
                    if (!this.done) {
                        await this.finishAssessment();
                        console.log("Exam exited by leaving page");
                    }
                }.bind(this)
            );
        } else {
            this.handlePrevAssessment();
        }
    }
    pauseAssessment() {
        if (this.done === 0) {
            if (this.running === 1) {
                this.logBookEvent({
                    event: "timedExam",
                    act: "pause",
                    div_id: this.divid,
                });
                this.running = 0;
                this.paused = 1;
                this.pauseBtn.innerHTML = "Resume";
                $(this.timedDiv).hide();
            } else {
                this.logBookEvent({
                    event: "timedExam",
                    act: "resume",
                    div_id: this.divid,
                });
                this.running = 1;
                this.paused = 0;
                this.increment();
                this.pauseBtn.innerHTML = "Pause";
                $(this.timedDiv).show();
            }
        }
    }

    showTime() {
        if (this.showTimer) {
            var mins = Math.floor(this.timeLimit / 60);
            var secs = Math.floor(this.timeLimit) % 60;
            var minsString = mins;
            var secsString = secs;
            if (mins < 10) {
                minsString = "0" + mins;
            }
            if (secs < 10) {
                secsString = "0" + secs;
            }
            var beginning = "Time Remaining    ";
            if (!this.limitedTime) {
                beginning = "Time Taken    ";
            }
            var timeString = beginning + minsString + ":" + secsString;
            if (this.done || this.taken) {
                var minutes = Math.floor(this.timeTaken / 60);
                var seconds = Math.floor(this.timeTaken % 60);
                if (minutes < 10) {
                    minutes = "0" + minutes;
                }
                if (seconds < 10) {
                    seconds = "0" + seconds;
                }
                timeString = "Time taken: " + minutes + ":" + seconds;
            }
            this.timerContainer.innerHTML = timeString;
            var timeTips = document.getElementsByClassName("timeTip");
            for (var i = 0; i <= timeTips.length - 1; i++) {
                timeTips[i].title = timeString;
            }
        } else {
            $(this.timerContainer).hide();
        }
    }

    increment() {
        // if running (not paused) and not taken
        if (this.running === 1 && !this.taken) {
            setTimeout(
                function () {
                    // When a browser loses focus, setTimeout may not be called on the
                    // schedule expected.  Browsers are free to save power by lengthening
                    // the interval to some longer time.  So we cannot just subtract 1
                    // from the timeLimit we need to measure the elapsed time from the last
                    // call to the current call and subtract that number of seconds.
                    let currentTime = Date.now();
                    if (this.limitedTime) {
                        // If there's a time limit, count down to 0
                        this.timeLimit =
                            this.timeLimit -
                            Math.floor((currentTime - this.lastTime) / 1000);
                    } else {
                        // Else count up to keep track of how long it took to complete
                        this.timeLimit =
                            this.timeLimit +
                            Math.floor((currentTime - this.lastTime) / 1000);
                    }
                    this.lastTime = currentTime;
                    localStorage.setItem(
                        eBookConfig.email + ":" + this.divid + "-time",
                        this.timeLimit
                    );
                    this.showTime();
                    if (this.timeLimit > 0) {
                        this.increment();
                        // ran out of time
                    } else {
                        $(this.startBtn).attr({
                            disabled: "true",
                        });
                        $(this.finishButton).attr({
                            disabled: "true",
                        });
                        this.running = 0;
                        this.done = 1;
                        if (!this.taken) {
                            this.taken = true;
                            // embed the message in the page -- an alert actually prevents
                            // the answers from being submitted and if a student closes their
                            // laptop then the answers will not be submitted ever!  Even when they
                            // reopen the laptop their session cookie is likely invalid.
                            let mess = document.createElement("h1");
                            mess.innerHTML =
                                "Sorry but you ran out of time. Your answers are being submitted";
                            this.controlDiv.appendChild(mess);
                            this.finishAssessment();
                        }
                    }
                }.bind(this),
                1000
            );
        }
    }

    styleExamElements() {
        // Checks if this exam has been taken before
        $(this.timerContainer).css({
            width: "50%",
            margin: "0 auto",
            "background-color": "#DFF0D8",
            "text-align": "center",
            border: "2px solid #DFF0D8",
            "border-radius": "25px",
        });
        $(this.scoreDiv).css({
            width: "50%",
            margin: "0 auto",
            "background-color": "#DFF0D8",
            "text-align": "center",
            border: "2px solid #DFF0D8",
            "border-radius": "25px",
        });
        $(".tooltipTime").css({
            margin: "0",
            padding: "0",
            "background-color": "black",
            color: "white",
        });
    }

    async finishAssessment() {
        $("#relations-next").show(); // show the next page button for now
        $("#relations-prev").show(); // show the previous button for now
        if (!this.showFeedback) {
            // bje - changed from showResults
            $(this.timedDiv).hide();
            $(this.pauseBtn).hide();
            $(this.timerContainer).hide();
        }
        this.findTimeTaken();
        this.running = 0;
        this.done = 1;
        this.taken = 1;
        await this.finalizeProblems();
        this.checkScore();
        this.displayScore();
        this.storeScore();
        this.logScore();
        $(this.pauseBtn).attr("disabled", true);
        this.finishButton.disabled = true;
        $(window).off("beforeunload");
        // turn off the pagehide listener
        let assignment_id = this.divid;
        setTimeout(function () {
            jQuery.ajax({
                url: eBookConfig.app + "/assignments/student_autograde",
                type: "POST",
                dataType: "JSON",
                data: {
                    assignment_id: assignment_id,
                    is_timed: true,
                },
                success: function (retdata) {
                    if (retdata.success == false) {
                        console.log(retdata.message);
                    } else {
                        console.log("Autograder completed");
                    }
                },
            });
        }, 2000);
    }

    // finalizeProblems
    // ----------------
    async finalizeProblems() {
        // Because we have submitted each question as we navigate we only need to
        // send the final version of the question the student is on when they press the
        // finish exam button.

        var currentQuestion =
            this.renderedQuestionArray[this.currentQuestionIndex].question;
        await currentQuestion.checkCurrentAnswer();
        await currentQuestion.logCurrentAnswer();
        currentQuestion.renderFeedback();
        currentQuestion.disableInteraction();

        for (var i = 0; i < this.renderedQuestionArray.length; i++) {
            let currentQuestion = this.renderedQuestionArray[i];
            // set the state to forreview so we know that feedback may be appropriate
            if (currentQuestion.state !== "broken_exam") {
                currentQuestion.state = "forreview";
                currentQuestion.question.disableInteraction();
            }
        }

        if (!this.showFeedback) {
            this.hideTimedFeedback();
        }
    }

    // restoreAnsweredQuestions
    // ------------------------
    restoreAnsweredQuestions() {
        for (var i = 0; i < this.renderedQuestionArray.length; i++) {
            var currentQuestion = this.renderedQuestionArray[i];
            if (currentQuestion.state === "prepared") {
                currentQuestion.state = "forreview";
            }
        }
    }

    // hideTimedFeedback
    // -----------------
    hideTimedFeedback() {
        for (var i = 0; i < this.renderedQuestionArray.length; i++) {
            var currentQuestion = this.renderedQuestionArray[i].question;
            currentQuestion.hideFeedback();
        }
    }

    // checkScore
    // ----------
    // This is a simple all or nothing score of one point per question for
    // that includes our best guess if a question was skipped.
    checkScore() {
        this.correctStr = "";
        this.skippedStr = "";
        this.incorrectStr = "";
        // Gets the score of each problem
        for (var i = 0; i < this.renderedQuestionArray.length; i++) {
            var correct =
                this.renderedQuestionArray[i].question.checkCorrectTimed();
            if (correct == "T") {
                this.score++;
                this.correctStr = this.correctStr + (i + 1) + ", ";
            } else if (correct == "F") {
                this.incorrect++;
                this.incorrectStr = this.incorrectStr + (i + 1) + ", ";
            } else if (correct === null || correct === "I") {
                this.skipped++;
                this.skippedStr = this.skippedStr + (i + 1) + ", ";
            } else {
                // ignored question; just do nothing
            }
        }
        // remove extra comma and space at end if any
        if (this.correctStr.length > 0)
            this.correctStr = this.correctStr.substring(
                0,
                this.correctStr.length - 2
            );
        else this.correctStr = "None";
        if (this.skippedStr.length > 0)
            this.skippedStr = this.skippedStr.substring(
                0,
                this.skippedStr.length - 2
            );
        else this.skippedStr = "None";
        if (this.incorrectStr.length > 0)
            this.incorrectStr = this.incorrectStr.substring(
                0,
                this.incorrectStr.length - 2
            );
        else this.incorrectStr = "None";
    }
    findTimeTaken() {
        if (this.limitedTime) {
            this.timeTaken = this.startingTime - this.timeLimit;
        } else {
            this.timeTaken = this.timeLimit;
        }
    }
    storeScore() {
        var storage_arr = [];
        storage_arr.push(
            this.score,
            this.correctStr,
            this.incorrect,
            this.incorrectStr,
            this.skipped,
            this.skippedStr,
            this.timeTaken
        );
        var timeStamp = new Date();
        var storageObj = JSON.stringify({
            answer: storage_arr,
            timestamp: timeStamp,
        });
        localStorage.setItem(this.localStorageKey(), storageObj);
    }
    // _`timed exam endpoint parameters`
    //----------------------------------
    logScore() {
        this.logBookEvent({
            event: "timedExam",
            act: "finish",
            div_id: this.divid,
            correct: this.score,
            incorrect: this.incorrect,
            skipped: this.skipped,
            time_taken: this.timeTaken,
        });
    }
    shouldUseServer(data) {
        // We override the RunestoneBase version because there is no "correct" attribute, and there are 2 possible localStorage schemas
        // --we also want to default to local storage because it contains more information specifically which questions are correct, incorrect, and skipped.
        var storageDate;
        if (localStorage.length === 0) return true;
        var storageObj = localStorage.getItem(this.localStorageKey());
        if (storageObj === null) return true;
        try {
            var storedData = JSON.parse(storageObj).answer;
            if (storedData.length == 4) {
                if (
                    data.correct == storedData[0] &&
                    data.incorrect == storedData[1] &&
                    data.skipped == storedData[2] &&
                    data.timeTaken == storedData[3]
                )
                    return true;
            } else if (storedData.length == 7) {
                if (
                    data.correct == storedData[0] &&
                    data.incorrect == storedData[2] &&
                    data.skipped == storedData[4] &&
                    data.timeTaken == storedData[6]
                ) {
                    return false; // In this case, because local storage has more info, we want to use that if it's consistent
                }
            }
            storageDate = new Date(JSON.parse(storageObj[1]).timestamp);
        } catch (err) {
            // error while parsing; likely due to bad value stored in storage
            console.log(err.message);
            localStorage.removeItem(this.localStorageKey());
            return true;
        }
        var serverDate = new Date(data.timestamp);
        if (serverDate < storageDate) {
            this.logScore();
            return false;
        }
        return true;
    }

    checkLocalStorage() {
        var len = localStorage.length;
        if (len > 0) {
            if (localStorage.getItem(this.localStorageKey()) !== null) {
                this.taken = 1;
                this.restoreAnswers("");
            } else {
                this.taken = 0;
            }
        } else {
            this.taken = 0;
        }
    }
    async restoreAnswers(data) {
        this.taken = 1;
        var tmpArr;
        if (data === "") {
            try {
                tmpArr = JSON.parse(
                    localStorage.getItem(this.localStorageKey())
                ).answer;
            } catch (err) {
                // error while parsing; likely due to bad value stored in storage
                console.log(err.message);
                localStorage.removeItem(this.localStorageKey());
                this.taken = 0;
                return;
            }
        } else {
            // Parse results from the database
            tmpArr = [
                parseInt(data.correct),
                parseInt(data.incorrect),
                parseInt(data.skipped),
                parseInt(data.timeTaken),
                data.reset,
            ];
            this.setLocalStorage(tmpArr);
        }
        if (tmpArr.length == 1) {
            // Exam was previously reset
            this.reset = true;
            this.taken = 0;
            return;
        }
        if (tmpArr.length == 4) {
            // Accidental Reload OR Database Entry
            this.score = tmpArr[0];
            this.incorrect = tmpArr[1];
            this.skipped = tmpArr[2];
            this.timeTaken = tmpArr[3];
        } else if (tmpArr.length == 7) {
            // Loaded Completed Exam
            this.score = tmpArr[0];
            this.correctStr = tmpArr[1];
            this.incorrect = tmpArr[2];
            this.incorrectStr = tmpArr[3];
            this.skipped = tmpArr[4];
            this.skippedStr = tmpArr[5];
            this.timeTaken = tmpArr[6];
        } else {
            // Set localStorage in case of "accidental" reload
            this.score = 0;
            this.incorrect = 0;
            this.skipped = this.renderedQuestionArray.length;
            this.timeTaken = 0;
        }
        if (this.taken) {
            if (this.skipped === this.renderedQuestionArray.length) {
                this.showFeedback = false;
            }
            this.handlePrevAssessment();
        }
        await this.renderTimedQuestion();
        this.displayScore();
        this.showTime();
    }
    setLocalStorage(parsedData) {
        var timeStamp = new Date();
        var storageObj = {
            answer: parsedData,
            timestamp: timeStamp,
        };
        localStorage.setItem(
            this.localStorageKey(),
            JSON.stringify(storageObj)
        );
    }
    displayScore() {
        if (this.showResults) {
            var scoreString = "";
            var numQuestions;
            var percentCorrect;
            // if we have some information
            if (
                this.correctStr.length > 0 ||
                this.incorrectStr.length > 0 ||
                this.skippedStr.length > 0
            ) {
                scoreString = `Num Correct: ${this.score}. Questions: ${this.correctStr}<br>Num Wrong: ${this.incorrect}. Questions: ${this.incorrectStr}<br>Num Skipped: ${this.skipped}. Questions: ${this.skippedStr}<br>`;
                numQuestions = this.score + this.incorrect + this.skipped;
                percentCorrect = (this.score / numQuestions) * 100;
                scoreString += "Percent Correct: " + percentCorrect + "%";
                $(this.scoreDiv).html(scoreString);
                this.scoreDiv.style.display = "block";
            } else {
                scoreString = `Num Correct: ${this.score}<br>Num Wrong: ${this.incorrect}<br>Num Skipped: ${this.skipped}<br>`;
                numQuestions = this.score + this.incorrect + this.skipped;
                percentCorrect = (this.score / numQuestions) * 100;
                scoreString += "Percent Correct: " + percentCorrect + "%";
                $(this.scoreDiv).html(scoreString);
                this.scoreDiv.style.display = "block";
            }
            this.highlightNumberedList();
        } else {
            $(this.scoreDiv).html(
                "Thank you for taking the exam.  Your answers have been recorded."
            );
            this.scoreDiv.style.display = "block";
        }
    }
    highlightNumberedList() {
        var correctCount = this.correctStr;
        var incorrectCount = this.incorrectStr;
        var skippedCount = this.skippedStr;
        correctCount = correctCount.replace(/ /g, "").split(",");
        incorrectCount = incorrectCount.replace(/ /g, "").split(",");
        skippedCount = skippedCount.replace(/ /g, "").split(",");
        $(function () {
            var numberedBtns = $("ul#pageNums > ul > li");
            if (numberedBtns.hasClass("answered")) {
                numberedBtns.removeClass("answered");
            }
            for (var i = 0; i < correctCount.length; i++) {
                var test = parseInt(correctCount[i]) - 1;
                numberedBtns
                    .eq(parseInt(correctCount[i]) - 1)
                    .addClass("correctCount");
            }
            for (var j = 0; j < incorrectCount.length; j++) {
                numberedBtns
                    .eq(parseInt(incorrectCount[j]) - 1)
                    .addClass("incorrectCount");
            }
            for (var k = 0; k < skippedCount.length; k++) {
                numberedBtns
                    .eq(parseInt(skippedCount[k]) - 1)
                    .addClass("skippedCount");
            }
        });
    }
}

/*=======================================================
=== Function that calls the constructors on page load ===
=======================================================*/
$(document).on("runestone:login-complete", function () {
    $("[data-component=timedAssessment]").each(function (index) {
        TimedList[this.id] = new Timed({
            orig: this,
            useRunestoneServices: eBookConfig.useRunestoneServices,
        });
    });
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuZXN0b25lX3RpbWVkX2pzX3RpbWVkX2pzLXJ1bmVzdG9uZV9jbGlja2FibGVBcmVhX2Nzc19jbGlja2FibGVfY3NzLXJ1bmVzdG9uZV9kcmFnbmRyb3BfY3NzLThiZmQ1NC43MDlhM2RmNWYzMzFlNDI2LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDYTs7QUFFZ0Q7QUFDVjtBQUNEO0FBQ3VCO0FBQ2hCO0FBQ2M7QUFDWDtBQUNBO0FBQ0Y7QUFDaEM7O0FBRW5CLG9CQUFvQjs7QUFFM0I7QUFDZSxvQkFBb0IsbUVBQWE7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRTtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixxQ0FBcUM7QUFDN0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw4QkFBOEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDZCQUE2QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix5QkFBeUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwyQkFBMkI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIseUJBQXlCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvdGltZWQvY3NzL3RpbWVkLmNzcz8yYmUyIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvdGltZWQvanMvdGltZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj09PT09PT09ICAgICAgTWFzdGVyIHRpbWVkLmpzICAgICA9PT09PT09PT1cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT0gICAgIFRoaXMgZmlsZSBjb250YWlucyB0aGUgSlMgZm9yICAgID09PVxuPT09ICAgICB0aGUgUnVuZXN0b25lIHRpbWVkIGNvbXBvbmVudC4gICA9PT1cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT0gICAgICAgICAgICAgIENyZWF0ZWQgQnkgICAgICAgICAgICAgID09PVxuPT09ICAgICAgICAgICAgIEtpcmJ5IE9sc29uICAgICAgICAgICAgICA9PT1cbj09PSAgICAgICAgICAgICAgIDYvMTEvMTUgICAgICAgICAgICAgICAgPT09XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdW5lc3RvbmVCYXNlIGZyb20gXCIuLi8uLi9jb21tb24vanMvcnVuZXN0b25lYmFzZS5qc1wiO1xuaW1wb3J0IFRpbWVkRklUQiBmcm9tIFwiLi4vLi4vZml0Yi9qcy90aW1lZGZpdGIuanNcIjtcbmltcG9ydCBUaW1lZE1DIGZyb20gXCIuLi8uLi9tY2hvaWNlL2pzL3RpbWVkbWMuanNcIjtcbmltcG9ydCBUaW1lZFNob3J0QW5zd2VyIGZyb20gXCIuLi8uLi9zaG9ydGFuc3dlci9qcy90aW1lZF9zaG9ydGFuc3dlci5qc1wiO1xuaW1wb3J0IEFDRmFjdG9yeSBmcm9tIFwiLi4vLi4vYWN0aXZlY29kZS9qcy9hY2ZhY3RvcnkuanNcIjtcbmltcG9ydCBUaW1lZENsaWNrYWJsZUFyZWEgZnJvbSBcIi4uLy4uL2NsaWNrYWJsZUFyZWEvanMvdGltZWRjbGlja2FibGVcIjtcbmltcG9ydCBUaW1lZERyYWdORHJvcCBmcm9tIFwiLi4vLi4vZHJhZ25kcm9wL2pzL3RpbWVkZG5kLmpzXCI7XG5pbXBvcnQgVGltZWRQYXJzb25zIGZyb20gXCIuLi8uLi9wYXJzb25zL2pzL3RpbWVkcGFyc29ucy5qc1wiO1xuaW1wb3J0IFNlbGVjdE9uZSBmcm9tIFwiLi4vLi4vc2VsZWN0cXVlc3Rpb24vanMvc2VsZWN0b25lXCI7XG5pbXBvcnQgXCIuLi9jc3MvdGltZWQuY3NzXCI7XG5cbmV4cG9ydCB2YXIgVGltZWRMaXN0ID0ge307IC8vIFRpbWVkIGRpY3Rpb25hcnlcblxuLy8gVGltZWQgY29uc3RydWN0b3JcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVkIGV4dGVuZHMgUnVuZXN0b25lQmFzZSB7XG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBzdXBlcihvcHRzKTtcbiAgICAgICAgdmFyIG9yaWcgPSBvcHRzLm9yaWc7XG4gICAgICAgIHRoaXMub3JpZ0VsZW0gPSBvcmlnOyAvLyB0aGUgZW50aXJlIGVsZW1lbnQgb2YgdGhpcyB0aW1lZCBhc3Nlc3NtZW50IGFuZCBhbGwgb2YgaXRzIGNoaWxkcmVuXG4gICAgICAgIHRoaXMuZGl2aWQgPSBvcmlnLmlkO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gdGhpcy5vcmlnRWxlbS5jaGlsZE5vZGVzO1xuICAgICAgICB0aGlzLnZpc2l0ZWQgPSBbXTtcbiAgICAgICAgdGhpcy50aW1lTGltaXQgPSAwO1xuICAgICAgICB0aGlzLmxpbWl0ZWRUaW1lID0gZmFsc2U7XG4gICAgICAgIGlmICghaXNOYU4oJCh0aGlzLm9yaWdFbGVtKS5kYXRhKFwidGltZVwiKSkpIHtcbiAgICAgICAgICAgIHRoaXMudGltZUxpbWl0ID0gcGFyc2VJbnQoJCh0aGlzLm9yaWdFbGVtKS5kYXRhKFwidGltZVwiKSwgMTApICogNjA7IC8vIHRpbWUgaW4gc2Vjb25kcyB0byBjb21wbGV0ZSB0aGUgZXhhbVxuICAgICAgICAgICAgdGhpcy5zdGFydGluZ1RpbWUgPSB0aGlzLnRpbWVMaW1pdDtcbiAgICAgICAgICAgIHRoaXMubGltaXRlZFRpbWUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvd0ZlZWRiYWNrID0gdHJ1ZTtcbiAgICAgICAgaWYgKCQodGhpcy5vcmlnRWxlbSkuaXMoXCJbZGF0YS1uby1mZWVkYmFja11cIikpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0ZlZWRiYWNrID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG93UmVzdWx0cyA9IHRydWU7XG4gICAgICAgIGlmICgkKHRoaXMub3JpZ0VsZW0pLmlzKFwiW2RhdGEtbm8tcmVzdWx0XVwiKSkge1xuICAgICAgICAgICAgdGhpcy5zaG93UmVzdWx0cyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmFuZG9tID0gZmFsc2U7XG4gICAgICAgIGlmICgkKHRoaXMub3JpZ0VsZW0pLmlzKFwiW2RhdGEtcmFuZG9tXVwiKSkge1xuICAgICAgICAgICAgdGhpcy5yYW5kb20gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvd1RpbWVyID0gdHJ1ZTtcbiAgICAgICAgaWYgKCQodGhpcy5vcmlnRWxlbSkuaXMoXCJbZGF0YS1uby10aW1lcl1cIikpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1RpbWVyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mdWxsd2lkdGggPSBmYWxzZTtcbiAgICAgICAgaWYgKCQodGhpcy5vcmlnRWxlbSkuaXMoXCJbZGF0YS1mdWxsd2lkdGhdXCIpKSB7XG4gICAgICAgICAgICB0aGlzLmZ1bGx3aWR0aCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub3BhdXNlID0gZmFsc2U7XG4gICAgICAgIGlmICgkKHRoaXMub3JpZ0VsZW0pLmlzKFwiW2RhdGEtbm8tcGF1c2VdXCIpKSB7XG4gICAgICAgICAgICB0aGlzLm5vcGF1c2UgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVCb29rQ29uZmlnLmVuYWJsZVNjcmF0Y2hBQyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSAwO1xuICAgICAgICB0aGlzLnBhdXNlZCA9IDA7XG4gICAgICAgIHRoaXMuZG9uZSA9IDA7XG4gICAgICAgIHRoaXMudGFrZW4gPSAwO1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5pbmNvcnJlY3QgPSAwO1xuICAgICAgICB0aGlzLmNvcnJlY3RTdHIgPSBcIlwiO1xuICAgICAgICB0aGlzLmluY29ycmVjdFN0ciA9IFwiXCI7XG4gICAgICAgIHRoaXMuc2tpcHBlZFN0ciA9IFwiXCI7XG4gICAgICAgIHRoaXMuc2tpcHBlZCA9IDA7XG4gICAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggPSAwOyAvLyBXaGljaCBxdWVzdGlvbiBpcyBjdXJyZW50bHkgZGlzcGxheWluZyBvbiB0aGUgcGFnZVxuICAgICAgICB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheSA9IFtdOyAvLyBsaXN0IG9mIGFsbCBwcm9ibGVtc1xuICAgICAgICB0aGlzLmdldE5ld0NoaWxkcmVuKCk7XG4gICAgICAgIC8vIE9uZSBzbWFsbCBzdGVwIHRvIGVsaW1pbmF0ZSBzdHVkZW50cyBmcm9tIGRvaW5nIHZpZXcgc291cmNlXG4gICAgICAgIC8vIHRoaXMgd29uJ3Qgc3RvcCBhbnlvbmUgd2l0aCBkZXRlcm1pbmF0aW9uIGJ1dCBtYXkgcHJldmVudCBjYXN1YWwgcGVla2luZ1xuICAgICAgICBpZiAoIWVCb29rQ29uZmlnLmVuYWJsZURlYnVnKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5Lm9uY29udGV4dG1lbnUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoZWNrQXNzZXNzbWVudFN0YXR1cygpLnRoZW4oXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJUaW1lZEFzc2VzcygpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0TmV3Q2hpbGRyZW4oKSB7XG4gICAgICAgIHRoaXMubmV3Q2hpbGRyZW4gPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9yaWdFbGVtLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMubmV3Q2hpbGRyZW4ucHVzaCh0aGlzLm9yaWdFbGVtLmNoaWxkTm9kZXNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgY2hlY2tBc3Nlc3NtZW50U3RhdHVzKCkge1xuICAgICAgICAvLyBIYXMgdGhlIHVzZXIgdGFrZW4gdGhpcyBleGFtPyAgSW5xdWlyaW5nIG1pbmRzIHdhbnQgdG8ga25vd1xuICAgICAgICAvLyBJZiBhIHVzZXIgaGFzIG5vdCB0YWtlbiB0aGlzIGV4YW0gdGhlbiB3ZSB3YW50IHRvIG1ha2Ugc3VyZVxuICAgICAgICAvLyB0aGF0IGlmIGEgcXVlc3Rpb24gaGFzIGJlZW4gc2VlbiBieSB0aGUgc3R1ZGVudCBiZWZvcmUgd2UgZG9cbiAgICAgICAgLy8gbm90IHBvcHVsYXRlIHByZXZpb3VzIGFuc3dlcnMuXG4gICAgICAgIGxldCBzZW5kSW5mbyA9IHtcbiAgICAgICAgICAgIGRpdl9pZDogdGhpcy5kaXZpZCxcbiAgICAgICAgICAgIGNvdXJzZV9uYW1lOiBlQm9va0NvbmZpZy5jb3Vyc2UsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKHNlbmRJbmZvKTtcbiAgICAgICAgaWYgKGVCb29rQ29uZmlnLnVzZVJ1bmVzdG9uZVNlcnZpY2VzKSB7XG4gICAgICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KFxuICAgICAgICAgICAgICAgIGAke2VCb29rQ29uZmlnLm5ld19zZXJ2ZXJfcHJlZml4fS9hc3Nlc3NtZW50L3Rvb2tUaW1lZEFzc2Vzc21lbnRgLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogdGhpcy5qc29uSGVhZGVycyxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoc2VuZEluZm8pLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0KTtcbiAgICAgICAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgZGF0YSA9IGRhdGEuZGV0YWlsO1xuICAgICAgICAgICAgdGhpcy50YWtlbiA9IGRhdGEudG9va0Fzc2Vzc21lbnQ7XG4gICAgICAgICAgICB0aGlzLmFzc2Vzc21lbnRUYWtlbiA9IHRoaXMudGFrZW47XG4gICAgICAgICAgICBpZiAoIXRoaXMudGFrZW4pIHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZG9uZSB3aXRoIGNoZWNrIHN0YXR1c1wiKTtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGFrZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYXNzZXNzbWVudFRha2VuID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PT0gR2VuZXJhdGluZyBuZXcgVGltZWQgSFRNTCA9PT1cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICBhc3luYyByZW5kZXJUaW1lZEFzc2VzcygpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXJpbmcgdGltZWQgXCIpO1xuICAgICAgICAvLyBjcmVhdGUgcmVuZGVyZWRRdWVzdGlvbkFycmF5IHJldHVybnMgYSBwcm9taXNlXG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMuY3JlYXRlUmVuZGVyZWRRdWVzdGlvbkFycmF5KCk7XG4gICAgICAgIGlmICh0aGlzLnJhbmRvbSkge1xuICAgICAgICAgICAgdGhpcy5yYW5kb21pemVSUUEoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbmRlckNvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLnJlbmRlclRpbWVyKCk7XG4gICAgICAgIGF3YWl0IHRoaXMucmVuZGVyQ29udHJvbEJ1dHRvbnMoKTtcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGhpcy50aW1lZERpdik7IC8vIFRoaXMgY2FuJ3QgYmUgYXBwZW5kZWQgaW4gcmVuZGVyQ29udGFpbmVyIGJlY2F1c2UgdGhlbiBpdCByZW5kZXJzIGFib3ZlIHRoZSB0aW1lciBhbmQgY29udHJvbCBidXR0b25zLlxuICAgICAgICBpZiAodGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXkubGVuZ3RoID4gMSkgdGhpcy5yZW5kZXJOYXZDb250cm9scygpO1xuICAgICAgICB0aGlzLnJlbmRlclN1Ym1pdEJ1dHRvbigpO1xuICAgICAgICB0aGlzLnJlbmRlckZlZWRiYWNrQ29udGFpbmVyKCk7XG4gICAgICAgIHRoaXMudXNlUnVuZXN0b25lU2VydmljZXMgPSBlQm9va0NvbmZpZy51c2VSdW5lc3RvbmVTZXJ2aWNlcztcbiAgICAgICAgLy8gUmVwbGFjZSBpbnRlcm1lZGlhdGUgSFRNTCB3aXRoIHJlbmRlcmVkIEhUTUxcbiAgICAgICAgJCh0aGlzLm9yaWdFbGVtKS5yZXBsYWNlV2l0aCh0aGlzLmNvbnRhaW5lckRpdik7XG4gICAgICAgIC8vIGNoZWNrIGlmIGFscmVhZHkgdGFrZW4gYW5kIGlmIHNvIHNob3cgcmVzdWx0c1xuICAgICAgICB0aGlzLnN0eWxlRXhhbUVsZW1lbnRzKCk7IC8vIHJlbmFtZSB0byByZW5kZXJQb3NzaWJsZVJlc3VsdHNcbiAgICAgICAgdGhpcy5jaGVja1NlcnZlcihcInRpbWVkRXhhbVwiLCB0cnVlKTtcbiAgICB9XG5cbiAgICByZW5kZXJDb250YWluZXIoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy8gY29udGFpbmVyIGZvciB0aGUgZW50aXJlIFRpbWVkIENvbXBvbmVudFxuICAgICAgICBpZiAodGhpcy5mdWxsd2lkdGgpIHtcbiAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb250YWluZXIgdG8gZmlsbCB0aGUgd2lkdGggLSBiYXJiXG4gICAgICAgICAgICAkKHRoaXMuY29udGFpbmVyRGl2KS5hdHRyKHtcbiAgICAgICAgICAgICAgICBzdHlsZTogXCJtYXgtd2lkdGg6bm9uZVwiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuaWQgPSB0aGlzLmRpdmlkO1xuICAgICAgICB0aGlzLnRpbWVkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy8gZGl2IHRoYXQgd2lsbCBob2xkIHRoZSBxdWVzdGlvbnMgZm9yIHRoZSB0aW1lZCBhc3Nlc3NtZW50XG4gICAgICAgIHRoaXMubmF2RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy8gRm9yIG5hdmlnYXRpb24gY29udHJvbFxuICAgICAgICAkKHRoaXMubmF2RGl2KS5hdHRyKHtcbiAgICAgICAgICAgIHN0eWxlOiBcInRleHQtYWxpZ246Y2VudGVyXCIsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmZsYWdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvLyBkaXYgdGhhdCB3aWxsIGhvbGQgdGhlIFwiRmxhZyBRdWVzdGlvblwiIGJ1dHRvblxuICAgICAgICAkKHRoaXMuZmxhZ0RpdikuYXR0cih7XG4gICAgICAgICAgICBzdHlsZTogXCJ0ZXh0LWFsaWduOiBjZW50ZXJcIixcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3dpdGNoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5zd2l0Y2hDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInN3aXRjaGNvbnRhaW5lclwiKTtcbiAgICAgICAgdGhpcy5zd2l0Y2hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvLyBpcyByZXBsYWNlZCBieSB0aGUgcXVlc3Rpb25zXG4gICAgICAgIHRoaXMudGltZWREaXYuYXBwZW5kQ2hpbGQodGhpcy5uYXZEaXYpO1xuICAgICAgICB0aGlzLnRpbWVkRGl2LmFwcGVuZENoaWxkKHRoaXMuZmxhZ0Rpdik7IC8vIGFkZCBmbGFnRGl2IHRvIHRpbWVkRGl2LCB3aGljaCBob2xkcyBjb21wb25lbnRzIGZvciBuYXZpZ2F0aW9uIGFuZCBxdWVzdGlvbnMgZm9yIHRpbWVkIGFzc2Vzc21lbnRcbiAgICAgICAgdGhpcy50aW1lZERpdi5hcHBlbmRDaGlsZCh0aGlzLnN3aXRjaENvbnRhaW5lcik7XG4gICAgICAgIHRoaXMuc3dpdGNoQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuc3dpdGNoRGl2KTtcbiAgICAgICAgJCh0aGlzLnRpbWVkRGl2KS5hdHRyKHtcbiAgICAgICAgICAgIGlkOiBcInRpbWVkX1Rlc3RcIixcbiAgICAgICAgICAgIHN0eWxlOiBcImRpc3BsYXk6bm9uZVwiLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXJUaW1lcigpIHtcbiAgICAgICAgdGhpcy53cmFwcGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy50aW1lckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJQXCIpO1xuICAgICAgICB0aGlzLndyYXBwZXJEaXYuaWQgPSB0aGlzLmRpdmlkICsgXCItc3RhcnRXcmFwcGVyXCI7XG4gICAgICAgIHRoaXMudGltZXJDb250YWluZXIuaWQgPSB0aGlzLmRpdmlkICsgXCItb3V0cHV0XCI7XG4gICAgICAgIHRoaXMud3JhcHBlckRpdi5hcHBlbmRDaGlsZCh0aGlzLnRpbWVyQ29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5zaG93VGltZSgpO1xuICAgIH1cblxuICAgIHJlbmRlckNvbnRyb2xCdXR0b25zKCkge1xuICAgICAgICB0aGlzLmNvbnRyb2xEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAkKHRoaXMuY29udHJvbERpdikuYXR0cih7XG4gICAgICAgICAgICBpZDogXCJjb250cm9sc1wiLFxuICAgICAgICAgICAgc3R5bGU6IFwidGV4dC1hbGlnbjogY2VudGVyXCIsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0YXJ0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgdGhpcy5wYXVzZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICQodGhpcy5zdGFydEJ0bikuYXR0cih7XG4gICAgICAgICAgICBjbGFzczogXCJidG4gYnRuLXN1Y2Nlc3NcIixcbiAgICAgICAgICAgIGlkOiBcInN0YXJ0XCIsXG4gICAgICAgICAgICB0YWJpbmRleDogXCIwXCIsXG4gICAgICAgICAgICByb2xlOiBcImJ1dHRvblwiLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdGFydEJ0bi50ZXh0Q29udGVudCA9IFwiU3RhcnRcIjtcbiAgICAgICAgdGhpcy5zdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQodGhpcy5maW5pc2hCdXR0b24pLmhpZGUoKTsgLy8gaGlkZSB0aGUgZmluaXNoIGJ1dHRvbiBmb3Igbm93XG4gICAgICAgICAgICAgICAgJCh0aGlzLmZsYWdCdXR0b24pLnNob3coKTtcbiAgICAgICAgICAgICAgICBsZXQgbWVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgICAgIG1lc3MuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICAgICAgXCI8c3Ryb25nPldhcm5pbmc6IFlvdSB3aWxsIG5vdCBiZSBhYmxlIHRvIGNvbnRpbnVlIHRoZSBleGFtIGlmIHlvdSBjbG9zZSB0aGlzIHRhYiwgY2xvc2UgdGhlIHdpbmRvdywgb3IgbmF2aWdhdGUgYXdheSBmcm9tIHRoaXMgcGFnZSE8L3N0cm9uZz4gIE1ha2Ugc3VyZSB5b3UgY2xpY2sgdGhlIEZpbmlzaCBFeGFtIGJ1dHRvbiB3aGVuIHlvdSBhcmUgZG9uZSB0byBzdWJtaXQgeW91ciB3b3JrIVwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbERpdi5hcHBlbmRDaGlsZChtZXNzKTtcbiAgICAgICAgICAgICAgICBtZXNzLmNsYXNzTGlzdC5hZGQoXCJleGFtd2FybmluZ1wiKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnJlbmRlclRpbWVkUXVlc3Rpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0QXNzZXNzbWVudCgpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcbiAgICAgICAgJCh0aGlzLnBhdXNlQnRuKS5hdHRyKHtcbiAgICAgICAgICAgIGNsYXNzOiBcImJ0biBidG4tZGVmYXVsdFwiLFxuICAgICAgICAgICAgaWQ6IFwicGF1c2VcIixcbiAgICAgICAgICAgIGRpc2FibGVkOiBcInRydWVcIixcbiAgICAgICAgICAgIHRhYmluZGV4OiBcIjBcIixcbiAgICAgICAgICAgIHJvbGU6IFwiYnV0dG9uXCIsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnBhdXNlQnRuLnRleHRDb250ZW50ID0gXCJQYXVzZVwiO1xuICAgICAgICB0aGlzLnBhdXNlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZUFzc2Vzc21lbnQoKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICk7XG4gICAgICAgIGlmICghdGhpcy50YWtlbikge1xuICAgICAgICAgICAgdGhpcy5jb250cm9sRGl2LmFwcGVuZENoaWxkKHRoaXMuc3RhcnRCdG4pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5ub3BhdXNlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xEaXYuYXBwZW5kQ2hpbGQodGhpcy5wYXVzZUJ0bik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGhpcy53cmFwcGVyRGl2KTtcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sRGl2KTtcbiAgICB9XG5cbiAgICByZW5kZXJOYXZDb250cm9scygpIHtcbiAgICAgICAgLy8gbWFraW5nIFwiUHJldlwiIGJ1dHRvblxuICAgICAgICB0aGlzLnBhZ05hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgICQodGhpcy5wYWdOYXZMaXN0KS5hZGRDbGFzcyhcInBhZ2luYXRpb25cIik7XG4gICAgICAgIHRoaXMubGVmdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgdGhpcy5sZWZ0TmF2QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgdGhpcy5sZWZ0TmF2QnV0dG9uLmlubmVySFRNTCA9IFwiJiM4MjQ5OyBQcmV2XCI7XG4gICAgICAgICQodGhpcy5sZWZ0TmF2QnV0dG9uKS5hdHRyKFwiYXJpYS1sYWJlbFwiLCBcIlByZXZpb3VzXCIpO1xuICAgICAgICAkKHRoaXMubGVmdE5hdkJ1dHRvbikuYXR0cihcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgICAgICAgJCh0aGlzLmxlZnROYXZCdXR0b24pLmF0dHIoXCJyb2xlXCIsIFwiYnV0dG9uXCIpO1xuICAgICAgICAkKHRoaXMucmlnaHROYXZCdXR0b24pLmF0dHIoXCJpZFwiLCBcInByZXZcIik7XG4gICAgICAgICQodGhpcy5sZWZ0TmF2QnV0dG9uKS5jc3MoXCJjdXJzb3JcIiwgXCJwb2ludGVyXCIpO1xuICAgICAgICB0aGlzLmxlZnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5sZWZ0TmF2QnV0dG9uKTtcbiAgICAgICAgdGhpcy5wYWdOYXZMaXN0LmFwcGVuZENoaWxkKHRoaXMubGVmdENvbnRhaW5lcik7XG4gICAgICAgIC8vIG1ha2luZyBcIkZsYWcgUXVlc3Rpb25cIiBidXR0b25cbiAgICAgICAgdGhpcy5mbGFnZ2luZ1BsYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICAkKHRoaXMuZmxhZ2dpbmdQbGFjZSkuYWRkQ2xhc3MoXCJwYWdpbmF0aW9uXCIpO1xuICAgICAgICB0aGlzLmZsYWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIHRoaXMuZmxhZ0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICQodGhpcy5mbGFnQnV0dG9uKS5hZGRDbGFzcyhcImZsYWdCdG5cIik7XG4gICAgICAgIHRoaXMuZmxhZ0J1dHRvbi5pbm5lckhUTUwgPSBcIkZsYWcgUXVlc3Rpb25cIjsgLy8gbmFtZSBvbiBidXR0b25cbiAgICAgICAgJCh0aGlzLmZsYWdCdXR0b24pLmF0dHIoXCJhcmlhLWxhYmVsbGVkYnlcIiwgXCJGbGFnXCIpO1xuICAgICAgICAkKHRoaXMuZmxhZ0J1dHRvbikuYXR0cihcInRhYmluZGV4XCIsIFwiNVwiKTtcbiAgICAgICAgJCh0aGlzLmZsYWdCdXR0b24pLmF0dHIoXCJyb2xlXCIsIFwiYnV0dG9uXCIpO1xuICAgICAgICAkKHRoaXMuZmxhZ0J1dHRvbikuYXR0cihcImlkXCIsIFwiZmxhZ1wiKTtcbiAgICAgICAgJCh0aGlzLmZsYWdCdXR0b24pLmNzcyhcImN1cnNvclwiLCBcInBvaW50ZXJcIik7XG4gICAgICAgIHRoaXMuZmxhZ0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmZsYWdCdXR0b24pOyAvLyBhZGRpbmcgYnV0dG9uIHRvIGNvbnRhaW5lclxuICAgICAgICB0aGlzLmZsYWdnaW5nUGxhY2UuYXBwZW5kQ2hpbGQodGhpcy5mbGFnQ29udGFpbmVyKTsgLy8gYWRkaW5nIGNvbnRhaW5lciB0byBmbGFnZ2luZ1BsYWNlXG4gICAgICAgIC8vIG1ha2luZyBcIk5leHRcIiBidXR0b25cbiAgICAgICAgdGhpcy5yaWdodENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgdGhpcy5yaWdodE5hdkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICQodGhpcy5yaWdodE5hdkJ1dHRvbikuYXR0cihcImFyaWEtbGFiZWxcIiwgXCJOZXh0XCIpO1xuICAgICAgICAkKHRoaXMucmlnaHROYXZCdXR0b24pLmF0dHIoXCJ0YWJpbmRleFwiLCBcIjBcIik7XG4gICAgICAgICQodGhpcy5yaWdodE5hdkJ1dHRvbikuYXR0cihcInJvbGVcIiwgXCJidXR0b25cIik7XG4gICAgICAgICQodGhpcy5yaWdodE5hdkJ1dHRvbikuYXR0cihcImlkXCIsIFwibmV4dFwiKTtcbiAgICAgICAgdGhpcy5yaWdodE5hdkJ1dHRvbi5pbm5lckhUTUwgPSBcIk5leHQgJiM4MjUwO1wiO1xuICAgICAgICAkKHRoaXMucmlnaHROYXZCdXR0b24pLmNzcyhcImN1cnNvclwiLCBcInBvaW50ZXJcIik7XG4gICAgICAgIHRoaXMucmlnaHRDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yaWdodE5hdkJ1dHRvbik7XG4gICAgICAgIHRoaXMucGFnTmF2TGlzdC5hcHBlbmRDaGlsZCh0aGlzLnJpZ2h0Q29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5lbnN1cmVCdXR0b25TYWZldHkoKTtcbiAgICAgICAgdGhpcy5uYXZEaXYuYXBwZW5kQ2hpbGQodGhpcy5wYWdOYXZMaXN0KTtcbiAgICAgICAgdGhpcy5mbGFnRGl2LmFwcGVuZENoaWxkKHRoaXMuZmxhZ2dpbmdQbGFjZSk7IC8vIGFkZHMgZmxhZ2dpbmdQbGFjZSB0byB0aGUgZmxhZ0RpdlxuICAgICAgICB0aGlzLmJyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpO1xuICAgICAgICB0aGlzLm5hdkRpdi5hcHBlbmRDaGlsZCh0aGlzLmJyZWFrKTtcbiAgICAgICAgLy8gcmVuZGVyIHRoZSBxdWVzdGlvbiBudW1iZXIganVtcCBidXR0b25zXG4gICAgICAgIHRoaXMucU51bUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgICQodGhpcy5xTnVtTGlzdCkuYXR0cihcImlkXCIsIFwicGFnZU51bXNcIik7XG4gICAgICAgIHRoaXMucU51bVdyYXBwZXJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICAkKHRoaXMucU51bVdyYXBwZXJMaXN0KS5hZGRDbGFzcyhcInBhZ2luYXRpb25cIik7XG4gICAgICAgIHZhciB0bXBMaSwgdG1wQTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdG1wTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICB0bXBBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgICAgICB0bXBBLmlubmVySFRNTCA9IGkgKyAxO1xuICAgICAgICAgICAgJCh0bXBBKS5jc3MoXCJjdXJzb3JcIiwgXCJwb2ludGVyXCIpO1xuICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAkKHRtcExpKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRtcExpLmFwcGVuZENoaWxkKHRtcEEpO1xuICAgICAgICAgICAgdGhpcy5xTnVtV3JhcHBlckxpc3QuYXBwZW5kQ2hpbGQodG1wTGkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucU51bUxpc3QuYXBwZW5kQ2hpbGQodGhpcy5xTnVtV3JhcHBlckxpc3QpO1xuICAgICAgICB0aGlzLm5hdkRpdi5hcHBlbmRDaGlsZCh0aGlzLnFOdW1MaXN0KTtcbiAgICAgICAgdGhpcy5uYXZCdG5MaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5mbGFnQnRuTGlzdGVuZXIoKTsgLy8gbGlzdGVucyBmb3IgY2xpY2sgb24gZmxhZyBidXR0b25cbiAgICAgICAgJCh0aGlzLmZsYWdCdXR0b24pLmhpZGUoKTtcbiAgICB9XG5cbiAgICAvLyB3aGVuIG1vdmluZyBvZmYgb2YgYSBxdWVzdGlvbiBpbiBhbiBhY3RpdmUgZXhhbTpcbiAgICAvLyAxLiBzaG93IHRoYXQgdGhlIHF1ZXN0aW9uIGhhcyBiZWVuIHNlZW4sIG9yIG1hcmsgaXQgYnJva2VuIGlmIGl0IGlzIGluIGVycm9yLlxuICAgIC8vIDIuIGNoZWNrIGFuZCBsb2cgdGhlIGN1cnJlbnQgYW5zd2VyXG4gICAgYXN5bmMgbmF2aWdhdGVBd2F5KCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheVt0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4XS5zdGF0ZSA9PVxuICAgICAgICAgICAgXCJicm9rZW5fZXhhbVwiXG4gICAgICAgICkge1xuICAgICAgICAgICAgJChcbiAgICAgICAgICAgICAgICBcInVsI3BhZ2VOdW1zID4gdWwgPiBsaTplcShcIiArIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggKyBcIilcIlxuICAgICAgICAgICAgKS5hZGRDbGFzcyhcImJyb2tlblwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheVt0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4XS5zdGF0ZSA9PVxuICAgICAgICAgICAgXCJleGFtX2VuZGVkXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgICAkKFxuICAgICAgICAgICAgICAgIFwidWwjcGFnZU51bXMgPiB1bCA+IGxpOmVxKFwiICsgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCArIFwiKVwiXG4gICAgICAgICAgICApLmFkZENsYXNzKFwidG9vbGF0ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheVt0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4XS5xdWVzdGlvblxuICAgICAgICAgICAgICAgIC5pc0Fuc3dlcmVkXG4gICAgICAgICkge1xuICAgICAgICAgICAgJChcbiAgICAgICAgICAgICAgICBcInVsI3BhZ2VOdW1zID4gdWwgPiBsaTplcShcIiArIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggKyBcIilcIlxuICAgICAgICAgICAgKS5hZGRDbGFzcyhcImFuc3dlcmVkXCIpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXlbXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleFxuICAgICAgICAgICAgXS5xdWVzdGlvbi5jaGVja0N1cnJlbnRBbnN3ZXIoKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5kb25lKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXlbXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXhcbiAgICAgICAgICAgICAgICBdLnF1ZXN0aW9uLmxvZ0N1cnJlbnRBbnN3ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBoYW5kbGVOZXh0UHJldihldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMudGFrZW4pIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMubmF2aWdhdGVBd2F5KCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KS50ZXh0KCk7XG4gICAgICAgIGlmICh0YXJnZXQubWF0Y2goL05leHQvKSkge1xuICAgICAgICAgICAgLy8gY2hlY2tzIGdpdmVuIHRleHQgdG8gbWF0Y2ggXCJOZXh0XCJcbiAgICAgICAgICAgIGlmICgkKHRoaXMucmlnaHRDb250YWluZXIpLmhhc0NsYXNzKFwiZGlzYWJsZWRcIikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4Kys7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0Lm1hdGNoKC9QcmV2LykpIHtcbiAgICAgICAgICAgIC8vIGNoZWNrcyBnaXZlbiB0ZXh0IHRvIG1hdGNoIFwiUHJldlwiXG4gICAgICAgICAgICBpZiAoJCh0aGlzLmxlZnRDb250YWluZXIpLmhhc0NsYXNzKFwiZGlzYWJsZWRcIikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4LS07XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5yZW5kZXJUaW1lZFF1ZXN0aW9uKCk7XG4gICAgICAgIHRoaXMuZW5zdXJlQnV0dG9uU2FmZXR5KCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5xTnVtTGlzdC5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgICAgIHZhciBqID0gMDtcbiAgICAgICAgICAgICAgICBqIDwgdGhpcy5xTnVtTGlzdC5jaGlsZE5vZGVzW2ldLmNoaWxkTm9kZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGorK1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzLnFOdW1MaXN0LmNoaWxkTm9kZXNbaV0uY2hpbGROb2Rlc1tqXSkucmVtb3ZlQ2xhc3MoXG4gICAgICAgICAgICAgICAgICAgIFwiYWN0aXZlXCJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICQoXG4gICAgICAgICAgICBcInVsI3BhZ2VOdW1zID4gdWwgPiBsaTplcShcIiArIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggKyBcIilcIlxuICAgICAgICApLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAkKFxuICAgICAgICAgICAgICAgIFwidWwjcGFnZU51bXMgPiB1bCA+IGxpOmVxKFwiICsgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCArIFwiKVwiXG4gICAgICAgICAgICApLmhhc0NsYXNzKFwiZmxhZ2NvbG9yXCIpXG4gICAgICAgICkge1xuICAgICAgICAgICAgLy8gY2hlY2tpbmcgZm9yIGNsYXNzXG4gICAgICAgICAgICB0aGlzLmZsYWdCdXR0b24uaW5uZXJIVE1MID0gXCJVbmZsYWcgUXVlc3Rpb25cIjsgLy8gY2hhbmdlcyB0ZXh0IG9uIGJ1dHRvblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mbGFnQnV0dG9uLmlubmVySFRNTCA9IFwiRmxhZyBRdWVzdGlvblwiOyAvLyBjaGFuZ2VzIHRleHQgb24gYnV0dG9uXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBoYW5kbGVGbGFnKGV2ZW50KSB7XG4gICAgICAgIC8vIGNhbGxlZCB3aGVuIGZsYWcgYnV0dG9uIGlzIGNsaWNrZWRcbiAgICAgICAgdmFyIHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KS50ZXh0KCk7XG4gICAgICAgIGlmICh0YXJnZXQubWF0Y2goL0ZsYWcgUXVlc3Rpb24vKSkge1xuICAgICAgICAgICAgJChcbiAgICAgICAgICAgICAgICBcInVsI3BhZ2VOdW1zID4gdWwgPiBsaTplcShcIiArIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggKyBcIilcIlxuICAgICAgICAgICAgKS5hZGRDbGFzcyhcImZsYWdjb2xvclwiKTsgLy8gY2xhc3Mgd2lsbCBjaGFuZ2UgY29sb3Igb2YgcXVlc3Rpb24gYmxvY2tcbiAgICAgICAgICAgIHRoaXMuZmxhZ0J1dHRvbi5pbm5lckhUTUwgPSBcIlVuZmxhZyBRdWVzdGlvblwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcbiAgICAgICAgICAgICAgICBcInVsI3BhZ2VOdW1zID4gdWwgPiBsaTplcShcIiArIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggKyBcIilcIlxuICAgICAgICAgICAgKS5yZW1vdmVDbGFzcyhcImZsYWdjb2xvclwiKTsgLy8gd2lsbCByZXN0b3JlIGN1cnJlbnQgY29sb3Igb2YgcXVlc3Rpb24gYmxvY2tcbiAgICAgICAgICAgIHRoaXMuZmxhZ0J1dHRvbi5pbm5lckhUTUwgPSBcIkZsYWcgUXVlc3Rpb25cIjsgLy8gYWxzbyBzZXRzIG5hbWUgYmFja1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgaGFuZGxlTnVtYmVyZWROYXYoZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRha2VuKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLm5hdmlnYXRlQXdheSgpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5xTnVtTGlzdC5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgICAgIHZhciBqID0gMDtcbiAgICAgICAgICAgICAgICBqIDwgdGhpcy5xTnVtTGlzdC5jaGlsZE5vZGVzW2ldLmNoaWxkTm9kZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGorK1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzLnFOdW1MaXN0LmNoaWxkTm9kZXNbaV0uY2hpbGROb2Rlc1tqXSkucmVtb3ZlQ2xhc3MoXG4gICAgICAgICAgICAgICAgICAgIFwiYWN0aXZlXCJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KS50ZXh0KCk7XG4gICAgICAgIGxldCBvbGRJbmRleCA9IHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXg7XG4gICAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggPSBwYXJzZUludCh0YXJnZXQpIC0gMTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggPiB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjogYmFkIGluZGV4IGZvciAke3RhcmdldH1gKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggPSBvbGRJbmRleDtcbiAgICAgICAgfVxuICAgICAgICAkKFxuICAgICAgICAgICAgXCJ1bCNwYWdlTnVtcyA+IHVsID4gbGk6ZXEoXCIgKyB0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4ICsgXCIpXCJcbiAgICAgICAgKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgJChcbiAgICAgICAgICAgICAgICBcInVsI3BhZ2VOdW1zID4gdWwgPiBsaTplcShcIiArIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggKyBcIilcIiAvLyBjaGVja2luZyBmb3IgZmxhZ2NvbG9yIGNsYXNzXG4gICAgICAgICAgICApLmhhc0NsYXNzKFwiZmxhZ2NvbG9yXCIpXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5mbGFnQnV0dG9uLmlubmVySFRNTCA9IFwiVW5mbGFnIFF1ZXN0aW9uXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZsYWdCdXR0b24uaW5uZXJIVE1MID0gXCJGbGFnIFF1ZXN0aW9uXCI7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5yZW5kZXJUaW1lZFF1ZXN0aW9uKCk7XG4gICAgICAgIHRoaXMuZW5zdXJlQnV0dG9uU2FmZXR5KCk7XG4gICAgfVxuXG4gICAgLy8gc2V0IHVwIGV2ZW50cyBmb3IgbmF2aWdhdGlvblxuICAgIG5hdkJ0bkxpc3RlbmVycygpIHtcbiAgICAgICAgLy8gTmV4dCBhbmQgUHJldiBMaXN0ZW5lclxuICAgICAgICB0aGlzLnBhZ05hdkxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlTmV4dFByZXYuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gTnVtYmVyZWQgTGlzdGVuZXJcbiAgICAgICAgdGhpcy5xTnVtTGlzdC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgdGhpcy5oYW5kbGVOdW1iZXJlZE5hdi5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBzZXQgdXAgZXZlbnQgZm9yIGZsYWdcbiAgICBmbGFnQnRuTGlzdGVuZXIoKSB7XG4gICAgICAgIHRoaXMuZmxhZ2dpbmdQbGFjZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgdGhpcy5oYW5kbGVGbGFnLmJpbmQodGhpcyksIC8vIGNhbGxzIHRoaXMgdG8gdGFrZSBhY3Rpb25cbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyU3VibWl0QnV0dG9uKCkge1xuICAgICAgICB0aGlzLmJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICQodGhpcy5idXR0b25Db250YWluZXIpLmF0dHIoe1xuICAgICAgICAgICAgc3R5bGU6IFwidGV4dC1hbGlnbjpjZW50ZXJcIixcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZmluaXNoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgJCh0aGlzLmZpbmlzaEJ1dHRvbikuYXR0cih7XG4gICAgICAgICAgICBpZDogXCJmaW5pc2hcIixcbiAgICAgICAgICAgIGNsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5maW5pc2hCdXR0b24udGV4dENvbnRlbnQgPSBcIkZpbmlzaCBFeGFtXCI7XG4gICAgICAgIHRoaXMuZmluaXNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY29uZmlybShcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQ2xpY2tpbmcgT0sgbWVhbnMgeW91IGFyZSByZWFkeSB0byBzdWJtaXQgeW91ciBhbnN3ZXJzIGFuZCBhcmUgZmluaXNoZWQgd2l0aCB0aGlzIGFzc2Vzc21lbnQuXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmZpbmlzaEFzc2Vzc21lbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzLmZsYWdCdXR0b24pLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcyksXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmNvbnRyb2xEaXYuYXBwZW5kQ2hpbGQodGhpcy5maW5pc2hCdXR0b24pO1xuICAgICAgICAkKHRoaXMuZmluaXNoQnV0dG9uKS5oaWRlKCk7XG4gICAgICAgIHRoaXMudGltZWREaXYuYXBwZW5kQ2hpbGQodGhpcy5idXR0b25Db250YWluZXIpO1xuICAgIH1cbiAgICBlbnN1cmVCdXR0b25TYWZldHkoKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXkubGVuZ3RoICE9IDEpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMucmlnaHRDb250YWluZXIpLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkKHRoaXMubGVmdENvbnRhaW5lcikuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4ID49XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheS5sZW5ndGggLSAxXG4gICAgICAgICkge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5Lmxlbmd0aCAhPSAxKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzLmxlZnRDb250YWluZXIpLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkKHRoaXMucmlnaHRDb250YWluZXIpLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCA+IDAgJiZcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggPCB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheS5sZW5ndGggLSAxXG4gICAgICAgICkge1xuICAgICAgICAgICAgJCh0aGlzLnJpZ2h0Q29udGFpbmVyKS5yZW1vdmVDbGFzcyhcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgJCh0aGlzLmxlZnRDb250YWluZXIpLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyRmVlZGJhY2tDb250YWluZXIoKSB7XG4gICAgICAgIHRoaXMuc2NvcmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiUFwiKTtcbiAgICAgICAgdGhpcy5zY29yZURpdi5pZCA9IHRoaXMuZGl2aWQgKyBcInJlc3VsdHNcIjtcbiAgICAgICAgdGhpcy5zY29yZURpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHRoaXMuc2NvcmVEaXYpO1xuICAgIH1cblxuICAgIGNyZWF0ZVJlbmRlcmVkUXVlc3Rpb25BcnJheSgpIHtcbiAgICAgICAgLy8gdGhpcyBmaW5kcyBhbGwgdGhlIGFzc2VzcyBxdWVzdGlvbnMgaW4gdGhpcyB0aW1lZCBhc3Nlc3NtZW50XG4gICAgICAgIC8vIFdlIG5lZWQgdG8gbWFrZSBhIGxpc3Qgb2YgYWxsIHRoZSBxdWVzdGlvbnMgdXAgZnJvbnQgc28gd2UgY2FuIHNldCB1cCBuYXZpZ2F0aW9uXG4gICAgICAgIC8vIGJ1dCB3ZSBkbyBub3Qgd2FudCB0byByZW5kZXIgdGhlIHF1ZXN0aW9ucyB1bnRpbCB0aGUgc3R1ZGVudCBoYXMgbmF2aWdhdGVkXG4gICAgICAgIC8vIEFsc28gYWRkcyB0aGVtIHRvIHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5XG5cbiAgICAgICAgLy8gdG9kbzogIFRoaXMgbmVlZHMgdG8gYmUgdXBkYXRlZCB0byBhY2NvdW50IGZvciB0aGUgcnVuZXN0b25lIGRpdiB3cmFwcGVyLlxuXG4gICAgICAgIC8vIFRvIGFjY29tbW9kYXRlIHRoZSBzZWxlY3RxdWVzdGlvbiB0eXBlIC0tIHdoaWNoIGlzIGFzeW5jISB3ZSBuZWVkIHRvIHdyYXBcbiAgICAgICAgLy8gYWxsIG9mIHRoaXMgaW4gYSBwcm9taXNlLCBzbyB0aGF0IHdlIGRvbid0IGNvbnRpbnVlIHRvIHJlbmRlciB0aGUgdGltZWRcbiAgICAgICAgLy8gZXhhbSB1bnRpbCBhbGwgb2YgdGhlIHF1ZXN0aW9ucyBoYXZlIGJlZW4gcmVhbGl6ZWQuXG4gICAgICAgIHZhciBvcHRzO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubmV3Q2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0bXBDaGlsZCA9IHRoaXMubmV3Q2hpbGRyZW5baV07XG4gICAgICAgICAgICBvcHRzID0ge1xuICAgICAgICAgICAgICAgIHN0YXRlOiBcInByZXBhcmVkXCIsXG4gICAgICAgICAgICAgICAgb3JpZzogdG1wQ2hpbGQsXG4gICAgICAgICAgICAgICAgcXVlc3Rpb246IHt9LFxuICAgICAgICAgICAgICAgIHVzZVJ1bmVzdG9uZVNlcnZpY2VzOiBlQm9va0NvbmZpZy51c2VSdW5lc3RvbmVTZXJ2aWNlcyxcbiAgICAgICAgICAgICAgICB0aW1lZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhc3Nlc3NtZW50VGFrZW46IHRoaXMudGFrZW4sXG4gICAgICAgICAgICAgICAgdGltZWRXcmFwcGVyOiB0aGlzLmRpdmlkLFxuICAgICAgICAgICAgICAgIGluaXRBdHRlbXB0czogMCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoJCh0bXBDaGlsZCkuY2hpbGRyZW4oXCJbZGF0YS1jb21wb25lbnRdXCIpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0bXBDaGlsZCA9ICQodG1wQ2hpbGQpLmNoaWxkcmVuKFwiW2RhdGEtY29tcG9uZW50XVwiKVswXTtcbiAgICAgICAgICAgICAgICBvcHRzLm9yaWcgPSB0bXBDaGlsZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgkKHRtcENoaWxkKS5pcyhcIltkYXRhLWNvbXBvbmVudF1cIikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheS5wdXNoKG9wdHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmFuZG9taXplUlFBKCkge1xuICAgICAgICB2YXIgY3VycmVudEluZGV4ID0gdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXkubGVuZ3RoLFxuICAgICAgICAgICAgdGVtcG9yYXJ5VmFsdWUsXG4gICAgICAgICAgICByYW5kb21JbmRleDtcbiAgICAgICAgLy8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGUuLi5cbiAgICAgICAgd2hpbGUgKGN1cnJlbnRJbmRleCAhPT0gMCkge1xuICAgICAgICAgICAgLy8gUGljayBhIHJlbWFpbmluZyBlbGVtZW50Li4uXG4gICAgICAgICAgICByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICBjdXJyZW50SW5kZXggLT0gMTtcbiAgICAgICAgICAgIC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudC5cbiAgICAgICAgICAgIHRlbXBvcmFyeVZhbHVlID0gdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXlbY3VycmVudEluZGV4XTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5W2N1cnJlbnRJbmRleF0gPVxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5W3JhbmRvbUluZGV4XTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5W3JhbmRvbUluZGV4XSA9IHRlbXBvcmFyeVZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgcmVuZGVyVGltZWRRdWVzdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggPj0gdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBzb21ldGltZXMgdGhlIHVzZXIgY2xpY2tzIGluIHRoZSBldmVudCBhcmVhIGZvciB0aGUgcU51bUxpc3RcbiAgICAgICAgICAgIC8vIEJ1dCBtaXNzZXMgYSBudW1iZXIgaW4gdGhhdCBjYXNlIHRoZSB0ZXh0IGlzIHRoZSBjb25jYXRlbmF0aW9uXG4gICAgICAgICAgICAvLyBvZiBhbGwgdGhlIG51bWJlcnMgaW4gdGhlIGxpc3QhXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgdGhlIHJlbmRlcmVkUXVlc3Rpb25BcnJheSB0byBzZWUgaWYgaXQgaGFzIGJlZW4gcmVuZGVyZWQuXG4gICAgICAgIGxldCBvcHRzID0gdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXlbdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleF07XG4gICAgICAgIGxldCBjdXJyZW50UXVlc3Rpb247XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIG9wdHMuc3RhdGUgPT09IFwicHJlcGFyZWRcIiB8fFxuICAgICAgICAgICAgb3B0cy5zdGF0ZSA9PT0gXCJmb3JyZXZpZXdcIiB8fFxuICAgICAgICAgICAgKG9wdHMuc3RhdGUgPT09IFwiYnJva2VuX2V4YW1cIiAmJiBvcHRzLmluaXRBdHRlbXB0cyA8IDMpXG4gICAgICAgICkge1xuICAgICAgICAgICAgbGV0IHRtcENoaWxkID0gb3B0cy5vcmlnO1xuICAgICAgICAgICAgaWYgKCQodG1wQ2hpbGQpLmlzKFwiW2RhdGEtY29tcG9uZW50PXNlbGVjdHF1ZXN0aW9uXVwiKSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRvbmUgJiYgb3B0cy5zdGF0ZSA9PSBcInByZXBhcmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXlbXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4XG4gICAgICAgICAgICAgICAgICAgIF0uc3RhdGUgPSBcImV4YW1fZW5kZWRcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBTZWxlY3RPbmUgaXMgYXN5bmMgYW5kIHdpbGwgcmVwbGFjZSBpdHNlbGYgaW4gdGhpcyBhcnJheSB3aXRoXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBhY3R1YWwgc2VsZWN0ZWQgcXVlc3Rpb25cbiAgICAgICAgICAgICAgICAgICAgb3B0cy5ycWEgPSB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld3EgPSBuZXcgU2VsZWN0T25lKG9wdHMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheVt0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4XSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uOiBuZXdxLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgbmV3cS5pbml0aWFsaXplKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0cy5zdGF0ZSA9PSBcImJyb2tlbl9leGFtXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIGJyb2tlbiBjbGFzcyBmcm9tIHRoaXMgcXVlc3Rpb24gaWYgd2UgZ2V0IGhlcmUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHVsI3BhZ2VOdW1zID4gdWwgPiBsaTplcSgke3RoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXh9KWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnJlbW92ZUNsYXNzKFwiYnJva2VuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRzLnN0YXRlID0gXCJicm9rZW5fZXhhbVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXlbdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleF0gPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdHM7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgRXJyb3IgaW5pdGlhbGl6aW5nIHF1ZXN0aW9uOiBEZXRhaWxzICR7ZX1gXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICgkKHRtcENoaWxkKS5pcyhcIltkYXRhLWNvbXBvbmVudF1cIikpIHtcbiAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50S2luZCA9ICQodG1wQ2hpbGQpLmRhdGEoXCJjb21wb25lbnRcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXlbdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleF0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uOiB3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnlbY29tcG9uZW50S2luZF0ob3B0cyksXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChvcHRzLnN0YXRlID09PSBcImJyb2tlbl9leGFtXCIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRRdWVzdGlvbiA9XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheVt0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4XS5xdWVzdGlvbjtcbiAgICAgICAgaWYgKG9wdHMuc3RhdGUgPT09IFwiZm9ycmV2aWV3XCIpIHtcbiAgICAgICAgICAgIGF3YWl0IGN1cnJlbnRRdWVzdGlvbi5jaGVja0N1cnJlbnRBbnN3ZXIoKTtcbiAgICAgICAgICAgIGN1cnJlbnRRdWVzdGlvbi5yZW5kZXJGZWVkYmFjaygpO1xuICAgICAgICAgICAgY3VycmVudFF1ZXN0aW9uLmRpc2FibGVJbnRlcmFjdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLnZpc2l0ZWQuaW5jbHVkZXModGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCkpIHtcbiAgICAgICAgICAgIHRoaXMudmlzaXRlZC5wdXNoKHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXgpO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMudmlzaXRlZC5sZW5ndGggPT09IHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5Lmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgICF0aGlzLmRvbmVcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICQodGhpcy5maW5pc2hCdXR0b24pLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50UXVlc3Rpb24uY29udGFpbmVyRGl2KSB7XG4gICAgICAgICAgICAkKHRoaXMuc3dpdGNoRGl2KS5yZXBsYWNlV2l0aChjdXJyZW50UXVlc3Rpb24uY29udGFpbmVyRGl2KTtcbiAgICAgICAgICAgIHRoaXMuc3dpdGNoRGl2ID0gY3VycmVudFF1ZXN0aW9uLmNvbnRhaW5lckRpdjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZSB0aW1lZCBjb21wb25lbnQgaGFzIGxpc3RlbmVycywgdGhvc2UgbWlnaHQgbmVlZCB0byBiZSByZWluaXRpYWxpemVkXG4gICAgICAgIC8vIFRoaXMgZmxhZyB3aWxsIG9ubHkgYmUgc2V0IGluIHRoZSBlbGVtZW50cyB0aGF0IG5lZWQgaXQtLWl0IHdpbGwgYmUgdW5kZWZpbmVkIGluIHRoZSBvdGhlcnMgYW5kIHRodXMgZXZhbHVhdGUgdG8gZmFsc2VcbiAgICAgICAgaWYgKGN1cnJlbnRRdWVzdGlvbi5uZWVkc1JlaW5pdGlhbGl6YXRpb24pIHtcbiAgICAgICAgICAgIGN1cnJlbnRRdWVzdGlvbi5yZWluaXRpYWxpemVMaXN0ZW5lcnModGhpcy50YWtlbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgID09PSBUaW1lciBhbmQgY29udHJvbCBGdW5jdGlvbnMgPT09XG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICBoYW5kbGVQcmV2QXNzZXNzbWVudCgpIHtcbiAgICAgICAgJCh0aGlzLnN0YXJ0QnRuKS5oaWRlKCk7XG4gICAgICAgICQodGhpcy5wYXVzZUJ0bikuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xuICAgICAgICAkKHRoaXMuZmluaXNoQnV0dG9uKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XG4gICAgICAgIHRoaXMucnVubmluZyA9IDA7XG4gICAgICAgIHRoaXMuZG9uZSA9IDE7XG4gICAgICAgIC8vIHNob3dGZWVkYmFjayBzYW5kIHNob3dSZXN1bHRzIHNob3VsZCBib3RoIGJlIHRydWUgYmVmb3JlIHdlIHNob3cgdGhlXG4gICAgICAgIC8vIHF1ZXN0aW9ucyBhbmQgdGhlaXIgc3RhdGUgb2YgY29ycmVjdG5lc3MuXG4gICAgICAgIGlmICh0aGlzLnNob3dSZXN1bHRzICYmIHRoaXMuc2hvd0ZlZWRiYWNrKSB7XG4gICAgICAgICAgICAkKHRoaXMudGltZWREaXYpLnNob3coKTtcbiAgICAgICAgICAgIHRoaXMucmVzdG9yZUFuc3dlcmVkUXVlc3Rpb25zKCk7IC8vIGRvIG5vdCBsb2cgdGhlc2UgcmVzdWx0c1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCh0aGlzLnBhdXNlQnRuKS5oaWRlKCk7XG4gICAgICAgICAgICAkKHRoaXMudGltZXJDb250YWluZXIpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGFydEFzc2Vzc21lbnQoKSB7XG4gICAgICAgIGlmICghdGhpcy50YWtlbikge1xuICAgICAgICAgICAgJChcIiNyZWxhdGlvbnMtbmV4dFwiKS5oaWRlKCk7IC8vIGhpZGUgdGhlIG5leHQgcGFnZSBidXR0b24gZm9yIG5vd1xuICAgICAgICAgICAgJChcIiNyZWxhdGlvbnMtcHJldlwiKS5oaWRlKCk7IC8vIGhpZGUgdGhlIHByZXZpb3VzIGJ1dHRvbiBmb3Igbm93XG4gICAgICAgICAgICAkKHRoaXMuc3RhcnRCdG4pLmhpZGUoKTtcbiAgICAgICAgICAgICQodGhpcy5wYXVzZUJ0bikuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnJ1bm5pbmcgPT09IDAgJiYgdGhpcy5wYXVzZWQgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgICQodGhpcy50aW1lZERpdikuc2hvdygpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5jcmVtZW50KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dCb29rRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgICBldmVudDogXCJ0aW1lZEV4YW1cIixcbiAgICAgICAgICAgICAgICAgICAgYWN0OiBcInN0YXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgIGRpdl9pZDogdGhpcy5kaXZpZCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB2YXIgdGltZVN0YW1wID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICB2YXIgc3RvcmFnZU9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgYW5zd2VyOiBbMCwgMCwgdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXkubGVuZ3RoLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiB0aW1lU3RhbXAsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VLZXkoKSxcbiAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZU9iailcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJCh3aW5kb3cpLm9uKFxuICAgICAgICAgICAgICAgIFwiYmVmb3JldW5sb2FkXCIsXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgYWN0dWFsIHZhbHVlIGdldHMgaWdub3JlZCBieSBuZXdlciBicm93c2Vyc1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gbGVhdmU/ICBZb3VyIHdvcmsgd2lsbCBiZSBsb3N0ISBBbmQgeW91IHdpbGwgbmVlZCB5b3VyIGluc3RydWN0b3IgdG8gcmVzZXQgdGhlIGV4YW0hXCI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBsZWF2ZT8gIFlvdXIgd29yayB3aWxsIGJlIGxvc3QhXCI7XG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgXCJwYWdlaGlkZVwiLFxuICAgICAgICAgICAgICAgIGFzeW5jIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5maW5pc2hBc3Nlc3NtZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkV4YW0gZXhpdGVkIGJ5IGxlYXZpbmcgcGFnZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUHJldkFzc2Vzc21lbnQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwYXVzZUFzc2Vzc21lbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmRvbmUgPT09IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJ1bm5pbmcgPT09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ0Jvb2tFdmVudCh7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiBcInRpbWVkRXhhbVwiLFxuICAgICAgICAgICAgICAgICAgICBhY3Q6IFwicGF1c2VcIixcbiAgICAgICAgICAgICAgICAgICAgZGl2X2lkOiB0aGlzLmRpdmlkLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMucnVubmluZyA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZWQgPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMucGF1c2VCdG4uaW5uZXJIVE1MID0gXCJSZXN1bWVcIjtcbiAgICAgICAgICAgICAgICAkKHRoaXMudGltZWREaXYpLmhpZGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dCb29rRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgICBldmVudDogXCJ0aW1lZEV4YW1cIixcbiAgICAgICAgICAgICAgICAgICAgYWN0OiBcInJlc3VtZVwiLFxuICAgICAgICAgICAgICAgICAgICBkaXZfaWQ6IHRoaXMuZGl2aWQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ydW5uaW5nID0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlZCA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmNyZW1lbnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlQnRuLmlubmVySFRNTCA9IFwiUGF1c2VcIjtcbiAgICAgICAgICAgICAgICAkKHRoaXMudGltZWREaXYpLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dUaW1lKCkge1xuICAgICAgICBpZiAodGhpcy5zaG93VGltZXIpIHtcbiAgICAgICAgICAgIHZhciBtaW5zID0gTWF0aC5mbG9vcih0aGlzLnRpbWVMaW1pdCAvIDYwKTtcbiAgICAgICAgICAgIHZhciBzZWNzID0gTWF0aC5mbG9vcih0aGlzLnRpbWVMaW1pdCkgJSA2MDtcbiAgICAgICAgICAgIHZhciBtaW5zU3RyaW5nID0gbWlucztcbiAgICAgICAgICAgIHZhciBzZWNzU3RyaW5nID0gc2VjcztcbiAgICAgICAgICAgIGlmIChtaW5zIDwgMTApIHtcbiAgICAgICAgICAgICAgICBtaW5zU3RyaW5nID0gXCIwXCIgKyBtaW5zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlY3MgPCAxMCkge1xuICAgICAgICAgICAgICAgIHNlY3NTdHJpbmcgPSBcIjBcIiArIHNlY3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgYmVnaW5uaW5nID0gXCJUaW1lIFJlbWFpbmluZyAgICBcIjtcbiAgICAgICAgICAgIGlmICghdGhpcy5saW1pdGVkVGltZSkge1xuICAgICAgICAgICAgICAgIGJlZ2lubmluZyA9IFwiVGltZSBUYWtlbiAgICBcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB0aW1lU3RyaW5nID0gYmVnaW5uaW5nICsgbWluc1N0cmluZyArIFwiOlwiICsgc2Vjc1N0cmluZztcbiAgICAgICAgICAgIGlmICh0aGlzLmRvbmUgfHwgdGhpcy50YWtlbikge1xuICAgICAgICAgICAgICAgIHZhciBtaW51dGVzID0gTWF0aC5mbG9vcih0aGlzLnRpbWVUYWtlbiAvIDYwKTtcbiAgICAgICAgICAgICAgICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IodGhpcy50aW1lVGFrZW4gJSA2MCk7XG4gICAgICAgICAgICAgICAgaWYgKG1pbnV0ZXMgPCAxMCkge1xuICAgICAgICAgICAgICAgICAgICBtaW51dGVzID0gXCIwXCIgKyBtaW51dGVzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc2Vjb25kcyA8IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlY29uZHMgPSBcIjBcIiArIHNlY29uZHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRpbWVTdHJpbmcgPSBcIlRpbWUgdGFrZW46IFwiICsgbWludXRlcyArIFwiOlwiICsgc2Vjb25kcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudGltZXJDb250YWluZXIuaW5uZXJIVE1MID0gdGltZVN0cmluZztcbiAgICAgICAgICAgIHZhciB0aW1lVGlwcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0aW1lVGlwXCIpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gdGltZVRpcHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGltZVRpcHNbaV0udGl0bGUgPSB0aW1lU3RyaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCh0aGlzLnRpbWVyQ29udGFpbmVyKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbmNyZW1lbnQoKSB7XG4gICAgICAgIC8vIGlmIHJ1bm5pbmcgKG5vdCBwYXVzZWQpIGFuZCBub3QgdGFrZW5cbiAgICAgICAgaWYgKHRoaXMucnVubmluZyA9PT0gMSAmJiAhdGhpcy50YWtlbikge1xuICAgICAgICAgICAgc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gYSBicm93c2VyIGxvc2VzIGZvY3VzLCBzZXRUaW1lb3V0IG1heSBub3QgYmUgY2FsbGVkIG9uIHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyBzY2hlZHVsZSBleHBlY3RlZC4gIEJyb3dzZXJzIGFyZSBmcmVlIHRvIHNhdmUgcG93ZXIgYnkgbGVuZ3RoZW5pbmdcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGludGVydmFsIHRvIHNvbWUgbG9uZ2VyIHRpbWUuICBTbyB3ZSBjYW5ub3QganVzdCBzdWJ0cmFjdCAxXG4gICAgICAgICAgICAgICAgICAgIC8vIGZyb20gdGhlIHRpbWVMaW1pdCB3ZSBuZWVkIHRvIG1lYXN1cmUgdGhlIGVsYXBzZWQgdGltZSBmcm9tIHRoZSBsYXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIGNhbGwgdG8gdGhlIGN1cnJlbnQgY2FsbCBhbmQgc3VidHJhY3QgdGhhdCBudW1iZXIgb2Ygc2Vjb25kcy5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGltaXRlZFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYSB0aW1lIGxpbWl0LCBjb3VudCBkb3duIHRvIDBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZUxpbWl0ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVMaW1pdCAtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcigoY3VycmVudFRpbWUgLSB0aGlzLmxhc3RUaW1lKSAvIDEwMDApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRWxzZSBjb3VudCB1cCB0byBrZWVwIHRyYWNrIG9mIGhvdyBsb25nIGl0IHRvb2sgdG8gY29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZUxpbWl0ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVMaW1pdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcigoY3VycmVudFRpbWUgLSB0aGlzLmxhc3RUaW1lKSAvIDEwMDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFRpbWUgPSBjdXJyZW50VGltZTtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICAgICAgICAgICBlQm9va0NvbmZpZy5lbWFpbCArIFwiOlwiICsgdGhpcy5kaXZpZCArIFwiLXRpbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZUxpbWl0XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGltZUxpbWl0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmNyZW1lbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJhbiBvdXQgb2YgdGltZVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzLnN0YXJ0QnRuKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcy5maW5pc2hCdXR0b24pLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ydW5uaW5nID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9uZSA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMudGFrZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRha2VuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlbWJlZCB0aGUgbWVzc2FnZSBpbiB0aGUgcGFnZSAtLSBhbiBhbGVydCBhY3R1YWxseSBwcmV2ZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBhbnN3ZXJzIGZyb20gYmVpbmcgc3VibWl0dGVkIGFuZCBpZiBhIHN0dWRlbnQgY2xvc2VzIHRoZWlyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGFwdG9wIHRoZW4gdGhlIGFuc3dlcnMgd2lsbCBub3QgYmUgc3VibWl0dGVkIGV2ZXIhICBFdmVuIHdoZW4gdGhleVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlb3BlbiB0aGUgbGFwdG9wIHRoZWlyIHNlc3Npb24gY29va2llIGlzIGxpa2VseSBpbnZhbGlkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3MuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTb3JyeSBidXQgeW91IHJhbiBvdXQgb2YgdGltZS4gWW91ciBhbnN3ZXJzIGFyZSBiZWluZyBzdWJtaXR0ZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2xEaXYuYXBwZW5kQ2hpbGQobWVzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5pc2hBc3Nlc3NtZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgMTAwMFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0eWxlRXhhbUVsZW1lbnRzKCkge1xuICAgICAgICAvLyBDaGVja3MgaWYgdGhpcyBleGFtIGhhcyBiZWVuIHRha2VuIGJlZm9yZVxuICAgICAgICAkKHRoaXMudGltZXJDb250YWluZXIpLmNzcyh7XG4gICAgICAgICAgICB3aWR0aDogXCI1MCVcIixcbiAgICAgICAgICAgIG1hcmdpbjogXCIwIGF1dG9cIixcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIiNERkYwRDhcIixcbiAgICAgICAgICAgIFwidGV4dC1hbGlnblwiOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCAjREZGMEQ4XCIsXG4gICAgICAgICAgICBcImJvcmRlci1yYWRpdXNcIjogXCIyNXB4XCIsXG4gICAgICAgIH0pO1xuICAgICAgICAkKHRoaXMuc2NvcmVEaXYpLmNzcyh7XG4gICAgICAgICAgICB3aWR0aDogXCI1MCVcIixcbiAgICAgICAgICAgIG1hcmdpbjogXCIwIGF1dG9cIixcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIiNERkYwRDhcIixcbiAgICAgICAgICAgIFwidGV4dC1hbGlnblwiOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCAjREZGMEQ4XCIsXG4gICAgICAgICAgICBcImJvcmRlci1yYWRpdXNcIjogXCIyNXB4XCIsXG4gICAgICAgIH0pO1xuICAgICAgICAkKFwiLnRvb2x0aXBUaW1lXCIpLmNzcyh7XG4gICAgICAgICAgICBtYXJnaW46IFwiMFwiLFxuICAgICAgICAgICAgcGFkZGluZzogXCIwXCIsXG4gICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCJibGFja1wiLFxuICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZmluaXNoQXNzZXNzbWVudCgpIHtcbiAgICAgICAgJChcIiNyZWxhdGlvbnMtbmV4dFwiKS5zaG93KCk7IC8vIHNob3cgdGhlIG5leHQgcGFnZSBidXR0b24gZm9yIG5vd1xuICAgICAgICAkKFwiI3JlbGF0aW9ucy1wcmV2XCIpLnNob3coKTsgLy8gc2hvdyB0aGUgcHJldmlvdXMgYnV0dG9uIGZvciBub3dcbiAgICAgICAgaWYgKCF0aGlzLnNob3dGZWVkYmFjaykge1xuICAgICAgICAgICAgLy8gYmplIC0gY2hhbmdlZCBmcm9tIHNob3dSZXN1bHRzXG4gICAgICAgICAgICAkKHRoaXMudGltZWREaXYpLmhpZGUoKTtcbiAgICAgICAgICAgICQodGhpcy5wYXVzZUJ0bikuaGlkZSgpO1xuICAgICAgICAgICAgJCh0aGlzLnRpbWVyQ29udGFpbmVyKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maW5kVGltZVRha2VuKCk7XG4gICAgICAgIHRoaXMucnVubmluZyA9IDA7XG4gICAgICAgIHRoaXMuZG9uZSA9IDE7XG4gICAgICAgIHRoaXMudGFrZW4gPSAxO1xuICAgICAgICBhd2FpdCB0aGlzLmZpbmFsaXplUHJvYmxlbXMoKTtcbiAgICAgICAgdGhpcy5jaGVja1Njb3JlKCk7XG4gICAgICAgIHRoaXMuZGlzcGxheVNjb3JlKCk7XG4gICAgICAgIHRoaXMuc3RvcmVTY29yZSgpO1xuICAgICAgICB0aGlzLmxvZ1Njb3JlKCk7XG4gICAgICAgICQodGhpcy5wYXVzZUJ0bikuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xuICAgICAgICB0aGlzLmZpbmlzaEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICQod2luZG93KS5vZmYoXCJiZWZvcmV1bmxvYWRcIik7XG4gICAgICAgIC8vIHR1cm4gb2ZmIHRoZSBwYWdlaGlkZSBsaXN0ZW5lclxuICAgICAgICBsZXQgYXNzaWdubWVudF9pZCA9IHRoaXMuZGl2aWQ7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgalF1ZXJ5LmFqYXgoe1xuICAgICAgICAgICAgICAgIHVybDogZUJvb2tDb25maWcuYXBwICsgXCIvYXNzaWdubWVudHMvc3R1ZGVudF9hdXRvZ3JhZGVcIixcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJKU09OXCIsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50X2lkOiBhc3NpZ25tZW50X2lkLFxuICAgICAgICAgICAgICAgICAgICBpc190aW1lZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXRkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXRkYXRhLnN1Y2Nlc3MgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJldGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF1dG9ncmFkZXIgY29tcGxldGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAyMDAwKTtcbiAgICB9XG5cbiAgICAvLyBmaW5hbGl6ZVByb2JsZW1zXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLVxuICAgIGFzeW5jIGZpbmFsaXplUHJvYmxlbXMoKSB7XG4gICAgICAgIC8vIEJlY2F1c2Ugd2UgaGF2ZSBzdWJtaXR0ZWQgZWFjaCBxdWVzdGlvbiBhcyB3ZSBuYXZpZ2F0ZSB3ZSBvbmx5IG5lZWQgdG9cbiAgICAgICAgLy8gc2VuZCB0aGUgZmluYWwgdmVyc2lvbiBvZiB0aGUgcXVlc3Rpb24gdGhlIHN0dWRlbnQgaXMgb24gd2hlbiB0aGV5IHByZXNzIHRoZVxuICAgICAgICAvLyBmaW5pc2ggZXhhbSBidXR0b24uXG5cbiAgICAgICAgdmFyIGN1cnJlbnRRdWVzdGlvbiA9XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheVt0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4XS5xdWVzdGlvbjtcbiAgICAgICAgYXdhaXQgY3VycmVudFF1ZXN0aW9uLmNoZWNrQ3VycmVudEFuc3dlcigpO1xuICAgICAgICBhd2FpdCBjdXJyZW50UXVlc3Rpb24ubG9nQ3VycmVudEFuc3dlcigpO1xuICAgICAgICBjdXJyZW50UXVlc3Rpb24ucmVuZGVyRmVlZGJhY2soKTtcbiAgICAgICAgY3VycmVudFF1ZXN0aW9uLmRpc2FibGVJbnRlcmFjdGlvbigpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50UXVlc3Rpb24gPSB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheVtpXTtcbiAgICAgICAgICAgIC8vIHNldCB0aGUgc3RhdGUgdG8gZm9ycmV2aWV3IHNvIHdlIGtub3cgdGhhdCBmZWVkYmFjayBtYXkgYmUgYXBwcm9wcmlhdGVcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVlc3Rpb24uc3RhdGUgIT09IFwiYnJva2VuX2V4YW1cIikge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWVzdGlvbi5zdGF0ZSA9IFwiZm9ycmV2aWV3XCI7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXN0aW9uLnF1ZXN0aW9uLmRpc2FibGVJbnRlcmFjdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLnNob3dGZWVkYmFjaykge1xuICAgICAgICAgICAgdGhpcy5oaWRlVGltZWRGZWVkYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmVzdG9yZUFuc3dlcmVkUXVlc3Rpb25zXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgcmVzdG9yZUFuc3dlcmVkUXVlc3Rpb25zKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudFF1ZXN0aW9uID0gdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXlbaV07XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXN0aW9uLnN0YXRlID09PSBcInByZXBhcmVkXCIpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVlc3Rpb24uc3RhdGUgPSBcImZvcnJldmlld1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gaGlkZVRpbWVkRmVlZGJhY2tcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLVxuICAgIGhpZGVUaW1lZEZlZWRiYWNrKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudFF1ZXN0aW9uID0gdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXlbaV0ucXVlc3Rpb247XG4gICAgICAgICAgICBjdXJyZW50UXVlc3Rpb24uaGlkZUZlZWRiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjaGVja1Njb3JlXG4gICAgLy8gLS0tLS0tLS0tLVxuICAgIC8vIFRoaXMgaXMgYSBzaW1wbGUgYWxsIG9yIG5vdGhpbmcgc2NvcmUgb2Ygb25lIHBvaW50IHBlciBxdWVzdGlvbiBmb3JcbiAgICAvLyB0aGF0IGluY2x1ZGVzIG91ciBiZXN0IGd1ZXNzIGlmIGEgcXVlc3Rpb24gd2FzIHNraXBwZWQuXG4gICAgY2hlY2tTY29yZSgpIHtcbiAgICAgICAgdGhpcy5jb3JyZWN0U3RyID0gXCJcIjtcbiAgICAgICAgdGhpcy5za2lwcGVkU3RyID0gXCJcIjtcbiAgICAgICAgdGhpcy5pbmNvcnJlY3RTdHIgPSBcIlwiO1xuICAgICAgICAvLyBHZXRzIHRoZSBzY29yZSBvZiBlYWNoIHByb2JsZW1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNvcnJlY3QgPVxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5W2ldLnF1ZXN0aW9uLmNoZWNrQ29ycmVjdFRpbWVkKCk7XG4gICAgICAgICAgICBpZiAoY29ycmVjdCA9PSBcIlRcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NvcmUrKztcbiAgICAgICAgICAgICAgICB0aGlzLmNvcnJlY3RTdHIgPSB0aGlzLmNvcnJlY3RTdHIgKyAoaSArIDEpICsgXCIsIFwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb3JyZWN0ID09IFwiRlwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmNvcnJlY3QrKztcbiAgICAgICAgICAgICAgICB0aGlzLmluY29ycmVjdFN0ciA9IHRoaXMuaW5jb3JyZWN0U3RyICsgKGkgKyAxKSArIFwiLCBcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29ycmVjdCA9PT0gbnVsbCB8fCBjb3JyZWN0ID09PSBcIklcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2tpcHBlZCsrO1xuICAgICAgICAgICAgICAgIHRoaXMuc2tpcHBlZFN0ciA9IHRoaXMuc2tpcHBlZFN0ciArIChpICsgMSkgKyBcIiwgXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGlnbm9yZWQgcXVlc3Rpb247IGp1c3QgZG8gbm90aGluZ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHJlbW92ZSBleHRyYSBjb21tYSBhbmQgc3BhY2UgYXQgZW5kIGlmIGFueVxuICAgICAgICBpZiAodGhpcy5jb3JyZWN0U3RyLmxlbmd0aCA+IDApXG4gICAgICAgICAgICB0aGlzLmNvcnJlY3RTdHIgPSB0aGlzLmNvcnJlY3RTdHIuc3Vic3RyaW5nKFxuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0U3RyLmxlbmd0aCAtIDJcbiAgICAgICAgICAgICk7XG4gICAgICAgIGVsc2UgdGhpcy5jb3JyZWN0U3RyID0gXCJOb25lXCI7XG4gICAgICAgIGlmICh0aGlzLnNraXBwZWRTdHIubGVuZ3RoID4gMClcbiAgICAgICAgICAgIHRoaXMuc2tpcHBlZFN0ciA9IHRoaXMuc2tpcHBlZFN0ci5zdWJzdHJpbmcoXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICB0aGlzLnNraXBwZWRTdHIubGVuZ3RoIC0gMlxuICAgICAgICAgICAgKTtcbiAgICAgICAgZWxzZSB0aGlzLnNraXBwZWRTdHIgPSBcIk5vbmVcIjtcbiAgICAgICAgaWYgKHRoaXMuaW5jb3JyZWN0U3RyLmxlbmd0aCA+IDApXG4gICAgICAgICAgICB0aGlzLmluY29ycmVjdFN0ciA9IHRoaXMuaW5jb3JyZWN0U3RyLnN1YnN0cmluZyhcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIHRoaXMuaW5jb3JyZWN0U3RyLmxlbmd0aCAtIDJcbiAgICAgICAgICAgICk7XG4gICAgICAgIGVsc2UgdGhpcy5pbmNvcnJlY3RTdHIgPSBcIk5vbmVcIjtcbiAgICB9XG4gICAgZmluZFRpbWVUYWtlbigpIHtcbiAgICAgICAgaWYgKHRoaXMubGltaXRlZFRpbWUpIHtcbiAgICAgICAgICAgIHRoaXMudGltZVRha2VuID0gdGhpcy5zdGFydGluZ1RpbWUgLSB0aGlzLnRpbWVMaW1pdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGltZVRha2VuID0gdGhpcy50aW1lTGltaXQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RvcmVTY29yZSgpIHtcbiAgICAgICAgdmFyIHN0b3JhZ2VfYXJyID0gW107XG4gICAgICAgIHN0b3JhZ2VfYXJyLnB1c2goXG4gICAgICAgICAgICB0aGlzLnNjb3JlLFxuICAgICAgICAgICAgdGhpcy5jb3JyZWN0U3RyLFxuICAgICAgICAgICAgdGhpcy5pbmNvcnJlY3QsXG4gICAgICAgICAgICB0aGlzLmluY29ycmVjdFN0cixcbiAgICAgICAgICAgIHRoaXMuc2tpcHBlZCxcbiAgICAgICAgICAgIHRoaXMuc2tpcHBlZFN0cixcbiAgICAgICAgICAgIHRoaXMudGltZVRha2VuXG4gICAgICAgICk7XG4gICAgICAgIHZhciB0aW1lU3RhbXAgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB2YXIgc3RvcmFnZU9iaiA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIGFuc3dlcjogc3RvcmFnZV9hcnIsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IHRpbWVTdGFtcCxcbiAgICAgICAgfSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubG9jYWxTdG9yYWdlS2V5KCksIHN0b3JhZ2VPYmopO1xuICAgIH1cbiAgICAvLyBfYHRpbWVkIGV4YW0gZW5kcG9pbnQgcGFyYW1ldGVyc2BcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBsb2dTY29yZSgpIHtcbiAgICAgICAgdGhpcy5sb2dCb29rRXZlbnQoe1xuICAgICAgICAgICAgZXZlbnQ6IFwidGltZWRFeGFtXCIsXG4gICAgICAgICAgICBhY3Q6IFwiZmluaXNoXCIsXG4gICAgICAgICAgICBkaXZfaWQ6IHRoaXMuZGl2aWQsXG4gICAgICAgICAgICBjb3JyZWN0OiB0aGlzLnNjb3JlLFxuICAgICAgICAgICAgaW5jb3JyZWN0OiB0aGlzLmluY29ycmVjdCxcbiAgICAgICAgICAgIHNraXBwZWQ6IHRoaXMuc2tpcHBlZCxcbiAgICAgICAgICAgIHRpbWVfdGFrZW46IHRoaXMudGltZVRha2VuLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2hvdWxkVXNlU2VydmVyKGRhdGEpIHtcbiAgICAgICAgLy8gV2Ugb3ZlcnJpZGUgdGhlIFJ1bmVzdG9uZUJhc2UgdmVyc2lvbiBiZWNhdXNlIHRoZXJlIGlzIG5vIFwiY29ycmVjdFwiIGF0dHJpYnV0ZSwgYW5kIHRoZXJlIGFyZSAyIHBvc3NpYmxlIGxvY2FsU3RvcmFnZSBzY2hlbWFzXG4gICAgICAgIC8vIC0td2UgYWxzbyB3YW50IHRvIGRlZmF1bHQgdG8gbG9jYWwgc3RvcmFnZSBiZWNhdXNlIGl0IGNvbnRhaW5zIG1vcmUgaW5mb3JtYXRpb24gc3BlY2lmaWNhbGx5IHdoaWNoIHF1ZXN0aW9ucyBhcmUgY29ycmVjdCwgaW5jb3JyZWN0LCBhbmQgc2tpcHBlZC5cbiAgICAgICAgdmFyIHN0b3JhZ2VEYXRlO1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHRydWU7XG4gICAgICAgIHZhciBzdG9yYWdlT2JqID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5sb2NhbFN0b3JhZ2VLZXkoKSk7XG4gICAgICAgIGlmIChzdG9yYWdlT2JqID09PSBudWxsKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBzdG9yZWREYXRhID0gSlNPTi5wYXJzZShzdG9yYWdlT2JqKS5hbnN3ZXI7XG4gICAgICAgICAgICBpZiAoc3RvcmVkRGF0YS5sZW5ndGggPT0gNCkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5jb3JyZWN0ID09IHN0b3JlZERhdGFbMF0gJiZcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5pbmNvcnJlY3QgPT0gc3RvcmVkRGF0YVsxXSAmJlxuICAgICAgICAgICAgICAgICAgICBkYXRhLnNraXBwZWQgPT0gc3RvcmVkRGF0YVsyXSAmJlxuICAgICAgICAgICAgICAgICAgICBkYXRhLnRpbWVUYWtlbiA9PSBzdG9yZWREYXRhWzNdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RvcmVkRGF0YS5sZW5ndGggPT0gNykge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5jb3JyZWN0ID09IHN0b3JlZERhdGFbMF0gJiZcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5pbmNvcnJlY3QgPT0gc3RvcmVkRGF0YVsyXSAmJlxuICAgICAgICAgICAgICAgICAgICBkYXRhLnNraXBwZWQgPT0gc3RvcmVkRGF0YVs0XSAmJlxuICAgICAgICAgICAgICAgICAgICBkYXRhLnRpbWVUYWtlbiA9PSBzdG9yZWREYXRhWzZdXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gSW4gdGhpcyBjYXNlLCBiZWNhdXNlIGxvY2FsIHN0b3JhZ2UgaGFzIG1vcmUgaW5mbywgd2Ugd2FudCB0byB1c2UgdGhhdCBpZiBpdCdzIGNvbnNpc3RlbnRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdG9yYWdlRGF0ZSA9IG5ldyBEYXRlKEpTT04ucGFyc2Uoc3RvcmFnZU9ialsxXSkudGltZXN0YW1wKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAvLyBlcnJvciB3aGlsZSBwYXJzaW5nOyBsaWtlbHkgZHVlIHRvIGJhZCB2YWx1ZSBzdG9yZWQgaW4gc3RvcmFnZVxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5sb2NhbFN0b3JhZ2VLZXkoKSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2VydmVyRGF0ZSA9IG5ldyBEYXRlKGRhdGEudGltZXN0YW1wKTtcbiAgICAgICAgaWYgKHNlcnZlckRhdGUgPCBzdG9yYWdlRGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5sb2dTY29yZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNoZWNrTG9jYWxTdG9yYWdlKCkge1xuICAgICAgICB2YXIgbGVuID0gbG9jYWxTdG9yYWdlLmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbiA+IDApIHtcbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmxvY2FsU3RvcmFnZUtleSgpKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFrZW4gPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzdG9yZUFuc3dlcnMoXCJcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGFrZW4gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50YWtlbiA9IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgcmVzdG9yZUFuc3dlcnMoZGF0YSkge1xuICAgICAgICB0aGlzLnRha2VuID0gMTtcbiAgICAgICAgdmFyIHRtcEFycjtcbiAgICAgICAgaWYgKGRhdGEgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdG1wQXJyID0gSlNPTi5wYXJzZShcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5sb2NhbFN0b3JhZ2VLZXkoKSlcbiAgICAgICAgICAgICAgICApLmFuc3dlcjtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIC8vIGVycm9yIHdoaWxlIHBhcnNpbmc7IGxpa2VseSBkdWUgdG8gYmFkIHZhbHVlIHN0b3JlZCBpbiBzdG9yYWdlXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMubG9jYWxTdG9yYWdlS2V5KCkpO1xuICAgICAgICAgICAgICAgIHRoaXMudGFrZW4gPSAwO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFBhcnNlIHJlc3VsdHMgZnJvbSB0aGUgZGF0YWJhc2VcbiAgICAgICAgICAgIHRtcEFyciA9IFtcbiAgICAgICAgICAgICAgICBwYXJzZUludChkYXRhLmNvcnJlY3QpLFxuICAgICAgICAgICAgICAgIHBhcnNlSW50KGRhdGEuaW5jb3JyZWN0KSxcbiAgICAgICAgICAgICAgICBwYXJzZUludChkYXRhLnNraXBwZWQpLFxuICAgICAgICAgICAgICAgIHBhcnNlSW50KGRhdGEudGltZVRha2VuKSxcbiAgICAgICAgICAgICAgICBkYXRhLnJlc2V0LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIHRoaXMuc2V0TG9jYWxTdG9yYWdlKHRtcEFycik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRtcEFyci5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgLy8gRXhhbSB3YXMgcHJldmlvdXNseSByZXNldFxuICAgICAgICAgICAgdGhpcy5yZXNldCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnRha2VuID0gMDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodG1wQXJyLmxlbmd0aCA9PSA0KSB7XG4gICAgICAgICAgICAvLyBBY2NpZGVudGFsIFJlbG9hZCBPUiBEYXRhYmFzZSBFbnRyeVxuICAgICAgICAgICAgdGhpcy5zY29yZSA9IHRtcEFyclswXTtcbiAgICAgICAgICAgIHRoaXMuaW5jb3JyZWN0ID0gdG1wQXJyWzFdO1xuICAgICAgICAgICAgdGhpcy5za2lwcGVkID0gdG1wQXJyWzJdO1xuICAgICAgICAgICAgdGhpcy50aW1lVGFrZW4gPSB0bXBBcnJbM107XG4gICAgICAgIH0gZWxzZSBpZiAodG1wQXJyLmxlbmd0aCA9PSA3KSB7XG4gICAgICAgICAgICAvLyBMb2FkZWQgQ29tcGxldGVkIEV4YW1cbiAgICAgICAgICAgIHRoaXMuc2NvcmUgPSB0bXBBcnJbMF07XG4gICAgICAgICAgICB0aGlzLmNvcnJlY3RTdHIgPSB0bXBBcnJbMV07XG4gICAgICAgICAgICB0aGlzLmluY29ycmVjdCA9IHRtcEFyclsyXTtcbiAgICAgICAgICAgIHRoaXMuaW5jb3JyZWN0U3RyID0gdG1wQXJyWzNdO1xuICAgICAgICAgICAgdGhpcy5za2lwcGVkID0gdG1wQXJyWzRdO1xuICAgICAgICAgICAgdGhpcy5za2lwcGVkU3RyID0gdG1wQXJyWzVdO1xuICAgICAgICAgICAgdGhpcy50aW1lVGFrZW4gPSB0bXBBcnJbNl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBTZXQgbG9jYWxTdG9yYWdlIGluIGNhc2Ugb2YgXCJhY2NpZGVudGFsXCIgcmVsb2FkXG4gICAgICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgICAgIHRoaXMuaW5jb3JyZWN0ID0gMDtcbiAgICAgICAgICAgIHRoaXMuc2tpcHBlZCA9IHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5Lmxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMudGltZVRha2VuID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50YWtlbikge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2tpcHBlZCA9PT0gdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RmVlZGJhY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUHJldkFzc2Vzc21lbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB0aGlzLnJlbmRlclRpbWVkUXVlc3Rpb24oKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5U2NvcmUoKTtcbiAgICAgICAgdGhpcy5zaG93VGltZSgpO1xuICAgIH1cbiAgICBzZXRMb2NhbFN0b3JhZ2UocGFyc2VkRGF0YSkge1xuICAgICAgICB2YXIgdGltZVN0YW1wID0gbmV3IERhdGUoKTtcbiAgICAgICAgdmFyIHN0b3JhZ2VPYmogPSB7XG4gICAgICAgICAgICBhbnN3ZXI6IHBhcnNlZERhdGEsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IHRpbWVTdGFtcCxcbiAgICAgICAgfTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZUtleSgpLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZU9iailcbiAgICAgICAgKTtcbiAgICB9XG4gICAgZGlzcGxheVNjb3JlKCkge1xuICAgICAgICBpZiAodGhpcy5zaG93UmVzdWx0cykge1xuICAgICAgICAgICAgdmFyIHNjb3JlU3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBudW1RdWVzdGlvbnM7XG4gICAgICAgICAgICB2YXIgcGVyY2VudENvcnJlY3Q7XG4gICAgICAgICAgICAvLyBpZiB3ZSBoYXZlIHNvbWUgaW5mb3JtYXRpb25cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLmNvcnJlY3RTdHIubGVuZ3RoID4gMCB8fFxuICAgICAgICAgICAgICAgIHRoaXMuaW5jb3JyZWN0U3RyLmxlbmd0aCA+IDAgfHxcbiAgICAgICAgICAgICAgICB0aGlzLnNraXBwZWRTdHIubGVuZ3RoID4gMFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgc2NvcmVTdHJpbmcgPSBgTnVtIENvcnJlY3Q6ICR7dGhpcy5zY29yZX0uIFF1ZXN0aW9uczogJHt0aGlzLmNvcnJlY3RTdHJ9PGJyPk51bSBXcm9uZzogJHt0aGlzLmluY29ycmVjdH0uIFF1ZXN0aW9uczogJHt0aGlzLmluY29ycmVjdFN0cn08YnI+TnVtIFNraXBwZWQ6ICR7dGhpcy5za2lwcGVkfS4gUXVlc3Rpb25zOiAke3RoaXMuc2tpcHBlZFN0cn08YnI+YDtcbiAgICAgICAgICAgICAgICBudW1RdWVzdGlvbnMgPSB0aGlzLnNjb3JlICsgdGhpcy5pbmNvcnJlY3QgKyB0aGlzLnNraXBwZWQ7XG4gICAgICAgICAgICAgICAgcGVyY2VudENvcnJlY3QgPSAodGhpcy5zY29yZSAvIG51bVF1ZXN0aW9ucykgKiAxMDA7XG4gICAgICAgICAgICAgICAgc2NvcmVTdHJpbmcgKz0gXCJQZXJjZW50IENvcnJlY3Q6IFwiICsgcGVyY2VudENvcnJlY3QgKyBcIiVcIjtcbiAgICAgICAgICAgICAgICAkKHRoaXMuc2NvcmVEaXYpLmh0bWwoc2NvcmVTdHJpbmcpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NvcmVEaXYuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2NvcmVTdHJpbmcgPSBgTnVtIENvcnJlY3Q6ICR7dGhpcy5zY29yZX08YnI+TnVtIFdyb25nOiAke3RoaXMuaW5jb3JyZWN0fTxicj5OdW0gU2tpcHBlZDogJHt0aGlzLnNraXBwZWR9PGJyPmA7XG4gICAgICAgICAgICAgICAgbnVtUXVlc3Rpb25zID0gdGhpcy5zY29yZSArIHRoaXMuaW5jb3JyZWN0ICsgdGhpcy5za2lwcGVkO1xuICAgICAgICAgICAgICAgIHBlcmNlbnRDb3JyZWN0ID0gKHRoaXMuc2NvcmUgLyBudW1RdWVzdGlvbnMpICogMTAwO1xuICAgICAgICAgICAgICAgIHNjb3JlU3RyaW5nICs9IFwiUGVyY2VudCBDb3JyZWN0OiBcIiArIHBlcmNlbnRDb3JyZWN0ICsgXCIlXCI7XG4gICAgICAgICAgICAgICAgJCh0aGlzLnNjb3JlRGl2KS5odG1sKHNjb3JlU3RyaW5nKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3JlRGl2LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmhpZ2hsaWdodE51bWJlcmVkTGlzdCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCh0aGlzLnNjb3JlRGl2KS5odG1sKFxuICAgICAgICAgICAgICAgIFwiVGhhbmsgeW91IGZvciB0YWtpbmcgdGhlIGV4YW0uICBZb3VyIGFuc3dlcnMgaGF2ZSBiZWVuIHJlY29yZGVkLlwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5zY29yZURpdi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9XG4gICAgfVxuICAgIGhpZ2hsaWdodE51bWJlcmVkTGlzdCgpIHtcbiAgICAgICAgdmFyIGNvcnJlY3RDb3VudCA9IHRoaXMuY29ycmVjdFN0cjtcbiAgICAgICAgdmFyIGluY29ycmVjdENvdW50ID0gdGhpcy5pbmNvcnJlY3RTdHI7XG4gICAgICAgIHZhciBza2lwcGVkQ291bnQgPSB0aGlzLnNraXBwZWRTdHI7XG4gICAgICAgIGNvcnJlY3RDb3VudCA9IGNvcnJlY3RDb3VudC5yZXBsYWNlKC8gL2csIFwiXCIpLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgaW5jb3JyZWN0Q291bnQgPSBpbmNvcnJlY3RDb3VudC5yZXBsYWNlKC8gL2csIFwiXCIpLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgc2tpcHBlZENvdW50ID0gc2tpcHBlZENvdW50LnJlcGxhY2UoLyAvZywgXCJcIikuc3BsaXQoXCIsXCIpO1xuICAgICAgICAkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBudW1iZXJlZEJ0bnMgPSAkKFwidWwjcGFnZU51bXMgPiB1bCA+IGxpXCIpO1xuICAgICAgICAgICAgaWYgKG51bWJlcmVkQnRucy5oYXNDbGFzcyhcImFuc3dlcmVkXCIpKSB7XG4gICAgICAgICAgICAgICAgbnVtYmVyZWRCdG5zLnJlbW92ZUNsYXNzKFwiYW5zd2VyZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvcnJlY3RDb3VudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciB0ZXN0ID0gcGFyc2VJbnQoY29ycmVjdENvdW50W2ldKSAtIDE7XG4gICAgICAgICAgICAgICAgbnVtYmVyZWRCdG5zXG4gICAgICAgICAgICAgICAgICAgIC5lcShwYXJzZUludChjb3JyZWN0Q291bnRbaV0pIC0gMSlcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKFwiY29ycmVjdENvdW50XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpbmNvcnJlY3RDb3VudC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIG51bWJlcmVkQnRuc1xuICAgICAgICAgICAgICAgICAgICAuZXEocGFyc2VJbnQoaW5jb3JyZWN0Q291bnRbal0pIC0gMSlcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKFwiaW5jb3JyZWN0Q291bnRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IHNraXBwZWRDb3VudC5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgIG51bWJlcmVkQnRuc1xuICAgICAgICAgICAgICAgICAgICAuZXEocGFyc2VJbnQoc2tpcHBlZENvdW50W2tdKSAtIDEpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcInNraXBwZWRDb3VudFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj09PSBGdW5jdGlvbiB0aGF0IGNhbGxzIHRoZSBjb25zdHJ1Y3RvcnMgb24gcGFnZSBsb2FkID09PVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4kKGRvY3VtZW50KS5vbihcInJ1bmVzdG9uZTpsb2dpbi1jb21wbGV0ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgJChcIltkYXRhLWNvbXBvbmVudD10aW1lZEFzc2Vzc21lbnRdXCIpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIFRpbWVkTGlzdFt0aGlzLmlkXSA9IG5ldyBUaW1lZCh7XG4gICAgICAgICAgICBvcmlnOiB0aGlzLFxuICAgICAgICAgICAgdXNlUnVuZXN0b25lU2VydmljZXM6IGVCb29rQ29uZmlnLnVzZVJ1bmVzdG9uZVNlcnZpY2VzLFxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9