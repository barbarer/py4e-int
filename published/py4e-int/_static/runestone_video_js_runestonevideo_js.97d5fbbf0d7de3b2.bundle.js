"use strict";
(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_video_js_runestonevideo_js"],{

/***/ 31786:
/*!***************************************!*\
  !*** ./runestone/video/css/video.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 48657:
/*!**********************************************!*\
  !*** ./runestone/video/js/runestonevideo.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js_runestonebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/runestonebase */ 2568);
/* harmony import */ var _css_video_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/video.css */ 31786);





var vidList = [];
class RunestoneVideo extends _common_js_runestonebase__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(opts) {
        super(opts);
        this.divid = opts.orig.id;
        this.container = $(`#${this.divid}`);
        this.caption = "YouTube";
        if (document.getElementById("youtubescript") == null) {
            let script = document.createElement("script");
            script.id = "youtubescript";
            script.src = "https://www.youtube.com/player_api";
            document.body.appendChild(script);
        }
        this.containerDiv = this.container[0].parentElement;
        this.addCaption("runestone");
        this.indicate_component_ready();
    }
}

window.onPlayerStateChange = function (event) {
    let rb = new _common_js_runestonebase__WEBPACK_IMPORTED_MODULE_0__["default"]();
    let videoTime = event.target.getCurrentTime();
    let data = {
        event: "video",
        div_id: event.target.getIframe().id,
    };
    if (event.data == YT.PlayerState.PLAYING) {
        console.log("playing " + event.target.getIframe().id);
        data.act = "play:" + videoTime;
    } else if (event.data == YT.PlayerState.ENDED) {
        console.log("ended " + event.target.getIframe().id);
        data.act = "complete";
    } else if (event.data == YT.PlayerState.PAUSED) {
        console.log("paused at " + videoTime);
        data.act = "pause:" + videoTime;
    } else {
        console.log(`YT Player State: ${YT.PlayerState}`);
        data.act = "ready";
    }
    rb.logBookEvent(data);
};

//Callback function to load youtube videos once IFrame Player loads
window.onYouTubeIframeAPIReady = function () {
    let videolist = $(".youtube-video");
    videolist.each(function (i, video) {
        let playerVars = {};
        playerVars["start"] = $(video).data("video-start");
        if ($(video).data("video-end") != -1)
            playerVars["end"] = $(video).data("video-end");
        let player = new YT.Player($(video).data("video-divid"), {
            height: $(video).data("video-height"),
            width: $(video).data("video-width"),
            videoId: $(video).data("video-videoid"),
            align: "center",
            playerVars: playerVars,
            events: {
                onStateChange: window.onPlayerStateChange,
            },
        });
    });
};

//Need to make sure the YouTube IFrame Player API is not loaded until after
// all YouTube videos are in the DOM. Add a script tag with it after document is loaded
$(function () {
    let script = document.createElement("script");
    script.src = "https://www.youtube.com/player_api";
    document.body.appendChild(script);
});

$(document).on("runestone:login-complete", function () {
    $("[data-component=youtube]").each(function (index) {
        // MC
        var opts = {
            orig: this,
            useRunestoneServices: eBookConfig.useRunestoneServices,
        };
        vidList[this.id] = new RunestoneVideo(opts);
    });
});

if (typeof window.component_factory === "undefined") {
    window.component_factory = {};
}
window.component_factory.youtube = function (opts) {
    return new RunestoneVideo(opts);
};

