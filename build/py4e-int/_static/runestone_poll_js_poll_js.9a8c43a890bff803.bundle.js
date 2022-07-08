"use strict";
(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_poll_js_poll_js"],{

/***/ 55475:
/*!*************************************!*\
  !*** ./runestone/poll/css/poll.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 37350:
/*!***********************************!*\
  !*** ./runestone/poll/js/poll.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Poll),
/* harmony export */   "pollList": () => (/* binding */ pollList)
/* harmony export */ });
/* harmony import */ var _common_js_runestonebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/runestonebase */ 2568);
/* harmony import */ var _css_poll_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/poll.css */ 55475);
/*
__author__ = Kirby Olson
__date__ = 6/12/2015  */





var pollList = {};

class Poll extends _common_js_runestonebase__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(opts) {
        super(opts);
        var orig = opts.orig; //entire <p> element
        this.origElem = orig;
        this.divid = orig.id;
        this.children = this.origElem.childNodes;
        this.optionList = [];
        this.optsArray = [];
        this.comment = false;
        if ($(this.origElem).is("[data-comment]")) {
            this.comment = true;
        }
        this.resultsViewer = $(orig).data("results");
        this.getQuestionText();
        this.getOptionText(); //populates optionList
        this.renderPoll(); //generates HTML
        // Checks localStorage to see if this poll has already been completed by this user.
        this.checkPollStorage();
        this.caption = "Poll";
        this.addCaption("runestone");
    }
    getQuestionText() {
        //finds the text inside the parent tag, but before the first <li> tag and sets it as the question
        var _this = this;
        var firstAnswer;
        for (var i = 0; i < this.children.length; i++) {
            if (this.children[i].tagName == "LI") {
                firstAnswer = _this.children[i];
                break;
            }
        }
        var delimiter = firstAnswer.outerHTML;
        var fulltext = $(this.origElem).html();
        var temp = fulltext.split(delimiter);
        this.question = temp[0];
    }
    getOptionText() {
        //Gets the text from each <li> tag and places it in this.optionList
        var _this = this;
        for (var i = 0; i < this.children.length; i++) {
            if (_this.children[i].tagName == "LI") {
                _this.optionList.push($(_this.children[i]).text());
            }
        }
    }
    renderPoll() {
        //generates the HTML that the user interacts with
        var _this = this;
        this.containerDiv = document.createElement("div");
        this.pollForm = document.createElement("form");
        this.resultsDiv = document.createElement("div");
        this.containerDiv.id = this.divid;
        $(this.containerDiv).addClass(this.origElem.getAttribute("class"));
        $(this.pollForm).html(
            `<span style='font-size: Large'>${this.question}</span>`
        );
        $(this.pollForm).attr({
            id: this.divid + "_form",
            method: "get",
            action: "",
            onsubmit: "return false;",
        });
        this.pollForm.appendChild(document.createElement("br"));
        for (var i = 0; i < this.optionList.length; i++) {
            var radio = document.createElement("input");
            var tmpid = _this.divid + "_opt_" + i;
            $(radio).attr({
                id: tmpid,
                name: this.divid + "_group1",
                type: "radio",
                value: i,
            });
            $(radio).click(this.submitPoll.bind(this));
            var label = document.createElement("label");
            $(label).attr("for", tmpid);
            $(label).text(this.optionList[i]);
            this.pollForm.appendChild(radio);
            this.optsArray.push(radio);
            this.pollForm.appendChild(label);
            this.pollForm.appendChild(document.createElement("br"));
        }
        if (this.comment) {
            this.renderTextField();
        }
        this.resultsDiv.id = this.divid + "_results";
        this.containerDiv.appendChild(this.pollForm);
        this.containerDiv.appendChild(this.resultsDiv);
        $(this.origElem).replaceWith(this.containerDiv);
    }
    renderTextField() {
        this.textfield = document.createElement("input");
        this.textfield.type = "text";
        $(this.textfield).addClass("form-control");
        this.textfield.style.width = "300px";
        this.textfield.name = this.divid + "_comment";
        this.textfield.placeholder = "Any comments?";
        this.pollForm.appendChild(this.textfield);
        this.pollForm.appendChild(document.createElement("br"));
    }
    submitPoll() {
        //checks the poll, sets localstorage and submits to the server
        var poll_val = null;
        for (var i = 0; i < this.optsArray.length; i++) {
            if (this.optsArray[i].checked) {
                poll_val = this.optsArray[i].value;
                break;
            }
        }
        if (poll_val === null) return;
        var comment_val = "";
        if (this.comment) {
            comment_val = this.textfield.value;
        }
        var act = "";
        if (comment_val !== "") {
            act = poll_val + ":" + comment_val;
        } else {
            act = poll_val;
        }
        var eventInfo = { event: "poll", act: act, div_id: this.divid };
        // log the response to the database
        this.logBookEvent(eventInfo); // in bookfuncs.js
        // log the fact that the user has answered the poll to local storage
        localStorage.setItem(this.divid, "true");
        if (!document.getElementById(`${this.divid}_sent`)) {
            $(this.pollForm).append(
                `<span id=${this.divid}_sent><strong>Thanks, your response has been recorded</strong></span>`
            );
        } else {
            $(`#${this.divid}_sent`).html(
                "<strong>Only Your last reponse is recorded</strong>"
            );
        }
        // show the results of the poll
        if (this.resultsViewer === "all") {
            var data = {};
            data.div_id = this.divid;
            data.course = eBookConfig.course;
            jQuery.get(
                `${eBookConfig.new_server_prefix}/assessment/getpollresults`,
                data,
                this.showPollResults
            );
        }
    }
    showPollResults(results) {
        //displays the results returned by the server
        results = results.detail;
        var total = results["total"];
        var optCounts = results["opt_counts"];
        var div_id = results["div_id"];
        var my_vote = results["my_vote"];
        // restore current users vote
        if (my_vote > -1) {
            this.optsArray[my_vote].checked = "checked";
        }
        // show results summary if appropriate
        if (
            (this.resultsViewer === "all" &&
                localStorage.getItem(this.divid === "true")) ||
            eBookConfig.isInstructor
        ) {
            $(this.resultsDiv).html(
                `<b>Results:</b> ${total} responses <br><br>`
            );
            var list = $(document.createElement("div"));
            $(list).addClass("results-container");
            for (var i = 0; i < this.optionList.length; i++) {
                var count;
                var percent;
                if (optCounts[i] > 0) {
                    count = optCounts[i];
                    percent = (count / total) * 100;
                } else {
                    count = 0;
                    percent = 0;
                }
                var text = count + " (" + Math.round(10 * percent) / 10 + "%)"; // round percent to 10ths
                var html;
                if (percent > 10) {
                    html =
                        `<div class="progresscounter">${i + 1}. </div>` +
                        "<div class='progress'>" +
                        "<div class='progress-bar progress-bar-success'" +
                        `style="width: ${percent}%; min-width: 2em;">` +
                        "<span class='poll-text'>" +
                        text +
                        "</span></div></div>";
                } else {
                    html =
                        `<div class="progresscounter">${i + 1}. </div>` +
                        "<div class='progress'>" +
                        "<div class='progress-bar progress-bar-success'" +
                        `style="width: ${percent}%; min-width: 2em;"></div>` +
                        "<span class='poll-text' style='margin: 0 0 0 10px;'>" +
                        text +
                        "</span></div>";
                }
                var el = $(html);
                list.append(el);
            }
            $(this.resultsDiv).append(list);
        }
        this.indicate_component_ready();
    }
    disableOptions() {}
    checkPollStorage() {
        //checks the localstorage to see if the poll has been completed already
        var _this = this;
        var len = localStorage.length;
        if (len > 0) {
            //If the poll has already been completed, show the results
            var data = {};
            data.div_id = this.divid;
            data.course = eBookConfig.course;
            jQuery
                .get(
                    `${eBookConfig.new_server_prefix}/assessment/getpollresults`,
                    data,
                    this.showPollResults.bind(this)
                )
                .fail(this.indicate_component_ready.bind(this));
        } else {
            this.indicate_component_ready();
        }
    }
}

