
if (allTraceData === undefined) {
    var allTraceData = {};
}
(function() { // IIFE to avoid variable collision
    let codelensID = "rs-countss";  //fallback
    let partnerCodelens = document.currentScript.parentElement.querySelector(".pytutorVisualizer");
    if (partnerCodelens) {
        codelensID = partnerCodelens.id;
    }
    allTraceData[codelensID] = {"code": "def countSS(word):\n  counter == count(word, 'ss'):\n  return counter\n", "trace": [{"event": "uncaught_exception", "line": 2, "offset": 32, "exception_msg": "SyntaxError: invalid syntax (<string>, line 2)"}], "startingInstruction": 0};
})();