window.component_factory.vimeo = function (opts) {
    return new RunestoneVideo(opts);
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuZXN0b25lX3ZpZGVvX2pzX3J1bmVzdG9uZXZpZGVvX2pzLjk3ZDVmYmJmMGQ3ZGUzYjIuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUNBYTs7QUFFNkM7QUFDaEM7O0FBRTFCO0FBQ0EsNkJBQTZCLGdFQUFhO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixXQUFXO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixnRUFBYTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTix3Q0FBd0MsZUFBZTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3ZpZGVvL2Nzcy92aWRlby5jc3M/Y2MxNiIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3ZpZGVvL2pzL3J1bmVzdG9uZXZpZGVvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVuZXN0b25lQmFzZSBmcm9tIFwiLi4vLi4vY29tbW9uL2pzL3J1bmVzdG9uZWJhc2VcIjtcbmltcG9ydCBcIi4uL2Nzcy92aWRlby5jc3NcIjtcblxudmFyIHZpZExpc3QgPSBbXTtcbmNsYXNzIFJ1bmVzdG9uZVZpZGVvIGV4dGVuZHMgUnVuZXN0b25lQmFzZSB7XG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBzdXBlcihvcHRzKTtcbiAgICAgICAgdGhpcy5kaXZpZCA9IG9wdHMub3JpZy5pZDtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSAkKGAjJHt0aGlzLmRpdmlkfWApO1xuICAgICAgICB0aGlzLmNhcHRpb24gPSBcIllvdVR1YmVcIjtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieW91dHViZXNjcmlwdFwiKSA9PSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5pZCA9IFwieW91dHViZXNjcmlwdFwiO1xuICAgICAgICAgICAgc2NyaXB0LnNyYyA9IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vcGxheWVyX2FwaVwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2ID0gdGhpcy5jb250YWluZXJbMF0ucGFyZW50RWxlbWVudDtcbiAgICAgICAgdGhpcy5hZGRDYXB0aW9uKFwicnVuZXN0b25lXCIpO1xuICAgICAgICB0aGlzLmluZGljYXRlX2NvbXBvbmVudF9yZWFkeSgpO1xuICAgIH1cbn1cblxud2luZG93Lm9uUGxheWVyU3RhdGVDaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBsZXQgcmIgPSBuZXcgUnVuZXN0b25lQmFzZSgpO1xuICAgIGxldCB2aWRlb1RpbWUgPSBldmVudC50YXJnZXQuZ2V0Q3VycmVudFRpbWUoKTtcbiAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgZXZlbnQ6IFwidmlkZW9cIixcbiAgICAgICAgZGl2X2lkOiBldmVudC50YXJnZXQuZ2V0SWZyYW1lKCkuaWQsXG4gICAgfTtcbiAgICBpZiAoZXZlbnQuZGF0YSA9PSBZVC5QbGF5ZXJTdGF0ZS5QTEFZSU5HKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicGxheWluZyBcIiArIGV2ZW50LnRhcmdldC5nZXRJZnJhbWUoKS5pZCk7XG4gICAgICAgIGRhdGEuYWN0ID0gXCJwbGF5OlwiICsgdmlkZW9UaW1lO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQuZGF0YSA9PSBZVC5QbGF5ZXJTdGF0ZS5FTkRFRCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVuZGVkIFwiICsgZXZlbnQudGFyZ2V0LmdldElmcmFtZSgpLmlkKTtcbiAgICAgICAgZGF0YS5hY3QgPSBcImNvbXBsZXRlXCI7XG4gICAgfSBlbHNlIGlmIChldmVudC5kYXRhID09IFlULlBsYXllclN0YXRlLlBBVVNFRCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInBhdXNlZCBhdCBcIiArIHZpZGVvVGltZSk7XG4gICAgICAgIGRhdGEuYWN0ID0gXCJwYXVzZTpcIiArIHZpZGVvVGltZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhgWVQgUGxheWVyIFN0YXRlOiAke1lULlBsYXllclN0YXRlfWApO1xuICAgICAgICBkYXRhLmFjdCA9IFwicmVhZHlcIjtcbiAgICB9XG4gICAgcmIubG9nQm9va0V2ZW50KGRhdGEpO1xufTtcblxuLy9DYWxsYmFjayBmdW5jdGlvbiB0byBsb2FkIHlvdXR1YmUgdmlkZW9zIG9uY2UgSUZyYW1lIFBsYXllciBsb2Fkc1xud2luZG93Lm9uWW91VHViZUlmcmFtZUFQSVJlYWR5ID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCB2aWRlb2xpc3QgPSAkKFwiLnlvdXR1YmUtdmlkZW9cIik7XG4gICAgdmlkZW9saXN0LmVhY2goZnVuY3Rpb24gKGksIHZpZGVvKSB7XG4gICAgICAgIGxldCBwbGF5ZXJWYXJzID0ge307XG4gICAgICAgIHBsYXllclZhcnNbXCJzdGFydFwiXSA9ICQodmlkZW8pLmRhdGEoXCJ2aWRlby1zdGFydFwiKTtcbiAgICAgICAgaWYgKCQodmlkZW8pLmRhdGEoXCJ2aWRlby1lbmRcIikgIT0gLTEpXG4gICAgICAgICAgICBwbGF5ZXJWYXJzW1wiZW5kXCJdID0gJCh2aWRlbykuZGF0YShcInZpZGVvLWVuZFwiKTtcbiAgICAgICAgbGV0IHBsYXllciA9IG5ldyBZVC5QbGF5ZXIoJCh2aWRlbykuZGF0YShcInZpZGVvLWRpdmlkXCIpLCB7XG4gICAgICAgICAgICBoZWlnaHQ6ICQodmlkZW8pLmRhdGEoXCJ2aWRlby1oZWlnaHRcIiksXG4gICAgICAgICAgICB3aWR0aDogJCh2aWRlbykuZGF0YShcInZpZGVvLXdpZHRoXCIpLFxuICAgICAgICAgICAgdmlkZW9JZDogJCh2aWRlbykuZGF0YShcInZpZGVvLXZpZGVvaWRcIiksXG4gICAgICAgICAgICBhbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIHBsYXllclZhcnM6IHBsYXllclZhcnMsXG4gICAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgICAgICBvblN0YXRlQ2hhbmdlOiB3aW5kb3cub25QbGF5ZXJTdGF0ZUNoYW5nZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuLy9OZWVkIHRvIG1ha2Ugc3VyZSB0aGUgWW91VHViZSBJRnJhbWUgUGxheWVyIEFQSSBpcyBub3QgbG9hZGVkIHVudGlsIGFmdGVyXG4vLyBhbGwgWW91VHViZSB2aWRlb3MgYXJlIGluIHRoZSBET00uIEFkZCBhIHNjcmlwdCB0YWcgd2l0aCBpdCBhZnRlciBkb2N1bWVudCBpcyBsb2FkZWRcbiQoZnVuY3Rpb24gKCkge1xuICAgIGxldCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgIHNjcmlwdC5zcmMgPSBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3BsYXllcl9hcGlcIjtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG59KTtcblxuJChkb2N1bWVudCkub24oXCJydW5lc3RvbmU6bG9naW4tY29tcGxldGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICQoXCJbZGF0YS1jb21wb25lbnQ9eW91dHViZV1cIikuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgLy8gTUNcbiAgICAgICAgdmFyIG9wdHMgPSB7XG4gICAgICAgICAgICBvcmlnOiB0aGlzLFxuICAgICAgICAgICAgdXNlUnVuZXN0b25lU2VydmljZXM6IGVCb29rQ29uZmlnLnVzZVJ1bmVzdG9uZVNlcnZpY2VzLFxuICAgICAgICB9O1xuICAgICAgICB2aWRMaXN0W3RoaXMuaWRdID0gbmV3IFJ1bmVzdG9uZVZpZGVvKG9wdHMpO1xuICAgIH0pO1xufSk7XG5cbmlmICh0eXBlb2Ygd2luZG93LmNvbXBvbmVudF9mYWN0b3J5ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgd2luZG93LmNvbXBvbmVudF9mYWN0b3J5ID0ge307XG59XG53aW5kb3cuY29tcG9uZW50X2ZhY3RvcnkueW91dHViZSA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gICAgcmV0dXJuIG5ldyBSdW5lc3RvbmVWaWRlbyhvcHRzKTtcbn07XG5cbndpbmRvdy5jb21wb25lbnRfZmFjdG9yeS52aW1lbyA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gICAgcmV0dXJuIG5ldyBSdW5lc3RvbmVWaWRlbyhvcHRzKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=