"use strict";
(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_quizly_js_quizly_js"],{

/***/ 16207:
/*!***************************************!*\
  !*** ./runestone/quizly/js/quizly.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Quizly),
/* harmony export */   "quizlyList": () => (/* binding */ quizlyList)
/* harmony export */ });
/* harmony import */ var _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/runestonebase.js */ 2568);
/*
__author__ = Ralph Morelli
__date__ = 4/9/2021  */

/* **********
  This script renders the quizly HTML code and sets up functions
  to process the quiz when the user clicks on the quizly 'Check me'
  button.  

  It gets the data it needs from the Quizly node created by quizly.py
  during the runestone build step.

  NOTE: An entry for quizly.js script must be added to the webpack.config.js.
  ************** */




//import "../css/poll.css";

var DEBUG = false;

var quizlyList = {};

class Quizly extends _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(opts) {
        super(opts);
        var orig = opts.orig; // Looks something like: {"orig":{"jQuery351095558298548049562":{"question_label":"1.1.2"}}}
        if (DEBUG)
            console.log(
                "DEBUG: Quizly constructor, opts=" + JSON.stringify(opts)
            );
        this.origElem = orig;
        this.divid = orig.id;
        if (DEBUG)
            console.log("DEBUG: Quizly constructor, divid= " + this.divid);
        this.resultsViewer = $(orig).data("results");
        this.getIFrameAndQuizname();
        this.renderQuizly(); //generates HTML
        // Checks localStorage to see if this quizly has already been completed by this user.
        //        this.checkQuizlyStorage();
        this.caption = "Quizly";
        this.addCaption("runestone");
    }

    // The main content of the quizly node is the iframe.
    getIFrameAndQuizname() {
        var html = $(this.origElem).html();
        var p1 = html.search("<iframe");
        var p2 = html.search("</iframe>");
        this.iframe = html.slice(p1, p2 + 8);
        if (DEBUG) console.log("DEBUG: getIFrame() html = " + html);
        if (DEBUG) console.log("DEBUG: getIFrame() iframe = " + this.iframe);
        p1 = html.search("quizname=");
        p2 = html.search("hints");
        this.quizname = html.slice(p1 + 9, p2 - 5); // Grab the quizname from iframe
        if (DEBUG) console.log("DEBUG quizname= ", this.quizname);
    }

    // Generates the HTML that the user interacts with
    renderQuizly() {
        var _this = this;
        if (DEBUG) console.log("DEBUG: renderQuizly()");
        this.containerDiv = document.createElement("div");
        //        this.quizlyFrame = document.createElement("iframe");
        this.containerDiv.id = this.divid;
        $(this.containerDiv).addClass(this.origElem.getAttribute("class"));
        $(this.containerDiv).html(this.iframe);
        $(this.origElem).replaceWith(this.containerDiv);
        if (DEBUG)
            console.log(
                "DEBUG: renderQuizly(), this = " + JSON.stringify(this)
            );
    }

    // Called from the exercise when user clicks submit button
    // Checks for the result, sets localstorage and submits to the server
    submitQuizly(result) {
        if (DEBUG)
            console.log(
                "DEBUG: submitQuizly result = " + JSON.stringify(result)
            );
        var answer = result["xml"];
        var correct = result["result"] == true ? "T" : "F";
        var loganswer = "answer:" + (correct == "T" ? "correct" : "no"); // backward compatible
        var eventInfo = {
            event: "quizly",
            act: loganswer,
            answer: answer,
            correct: correct,
            div_id: this.divid,
        };
        // Log the response to the database
        this.logBookEvent(eventInfo); // in bookfuncs.js
        if (DEBUG)
            console.log(
                "DEBUG: submitquizly logbookevent = " +
                    JSON.stringify(eventInfo)
            );
        // Log the fact that the user has attempted this quizly exercise to local storage
        localStorage.setItem(this.divid, "true");
    }
}

/*=================================
== Find the custom HTML tags and ==
==   execute our code on them    ==
=================================*/
$(document).on("runestone:login-complete", function () {
    $("[data-component=quizly").each(function (index) {
        try {
            var quizly = new Quizly({ orig: this });
            quizlyList[this.id] = quizly;
            if (DEBUG)
                console.log("DEBUG: Quizly rendering, this.id = " + this.id);
            setupCallback(quizly, quizly.quizname);
        } catch (err) {
            console.log(`Error rendering Quizly Exercise ${this.id}
                          Details: ${err}`);
            console.log(err.stack);
        }
    });
});

