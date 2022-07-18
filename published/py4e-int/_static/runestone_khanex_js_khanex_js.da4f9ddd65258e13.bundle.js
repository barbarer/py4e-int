"use strict";
(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_khanex_js_khanex_js"],{

/***/ 13435:
/*!***************************************!*\
  !*** ./runestone/khanex/js/khanex.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Khanex),
/* harmony export */   "khanexList": () => (/* binding */ khanexList)
/* harmony export */ });
/* harmony import */ var _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/runestonebase.js */ 2568);
/*
__author__ = Ralph Morelli
__date__ = 5/4/2021  
*/

/* **********
  This script renders the khanex HTML code and sets up functions
  to process the exercise when the user clicks on the khanex 'Check Answer'
  button.  

  It gets the data it needs from the Khanex node created by khanex.py
  during the runestone build step.

  NOTE: An entry for khanex.js script must be added to the webpack.config.js.
  ************** */





var DEBUG = false;

var khanexList = {};

class Khanex extends _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(opts) {
        super(opts);
        var orig = opts.orig; // Looks something like: {"orig":{"jQuery351095558298548049562":{"question_label":"1.1.2"}}}
        if (DEBUG)
            console.log(
                "DEBUG: Khanex constructor, opts=" + JSON.stringify(opts)
            );
        this.origElem = orig;
        this.divid = orig.id;
        this.resultsViewer = $(orig).data("results");
        this.getIFrameAndQuizname();
        this.renderKhanex(); //generates HTML
        // Checks localStorage to see if this khanex has already been completed by this user.
        //        this.checkKhanexStorage();
        this.caption = "Khanex";
        this.addCaption("runestone");
    }

    // The main content of the khanex node is the iframe.
    getIFrameAndQuizname() {
        var html = $(this.origElem).html();
        var p1 = html.search("<iframe");
        var p2 = html.search("</iframe>");
        this.iframe = html.slice(p1, p2 + 8);
        if (DEBUG) console.log("DEBUG: getQuestionText() html = " + html);
        if (DEBUG)
            console.log("DEBUG: getQuestionText() iframe = " + this.iframe);
        p1 = html.search("khanex/qs/");
        p2 = html.search(".html");
        this.quizname = html.slice(p1 + 10, p2); // Grab the quizname from iframe
        if (DEBUG) console.log("DEBUG quizname= ", this.quizname);
    }

    //generates the HTML that the user interacts with
    renderKhanex() {
        var _this = this;
        if (DEBUG) console.log("--------------------DEBUG: renderKhanex()");
        this.containerDiv = document.createElement("div");
        this.containerDiv.id = this.divid;
        $(this.containerDiv).html(this.iframe);
        $(this.origElem).replaceWith(this.containerDiv);
        if (DEBUG)
            console.log(
                "DEBUG: renderKhanex(), this = " + JSON.stringify(this)
            );
    }

    // This is what a khanex logging event looks like for a correct answer
    //  logging event {"event":"khanex","act":"answer:correct","answer":{"complete":1,"count_hints":0,"time_taken":87,"attempt_number":1,"attempt_content":"\"100011\"","sha1":"decimal-to-binary","seed":194953274,"problem_type":"0","review_mode":0},"correct":"T","div_id":"ex2","course":"mobilecsp","clientLoginStatus":false,"timezoneoffset":4}

    // Called when user clicks submit button
    // Checks for the result, sets localstorage and submits to the server
    submitKhanex(result) {
        if (DEBUG)
            console.log(
                "DEBUG: submitKhanex result = " + JSON.stringify(result)
            );
        var answer = result["complete"];
        if (DEBUG) console.log("DEBUG: submitKhanex answer = " + answer);
        var correct = result["complete"] == 1 ? "T" : "F";
        var loganswer = "answer:" + (correct == "T" ? "correct" : "no"); // backward compatible
        var eventInfo = {
            event: "khanex",
            act: loganswer,
            answer: result,
            correct: correct,
            div_id: this.divid,
        };
        // log the response to the database
        this.logBookEvent(eventInfo); // in bookfuncs.js
        if (DEBUG)
            console.log(
                "DEBUG: submitkhanex logbookevent = " +
                    JSON.stringify(eventInfo)
            );
        // log the fact that the user has attempted this khanex exercise to local storage
        localStorage.setItem(this.divid, "true");
    }
}

