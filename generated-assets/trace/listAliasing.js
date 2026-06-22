
if (allTraceData === undefined) {
    var allTraceData = {};
}
(function() { // IIFE to avoid variable collision
    let codelensID = "rs-listAliasing";  //fallback
    let partnerCodelens = document.currentScript.parentElement.querySelector(".pytutorVisualizer");
    if (partnerCodelens) {
        codelensID = partnerCodelens.id;
    }
    allTraceData[codelensID] = {"code": "a = [1, 2, 3]\nb = a\nprint(b is a)\n", "trace": [{"line": 1, "event": "step_line", "func_name": "<module>", "globals": {}, "ordered_globals": [], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 2, "event": "step_line", "func_name": "<module>", "globals": {"a": ["REF", 1]}, "ordered_globals": ["a"], "stack_to_render": [], "heap": {"1": ["LIST", 1, 2, 3]}, "stdout": ""}, {"line": 3, "event": "step_line", "func_name": "<module>", "globals": {"a": ["REF", 1], "b": ["REF", 1]}, "ordered_globals": ["a", "b"], "stack_to_render": [], "heap": {"1": ["LIST", 1, 2, 3]}, "stdout": ""}, {"line": 3, "event": "return", "func_name": "<module>", "globals": {"a": ["REF", 1], "b": ["REF", 1]}, "ordered_globals": ["a", "b"], "stack_to_render": [], "heap": {"1": ["LIST", 1, 2, 3]}, "stdout": "True\n"}], "startingInstruction": 0};
})();