// Sets up a unique callback function on the window containing the quizly component
// The quizly param is a reference to this quizly object so that it can be use during callback.
// The quizname param is used to construct a unique callback function name
function setupCallback(quizly, quizname) {
    if (typeof window.component_factory === "undefined") {
        window.component_factory = {};
    }
    var fn_name = "quizly_" + quizname; // Unique function name
    window.component_factory[fn_name] = function (result) {
        quizly.submitQuizly(result);
    };
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuZXN0b25lX3F1aXpseV9qc19xdWl6bHlfanMuNjYzMDZiZTQwYjQ5MTVjMS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFYTs7QUFFZ0Q7QUFDN0Q7O0FBRUE7O0FBRU87O0FBRVEscUJBQXFCLG1FQUFhO0FBQ2pEO0FBQ0E7QUFDQSw4QkFBOEIsMEJBQTBCLFFBQVEsK0JBQStCO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXlFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFlBQVk7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsMkRBQTJEO0FBQzNELHFDQUFxQyxJQUFJO0FBQ3pDO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvcXVpemx5L2pzL3F1aXpseS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuX19hdXRob3JfXyA9IFJhbHBoIE1vcmVsbGlcbl9fZGF0ZV9fID0gNC85LzIwMjEgICovXG5cbi8qICoqKioqKioqKipcbiAgVGhpcyBzY3JpcHQgcmVuZGVycyB0aGUgcXVpemx5IEhUTUwgY29kZSBhbmQgc2V0cyB1cCBmdW5jdGlvbnNcbiAgdG8gcHJvY2VzcyB0aGUgcXVpeiB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgcXVpemx5ICdDaGVjayBtZSdcbiAgYnV0dG9uLiAgXG5cbiAgSXQgZ2V0cyB0aGUgZGF0YSBpdCBuZWVkcyBmcm9tIHRoZSBRdWl6bHkgbm9kZSBjcmVhdGVkIGJ5IHF1aXpseS5weVxuICBkdXJpbmcgdGhlIHJ1bmVzdG9uZSBidWlsZCBzdGVwLlxuXG4gIE5PVEU6IEFuIGVudHJ5IGZvciBxdWl6bHkuanMgc2NyaXB0IG11c3QgYmUgYWRkZWQgdG8gdGhlIHdlYnBhY2suY29uZmlnLmpzLlxuICAqKioqKioqKioqKioqKiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bmVzdG9uZUJhc2UgZnJvbSBcIi4uLy4uL2NvbW1vbi9qcy9ydW5lc3RvbmViYXNlLmpzXCI7XG4vL2ltcG9ydCBcIi4uL2Nzcy9wb2xsLmNzc1wiO1xuXG52YXIgREVCVUcgPSBmYWxzZTtcblxuZXhwb3J0IHZhciBxdWl6bHlMaXN0ID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1aXpseSBleHRlbmRzIFJ1bmVzdG9uZUJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgc3VwZXIob3B0cyk7XG4gICAgICAgIHZhciBvcmlnID0gb3B0cy5vcmlnOyAvLyBMb29rcyBzb21ldGhpbmcgbGlrZToge1wib3JpZ1wiOntcImpRdWVyeTM1MTA5NTU1ODI5ODU0ODA0OTU2MlwiOntcInF1ZXN0aW9uX2xhYmVsXCI6XCIxLjEuMlwifX19XG4gICAgICAgIGlmIChERUJVRylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgIFwiREVCVUc6IFF1aXpseSBjb25zdHJ1Y3Rvciwgb3B0cz1cIiArIEpTT04uc3RyaW5naWZ5KG9wdHMpXG4gICAgICAgICAgICApO1xuICAgICAgICB0aGlzLm9yaWdFbGVtID0gb3JpZztcbiAgICAgICAgdGhpcy5kaXZpZCA9IG9yaWcuaWQ7XG4gICAgICAgIGlmIChERUJVRylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiREVCVUc6IFF1aXpseSBjb25zdHJ1Y3RvciwgZGl2aWQ9IFwiICsgdGhpcy5kaXZpZCk7XG4gICAgICAgIHRoaXMucmVzdWx0c1ZpZXdlciA9ICQob3JpZykuZGF0YShcInJlc3VsdHNcIik7XG4gICAgICAgIHRoaXMuZ2V0SUZyYW1lQW5kUXVpem5hbWUoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJRdWl6bHkoKTsgLy9nZW5lcmF0ZXMgSFRNTFxuICAgICAgICAvLyBDaGVja3MgbG9jYWxTdG9yYWdlIHRvIHNlZSBpZiB0aGlzIHF1aXpseSBoYXMgYWxyZWFkeSBiZWVuIGNvbXBsZXRlZCBieSB0aGlzIHVzZXIuXG4gICAgICAgIC8vICAgICAgICB0aGlzLmNoZWNrUXVpemx5U3RvcmFnZSgpO1xuICAgICAgICB0aGlzLmNhcHRpb24gPSBcIlF1aXpseVwiO1xuICAgICAgICB0aGlzLmFkZENhcHRpb24oXCJydW5lc3RvbmVcIik7XG4gICAgfVxuXG4gICAgLy8gVGhlIG1haW4gY29udGVudCBvZiB0aGUgcXVpemx5IG5vZGUgaXMgdGhlIGlmcmFtZS5cbiAgICBnZXRJRnJhbWVBbmRRdWl6bmFtZSgpIHtcbiAgICAgICAgdmFyIGh0bWwgPSAkKHRoaXMub3JpZ0VsZW0pLmh0bWwoKTtcbiAgICAgICAgdmFyIHAxID0gaHRtbC5zZWFyY2goXCI8aWZyYW1lXCIpO1xuICAgICAgICB2YXIgcDIgPSBodG1sLnNlYXJjaChcIjwvaWZyYW1lPlwiKTtcbiAgICAgICAgdGhpcy5pZnJhbWUgPSBodG1sLnNsaWNlKHAxLCBwMiArIDgpO1xuICAgICAgICBpZiAoREVCVUcpIGNvbnNvbGUubG9nKFwiREVCVUc6IGdldElGcmFtZSgpIGh0bWwgPSBcIiArIGh0bWwpO1xuICAgICAgICBpZiAoREVCVUcpIGNvbnNvbGUubG9nKFwiREVCVUc6IGdldElGcmFtZSgpIGlmcmFtZSA9IFwiICsgdGhpcy5pZnJhbWUpO1xuICAgICAgICBwMSA9IGh0bWwuc2VhcmNoKFwicXVpem5hbWU9XCIpO1xuICAgICAgICBwMiA9IGh0bWwuc2VhcmNoKFwiaGludHNcIik7XG4gICAgICAgIHRoaXMucXVpem5hbWUgPSBodG1sLnNsaWNlKHAxICsgOSwgcDIgLSA1KTsgLy8gR3JhYiB0aGUgcXVpem5hbWUgZnJvbSBpZnJhbWVcbiAgICAgICAgaWYgKERFQlVHKSBjb25zb2xlLmxvZyhcIkRFQlVHIHF1aXpuYW1lPSBcIiwgdGhpcy5xdWl6bmFtZSk7XG4gICAgfVxuXG4gICAgLy8gR2VuZXJhdGVzIHRoZSBIVE1MIHRoYXQgdGhlIHVzZXIgaW50ZXJhY3RzIHdpdGhcbiAgICByZW5kZXJRdWl6bHkoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChERUJVRykgY29uc29sZS5sb2coXCJERUJVRzogcmVuZGVyUXVpemx5KClcIik7XG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgLy8gICAgICAgIHRoaXMucXVpemx5RnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5pZCA9IHRoaXMuZGl2aWQ7XG4gICAgICAgICQodGhpcy5jb250YWluZXJEaXYpLmFkZENsYXNzKHRoaXMub3JpZ0VsZW0uZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikpO1xuICAgICAgICAkKHRoaXMuY29udGFpbmVyRGl2KS5odG1sKHRoaXMuaWZyYW1lKTtcbiAgICAgICAgJCh0aGlzLm9yaWdFbGVtKS5yZXBsYWNlV2l0aCh0aGlzLmNvbnRhaW5lckRpdik7XG4gICAgICAgIGlmIChERUJVRylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgIFwiREVCVUc6IHJlbmRlclF1aXpseSgpLCB0aGlzID0gXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBDYWxsZWQgZnJvbSB0aGUgZXhlcmNpc2Ugd2hlbiB1c2VyIGNsaWNrcyBzdWJtaXQgYnV0dG9uXG4gICAgLy8gQ2hlY2tzIGZvciB0aGUgcmVzdWx0LCBzZXRzIGxvY2Fsc3RvcmFnZSBhbmQgc3VibWl0cyB0byB0aGUgc2VydmVyXG4gICAgc3VibWl0UXVpemx5KHJlc3VsdCkge1xuICAgICAgICBpZiAoREVCVUcpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICBcIkRFQlVHOiBzdWJtaXRRdWl6bHkgcmVzdWx0ID0gXCIgKyBKU09OLnN0cmluZ2lmeShyZXN1bHQpXG4gICAgICAgICAgICApO1xuICAgICAgICB2YXIgYW5zd2VyID0gcmVzdWx0W1wieG1sXCJdO1xuICAgICAgICB2YXIgY29ycmVjdCA9IHJlc3VsdFtcInJlc3VsdFwiXSA9PSB0cnVlID8gXCJUXCIgOiBcIkZcIjtcbiAgICAgICAgdmFyIGxvZ2Fuc3dlciA9IFwiYW5zd2VyOlwiICsgKGNvcnJlY3QgPT0gXCJUXCIgPyBcImNvcnJlY3RcIiA6IFwibm9cIik7IC8vIGJhY2t3YXJkIGNvbXBhdGlibGVcbiAgICAgICAgdmFyIGV2ZW50SW5mbyA9IHtcbiAgICAgICAgICAgIGV2ZW50OiBcInF1aXpseVwiLFxuICAgICAgICAgICAgYWN0OiBsb2dhbnN3ZXIsXG4gICAgICAgICAgICBhbnN3ZXI6IGFuc3dlcixcbiAgICAgICAgICAgIGNvcnJlY3Q6IGNvcnJlY3QsXG4gICAgICAgICAgICBkaXZfaWQ6IHRoaXMuZGl2aWQsXG4gICAgICAgIH07XG4gICAgICAgIC8vIExvZyB0aGUgcmVzcG9uc2UgdG8gdGhlIGRhdGFiYXNlXG4gICAgICAgIHRoaXMubG9nQm9va0V2ZW50KGV2ZW50SW5mbyk7IC8vIGluIGJvb2tmdW5jcy5qc1xuICAgICAgICBpZiAoREVCVUcpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICBcIkRFQlVHOiBzdWJtaXRxdWl6bHkgbG9nYm9va2V2ZW50ID0gXCIgK1xuICAgICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShldmVudEluZm8pXG4gICAgICAgICAgICApO1xuICAgICAgICAvLyBMb2cgdGhlIGZhY3QgdGhhdCB0aGUgdXNlciBoYXMgYXR0ZW1wdGVkIHRoaXMgcXVpemx5IGV4ZXJjaXNlIHRvIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5kaXZpZCwgXCJ0cnVlXCIpO1xuICAgIH1cbn1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj09IEZpbmQgdGhlIGN1c3RvbSBIVE1MIHRhZ3MgYW5kID09XG49PSAgIGV4ZWN1dGUgb3VyIGNvZGUgb24gdGhlbSAgICA9PVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiQoZG9jdW1lbnQpLm9uKFwicnVuZXN0b25lOmxvZ2luLWNvbXBsZXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiW2RhdGEtY29tcG9uZW50PXF1aXpseVwiKS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHF1aXpseSA9IG5ldyBRdWl6bHkoeyBvcmlnOiB0aGlzIH0pO1xuICAgICAgICAgICAgcXVpemx5TGlzdFt0aGlzLmlkXSA9IHF1aXpseTtcbiAgICAgICAgICAgIGlmIChERUJVRylcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRFQlVHOiBRdWl6bHkgcmVuZGVyaW5nLCB0aGlzLmlkID0gXCIgKyB0aGlzLmlkKTtcbiAgICAgICAgICAgIHNldHVwQ2FsbGJhY2socXVpemx5LCBxdWl6bHkucXVpem5hbWUpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvciByZW5kZXJpbmcgUXVpemx5IEV4ZXJjaXNlICR7dGhpcy5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgRGV0YWlsczogJHtlcnJ9YCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIuc3RhY2spO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcblxuLy8gU2V0cyB1cCBhIHVuaXF1ZSBjYWxsYmFjayBmdW5jdGlvbiBvbiB0aGUgd2luZG93IGNvbnRhaW5pbmcgdGhlIHF1aXpseSBjb21wb25lbnRcbi8vIFRoZSBxdWl6bHkgcGFyYW0gaXMgYSByZWZlcmVuY2UgdG8gdGhpcyBxdWl6bHkgb2JqZWN0IHNvIHRoYXQgaXQgY2FuIGJlIHVzZSBkdXJpbmcgY2FsbGJhY2suXG4vLyBUaGUgcXVpem5hbWUgcGFyYW0gaXMgdXNlZCB0byBjb25zdHJ1Y3QgYSB1bmlxdWUgY2FsbGJhY2sgZnVuY3Rpb24gbmFtZVxuZnVuY3Rpb24gc2V0dXBDYWxsYmFjayhxdWl6bHksIHF1aXpuYW1lKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnkgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgd2luZG93LmNvbXBvbmVudF9mYWN0b3J5ID0ge307XG4gICAgfVxuICAgIHZhciBmbl9uYW1lID0gXCJxdWl6bHlfXCIgKyBxdWl6bmFtZTsgLy8gVW5pcXVlIGZ1bmN0aW9uIG5hbWVcbiAgICB3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnlbZm5fbmFtZV0gPSBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIHF1aXpseS5zdWJtaXRRdWl6bHkocmVzdWx0KTtcbiAgICB9O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9