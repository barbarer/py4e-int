
if (allTraceData === undefined) {
    var allTraceData = {};
}
(function() { // IIFE to avoid variable collision
    let codelensID = "rs-cndtnlPositive";  //fallback
    let partnerCodelens = document.currentScript.parentElement.querySelector(".pytutorVisualizer");
    if (partnerCodelens) {
        codelensID = partnerCodelens.id;
    }
    allTraceData[codelensID] = {"code": "x = 2\nif x > 0 :\n    print('x is positive')\nprint('All done.')\n", "trace": [{"line": 1, "event": "step_line", "func_name": "<module>", "globals": {}, "ordered_globals": [], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 2, "event": "step_line", "func_name": "<module>", "globals": {"x": 2}, "ordered_globals": ["x"], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 3, "event": "step_line", "func_name": "<module>", "globals": {"x": 2}, "ordered_globals": ["x"], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"x": 2}, "ordered_globals": ["x"], "stack_to_render": [], "heap": {}, "stdout": "x is positive\n"}, {"line": 4, "event": "return", "func_name": "<module>", "globals": {"x": 2}, "ordered_globals": ["x"], "stack_to_render": [], "heap": {}, "stdout": "x is positive\nAll done.\n"}], "startingInstruction": 0};
})();