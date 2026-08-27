
if (allTraceData === undefined) {
    var allTraceData = {};
}
(function() { // IIFE to avoid variable collision
    let codelensID = "rs-cndtnlNegative";  //fallback
    let partnerCodelens = document.currentScript.parentElement.querySelector(".pytutorVisualizer");
    if (partnerCodelens) {
        codelensID = partnerCodelens.id;
    }
    allTraceData[codelensID] = {"code": "x = -3\nif x < 0:\n    pass # need to handle negative values!\nprint('All done.')\n", "trace": [{"line": 1, "event": "step_line", "func_name": "<module>", "globals": {}, "ordered_globals": [], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 2, "event": "step_line", "func_name": "<module>", "globals": {"x": -3}, "ordered_globals": ["x"], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"x": -3}, "ordered_globals": ["x"], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 4, "event": "return", "func_name": "<module>", "globals": {"x": -3}, "ordered_globals": ["x"], "stack_to_render": [], "heap": {}, "stdout": "All done.\n"}], "startingInstruction": 0};
})();