// Do not render poll data until login-complete event so we know instructor status
$(document).on("runestone:login-complete", function () {
    $("[data-component=poll]").each(function (index) {
        try {
            pollList[this.id] = new Poll({ orig: this });
        } catch (err) {
            console.log(`Error rendering Poll Problem ${this.id}
                         Details: ${err}`);
            console.log(err.stack);
        }
    });
});

if (typeof window.component_factory === "undefined") {
    window.component_factory = {};
}
window.component_factory.poll = function (opts) {
    return new Poll(opts);
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuZXN0b25lX3BvbGxfanNfcG9sbF9qcy45YThjNDNhODkwYmZmODAzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNhOztBQUU2QztBQUNqQzs7QUFFbEI7O0FBRVEsbUJBQW1CLGdFQUFhO0FBQy9DO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QiwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDBCQUEwQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwwQkFBMEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsU0FBUztBQUNUO0FBQ0Esd0JBQXdCLDRCQUE0QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMkJBQTJCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0EsNEJBQTRCLFdBQVc7QUFDdkM7QUFDQSxVQUFVO0FBQ1Ysa0JBQWtCLFdBQVc7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDhCQUE4QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLE9BQU87QUFDMUM7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDRCQUE0QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLGdGQUFnRjtBQUNoRjtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsTUFBTTtBQUM5RDtBQUNBO0FBQ0EseUNBQXlDLFFBQVEsR0FBRyxlQUFlO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBLHdEQUF3RCxNQUFNO0FBQzlEO0FBQ0E7QUFDQSx5Q0FBeUMsUUFBUSxHQUFHLGVBQWU7QUFDbkUsMkVBQTJFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDhCQUE4QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxZQUFZO0FBQ3ZELFVBQVU7QUFDVix3REFBd0Q7QUFDeEQsb0NBQW9DLElBQUk7QUFDeEM7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvcG9sbC9jc3MvcG9sbC5jc3M/OGNhOCIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3BvbGwvanMvcG9sbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKlxuX19hdXRob3JfXyA9IEtpcmJ5IE9sc29uXG5fX2RhdGVfXyA9IDYvMTIvMjAxNSAgKi9cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVuZXN0b25lQmFzZSBmcm9tIFwiLi4vLi4vY29tbW9uL2pzL3J1bmVzdG9uZWJhc2VcIjtcbmltcG9ydCBcIi4uL2Nzcy9wb2xsLmNzc1wiO1xuXG5leHBvcnQgdmFyIHBvbGxMaXN0ID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbGwgZXh0ZW5kcyBSdW5lc3RvbmVCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIHN1cGVyKG9wdHMpO1xuICAgICAgICB2YXIgb3JpZyA9IG9wdHMub3JpZzsgLy9lbnRpcmUgPHA+IGVsZW1lbnRcbiAgICAgICAgdGhpcy5vcmlnRWxlbSA9IG9yaWc7XG4gICAgICAgIHRoaXMuZGl2aWQgPSBvcmlnLmlkO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gdGhpcy5vcmlnRWxlbS5jaGlsZE5vZGVzO1xuICAgICAgICB0aGlzLm9wdGlvbkxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5vcHRzQXJyYXkgPSBbXTtcbiAgICAgICAgdGhpcy5jb21tZW50ID0gZmFsc2U7XG4gICAgICAgIGlmICgkKHRoaXMub3JpZ0VsZW0pLmlzKFwiW2RhdGEtY29tbWVudF1cIikpIHtcbiAgICAgICAgICAgIHRoaXMuY29tbWVudCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXN1bHRzVmlld2VyID0gJChvcmlnKS5kYXRhKFwicmVzdWx0c1wiKTtcbiAgICAgICAgdGhpcy5nZXRRdWVzdGlvblRleHQoKTtcbiAgICAgICAgdGhpcy5nZXRPcHRpb25UZXh0KCk7IC8vcG9wdWxhdGVzIG9wdGlvbkxpc3RcbiAgICAgICAgdGhpcy5yZW5kZXJQb2xsKCk7IC8vZ2VuZXJhdGVzIEhUTUxcbiAgICAgICAgLy8gQ2hlY2tzIGxvY2FsU3RvcmFnZSB0byBzZWUgaWYgdGhpcyBwb2xsIGhhcyBhbHJlYWR5IGJlZW4gY29tcGxldGVkIGJ5IHRoaXMgdXNlci5cbiAgICAgICAgdGhpcy5jaGVja1BvbGxTdG9yYWdlKCk7XG4gICAgICAgIHRoaXMuY2FwdGlvbiA9IFwiUG9sbFwiO1xuICAgICAgICB0aGlzLmFkZENhcHRpb24oXCJydW5lc3RvbmVcIik7XG4gICAgfVxuICAgIGdldFF1ZXN0aW9uVGV4dCgpIHtcbiAgICAgICAgLy9maW5kcyB0aGUgdGV4dCBpbnNpZGUgdGhlIHBhcmVudCB0YWcsIGJ1dCBiZWZvcmUgdGhlIGZpcnN0IDxsaT4gdGFnIGFuZCBzZXRzIGl0IGFzIHRoZSBxdWVzdGlvblxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgZmlyc3RBbnN3ZXI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hpbGRyZW5baV0udGFnTmFtZSA9PSBcIkxJXCIpIHtcbiAgICAgICAgICAgICAgICBmaXJzdEFuc3dlciA9IF90aGlzLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBkZWxpbWl0ZXIgPSBmaXJzdEFuc3dlci5vdXRlckhUTUw7XG4gICAgICAgIHZhciBmdWxsdGV4dCA9ICQodGhpcy5vcmlnRWxlbSkuaHRtbCgpO1xuICAgICAgICB2YXIgdGVtcCA9IGZ1bGx0ZXh0LnNwbGl0KGRlbGltaXRlcik7XG4gICAgICAgIHRoaXMucXVlc3Rpb24gPSB0ZW1wWzBdO1xuICAgIH1cbiAgICBnZXRPcHRpb25UZXh0KCkge1xuICAgICAgICAvL0dldHMgdGhlIHRleHQgZnJvbSBlYWNoIDxsaT4gdGFnIGFuZCBwbGFjZXMgaXQgaW4gdGhpcy5vcHRpb25MaXN0XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKF90aGlzLmNoaWxkcmVuW2ldLnRhZ05hbWUgPT0gXCJMSVwiKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMub3B0aW9uTGlzdC5wdXNoKCQoX3RoaXMuY2hpbGRyZW5baV0pLnRleHQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyUG9sbCgpIHtcbiAgICAgICAgLy9nZW5lcmF0ZXMgdGhlIEhUTUwgdGhhdCB0aGUgdXNlciBpbnRlcmFjdHMgd2l0aFxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMucG9sbEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgICAgdGhpcy5yZXN1bHRzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuaWQgPSB0aGlzLmRpdmlkO1xuICAgICAgICAkKHRoaXMuY29udGFpbmVyRGl2KS5hZGRDbGFzcyh0aGlzLm9yaWdFbGVtLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpKTtcbiAgICAgICAgJCh0aGlzLnBvbGxGb3JtKS5odG1sKFxuICAgICAgICAgICAgYDxzcGFuIHN0eWxlPSdmb250LXNpemU6IExhcmdlJz4ke3RoaXMucXVlc3Rpb259PC9zcGFuPmBcbiAgICAgICAgKTtcbiAgICAgICAgJCh0aGlzLnBvbGxGb3JtKS5hdHRyKHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmRpdmlkICsgXCJfZm9ybVwiLFxuICAgICAgICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgICAgICAgICAgYWN0aW9uOiBcIlwiLFxuICAgICAgICAgICAgb25zdWJtaXQ6IFwicmV0dXJuIGZhbHNlO1wiLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wb2xsRm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub3B0aW9uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgdmFyIHRtcGlkID0gX3RoaXMuZGl2aWQgKyBcIl9vcHRfXCIgKyBpO1xuICAgICAgICAgICAgJChyYWRpbykuYXR0cih7XG4gICAgICAgICAgICAgICAgaWQ6IHRtcGlkLFxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuZGl2aWQgKyBcIl9ncm91cDFcIixcbiAgICAgICAgICAgICAgICB0eXBlOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICQocmFkaW8pLmNsaWNrKHRoaXMuc3VibWl0UG9sbC5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIHZhciBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgICAgICQobGFiZWwpLmF0dHIoXCJmb3JcIiwgdG1waWQpO1xuICAgICAgICAgICAgJChsYWJlbCkudGV4dCh0aGlzLm9wdGlvbkxpc3RbaV0pO1xuICAgICAgICAgICAgdGhpcy5wb2xsRm9ybS5hcHBlbmRDaGlsZChyYWRpbyk7XG4gICAgICAgICAgICB0aGlzLm9wdHNBcnJheS5wdXNoKHJhZGlvKTtcbiAgICAgICAgICAgIHRoaXMucG9sbEZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgdGhpcy5wb2xsRm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvbW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyVGV4dEZpZWxkKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXN1bHRzRGl2LmlkID0gdGhpcy5kaXZpZCArIFwiX3Jlc3VsdHNcIjtcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGhpcy5wb2xsRm9ybSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHRoaXMucmVzdWx0c0Rpdik7XG4gICAgICAgICQodGhpcy5vcmlnRWxlbSkucmVwbGFjZVdpdGgodGhpcy5jb250YWluZXJEaXYpO1xuICAgIH1cbiAgICByZW5kZXJUZXh0RmllbGQoKSB7XG4gICAgICAgIHRoaXMudGV4dGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0aGlzLnRleHRmaWVsZC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgICQodGhpcy50ZXh0ZmllbGQpLmFkZENsYXNzKFwiZm9ybS1jb250cm9sXCIpO1xuICAgICAgICB0aGlzLnRleHRmaWVsZC5zdHlsZS53aWR0aCA9IFwiMzAwcHhcIjtcbiAgICAgICAgdGhpcy50ZXh0ZmllbGQubmFtZSA9IHRoaXMuZGl2aWQgKyBcIl9jb21tZW50XCI7XG4gICAgICAgIHRoaXMudGV4dGZpZWxkLnBsYWNlaG9sZGVyID0gXCJBbnkgY29tbWVudHM/XCI7XG4gICAgICAgIHRoaXMucG9sbEZvcm0uYXBwZW5kQ2hpbGQodGhpcy50ZXh0ZmllbGQpO1xuICAgICAgICB0aGlzLnBvbGxGb3JtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XG4gICAgfVxuICAgIHN1Ym1pdFBvbGwoKSB7XG4gICAgICAgIC8vY2hlY2tzIHRoZSBwb2xsLCBzZXRzIGxvY2Fsc3RvcmFnZSBhbmQgc3VibWl0cyB0byB0aGUgc2VydmVyXG4gICAgICAgIHZhciBwb2xsX3ZhbCA9IG51bGw7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vcHRzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdHNBcnJheVtpXS5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgcG9sbF92YWwgPSB0aGlzLm9wdHNBcnJheVtpXS52YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocG9sbF92YWwgPT09IG51bGwpIHJldHVybjtcbiAgICAgICAgdmFyIGNvbW1lbnRfdmFsID0gXCJcIjtcbiAgICAgICAgaWYgKHRoaXMuY29tbWVudCkge1xuICAgICAgICAgICAgY29tbWVudF92YWwgPSB0aGlzLnRleHRmaWVsZC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYWN0ID0gXCJcIjtcbiAgICAgICAgaWYgKGNvbW1lbnRfdmFsICE9PSBcIlwiKSB7XG4gICAgICAgICAgICBhY3QgPSBwb2xsX3ZhbCArIFwiOlwiICsgY29tbWVudF92YWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY3QgPSBwb2xsX3ZhbDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXZlbnRJbmZvID0geyBldmVudDogXCJwb2xsXCIsIGFjdDogYWN0LCBkaXZfaWQ6IHRoaXMuZGl2aWQgfTtcbiAgICAgICAgLy8gbG9nIHRoZSByZXNwb25zZSB0byB0aGUgZGF0YWJhc2VcbiAgICAgICAgdGhpcy5sb2dCb29rRXZlbnQoZXZlbnRJbmZvKTsgLy8gaW4gYm9va2Z1bmNzLmpzXG4gICAgICAgIC8vIGxvZyB0aGUgZmFjdCB0aGF0IHRoZSB1c2VyIGhhcyBhbnN3ZXJlZCB0aGUgcG9sbCB0byBsb2NhbCBzdG9yYWdlXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuZGl2aWQsIFwidHJ1ZVwiKTtcbiAgICAgICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLmRpdmlkfV9zZW50YCkpIHtcbiAgICAgICAgICAgICQodGhpcy5wb2xsRm9ybSkuYXBwZW5kKFxuICAgICAgICAgICAgICAgIGA8c3BhbiBpZD0ke3RoaXMuZGl2aWR9X3NlbnQ+PHN0cm9uZz5UaGFua3MsIHlvdXIgcmVzcG9uc2UgaGFzIGJlZW4gcmVjb3JkZWQ8L3N0cm9uZz48L3NwYW4+YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoYCMke3RoaXMuZGl2aWR9X3NlbnRgKS5odG1sKFxuICAgICAgICAgICAgICAgIFwiPHN0cm9uZz5Pbmx5IFlvdXIgbGFzdCByZXBvbnNlIGlzIHJlY29yZGVkPC9zdHJvbmc+XCJcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2hvdyB0aGUgcmVzdWx0cyBvZiB0aGUgcG9sbFxuICAgICAgICBpZiAodGhpcy5yZXN1bHRzVmlld2VyID09PSBcImFsbFwiKSB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHt9O1xuICAgICAgICAgICAgZGF0YS5kaXZfaWQgPSB0aGlzLmRpdmlkO1xuICAgICAgICAgICAgZGF0YS5jb3Vyc2UgPSBlQm9va0NvbmZpZy5jb3Vyc2U7XG4gICAgICAgICAgICBqUXVlcnkuZ2V0KFxuICAgICAgICAgICAgICAgIGAke2VCb29rQ29uZmlnLm5ld19zZXJ2ZXJfcHJlZml4fS9hc3Nlc3NtZW50L2dldHBvbGxyZXN1bHRzYCxcbiAgICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BvbGxSZXN1bHRzXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNob3dQb2xsUmVzdWx0cyhyZXN1bHRzKSB7XG4gICAgICAgIC8vZGlzcGxheXMgdGhlIHJlc3VsdHMgcmV0dXJuZWQgYnkgdGhlIHNlcnZlclxuICAgICAgICByZXN1bHRzID0gcmVzdWx0cy5kZXRhaWw7XG4gICAgICAgIHZhciB0b3RhbCA9IHJlc3VsdHNbXCJ0b3RhbFwiXTtcbiAgICAgICAgdmFyIG9wdENvdW50cyA9IHJlc3VsdHNbXCJvcHRfY291bnRzXCJdO1xuICAgICAgICB2YXIgZGl2X2lkID0gcmVzdWx0c1tcImRpdl9pZFwiXTtcbiAgICAgICAgdmFyIG15X3ZvdGUgPSByZXN1bHRzW1wibXlfdm90ZVwiXTtcbiAgICAgICAgLy8gcmVzdG9yZSBjdXJyZW50IHVzZXJzIHZvdGVcbiAgICAgICAgaWYgKG15X3ZvdGUgPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5vcHRzQXJyYXlbbXlfdm90ZV0uY2hlY2tlZCA9IFwiY2hlY2tlZFwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNob3cgcmVzdWx0cyBzdW1tYXJ5IGlmIGFwcHJvcHJpYXRlXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICh0aGlzLnJlc3VsdHNWaWV3ZXIgPT09IFwiYWxsXCIgJiZcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmRpdmlkID09PSBcInRydWVcIikpIHx8XG4gICAgICAgICAgICBlQm9va0NvbmZpZy5pc0luc3RydWN0b3JcbiAgICAgICAgKSB7XG4gICAgICAgICAgICAkKHRoaXMucmVzdWx0c0RpdikuaHRtbChcbiAgICAgICAgICAgICAgICBgPGI+UmVzdWx0czo8L2I+ICR7dG90YWx9IHJlc3BvbnNlcyA8YnI+PGJyPmBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB2YXIgbGlzdCA9ICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XG4gICAgICAgICAgICAkKGxpc3QpLmFkZENsYXNzKFwicmVzdWx0cy1jb250YWluZXJcIik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub3B0aW9uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBjb3VudDtcbiAgICAgICAgICAgICAgICB2YXIgcGVyY2VudDtcbiAgICAgICAgICAgICAgICBpZiAob3B0Q291bnRzW2ldID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCA9IG9wdENvdW50c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgcGVyY2VudCA9IChjb3VudCAvIHRvdGFsKSAqIDEwMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHBlcmNlbnQgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IGNvdW50ICsgXCIgKFwiICsgTWF0aC5yb3VuZCgxMCAqIHBlcmNlbnQpIC8gMTAgKyBcIiUpXCI7IC8vIHJvdW5kIHBlcmNlbnQgdG8gMTB0aHNcbiAgICAgICAgICAgICAgICB2YXIgaHRtbDtcbiAgICAgICAgICAgICAgICBpZiAocGVyY2VudCA+IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIGh0bWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJwcm9ncmVzc2NvdW50ZXJcIj4ke2kgKyAxfS4gPC9kaXY+YCArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjxkaXYgY2xhc3M9J3Byb2dyZXNzJz5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjxkaXYgY2xhc3M9J3Byb2dyZXNzLWJhciBwcm9ncmVzcy1iYXItc3VjY2VzcydcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBgc3R5bGU9XCJ3aWR0aDogJHtwZXJjZW50fSU7IG1pbi13aWR0aDogMmVtO1wiPmAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCI8c3BhbiBjbGFzcz0ncG9sbC10ZXh0Jz5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiPC9zcGFuPjwvZGl2PjwvZGl2PlwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGh0bWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJwcm9ncmVzc2NvdW50ZXJcIj4ke2kgKyAxfS4gPC9kaXY+YCArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjxkaXYgY2xhc3M9J3Byb2dyZXNzJz5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjxkaXYgY2xhc3M9J3Byb2dyZXNzLWJhciBwcm9ncmVzcy1iYXItc3VjY2VzcydcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBgc3R5bGU9XCJ3aWR0aDogJHtwZXJjZW50fSU7IG1pbi13aWR0aDogMmVtO1wiPjwvZGl2PmAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCI8c3BhbiBjbGFzcz0ncG9sbC10ZXh0JyBzdHlsZT0nbWFyZ2luOiAwIDAgMCAxMHB4Oyc+XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjwvc3Bhbj48L2Rpdj5cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gJChodG1sKTtcbiAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZChlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkKHRoaXMucmVzdWx0c0RpdikuYXBwZW5kKGxpc3QpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5kaWNhdGVfY29tcG9uZW50X3JlYWR5KCk7XG4gICAgfVxuICAgIGRpc2FibGVPcHRpb25zKCkge31cbiAgICBjaGVja1BvbGxTdG9yYWdlKCkge1xuICAgICAgICAvL2NoZWNrcyB0aGUgbG9jYWxzdG9yYWdlIHRvIHNlZSBpZiB0aGUgcG9sbCBoYXMgYmVlbiBjb21wbGV0ZWQgYWxyZWFkeVxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgbGVuID0gbG9jYWxTdG9yYWdlLmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbiA+IDApIHtcbiAgICAgICAgICAgIC8vSWYgdGhlIHBvbGwgaGFzIGFscmVhZHkgYmVlbiBjb21wbGV0ZWQsIHNob3cgdGhlIHJlc3VsdHNcbiAgICAgICAgICAgIHZhciBkYXRhID0ge307XG4gICAgICAgICAgICBkYXRhLmRpdl9pZCA9IHRoaXMuZGl2aWQ7XG4gICAgICAgICAgICBkYXRhLmNvdXJzZSA9IGVCb29rQ29uZmlnLmNvdXJzZTtcbiAgICAgICAgICAgIGpRdWVyeVxuICAgICAgICAgICAgICAgIC5nZXQoXG4gICAgICAgICAgICAgICAgICAgIGAke2VCb29rQ29uZmlnLm5ld19zZXJ2ZXJfcHJlZml4fS9hc3Nlc3NtZW50L2dldHBvbGxyZXN1bHRzYCxcbiAgICAgICAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UG9sbFJlc3VsdHMuYmluZCh0aGlzKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuZmFpbCh0aGlzLmluZGljYXRlX2NvbXBvbmVudF9yZWFkeS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW5kaWNhdGVfY29tcG9uZW50X3JlYWR5KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIERvIG5vdCByZW5kZXIgcG9sbCBkYXRhIHVudGlsIGxvZ2luLWNvbXBsZXRlIGV2ZW50IHNvIHdlIGtub3cgaW5zdHJ1Y3RvciBzdGF0dXNcbiQoZG9jdW1lbnQpLm9uKFwicnVuZXN0b25lOmxvZ2luLWNvbXBsZXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiW2RhdGEtY29tcG9uZW50PXBvbGxdXCIpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwb2xsTGlzdFt0aGlzLmlkXSA9IG5ldyBQb2xsKHsgb3JpZzogdGhpcyB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3IgcmVuZGVyaW5nIFBvbGwgUHJvYmxlbSAke3RoaXMuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgRGV0YWlsczogJHtlcnJ9YCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIuc3RhY2spO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcblxuaWYgKHR5cGVvZiB3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnkgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnkgPSB7fTtcbn1cbndpbmRvdy5jb21wb25lbnRfZmFjdG9yeS5wb2xsID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICByZXR1cm4gbmV3IFBvbGwob3B0cyk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9