/*=================================
== Find the custom HTML tags and ==
==   execute our code on them    ==
=================================*/
$(document).on("runestone:login-complete", function () {
    if (DEBUG) console.log("DEBUG: Khanex bind");
    $("[data-component=khanex").each(function (index) {
        if (DEBUG) console.log("DEBUG: Khanex rendering");
        try {
            var khanex = new Khanex({ orig: this });
            khanexList[this.id] = khanex;
            setupCallback(khanex, khanex.quizname);
        } catch (err) {
            console.log(`Error rendering Khanex Exercise ${this.id}
                          Details: ${err}`);
            console.log(err.stack);
        }
    });
});

// Sets up a call back function on the window containing the khanex component
// We need to pass a reference to this khanex object so that it can be use during callback.
function setupCallback(khanex, quizname) {
    if (typeof window.component_factory === "undefined") {
        window.component_factory = {};
    }
    var fn_name = "khanex_" + quizname; // Unique function name
    window.component_factory[fn_name] = function (result) {
        khanex.submitKhanex(result);
    };
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuZXN0b25lX2toYW5leF9qc19raGFuZXhfanMuZGE0ZjlkZGQ2NTI1OGUxMy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVhOztBQUVnRDs7QUFFN0Q7O0FBRU87O0FBRVEscUJBQXFCLG1FQUFhO0FBQ2pEO0FBQ0E7QUFDQSw4QkFBOEIsMEJBQTBCLFFBQVEsK0JBQStCO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsa0RBQWtELDhLQUE4Szs7QUFFdlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFlBQVk7QUFDbEQ7QUFDQTtBQUNBLFVBQVU7QUFDViwyREFBMkQ7QUFDM0QscUNBQXFDLElBQUk7QUFDekM7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUva2hhbmV4L2pzL2toYW5leC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuX19hdXRob3JfXyA9IFJhbHBoIE1vcmVsbGlcbl9fZGF0ZV9fID0gNS80LzIwMjEgIFxuKi9cblxuLyogKioqKioqKioqKlxuICBUaGlzIHNjcmlwdCByZW5kZXJzIHRoZSBraGFuZXggSFRNTCBjb2RlIGFuZCBzZXRzIHVwIGZ1bmN0aW9uc1xuICB0byBwcm9jZXNzIHRoZSBleGVyY2lzZSB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUga2hhbmV4ICdDaGVjayBBbnN3ZXInXG4gIGJ1dHRvbi4gIFxuXG4gIEl0IGdldHMgdGhlIGRhdGEgaXQgbmVlZHMgZnJvbSB0aGUgS2hhbmV4IG5vZGUgY3JlYXRlZCBieSBraGFuZXgucHlcbiAgZHVyaW5nIHRoZSBydW5lc3RvbmUgYnVpbGQgc3RlcC5cblxuICBOT1RFOiBBbiBlbnRyeSBmb3Iga2hhbmV4LmpzIHNjcmlwdCBtdXN0IGJlIGFkZGVkIHRvIHRoZSB3ZWJwYWNrLmNvbmZpZy5qcy5cbiAgKioqKioqKioqKioqKiogKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdW5lc3RvbmVCYXNlIGZyb20gXCIuLi8uLi9jb21tb24vanMvcnVuZXN0b25lYmFzZS5qc1wiO1xuXG52YXIgREVCVUcgPSBmYWxzZTtcblxuZXhwb3J0IHZhciBraGFuZXhMaXN0ID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtoYW5leCBleHRlbmRzIFJ1bmVzdG9uZUJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgc3VwZXIob3B0cyk7XG4gICAgICAgIHZhciBvcmlnID0gb3B0cy5vcmlnOyAvLyBMb29rcyBzb21ldGhpbmcgbGlrZToge1wib3JpZ1wiOntcImpRdWVyeTM1MTA5NTU1ODI5ODU0ODA0OTU2MlwiOntcInF1ZXN0aW9uX2xhYmVsXCI6XCIxLjEuMlwifX19XG4gICAgICAgIGlmIChERUJVRylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgIFwiREVCVUc6IEtoYW5leCBjb25zdHJ1Y3Rvciwgb3B0cz1cIiArIEpTT04uc3RyaW5naWZ5KG9wdHMpXG4gICAgICAgICAgICApO1xuICAgICAgICB0aGlzLm9yaWdFbGVtID0gb3JpZztcbiAgICAgICAgdGhpcy5kaXZpZCA9IG9yaWcuaWQ7XG4gICAgICAgIHRoaXMucmVzdWx0c1ZpZXdlciA9ICQob3JpZykuZGF0YShcInJlc3VsdHNcIik7XG4gICAgICAgIHRoaXMuZ2V0SUZyYW1lQW5kUXVpem5hbWUoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJLaGFuZXgoKTsgLy9nZW5lcmF0ZXMgSFRNTFxuICAgICAgICAvLyBDaGVja3MgbG9jYWxTdG9yYWdlIHRvIHNlZSBpZiB0aGlzIGtoYW5leCBoYXMgYWxyZWFkeSBiZWVuIGNvbXBsZXRlZCBieSB0aGlzIHVzZXIuXG4gICAgICAgIC8vICAgICAgICB0aGlzLmNoZWNrS2hhbmV4U3RvcmFnZSgpO1xuICAgICAgICB0aGlzLmNhcHRpb24gPSBcIktoYW5leFwiO1xuICAgICAgICB0aGlzLmFkZENhcHRpb24oXCJydW5lc3RvbmVcIik7XG4gICAgfVxuXG4gICAgLy8gVGhlIG1haW4gY29udGVudCBvZiB0aGUga2hhbmV4IG5vZGUgaXMgdGhlIGlmcmFtZS5cbiAgICBnZXRJRnJhbWVBbmRRdWl6bmFtZSgpIHtcbiAgICAgICAgdmFyIGh0bWwgPSAkKHRoaXMub3JpZ0VsZW0pLmh0bWwoKTtcbiAgICAgICAgdmFyIHAxID0gaHRtbC5zZWFyY2goXCI8aWZyYW1lXCIpO1xuICAgICAgICB2YXIgcDIgPSBodG1sLnNlYXJjaChcIjwvaWZyYW1lPlwiKTtcbiAgICAgICAgdGhpcy5pZnJhbWUgPSBodG1sLnNsaWNlKHAxLCBwMiArIDgpO1xuICAgICAgICBpZiAoREVCVUcpIGNvbnNvbGUubG9nKFwiREVCVUc6IGdldFF1ZXN0aW9uVGV4dCgpIGh0bWwgPSBcIiArIGh0bWwpO1xuICAgICAgICBpZiAoREVCVUcpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRFQlVHOiBnZXRRdWVzdGlvblRleHQoKSBpZnJhbWUgPSBcIiArIHRoaXMuaWZyYW1lKTtcbiAgICAgICAgcDEgPSBodG1sLnNlYXJjaChcImtoYW5leC9xcy9cIik7XG4gICAgICAgIHAyID0gaHRtbC5zZWFyY2goXCIuaHRtbFwiKTtcbiAgICAgICAgdGhpcy5xdWl6bmFtZSA9IGh0bWwuc2xpY2UocDEgKyAxMCwgcDIpOyAvLyBHcmFiIHRoZSBxdWl6bmFtZSBmcm9tIGlmcmFtZVxuICAgICAgICBpZiAoREVCVUcpIGNvbnNvbGUubG9nKFwiREVCVUcgcXVpem5hbWU9IFwiLCB0aGlzLnF1aXpuYW1lKTtcbiAgICB9XG5cbiAgICAvL2dlbmVyYXRlcyB0aGUgSFRNTCB0aGF0IHRoZSB1c2VyIGludGVyYWN0cyB3aXRoXG4gICAgcmVuZGVyS2hhbmV4KCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoREVCVUcpIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS1ERUJVRzogcmVuZGVyS2hhbmV4KClcIik7XG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuaWQgPSB0aGlzLmRpdmlkO1xuICAgICAgICAkKHRoaXMuY29udGFpbmVyRGl2KS5odG1sKHRoaXMuaWZyYW1lKTtcbiAgICAgICAgJCh0aGlzLm9yaWdFbGVtKS5yZXBsYWNlV2l0aCh0aGlzLmNvbnRhaW5lckRpdik7XG4gICAgICAgIGlmIChERUJVRylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgIFwiREVCVUc6IHJlbmRlcktoYW5leCgpLCB0aGlzID0gXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBUaGlzIGlzIHdoYXQgYSBraGFuZXggbG9nZ2luZyBldmVudCBsb29rcyBsaWtlIGZvciBhIGNvcnJlY3QgYW5zd2VyXG4gICAgLy8gIGxvZ2dpbmcgZXZlbnQge1wiZXZlbnRcIjpcImtoYW5leFwiLFwiYWN0XCI6XCJhbnN3ZXI6Y29ycmVjdFwiLFwiYW5zd2VyXCI6e1wiY29tcGxldGVcIjoxLFwiY291bnRfaGludHNcIjowLFwidGltZV90YWtlblwiOjg3LFwiYXR0ZW1wdF9udW1iZXJcIjoxLFwiYXR0ZW1wdF9jb250ZW50XCI6XCJcXFwiMTAwMDExXFxcIlwiLFwic2hhMVwiOlwiZGVjaW1hbC10by1iaW5hcnlcIixcInNlZWRcIjoxOTQ5NTMyNzQsXCJwcm9ibGVtX3R5cGVcIjpcIjBcIixcInJldmlld19tb2RlXCI6MH0sXCJjb3JyZWN0XCI6XCJUXCIsXCJkaXZfaWRcIjpcImV4MlwiLFwiY291cnNlXCI6XCJtb2JpbGVjc3BcIixcImNsaWVudExvZ2luU3RhdHVzXCI6ZmFsc2UsXCJ0aW1lem9uZW9mZnNldFwiOjR9XG5cbiAgICAvLyBDYWxsZWQgd2hlbiB1c2VyIGNsaWNrcyBzdWJtaXQgYnV0dG9uXG4gICAgLy8gQ2hlY2tzIGZvciB0aGUgcmVzdWx0LCBzZXRzIGxvY2Fsc3RvcmFnZSBhbmQgc3VibWl0cyB0byB0aGUgc2VydmVyXG4gICAgc3VibWl0S2hhbmV4KHJlc3VsdCkge1xuICAgICAgICBpZiAoREVCVUcpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICBcIkRFQlVHOiBzdWJtaXRLaGFuZXggcmVzdWx0ID0gXCIgKyBKU09OLnN0cmluZ2lmeShyZXN1bHQpXG4gICAgICAgICAgICApO1xuICAgICAgICB2YXIgYW5zd2VyID0gcmVzdWx0W1wiY29tcGxldGVcIl07XG4gICAgICAgIGlmIChERUJVRykgY29uc29sZS5sb2coXCJERUJVRzogc3VibWl0S2hhbmV4IGFuc3dlciA9IFwiICsgYW5zd2VyKTtcbiAgICAgICAgdmFyIGNvcnJlY3QgPSByZXN1bHRbXCJjb21wbGV0ZVwiXSA9PSAxID8gXCJUXCIgOiBcIkZcIjtcbiAgICAgICAgdmFyIGxvZ2Fuc3dlciA9IFwiYW5zd2VyOlwiICsgKGNvcnJlY3QgPT0gXCJUXCIgPyBcImNvcnJlY3RcIiA6IFwibm9cIik7IC8vIGJhY2t3YXJkIGNvbXBhdGlibGVcbiAgICAgICAgdmFyIGV2ZW50SW5mbyA9IHtcbiAgICAgICAgICAgIGV2ZW50OiBcImtoYW5leFwiLFxuICAgICAgICAgICAgYWN0OiBsb2dhbnN3ZXIsXG4gICAgICAgICAgICBhbnN3ZXI6IHJlc3VsdCxcbiAgICAgICAgICAgIGNvcnJlY3Q6IGNvcnJlY3QsXG4gICAgICAgICAgICBkaXZfaWQ6IHRoaXMuZGl2aWQsXG4gICAgICAgIH07XG4gICAgICAgIC8vIGxvZyB0aGUgcmVzcG9uc2UgdG8gdGhlIGRhdGFiYXNlXG4gICAgICAgIHRoaXMubG9nQm9va0V2ZW50KGV2ZW50SW5mbyk7IC8vIGluIGJvb2tmdW5jcy5qc1xuICAgICAgICBpZiAoREVCVUcpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICBcIkRFQlVHOiBzdWJtaXRraGFuZXggbG9nYm9va2V2ZW50ID0gXCIgK1xuICAgICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShldmVudEluZm8pXG4gICAgICAgICAgICApO1xuICAgICAgICAvLyBsb2cgdGhlIGZhY3QgdGhhdCB0aGUgdXNlciBoYXMgYXR0ZW1wdGVkIHRoaXMga2hhbmV4IGV4ZXJjaXNlIHRvIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5kaXZpZCwgXCJ0cnVlXCIpO1xuICAgIH1cbn1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj09IEZpbmQgdGhlIGN1c3RvbSBIVE1MIHRhZ3MgYW5kID09XG49PSAgIGV4ZWN1dGUgb3VyIGNvZGUgb24gdGhlbSAgICA9PVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiQoZG9jdW1lbnQpLm9uKFwicnVuZXN0b25lOmxvZ2luLWNvbXBsZXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoREVCVUcpIGNvbnNvbGUubG9nKFwiREVCVUc6IEtoYW5leCBiaW5kXCIpO1xuICAgICQoXCJbZGF0YS1jb21wb25lbnQ9a2hhbmV4XCIpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIGlmIChERUJVRykgY29uc29sZS5sb2coXCJERUJVRzogS2hhbmV4IHJlbmRlcmluZ1wiKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBraGFuZXggPSBuZXcgS2hhbmV4KHsgb3JpZzogdGhpcyB9KTtcbiAgICAgICAgICAgIGtoYW5leExpc3RbdGhpcy5pZF0gPSBraGFuZXg7XG4gICAgICAgICAgICBzZXR1cENhbGxiYWNrKGtoYW5leCwga2hhbmV4LnF1aXpuYW1lKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3IgcmVuZGVyaW5nIEtoYW5leCBFeGVyY2lzZSAke3RoaXMuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIERldGFpbHM6ICR7ZXJyfWApO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLnN0YWNrKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5cbi8vIFNldHMgdXAgYSBjYWxsIGJhY2sgZnVuY3Rpb24gb24gdGhlIHdpbmRvdyBjb250YWluaW5nIHRoZSBraGFuZXggY29tcG9uZW50XG4vLyBXZSBuZWVkIHRvIHBhc3MgYSByZWZlcmVuY2UgdG8gdGhpcyBraGFuZXggb2JqZWN0IHNvIHRoYXQgaXQgY2FuIGJlIHVzZSBkdXJpbmcgY2FsbGJhY2suXG5mdW5jdGlvbiBzZXR1cENhbGxiYWNrKGtoYW5leCwgcXVpem5hbWUpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5jb21wb25lbnRfZmFjdG9yeSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICB3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnkgPSB7fTtcbiAgICB9XG4gICAgdmFyIGZuX25hbWUgPSBcImtoYW5leF9cIiArIHF1aXpuYW1lOyAvLyBVbmlxdWUgZnVuY3Rpb24gbmFtZVxuICAgIHdpbmRvdy5jb21wb25lbnRfZmFjdG9yeVtmbl9uYW1lXSA9IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAga2hhbmV4LnN1Ym1pdEtoYW5leChyZXN1bHQpO1xuICAgIH07XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=